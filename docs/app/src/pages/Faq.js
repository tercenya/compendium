import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

const Faq = (props) => {
  return (
    <div>
      <NavMain activePage="support" />

      <PageHeader
        title="Frequently Asked Question"
        subTitle="As evidenced by the forums" />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-9" role="main">
            <div className="compendium-section">
              <h2>Frequently Asked Questions</h2>

              <ol>
                <li>
                  <dl>
                    <dt>I can't find a summoner's ELO/MMR</dt>
                    <dd>
                      This data isn't provided directly [<A href="https://developer.riotgames.com/discussion/community-discussion/show/qdlrnG3s">src</A>].
                      But you can compare a summoner's highest league in a former season, or use a summoner's current league plus their current leaguePoints to get a numeric value of relative standing.
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>I can't find <i>new champion X</i> in Data Dragon!</dt>
                    <dd>
                      <p>
                        Did you remember to bump the version number?  For example, Bard was released in 5.5, so you won't find <A href="http://gameinfo.na.leagueoflegends.com/en/game-info/champions/bard/">Bard</A> in version <A href="http://ddragon.leagueoflegends.com/cdn/5.4.1/img/champion/Bard.png">5.4.1</A>, but you will in 5.5.1: <A href="http://ddragon.leagueoflegends.com/cdn/5.5.1/img/champion/Bard.png">http://ddragon.leagueoflegends.com/cdn/5.5.1/img/champion/Bard.png</A>
                      </p>

                      <p>
                        You can find a list of valid versions using the <A href="https://developer.riotgames.com/api/methods#!/1055/3630">/api/lol/static-data/{`{region}`}/v1.2/versions</A> endpoint,
                        or the <A href="https://ddragon.leagueoflegends.com/realms/na.json">realm version numbers</A> in Data Dragon.

                        Since calls to these endpoints don't count against the rate limit, but the answer does not change very often, consider caching the "latest" version number every time your applications starts, rather than hard-coding the version number.
                      </p>

                      <p>
                        It often takes a little bit of time for Riot to get Data Dragon updates ironed out after a new major release, so keep your eye on the forums for announcements.
                      </p>
                    </dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>I can't find the post-match Mastery Grades</dt>
                    <dd>
                      It's not available in the API (yet?) [<A href="https://developer.riotgames.com/discussion/community-discussion/show/othK9uma">src</A>].
                      Riot has some reservations about releasing this information.
                    </dd>
                  </dl>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default Faq;
