#!/usr/bin/env node

const fetch = require('isomorphic-fetch')
const _ = require('lodash')

const API_KEY = process.env.API_KEY

// the id of the summoner
// if you don't know the summoner id, you will need to look it up first
let summonerId = 66209320

// you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
let platformId = 'NA1'

// build the URI
// fetch will escape the URI for us
const uri = `https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/${platformId}/${summonerId}?api_key=${API_KEY}`

// call the Riot API
fetch(uri).then( (response) => {
  // parse as JSON

  // a successful response will take the form of:
  // {
  //   "gameId": 2179958108,
  //   "mapId": 12,
  //   "gameMode": "ARAM",
  //   "gameType": "MATCHED_GAME",
  //   "gameQueueConfigId": 65,
  //   "participants": [...],
  //   "observers": {...},
  //   "platformId": "NA1",
  //   "bannedChampions": [...],
  //   "gameStartTime": 1462588238241,
  //   "gameLength": 160
  // }

  return { response: response.json(), code: response.status }
}).then( ({ response, code }) => {
  switch(code) {
    case 404:

    console.log('*** no game in progress')
    break

    case 200:
    /// some sample output

    console.log(`*** ${summonerId}'s current game is:`)
    console.log(`gameId: ${response['gameId']}`)
    console.log(`gameMode: ${response['gameMode']}`)
    console.log()
    break

    default:

    console.log(`unhandled code: ${code}`)
    break


  }
}).catch( (ex) => {
  console.warn('request failed', ex)
})
