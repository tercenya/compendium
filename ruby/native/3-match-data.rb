#!/usr/bin/env ruby

require 'net/http'
require 'json'

API_KEY = ENV['API_KEY']

# the id of the match
# if you don't know the match id, you will need to look it up first
match_id = 2179301104

# setting this to true includes a lot more data about what happened during the game
include_timeline = false

# build the URI
uri = URI("https://na.api.pvp.net/api/lol/na/v2.2/match/#{match_id}?includeTimeline=#{include_timeline}&api_key=#{API_KEY}")
puts uri.to_s
# call the Riot API
json = Net::HTTP.get(uri)

# parse the JSON
#
# response will take the form of:
# {
#   "matchId": 2179301104,
#   "region": "NA",
#   "platformId": "NA1",
#   "matchMode": "CLASSIC",
#   "matchType": "MATCHED_GAME",
#   "matchCreation": 1462502623838,
#   "matchDuration": 2603,
#   "queueType": "TEAM_BUILDER_DRAFT_RANKED_5x5",
#   "mapId": 11,
#   "season": "SEASON2016",
#   "matchVersion": "6.9.142.993",
#   "participants": [...],
#   "participantIdentities": [...]
#   "teams": [...]
# }
response = JSON.parse(json)

### DEBUGGING:
# puts "*** response is:"
# puts response.inspect
# puts

### some sample output

team1 = response['participantIdentities'].slice(0..4)
team1_names = team1.map { |p| p['player']['summonerName'] }

team2 = response['participantIdentities'].slice(5..9)
team2_names = team2.map { |p| p['player']['summonerName'] }

puts "*** Match id #{match_id} featured"
puts "team 1: #{team1_names.join(', ')}"
puts "versus"
puts "team 2: #{team2_names.join(', ')}"
