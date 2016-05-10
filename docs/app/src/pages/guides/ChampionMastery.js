import React from 'react';

import {
  LanguageSelector,
  CodeExample,
  CondLang,
  NavMain,
  PageHeader,
  PageFooter,
  A
} from '../../components';
import SampleCode from '../../SampleCode';

const ChampionMastery = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="A Deep Dive: Champion Mastery"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Champion Mastery</h2>

              <LanguageSelector>
                <p>
                  The champion mastery API has 4 endpoints, and we're going to cover all of them.
                  But before we being, let's the the minor Gotcha's out of the way.
                </p>
                <p>
                  For reasons unknown, the Riot API documentation here uses the term playerId, even though it is the same as a summonerId elsewhere in the documentation.
                  When you see playerId, it's the same id you got in Summoner Data guide.
                </p>
                <p>
                  Also, instead of returning 404 when the data is not found, the HTTP status is 204 when there is no data.
                  When Riot returns a 404, you usually get a JSON-encoded error message.  With a 204, you get no body at all, so don't try to process it.
                  You'll need to adjust your error handling code accordingly.
                </p>

                <table className='table auto'>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>Get a champion mastery by player id and champion id.</td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>Get all champion mastery entries sorted by number of champion points.</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>Get a player's total champion mastery score, which is sum of individual champion mastery levels.</td>
                    </tr>
                    <tr>
                      <td>4</td>
                      <td>Get specified number of top champion mastery entries sorted by number of champion points descending.</td>
                    </tr>
                  </tbody>
                </table>

                <h4>1. Get a champion mastery by player id and champion id.</h4>
                <code>/championmastery/location/{`{platformId}`}/player/{`{playerId}`}/champion/{`{championId}`}</code>
                <p>
                  A straightforward route, but we need two pieces of information from other routes before we can use it.
                  First we need a summoner ID.  See our first guide if you need help finding a summoner ID from a summoner name.
                </p>

                <p>
                  Second, we need a champion Id.  The easiest way to aquire this is the <A href="https://developer.riotgames.com/api/methods#!/1077/3717">Champion API endpoint</A>.  This list does not change very often, and the IDs are not expected to change.
                  For this example, we've already pulled one out from the list, our favorite Maven of the Strings, Sona.  Her champion ID is 37.
                </p>

                <p>Note that just like the Current Game endpoint, we also have to specify a platform ID.</p>

                <p>
                  The completed URL now looks like this:<br/>
                <code>https://na.api.pvp.net/championmastery/location/NA1/player/66209320/champion/37?api_key=API_KEY</code>
                </p>

                <p>Let's call it.</p>

                <CodeExample
                  lang='jsx'
                  code={SampleCode.Overview.JsonExample}
                />

                <p>The result is straightforward, but let's take a close look at what we get back: </p>

                <CodeExample
                  lang='jsx'
                  code={SampleCode.Mastery.singleChampion}
                />

                <p>The Riot Documentation is quite complete, but we can reproduce it here so you don't have to go look.</p>

                <table className="table"><thead><tr><th>Name</th><th>Data Type</th><th>Description</th></tr></thead><tbody><tr><td>championId</td><td>long</td><td>Champion ID for this entry.</td></tr><tr><td>championLevel</td><td>int</td><td>Champion level for specified player and champion combination.</td></tr><tr><td>championPoints</td><td>int</td><td>Total number of champion points for this player and champion combination - they are used to determine championLevel.</td></tr><tr><td>championPointsSinceLastLevel</td><td>long</td><td>Number of points earned since current level has been achieved. Zero if player reached maximum champion level for this champion.</td></tr><tr><td>championPointsUntilNextLevel</td><td>long</td><td>Number of points needed to achieve next level. Zero if player reached maximum champion level for this champion.</td></tr><tr><td>chestGranted</td><td>boolean</td><td>Is chest granted for this champion or not in current season.</td></tr><tr><td>highestGrade</td><td>string</td><td>The highest grade of this champion of current season.</td></tr><tr><td>lastPlayTime</td><td>long</td><td>Last time this champion was played by this player - in Unix milliseconds time format.</td></tr><tr><td>playerId</td><td>long</td><td>Player ID for this entry.</td></tr></tbody></table>
                <p>Notice that some of the data is duplicate of what we sent in the URL.  That&apos;s ok, because it makes it easier to store these records in a database or in flat files, without having to do some creative naming, or creating extra fields to store the player and champion data.</p>

                <h4>Get all champion mastery entries sorted by number of champion points.</h4>
                <code>/championmastery/location/{`{platformId}`}/player/{`{playerId}`}/champions</code>
                <p>This is almost the same as #1, except we don't have to specify a champion.  Instead, we get ALL the champions, and convienently they are already sorted, albiet maybe not in the order you prefer.</p>

                <p>
                  The completed URL is just as we would expect:
                  <code>https://na.api.pvp.net/championmastery/location/NA1/player/66209320/champions?api_key=API_KEY</code>
                  And the payload contains multiples of the payload as shows in #1, for each different champion.
                </p>

                <CodeExample
                  lang='jsx'
                  code={SampleCode.Mastery.multiChampion}
                />

                <p>Note that this list will not include champions that have not been played at all.</p>

                <h4>Get a player's total champion mastery score, which is sum of individual champion mastery levels.</h4>
                <code>/championmastery/location/{`{platformId}`}/player/{`{playerId}`}/score</code>
                <p>
                  This is probably the simplest route in the entire API.
                  Its also of note that this route returns an integer.
                  While you can call your favorite JSON library to process the response same as usual, it's faster to just cast the string to and integer.
                  Our final URL looks like:<br/>
                  <code>https://na.api.pvp.net/championmastery/location/NA1/player/66209320/score?api_key=API_KEY</code>

                  And the result:
                </p>

                <CodeExample
                  lang='jsx'
                  code={"140"}
                />

                <h4>Get specified number of top champion mastery entries sorted by number of champion points descending.</h4>
                <code>GET /championmastery/location/{`{platformId}`}/player/{`{playerId}`}/topchampions</code>

                <p>
                  This is a filterd version of #2. There is a optional parameter <code>count</code>, that limits the results.
                  If you don't specify <code>count</code>, the default is 3.
                  For show-and-tell, here's a URL that that uses the count parameter.<br/>
                  <code>https://na.api.pvp.net/championmastery/location/NA1/player/66209320/topchampions?count=150&api_key=API_KEY</code>
                </p>

              </LanguageSelector>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChampionMastery;
