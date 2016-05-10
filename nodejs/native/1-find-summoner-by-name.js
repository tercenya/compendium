#!/usr/bin/env node

const fetch = require('isomorphic-fetch')
const _ = require('lodash')

const API_KEY = process.env.API_KEY

// the name of the summoner
let summonerName = 'Arinya'

// build the URI
// fetch will escape the URI for us
const uri = `https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/${summonerName}?api_key=${API_KEY}`

// call the Riot API
fetch(uri).then( (response) => {
  // parse as JSON

  // response will take the form of:
  //   {"arinya": {"id": 66209320, "name": "Arinya", "profileIconId": 780, "summonerLevel": 30, "revisionDate": 1462505408000}}

  return response.json()
}).then( (response) => {
  /// some sample output

  // remove all whitespace and make the name lowercase
  const hashedName = _.lowerCase(summonerName.replace(/ /g,''))

  // find the data for target summoner
  const summonerData = response[hashedName]

  console.log(`*** ${summonerName}'s summoner id is:`)
  console.log(summonerData['id'])
  console.log()

  return true
}).catch( (ex) => {
  console.warn('request failed', ex)
})
