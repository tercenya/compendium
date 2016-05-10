#!/usr/bin/env php
<?php

  $API_KEY = getenv('API_KEY');

  # the name of the summoner
  $summoner_name = 'Arinya';

  # names with spaces or special characters need to be escaped
  $escaped_name = urlencode($summoner_name);

  # build the URI
  $uri = "https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/{$escaped_name}?api_key={$API_KEY}";

  # call the Riot API
  $curl = curl_init($uri);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $json = curl_exec($curl);

  # parse the JSON
  # response will take the form o
  #  {"arinya": {"id": 66209320, "name": "Arinya", "profileIconId": 780, "summonerLevel": 30, "revisionDate": 1462505408000}}
  $response = json_decode($json);

  ### debugging
  # echo var_dump($response);

  ### some sample output

  # remove all whitespace and make the name lowercase
  $hashed_name = strtolower(str_replace(' ', '', $summoner_name));

  # find the data for target summoner
  $summoner_data = $response->$hashed_name;

  echo "*** {$summoner_name}'s summoner id is:\n";
  echo $summoner_data->id;
  echo "\n\n";
?>
