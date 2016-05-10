$hashed_name = strtolower(str_replace(' ', '', $summoner_name));

# find the data for target summoner
$summoner_data = $response->$hashed_name;
