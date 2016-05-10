// call the Riot API
fetch(uri).then( (response) => {
  return { response: response.json(), code: response.status }
}).then( ({ response, code }) => {
  switch(code) {
    case 404:

    console.log('*** no game in progress')
    break

    case 200:
    /// ...

  }
})
