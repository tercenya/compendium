#!/usr/bin/env php
<?php

  $API_KEY = getenv('API_KEY');

  # the id of the summoner
  # if you don't know the ID, you will need to look it up first
  $summoner_id = 66209320;

  # build the URI
  $uri = "https://na.api.pvp.net/api/lol/na/v2.2/matchlist/by-summoner/{$summoner_id}?api_key={$API_KEY}";

  # call the Riot API
  $curl = curl_init($uri);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $json = curl_exec($curl);

  # parse the JSON
  #
  # response will take the form of:
  # {
  #    "matches": [
  #       {
  #          "timestamp": 1462502623838,
  #          "champion": 16,
  #          "region": "NA",
  #          "queue": "TEAM_BUILDER_DRAFT_RANKED_5x5",
  #          "season": "SEASON2016",
  #          "matchId": 2179301104,
  #          "role": "DUO_SUPPORT",
  #          "platformId": "NA1",
  #          "lane": "BOTTOM"
  #       },
  #       (...)
  #     ],
  #    "totalGames": 120,
  #    "startIndex": 0,
  #    "endIndex": 120
  # }
  $response = json_decode($json);

  ### debugging
  # echo var_dump($response);

  ### some sample output

  $matches = $response->matches;
  $latest_match = $matches[0];
  echo "*** {$summoner_id}'s latest match id was:\n";
  echo $latest_match->matchId;
  echo "\n\n";

?>
