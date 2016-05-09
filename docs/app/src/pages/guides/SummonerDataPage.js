import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';

const SummonerData = (props) => {
  return (
    <div>
      <NavMain activePage="summonerdata" />

      <PageHeader
        title="Summoner Data"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Fetching Summoner Data</h2>

              <CondLang lang='ruby'>
                <CodeExample lang='ruby' codeText='RUBY WINS!'/>
                <CodeExample lang='php' codeText='php stinks!'/>
              </CondLang>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummonerData;
