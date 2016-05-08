#!/usr/bin/env ruby

require 'net/http'
require 'json'

API_KEY = ENV['API_KEY']

# the id of the summoner
# if you don't know the ID, you will need to look it up first
summoner_id = 66209320

# you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
platform_id = 'NA1'

# build the URI
uri = URI("https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/#{platform_id}/#{summoner_id}?api_key=#{API_KEY}")

# call the Riot API
http_response = Net::HTTP.get_response(uri)

# only parse the JSON output if the the call was successful
#   if there is no game in progress, you will get a 404, instead of a 200

case http_response
when Net::HTTPNotFound # 404
  puts "*** no game in progress"
  exit

when Net::HTTPSuccess # 200
  json = http_response.body

  # parse the JSON

  # a successful response will take the form of
  # {
  #   "gameId": 2179958108,
  #   "mapId": 12,
  #   "gameMode": "ARAM",
  #   "gameType": "MATCHED_GAME",
  #   "gameQueueConfigId": 65,
  #   "participants": [...],
  #   "observers": {...},
  #   "platformId": "NA1",
  #   "bannedChampions": [...],
  #   "gameStartTime": 1462588238241,
  #   "gameLength": 160
  # }

  response = JSON.parse(json)

  ### DEBUGGING:
  # puts "*** response is:"
  # puts response.inspect
  # puts

  ### some sample output

  puts "*** #{summoner_id}'s current game is:"
  puts "gameId: #{response['gameId']}"
  puts "gameMode: #{response['gameMode']}"
  puts
end
