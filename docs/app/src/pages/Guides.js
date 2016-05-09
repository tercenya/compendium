import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

const Guides = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Guides"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Table of Contents</h2>

              <p><A href="/guides/api/">How to use a JSON API</A></p>

              <p><A href="/guides/riot/">Introduction to the Riot API</A></p>

              <p><A href="/guides/summoner-data/">Example 1 - Fetching summoner data</A></p>

              <p><A href="/guides/match-history/">Example 2 - Fetch match history</A></p>

              <p><A href="/guides/match-data/">Example 3 - Fetching match data</A></p>

              <p><A href="/guides/current-game/">Example 4 - Look up a match-in-progress</A></p>

              <p><A href="/guides/champion-mastery/">Example 5 - A deep dive: Champion Mastery</A></p>

              <p><A href='/guides/data-dragon/'>Using Data Dragon</A></p>

              <p><A href="/guides/etc/">A survey of the remainder</A></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Guides;
