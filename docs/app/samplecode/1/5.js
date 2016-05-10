fetch(uri).then( (response) => {
  return response.json()
}).then( (response) => {
  const hashedName = _.lowerCase(summonerName.replace(/ /g,''))

  // find the data for target summoner
  const summonerData = response[hashedName]

  // do something else
});
