> The path to mastery requires teaching your peers

## Motivation

Assuming they had a language already in mind, what would it take to get a new developer from scratch all the way to the Champion Mastery endpoints?

They would need at the bare minimum:
- to register to get an API key, and how to keep it secure
- a general knowledge of JSON
- a general overview of web services and HTTP response codes
- practical use of at least one summoner endpoint (because all of the champion mastery endpoints require playerIds)

If any data is needed, one or more of the Match, Current Game, or League APIs would also be necessary, and would probably be remiss to overlook in any primer.

It's no wonder that the forums are littered with "newbie question, need help" and "I don't understand how to use the API".  For every successful submission to the API challenge, how many failed to get off the ground?  Many of the questions posed for the forums are answered (sometimes awkwardly) because the answers are often narratives, not just a simple line of code.  Even then, some struggle to turn these narratives into code.

It occurred to me that there is a deficiency in the Riot API documentation - in Compendium, I call label it _terse_, but there's a subtle reason for that: the official documentation is almost entirely *reference* material.   Take for comparison the [Apple iOS documentation](https://developer.apple.com/library/ios/navigation/).  There are distinct sections for Reference, Guides, and Sample Code.  The References have the same concise feeling (what does this function do? what are the parameters and return values? what exceptions does this throw?) But Apple also provides *guides*, which contain little or no code and simply describe concepts (with links to the technical materials), or they have step by step walkthroughs on how to crease the necessary code.  A fine example would be the [Start Developing iOS Apps in Swift](https://developer.apple.com/library/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/index.html#//apple_ref/doc/uid/TP40015214).  There are also complete working projects that you can just download, compile, and run, and thus, take apart to see how they tick.  These items are largely absent when it comes to working with the Riot API.

## 2016 API Challenge

A companion guide to the official documentation, along with explanations and working examples in the most common languages, strongly fit the bill as _providing a ongoing, tangible benefit to the entire community_.  As a contributor to the forums, I'd rather point people to a hands-on guide, and focus on resolving concrete issues in discussion than re-explain the same questions every time a new API challenge rolls around.

That leaves the _utilizes Champion Mastery data_ requirement.  Out of the 9 endpoints that are demonstrated here, we cover all 4 mastery endpoints in depth.  Granted, they aren't complicated endpoints, and their payloads are straightforward, so there isn't all that much to discuss.  But that also indicates that the guide as a whole is succeeding in its pedagogy; we shouldn't have to introduce a ton of new concepts every time we teach a new endpoint.  It only takes a paragraph or two to describe long division *if* you've already covered subtraction, multiplication, fractions and remainders.  If you haven't, the subject gets complicated fast.  This is why it's so challenging for some newcomers to go from the [Getting Started](https://developer.riotgames.com/docs/getting-started) page all the way to

```
name = URI.escape('Arinya')
summoner_uri = URI("https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/#{name}?api_key=#{ENV['API_KEY']}")
summoner = JSON.parse(Net::HTTP.get(summoner_uri))

champion_uri =  URI("https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=info&api_key=#{ENV['API_KEY']}")
champions = JSON.parse(Net::HTTP.get(champion_uri))
sona = champions['data']['Sona']

mastery_uri = URI("https://na.api.pvp.net/championmastery/location/NA1/player/#{summoner['id']}/champions/#{sona['key']}?api_key=#{ENV['API_KEY']}")
mastery = JSON.parse(Net::HTTP.get(mastery_uri))

puts "*** #{name} does #{"not" if mastery['chestGranted']} have a mastery chest left this season for #{sona['name']}"
```

## Reflections
