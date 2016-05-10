const team1 = _.slice(response['participantIdentities'], 0, 5)
const team1Names = _.map(team1, (p) => { return p['player']['summonerName'] })

const team2 = _.slice(response['participantIdentities'], 5, 10)
const team2Names = _.map(team2, (p) => { return p['player']['summonerName'] })

console.log(`*** Match id ${matchId} featured`)
console.log(`team 1: ${ _.join(team1Names, ', ')} `)
console.log("versus")
console.log(`team 2: ${ _.join(team2Names, ', ')} `)
