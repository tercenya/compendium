import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';

const Overview = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="The remainder"
        subTitle="A survey of the other APIs"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Other JSON Endpoints</h2>
              <p>
                Riot has several more collections of endpoints which we have not yet covered.
                Here is a brief overview of what else is currently available.
              </p>
              <ul>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/api/methods#!/1077">Champion</A></dt>
                    <dd>Provides details as to which champions are available for free play this week, disabled in ranked queues, or able to participate in bot matches.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/api/methods#!/977">Features Games</A></dt>
                    <dd>Returns a list of "features games", similar to what you see in the bottom right-hand corner of the LoL Client.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/api/methods#!/985">League</A></dt>
                    <dd>
                      Here you can look up a summoner's current league or league teams.
                      You can also get a list of Summoners who are in the Master or Challenger ranks.
                      This is one of the few places you can datamine a list of summoners, if you are looking for large quantities of data.
                      There may be a guide on this in the near future.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/api/methods#!/908">Status</A></dt>
                    <dd>Returns the current status of various systems, and known outages.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/api/methods#!/1080">Stats</A></dt>
                    <dd>
                      Returns large quantities of stastical informaiton about a summoner's play, by season and game type.
                      Fields include things like total games, largest killing streak, etc.
                    </dd>
                  </dl>
                </li>
              </ul>

              <h2>Other APIs</h2>
              <ul>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/docs/item-sets">Item Sets</A></dt>
                    <dd>
                      These documents describe how to build files that provide item sets for champions in the game.
                      These JSON files can be installed on your client, to supplement the in-game item set collections.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/docs/spectating-games">Spectating Games</A></dt>
                    <dd>
                      By using the Current Game API, you can fetch an encryption key, then pass it on the command-line to the LoL client to
                      start watch a currently running game in spectator mode.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt><A href="https://developer.riotgames.com/docs/tournaments-api">Tournament API</A></dt>
                    <dd>
                      Allows you to create custom tournamnet codes.
                      This is also has JSON API endpoint, but unlike the other APIs that are "read-only", several of these endpoints require the use of an HTTP <i>POST</i> rather than a <i>GET</i>,
                      in order to "upload" data to Riot.  Tournament registration is a multi-step process.  Riot can also send <i>you</i> data at the completion of a tournament game,
                      which requires you to run a API endpoint of your own on your server.
                    </dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
