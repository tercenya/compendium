import React from 'react';

import { CodeExample, NavMain, PageHeader, PageFooter, A } from '../components';

const Prerequisites = (props) => {
  return (
    <div>
      <NavMain activePage="prerequisites" />

      <PageHeader
        title="Prerequisites"
        subTitle="The things that you will need before we begin"
      />
      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h4>1. Choose a language</h4>
              <p>
                We assume you already know what language you want and have it installed on your machine.
                In the event you do not, see the <A href="/resources#tools">Resources</A> page for links to installers for various languages and platforms.
              </p>

              <p>
                If you are unsure, ruby is the default choice, as it represnts a fair compromise between readability and power.  Python is also a popular choice.
              </p>

              <h4>2. A League of Legends account</h4>
              <p>
                You can <A href="https://signup.na.leagueoflegends.com/en/signup/index">Register</A> for free.
              </p>

              <p>
                You will also need to log into the <A href="https://developer.riotgames.com/account">Developer portal</A>.
                There you will find a few additional account flags, most notably "Email Notifications" - which is of interest if you intend to apply for a Production Key or enter the API Challenge competition.
              </p>

              <h4>3. A Riot Developer API key</h4>

              <p>
                To acquire or look up your Developer API key, log into the Riot <A href="https://developer.riotgames.com/sign-in">developer website</A> with your League of Legends credentials.
                In the middle of your dashboard is your Development key, along with a button to create a new one.
                You will need to keep this key secure; don't share it on the forums or upload it to github by accident!
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
