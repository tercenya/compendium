import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';

const Overview = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Introduction"
        subTitle="A survey of the Riot API"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Introduction to the Riot API</h2>

              <CondLang lang='ruby'>
                <CodeExample lang='ruby' code='RUBY WINS!'/>
                <CodeExample lang='php' code='php stinks!'/>
              </CondLang>

              <p>Riot's <A href="https://developer.riotgames.com/api/methods">Full API Reference</A> provides additional details about each attribute in the JSON response.</p>

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
    </div>
  );
};

export default Overview;
