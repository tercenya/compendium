#!/usr/bin/env node

const fetch = require('isomorphic-fetch')
const _ = require('lodash')

const API_KEY = process.env.API_KEY

// the id of the summoner
// if you don't know the summoner id, you will need to look it up first
let summonerId = 66209320

// our friend, Sona.
let championId = 37

// you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
let platformId = 'NA1'

// build the URI
// fetch will escape the URI for us
const uri = `https://na.api.pvp.net/championmastery/location/${platformId}/player/${summonerId}/champion/${championId}?api_key=${API_KEY}`

// call the Riot API
fetch(uri).then( (response) => {
  // parse as JSON

  // a successful response will take the form of
  // {
  //    "championPoints": 36196,
  //    "playerId": 66209320,
  //    "championPointsUntilNextLevel": 0,
  //    "chestGranted": false,
  //    "championLevel": 5,
  //    "championId": 37,
  //    "championPointsSinceLastLevel": 14596,
  //    "lastPlayTime": 1462744638000
  // }

  return { response: response.json(), code: response.status }
}).then( ({ response, code }) => {
  switch(code) {
    case 204: // not the change from 404 to 204.

    console.log('*** no mastery data available for this combination')
    break

    case 200:
    /// some sample output

    console.log(`*** ${summoner_id} currently has ${response['championPoints']} champion points for ${champion_id}"`)
    console.log()
    break

    default:

    console.log(`unhandled code: ${code}`)
    break


  }
}).catch( (ex) => {
  console.warn('request failed', ex)
})
