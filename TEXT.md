# Preface

### Purpose
Compendium is a neophyte's guide to the Riot Games API for League of Legends.

As [stated by Riot](http://engineering.riotgames.com/news/riot-games-api-goals-and-design), the purpose of the API is to engage the community.  However, a survey of the developer forums shows many users struggle to get started.

Compendium is a step-by-step walkthrough to get you going.

Riot has a Getting Started page.  But there's a lot you can do with the Riot API, and quite a bit more you need to know before hand... one page just can't quite cover everything. 

## Audience

Compendium targets the novice programmer.

Perhaps you have taken a course or two on programming?

Or perhaps you already know what you want to build, but found the official documentation a bit terse?

You want to try your hand at the Riot API challenge, but you're having trouble getting off the ground?

This is the guide for you.

That said, if you are completely new to programming, even this guide may pose a challenge.
However I would encourage you to try, as every program every written was once just the desire of a would-be programmer, who they themselves set forth to learn just the same.

## Structure


## Languages

- Why no javascript?


## Using community libraries

# Prerequisites

## Development environment

Languages (link to resources)
Command-line tools (curl)


## JSON

## Getting a development key
- https://developer.riotgames.com/docs/api-keys

- keeping your key secure (https://developer.riotgames.com/best-practices, https://developer.riotgames.com/discussion/announcements/show/oomYkEK4 )

# Guides

## Overview: How to use a JSON API
- error codes https://developer.riotgames.com/docs/response-codes

## Introduction to the Riot API
- regions (https://developer.riotgames.com/docs/regional-endpoints)
- constants https://developer.riotgames.com/docs/game-constants

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

Riot has a fairly comprehensive explanation of [Rate Limiting](https://developer.riotgames.com/docs/rate-limiting), although the actual rate limits are located on the [API Keys page](https://developer.riotgames.com/docs/api-keys).  Since their documentation is fairly through, and reasonably accessible, we're going to cover the common pitfalls and misunderstandings.

### User Rate Limit

 There are several ways that you can get a _429 Rate limit exceeded_ response, but the one you need to be most aware of as a newcomer is the _user rate limit_.

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

A point to stress is that that you will likely run into these limits if you put your code into production, or if you try data mining.

These limits apply per region. Notice the Development Key is fairly limited.  The next section deals with how to Submit Your Application for a Production Key, as there are several additional requirements you must meet. 

## Submitting your application
- https://developer.riotgames.com/docs/dev-guidelines
- https://developer.riotgames.com/docs/app-guidelines

## Help! And how to get it
- forums
- how to ask for help
- writing a good bug

## Other topics not covered
- Item Sets https://developer.riotgames.com/docs/item-sets
- Spectating https://developer.riotgames.com/docs/spectating-games
- Tournament API (https://developer.riotgames.com/docs/tournaments-api)
- Running your code in production

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

## Web Frameworks

## Databases

## Epilogue
