import React from 'react';

import { CodeExample, NavMain, PageHeader, PageFooter, A } from '../components';

const Prerequisites = (props) => {
  return (
    <div>
      <NavMain activePage="prerequisites" />

      <PageHeader
        title="Prerequisites"
        subTitle="The things that you will need"
      />
      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h4>1. A development environment</h4>
              <p>
                We assume you already know what language you want and have it installed on your machine.
                In the event you do not, see the <A href="/resources#tools">Resources</A> page for links to installers for various languages and platforms.
              </p>

              <p>
                If you are unsure which language you want to learn, ruby is a fair choice.
              </p>

              <h4>2. A League of Legends account</h4>
              <p>
                Self explanatory, but you can <A href="https://signup.na.leagueoflegends.com/en/signup/index">Register</A> for free.
              </p>

              <p>
                You will also need to log into the <A href="https://developer.riotgames.com/account">Developer portal</A>.  There you will find a few additional account flags, most notably "Email Notifications" - which is of interest if you intend to apply for a Production Key or enter the API Challenge competition.
              </p>

              <h4>3. Working knowledge of JSON</h4>

              <p>
                 It's important to have some familiarity with JSON before you start calling the Riot API.
                 If you use a library, some of these details will be obscured from you.
                 However, you will still need to have some awareness of how the JSON API works under the hood when reading Riot's documentation, learning the API, or debugging your program.
              </p>

              <p>
                JSON is a human and computer readable format for sharing data. It&apos;s not as scary as it seems, and most the data you get back from the Riot API can be discerned without too much effort.
                Riot's <A href="https://developer.riotgames.com/api/methods">Full API Reference</A> provides additional detail about each attribute in the JSON response.
              </p>

              <p>
                There are many good tutorials on how to use JSON on the web.
                For an overview, consider <A href="http://www.w3schools.com/json/default.asp">w3schools</A>.
                I would <b>not</b> recommend trying to read the <A href="http://www.json.org/">specifications</A>; it's a complicated mess.
                I <b>would</b> recommend using a library in your language of choice to process the JSON into a usable Array or Hash.
              </p>

              <h4>4. Getting a development key</h4>

              <p>
                To acquire or look up your Developer API key, log into the Riot <A href="https://developer.riotgames.com/sign-in">developer website</A> with your League of Legends credentials.
                In the middle of your dashboard is your Development key, along with a button to create a new one.
              </p>

              <h4>Keeping your key secure</h4>
              <ul>
                <li>don't check your key into source control (e.g. put it on github)</li>
                <li>don't post your key on the forums (e.g. when asking for help with your code)</li>
                <li>don't put your key into javascript (and send it to your clients)</li>
              </ul>
              <p>
                This topic (and many more considerations) is discussed a some length in <A href="https://developer.riotgames.com/discussion/announcements/show/oomYkEK4">the forums.</A>
              </p>
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};

export default Prerequisites;
