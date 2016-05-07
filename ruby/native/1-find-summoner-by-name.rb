#!/usr/bin/env ruby

require 'net/http'
require 'json'

API_KEY = ENV['API_KEY']

# the name of the summoner
summoner_name = 'Arinya'

# names with spaces or special characters need to be escaped
escaped_name = URI.escape(summoner_name)

# build the URI
uri = URI("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/#{escaped_name}?api_key=#{API_KEY}")

# call the Riot API
json = Net::HTTP.get(uri)

# parse the JSON
# response will take the form o
#  {"arinya"=>{"id"=>66209320, "name"=>"Arinya", "profileIconId"=>780, "summonerLevel"=>30, "revisionDate"=>1462505408000}}
response = JSON.parse(json)

### DEBUGGING:
# puts "*** response is:"
# puts response.inspect
# puts

### some sample output

# remove all whitespace and make the name lowercase
hashed_name = summoner_name.tr(' ', '').downcase

# find the data for target summoner
summoner_data = response[hashed_name]

puts "*** #{summoner_name}'s summoner id is:"
puts summoner_data['id']
puts
