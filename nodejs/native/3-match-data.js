#!/usr/bin/env node

const fetch = require('isomorphic-fetch')
const _ = require('lodash')

const API_KEY = process.env.API_KEY

// the id of the match
// if you don't know the match id, you will need to look it up first
let matchId = 2179301104

// setting this to true includes a lot more data about what happened during the game
let includeTimeline = false

// build the URI
// fetch will escape the URI for us
const uri = `https://na.api.pvp.net/api/lol/na/v2.2/match/${matchId}?includeTimeline=${includeTimeline}&api_key=${API_KEY}`

// call the Riot API
fetch(uri).then( (response) => {
  // parse as JSON

  // response will take the form of:
  // {
  //   "matchId": 2179301104,
  //   "region": "NA",
  //   "platformId": "NA1",
  //   "matchMode": "CLASSIC",
  //   "matchType": "MATCHED_GAME",
  //   "matchCreation": 1462502623838,
  //   "matchDuration": 2603,
  //   "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
  //   "mapId": 11,
  //   "season": "SEASON2016",
  //   "matchVersion": "6.9.142.993",
  //   "participants": [...],
  //   "participantIdentities": [...]
  //   "teams": [...]
  // }
  return response.json()
}).then( (response) => {
  /// some sample output

  const team1 = _.slice(response['participantIdentities'], 0, 5)
  const team1Names = _.map(team1, (p) => { return p['player']['summonerName'] })

  const team2 = _.slice(response['participantIdentities'], 5, 10)
  const team2Names = _.map(team2, (p) => { return p['player']['summonerName'] })

  console.log(`*** Match id ${matchId} featured`)
  console.log(`team 1: ${ _.join(team1Names, ', ')} `)
  console.log("versus")
  console.log(`team 2: ${ _.join(team2Names, ', ')} `)
  console.log()
}).catch( (ex) => {
  console.warn('request failed', ex)
})
