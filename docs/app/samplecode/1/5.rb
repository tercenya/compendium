# remove all whitespace and make the name lowercase
hashed_name = summoner_name.tr(' ', '').downcase

# find the data for target summoner
summoner_data = response[hashed_name]
