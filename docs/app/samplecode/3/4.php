
$map_player = function ($p) { return $p->player->summonerName; };

$team1 = array_slice($response->participantIdentities, 0, 5);
$team1_names = array_map($map_player, $team1);


$team2 = array_slice($response->participantIdentities, 5, 5);
$team2_names = array_map($map_player, $team2);

echo "*** Match id {$match_id} featured\n";
echo "team 1: " . implode(', ', $team1_names) . "\n";
echo "versus\n";
echo "team 2: " . implode(', ', $team2_names) . "\n\n";
