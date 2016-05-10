team1 = response['participantIdentities'].slice(0..4)
team1_names = team1.map { |p| p['player']['summonerName'] }

team2 = response['participantIdentities'].slice(5..9)
team2_names = team2.map { |p| p['player']['summonerName'] }

puts "*** Match id #{match_id} featured"
puts "team 1: #{team1_names.join(', ')}"
puts "versus"
puts "team 2: #{team2_names.join(', ')}"
