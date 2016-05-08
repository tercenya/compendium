#!/usr/bin/env php
<?php

  $API_KEY = getenv('API_KEY');

  # the id of the match
  # if you don't know the match id, you will need to look it up first
  $match_id = 2179301104;

  # setting this to true includes a lot more data about what happened during the game
  $include_timeline = false;

  # build the URI
  $uri = "https://na.api.pvp.net/api/lol/na/v2.2/match/{$match_id}?includeTimeline={$include_timeline}&api_key={$API_KEY}";

  # call the Riot API
  $curl = curl_init($uri);
  curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
  $json = curl_exec($curl);

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
  $response = json_decode($json);

  ### debugging
  # echo var_dump($response);

  ### some sample output

  $map_player = function ($p) { return $p->player->summonerName; };

  $team1 = array_slice($response->participantIdentities, 0, 5);
  $team1_names = array_map($map_player, $team1);


  $team2 = array_slice($response->participantIdentities, 5, 5);
  $team2_names = array_map($map_player, $team2);

  echo "*** Match id {$match_id} featured\n";
  echo "team 1: " . implode(', ', $team1_names) . "\n";
  echo "versus\n";
  echo "team 2: " . implode(', ', $team2_names) . "\n\n";
?>
