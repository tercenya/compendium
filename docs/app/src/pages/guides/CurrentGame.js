import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';

const CurrentGame = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Current Game"
        subTitle="How to find a match-in-progress"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Look up a match-in-progress</h2>

              <CondLang lang='ruby'>
                <CodeExample lang='ruby' code='RUBY WINS!'/>
                <CodeExample lang='php' code='php stinks!'/>
              </CondLang>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentGame;
