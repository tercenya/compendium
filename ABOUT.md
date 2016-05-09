> To become a master, you must first be a student. -- Unknown

## Motivation

Assuming she had a language already in mind, what would it take to get a new developer from scratch all the way to the Champion Mastery endpoints?

She would need at the bare minimum:
- to register to get an API key, and how to keep it secure
- a general knowledge of JSON
- a general overview of web services and HTTP response codes
- practical use of at least one summoner endpoint (because all of the champion mastery endpoints require playerIds)

If any data is needed, one or more of the Match, Current Game, or League APIs would also be necessary.  In writing a primer, I'd be remiss to overlook them anyway.

It's no wonder that the forums are littered with "newbie question, need help" and "I don't understand how to use the API".  For every successful submission to the API challenge, how many failed to get off the ground?  Many of the questions posed for the forums are answered (sometimes awkwardly) because the answers are often narratives, not just a simple line of code.  Even then, users appear to struggle to turn these narratives into code.

It occurred to me that there is a deficiency in the Riot API documentation.  In Compendium, I labeled the docs as being _terse_, but there's a subtle reason: the official documentation is almost entirely *reference* material.   Just look at the [Getting Started](https://developer.riotgames.com/docs/getting-started) guide. It starts out fine, but half way through the page we already get to

> Zero is considered an empty value, as well as empty strings, empty lists, and nulls. Any numeric field that isn't returned can be assumed to be 0 (or null as you prefer). Any list field that isn't returned can be assumed to be an empty list or null.

Concise, accurate, and not of prime relevance to anyone trying to just *get started*.  We're already crossed into technical reference, plain and simple.

Take for comparison the [Apple iOS documentation](https://developer.apple.com/library/ios/navigation/).  There are distinct sections for Reference, Guides, and Sample Code.  The References have the same concise feeling (what does this function do? what are the parameters and return values? what exceptions does this throw?) But Apple also provides *guides*, which contain little or no code, and simply describe concepts (with links to the technical materials), or they have step by step walkthroughs on how to crease the necessary code.  The example I had in mind was the excellent [Start Developing iOS Apps in Swift](https://developer.apple.com/library/ios/referencelibrary/GettingStarted/DevelopiOSAppsSwift/index.html#//apple_ref/doc/uid/TP40015214).  There are also complete working projects that you can be download, compiled, and run, and thus, taken apart to see how they tick.  These items are largely absent when it comes to working with the Riot API.

## 2016 API Challenge

A companion guide to the official documentation, along with explanations and working examples in the most common languages, strongly fit the bill as _providing a ongoing, tangible benefit to the entire community_.  As a contributor to the forums, I'd rather point people to a hands-on guide, and focus on resolving concrete issues via discussion than re-explain the same questions every time a new API challenge rolls around.

That leaves the _utilizes Champion Mastery data_ requirement.  Out of the 9 endpoints that are demonstrated here, we cover all 4 mastery endpoints in depth.  They are not complicated endpoints, and their payloads are straightforward.  There isn't even all that much to discuss.  But that also indicates that the guide as a whole is succeeding in its pedagogy; we shouldn't have to introduce a ton of new concepts every time we teach a new endpoint.  It only takes a paragraph or two to describe long division *if* you've already covered subtraction, multiplication, fractions and remainders.  If you haven't, the subject gets complicated fast.  This is why it's so challenging for some newcomers to go from the [Getting Started](https://developer.riotgames.com/docs/getting-started) page all the way to

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

This leaves the heft the of project on simply getting to the point where can we exercise the Mastery API.  I wouldn't say it's unfortunate, but there is little in between that I could label as _unnecessary_.

## Reflections

I had designs to also include a whole sample project with a web front end as the culmination of the guide.  That would require introducing [rails](http://rubyonrails.org/) (although I prefer [hanami](http://hanamirb.org/) or [sinatra](http://www.sinatrarb.com/)), [django](https://www.djangoproject.com/) (/sigh), [symfony](https://symfony.com/), [express](http://expressjs.com/), and maybe... [play](https://www.playframework.com/)?  That's a lot of material, and largely orthogonal to our goal of teaching the Riot API.  To cover it properly requires introducing views and controllers, HTML forms, CSS asset pipelines, building webapps that POST to themselves, etc., etc.  I concluded that is going to have to be a separate guide, in order to cover enough ground to be useful to someone without experience in the field already.

My second complaint was that if I were to do this myself, I'd use a React (or angular) front end, and only fetch JSON and compiled JS from the server.  While some of the sample code in Compendium is simplistic, it's still code I would _use_ (in a model or script).  Static views (say, in ERB or handlebars) isn't, and I'm not sure yet if I would be happy having my guide advocate them in 2016, even as a teaching tool.  And all my current, real-world examples are isomorphic, which also requires introducing new hoops if we want to keep the API key secret.  Moreover, calling a JSON endpoint from React involves asynchronous [flux architecture](https://facebook.github.io/flux/docs/overview.html), [immutable](https://facebook.github.io/immutable-js/) data structures, [functional state reduction](https://github.com/reactjs/redux)... things that simply *not* beginner's topics.  I'll leave this challenge for another day.

My last complaints involve the culmination of the guide on Champion Mastery.  Although the Competition required that we use the Mastery data endpoint, I felt somewhat obliged to make it the "comprehensive" guide.  But I have a nagging suspicion that a deep dive into the Match endpoint would have been more satisfying overall, even at the expense of covering the Mastery APIs.  Given the Match API's complex payloads, the match timeline, and various idiosyncrasies (Teemo 'shrooms are wards? [wat](https://www.destroyallsoftware.com/talks/wat)), there's plenty to explain that isn't obvious.  I'm satisfied, however, in how Compendium addresses the prompt, but disagree with those who thought the previous prompts were "too broad."  It may be my fault for not speaking out, but I find that qualities such as defining your own success, a willingness to challenge oneself (and others), and [a minor disregard for the rules and status quo](https://www.youtube.com/watch?v=8rwsuXHA7RA) often distinguish the average from the exemplary, be it programmers, gamers, or any practitioner! I'd prefer to "build something awesome" over "build X" any day of the week.  In that light, I choose to view the prompt as a point on the map that need be covered, not a constricting boundary that limits the scope of the submission.  No doubt others will create fantastic submissions that focus entirely on Champion Masteries, but Compendium represents something that is eminently necessary - I simply chose to build towards the prompt, even if that involved coloring outside the lines along the way.
