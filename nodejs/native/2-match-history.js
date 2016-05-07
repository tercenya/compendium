#!/usr/bin/env node

const fetch = require('isomorphic-fetch')
const _ = require('lodash')

const API_KEY = process.env.API_KEY

// the id of the summoner
// if you don't know the ID, you will need to look it up first
let summonerId = 66209320

// build the URI
// fetch will escape the URI for us
const uri = `https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/${summonerId}?api_key=${API_KEY}`

// call the Riot API
fetch(uri).then( (response) => {
  // parse as JSON
  
  // response will take the form of:
  // {
  //    "matches": [
  //       {
  //          "timestamp": 1462502623838,
  //          "champion": 16,
  //          "region": "NA",
  //          "queue": "TEAM_BUILDER_DRAFT_RANKED_5x5",
  //          "season": "SEASON2016",
  //          "matchId": 2179301104,
  //          "role": "DUO_SUPPORT",
  //          "platformId": "NA1",
  //          "lane": "BOTTOM"
  //       },
  //       (...et al...)
  //     ],
  //    "totalGames": 120,
  //    "startIndex": 0,
  //    "endIndex": 120
  // }
  return response.json()
}).then( (response) => {
  const matches = response['matches']
  const latest_match = _.first(matches)

  console.log(`*** ${summonerId}'s latest match id was:`)
  console.log(latest_match['matchId'])
  console.log

  return true
}).catch( (ex) => {
  console.warn('request failed', ex)
})
