import React from 'react';

import { CodeExample, NavMain, PageHeader, PageFooter, A } from '../../components';


import SampleCode from '../../SampleCode';

const GuidesPage = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Data Dragon"
        subTitle="Building URLS to images, art, and static assets"
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
                You can get a full list of champions and their IDs using the <A href="https://developer.riotgames.com/api/methods#!/1077/3717">Champion endpoint.</A>
                Looking through the list, we find Sona.
              </p>

              <CodeExample
                lang='jsx'
                code={SampleCode.Overview.JsonExample}
              />

              <p>
                Her summoner id is 37.  Let's find her list of skins. We insert her summoner id into the URL.
                <code>
                  https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion/37?champData=skins&api_key=APIKEY
                </code>
              </p>

              <p>Calling that URL, we get back</p>

              <CodeExample
                lang='jsx'
                code={SampleCode.DataDragon.SonaSkins}
              />

              <p>
                NOTE: if you have skimmed the <A href="https://developer.riotgames.com/api/methods#!/1055">Static Data API</A>, you might have noticed we could get all the skins at once.  If that's your goal, using a single call is an efficient solution, but for this example it's simpler for this example to call the single champion endpoint.
              </p>


              <p>
                Now we have everything we need to build the URL to some beautiful splash art. The important part of this payload is the <code>num</code> field.  We like DJ Sona, so we combine <code>num</code> 6 s the documentation indicates to get this URL: 
                <A href="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_6.jpg">http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_6.jpg</A>
              </p>

              <p>
                And there we have DJ Sona:
                <img width="940" src="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/Sona_6.jpg"/>
              </p>

              <p>We could also get the retangular art, or many other assets in the same way.</p>

              <p>
                Important note!  Data dragon URLs use the KEY field, not the champion's name.  While most are identical, some champions have a key that is different from their name.  In case of Wukong, the key is "MonkeyKing", which means his splash art URLs looks like: <A href="http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg">http://ddragon.leagueoflegends.com/cdn/img/champion/splash/MonkeyKing_0.jpg</A>
              </p>

              <p>
                Another important note! Some images, such as the icons for skills and passives, require you to look up the entire filename in the API endpoints.  Read the <A href="https://developer.riotgames.com/docs/static-data">documentation</A> carefully to determine what you have to look up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
