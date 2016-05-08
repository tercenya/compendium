#!/usr/bin/env php
<?php

  $API_KEY = getenv('API_KEY');

  # the id of the summoner
  # if you don't know the ID, you will need to look it up first
  $summoner_id = 66209320;

  # you get this from https://developer.riotgames.com/docs/regional-endpoints, based on the region
  $platform_id = 'NA1';

  # build the URI
  $uri = "https://na.api.pvp.net/observer-mode/rest/consumer/getSpectatorGameInfo/{$platform_id}/{$summoner_id}?api_key={$API_KEY}";

  # call the Riot API
  $curl = curl_init($uri);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $json = curl_exec($curl);

  # only parse the JSON output if the the call was successful
  #   if there is no game in progress, you will get a 404, instead of a 200
  $http_code = curl_getinfo($curl, CURLINFO_HTTP_CODE);
  switch($http_code) {
    case 404:
      echo "*** no game in progress\n";
      exit;

    case 200:
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
      $response = json_decode($json);


      ### debugging
      # echo var_dump($response);

      ### some sample output

      echo "*** {$summoner_id}'s current game is:\n";
      echo "gameId: {$response->gameId}\n";
      echo "gameMode: {$response->gameMode}\n\n";
  }


?>
