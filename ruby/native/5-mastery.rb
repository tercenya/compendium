#!/usr/bin/env ruby

require 'net/http'
require 'json'

API_KEY = ENV['API_KEY']

# the id of the summoner
# if you don't know the ID, you will need to look it up first
summoner_id = 66209320

# our friend, Sona.
champion_id = 37

# you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
platform_id = 'NA1'

# build the URI
uri = URI("https://na.api.pvp.net/championmastery/location/#{platform_id}/player/#{summoner_id}/champion/#{champion_id}?api_key=#{API_KEY}")

# call the Riot API
http_response = Net::HTTP.get_response(uri)

# only parse the JSON output if the the call was successful
case http_response
# notice we changed for 404 to 204 here.
when Net::HTTPNoContent # 204
  puts "*** no mastery data available for this combination"
  exit

when Net::HTTPSuccess # 200
  json = http_response.body

  # parse the JSON

  # a successful response will take the form of
  # {
  #    "championPoints": 36196,
  #    "playerId": 66209320,
  #    "championPointsUntilNextLevel": 0,
  #    "chestGranted": false,
  #    "championLevel": 5,
  #    "championId": 37,
  #    "championPointsSinceLastLevel": 14596,
  #    "lastPlayTime": 1462744638000
  # }

  response = JSON.parse(json)

  ### DEBUGGING:
  # puts "*** response is:"
  # puts response.inspect
  # puts

  ### some sample output

  puts "*** #{summoner_id} currently has #{response['championPoints']} champion points for #{champion_id}"
  puts
end
