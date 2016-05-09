import React from 'react';

import { CodeExample, NavMain, PageHeader, PageFooter, A } from '../../components';


import SampleCode from '../../SampleCode';
const sonaCode = SampleCode.DataDragon.SonaSkins;

const GuidesPage = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Data Dragon"
        subTitle="Images, art, and static assets"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Using Data Dragon</h2>

              <p>
                Data Dragon contains <i>static assets</i>: things like images, data, art assets for items, champions, masteries, etc.
                Riot provides some <A href="https://developer.riotgames.com/docs/static-data">documentation</A> as well as a functional, but not entirely intuitive, <A href="http://ddragon.leagueoflegends.com/tool/">tool</A> to explore the data.
                The tool also has a link to a download called <i>dragontail</i> that contains the latest version of all the assets, if you need to include them locally (say, in your API competition submission).
              </p>

              <p>
                Several item require you to call the <A href="https://developer.riotgames.com/api/methods#!/1055">Static Data endpoint</A> first in order to build the proper URL.
                You may need to read Riot's documentation carefully, paying close attention to the yellow-coded, highlighted attributes to find those values.
              </p>

              <h5>A Simple Example</h5>

              <p>
                Since the formal documentation is a somewhat terse, let's walk through an example: getting champion splash art.
              </p>

              <p>
                First, get ID numbers for each champion. Let&apos;s pick Sona, with summonerId 37.
                Second, get the list of skins for that champion.
              </p>

              <code>
                @TODO champion ID lookup
              </code>

              <p>
                NOTE: if you have skimmed the <A href="https://developer.riotgames.com/api/methods#!/1055">Static Data API</A>, you might have noticed we could get all the skins at once.  If that's your goal, that's a efficient solution, but for this example it makes more sense to call the single champion endpoint.
              </p>

              <code>
                https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/37?champData=skins&api_key=APIKEY
              </code>


              <CodeExample
                lang='jsx'
                code={sonaCode}
              />

              <p>
                Now we have everything we need to build the URL to some beautiful splash art.
              </p>

              <code>
                @TODO annotate URL
              </code>

              <p>
                And there we have DJ Sona. <A href="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_6.jpg">http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_6.jpg</A>
              </p>

              NOTE!  Data dragon URLs use the KEY field, not the champion's name.  While most are identical, some champions have a key that is different from their name.  In case of Wukong, the key is "MonkeyKing", which means his splash art URLs looks like: [http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg]

              NOTE! Some images, such as the icons for skills and passives, require you to look up the entire filename in the API endpoints.  Read the <A href="https://developer.riotgames.com/docs/static-data">documentation</A> carefully to determine what you have to look up.

              <h5>In Practice - Building Champion Mastery Trees</h5>
              <code>@TODO</code>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
