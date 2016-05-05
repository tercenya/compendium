# Preface

### Purpose
Compendium is a neophyte's guide to the Riot Games API for League of Legends.

As [stated by Riot](http://engineering.riotgames.com/news/riot-games-api-goals-and-design), the purpose of the API is to engage the community.  However, a survey of the developer forums shows many users struggle to get started.

Compendium is a step-by-step walkthrough to get you going.

Riot has a Getting Started page.  But there's a lot you can do with the Riot API, and quite a bit more you need to know when you get involved... one page just can't quite cover everything.  This guide introduce you to the concepts and walk you through the code you need to get off the ground when using the API.

## Audience

Compendium targets the novice programmer.

Perhaps you have taken a course or two on programming?

Or perhaps you already know what you want to build, but found the official documentation a bit terse?

You want to try your hand at the Riot API challenge, but you're having trouble calling the API?

This is the guide for you.

That said, if you are completely new to programming, even this guide may pose a challenge.
However I would encourage you to try, as every program every written was once just the desire of a would-be programmer, who they themselves set forth to learn just the same.  We won't teach you how to program from scratch, although there is a lengthy list of [Resources](/resources) available in the appendix if you need primers on the programming concepts and languages discussed here.

## Structure

## Languages

This guide provides examples in ruby, java, nodejs, python, and php.  Calls against the Riot API also have command-line examples using cURL.

### Why no javascript?
Javascript is client-side only.  If you were to embed your secret API key and serve it in a web browser to the public, your key wouldn't be secret anymore!  If you need to use javascript for your front end, you can create a non-isomorphic javascript website that calls a nodejs webservice for all Riot API activities, thereby securing your key.  This guide can get you started on the latter.


## Community libraries

### Why use a library?

There are pros and cons to using a library, which mostly revolves around programmers' love and hate to [reinvent the wheel](https://sourcemaking.com/antipatterns/reinvent-the-wheel). 

Using a library means you don't have to "invent" another way to call the API, process the JSON output, and return something useful.  On the other hand, you'll need to read the library's documentation carefully, and you will be dependent on said library to some extent when it comes to capabilities and updates.

Most of Riot's API is not so complicated that it requires a heavy investment in programming to build your own functions.   Also, if your project is small, you are unlikely to require more than a handful of routes.  Doing it yourself will also give you a better understanding of the Riot API and the various JSON payloads, at the expensive of having to figure out the details of the Riot API and its various JSON payloads.  Luckily for you, we will walk through the most common routes in the Guides sections using both natively and using libraries, and you can choose the method that best suits your needs.

# Prerequisites

### A development environment

We assume you already know what language you want and have it installed on your machine.  In the event you do not, see the [Resources](/resources#tools) page for links to installers for various languages and platforms.

If you are unsure which language you want to learn, I recommend ruby, as g 

###  A League of Legends account
Self explanatory, but you can [register](https://signup.na.leagueoflegends.com/en/signup/index) for free.

You will also need to log into the [Developer portal](https://developer.riotgames.com/account).  There you will find a few additional account flags, most notably "Email Notifications" - which is of interest if you intend to apply for a Production Key or enter the API Challenge competition.

### Working knowledge of JSON

It's important to have some familiarity with JSON before you start calling the Riot API.  If you use a library, some of these details will be obscured from you.  However, you will still need to have some awareness of how the JSON API works under the hood when reading Riot's documentation, learning the API, or debugging your program.

### JSON

JSON is a human and computer readable format for sharing data. It's not as scary as it seems, and most the data you get back from the Riot API can be discerned without too much effort.  Riot's [Full API Reference](https://developer.riotgames.com/api/methods) provides additional detail about many of the JSON responses.

There are many good tutorials on how to use JSON on the web. For a generic overview, consider [w3schools](http://www.w3schools.com/json/default.asp).

I would *not* recommend trying to read the [specifications](http://www.json.org/); it's a complicated mess.  I *would* recommend using a library in your language of choice to process JSON.

## Getting a development key

To acquire or look up your Developer API key, log into the Riot [developer website](https://developer.riotgames.com/sign-in) with your League of Legends credentials.  In the middle of your dashboard is your current Development key, along with a button to create a new one.

### Keeping your key secure
- don't check your key into source control (e.g. put it on github)
- don't post your key on the forums (e.g. when asking for help with your code)
- don't put your key into javascript (and send it to your clients)

This topic (and many more ways to fail) is discussed a some length in [the forums](https://developer.riotgames.com/discussion/announcements/show/oomYkEK4)

# Guides

## Overview: How to use a JSON API
- error codes https://developer.riotgames.com/docs/response-codes

## Introduction to the Riot API
- regions (https://developer.riotgames.com/docs/regional-endpoints)
- constants https://developer.riotgames.com/docs/game-constants

- how to read the docs

## Fetching summoner data
- name encoding

## Fetching match data

## Fetch match history

## Fetching a match-in-progress

## Leagues

## A survey of the remainder

## Data mining techniques

## Using Data Dragon
- https://developer.riotgames.com/docs/static-data

## A sample application

## Rate Limiting

Riot has a fairly comprehensive explanation of [Rate Limiting](https://developer.riotgames.com/docs/rate-limiting), although the actual rate limits are located on the [API Keys page](https://developer.riotgames.com/docs/api-keys).  Since their documentation is fairly through, and reasonably accessible, we're only going to cover the common pitfalls.

### User Rate Limit

There are several reasons why you might receive a _429 Rate limit exceeded_ response, but the one you need to be most aware of as a newcomer is the _user rate limit_.

Each API key is limited in the number of requests it can make in a certain length of time:

<table>
  <thead>
    <tr>
      <th>Key Type</th>
      <th>Requests in 10 seconds</th>
      <th>Requests in 10 minutes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Development</th>
      <td>10</td>
      <td>500</td>
    </tr>
    <tr>
      <td>Production</th>
      <td>3,000</th>
      <td>180,000</th>
    </tr>
  </tbody>
</table>

A point to stress is that that you will likely run into these limits if you open your website to the public or you are iteratively [data mining](/guides/datamining) the API.

These limits apply per region. Note that the Development Key's usage fairly limited, but should be enough for proof of concept or personal use.  The next section deals with how to Submit Your Application in order to receive a Production Key, but there are additional requirements you and your application must meet.

## Submitting your application

- https://developer.riotgames.com/docs/dev-guidelines
- https://developer.riotgames.com/docs/app-guidelines

## Help! And how to get it

There is an active community surrounding the Riot API, most notably the [developer forums](https://developer.riotgames.com/discussion/index)

There are dedicated sections for [technical help](https://developer.riotgames.com/discussion/technical-help), [tutorials-libraries](https://developer.riotgames.com/discussion/tutorials-libraries), [bugs](https://developer.riotgames.com/discussion/bugs-feedback), and [general discussion](https://developer.riotgames.com/discussion/index).

### How to ask for help

Tips:

- When your question involves more than a handful of lines of code, use services like [gist.github.com] to help your fellow coders see multiple files or the whole picture.
- *Do not* include your API keys or other passwords when posting code.
- Do include platform, version numbers for your language and any libraries.
- Clearly state both what happens when you run your code, and your *expected* outcome.

- @TODO example?


## Other topics not covered
- Item Sets https://developer.riotgames.com/docs/item-sets
- Spectating https://developer.riotgames.com/docs/spectating-games
- Tournament API (https://developer.riotgames.com/docs/tournaments-api)
- Running your code in production

## Further steps
- Graceful degradation
- Caching
- Code improvement

# FAQ

- Finding a summoner's ELO/MMR

This data isn't provided directly [src]( https://developer.riotgames.com/discussion/community-discussion/show/qdlrnG3s). But you can compare a summoner's highest league in a former season, or use a summoner's current league plus their current leaguePoints to get a numeric value of relative standing.

- I can't find {new champion X} in Data Dragon!

Did you remember to bump the version number?  For example, Bard was released in 5.5, so you won't find [Bard](http://gameinfo.na.leagueoflegends.com/en/game-info/champions/bard/) in version [5.4.1](http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Bard.png), but you will in 5.5.1: [http://ddragon.leagueoflegends.com/cdn/5.5.1/img/champion/Bard.png]

You can find a list of valid versions using the [/api/lol/static-data/{region}/v1.2/versions](https://developer.riotgames.com/api/methods#!/1055/3630) route.  Since calls to this route don't count against the rate limit, but the answer does not change very often, consider caching the "latest" version from this route every time your applications starts, rather than hard-coding the version number.

It often takes a little bit of time for Riot to get Data Dragon updates ironed out after a new major release, so keep your eye on the forums for announcements.

- Post-match Mastery Grades

It's not available in the API (yet?) [src](https://developer.riotgames.com/discussion/community-discussion/show/othK9uma).  Riot appears to have some reservations about releasing this information.

# Resources

## Installing development tools

Installing ruby on windows / linux / mac
Installing php on windows / linux / mac
Installing java on windows / linux / mac
Installing nodejs on windows / linux / mac
Installing python on windows / linux / mac
C#?

curl for windows / linux / mac

## Web Frameworks

## Databases

## Epilogue
