#!/usr/bin/env php
<?php

  $API_KEY = getenv('API_KEY');

  # the id of the summoner
  # if you don't know the ID, you will need to look it up first
  $summoner_id = 66209320;

  # our friend, Sona.
  $champion_id = 37

  # you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
  $platform_id = 'NA1';

  # build the URI
  $uri = "https://na.api.pvp.net/championmastery/location/{$platform_id}/player/{$summoner_id}/champion/{$champion_id}?api_key={$API_KEY}";

  # call the Riot API
  $curl = curl_init($uri);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $json = curl_exec($curl);

  # only parse the JSON output if the the call was successful
  $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  switch($http_code) {
    case 204: # notice this is 204 instead of a 404
      echo "*** no mastery data available for this combination\n";
      exit;

    case 200:
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
      $response = json_decode($json);


      ### debugging
      # echo var_dump($response);

      ### some sample output

      echo "*** {$summoner_id} currently has {$response->championPoints} champion points for {$champion_id}\n\n";

      break;
  }
?>
