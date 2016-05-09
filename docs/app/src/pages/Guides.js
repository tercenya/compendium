import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

const Guides = (props) => {
  return (
    <div>
      <NavMain activePage="introduction" />

      <PageHeader
        title="Guides"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Table of Contents</h2>

              <p>Overview: How to use a JSON API</p>

              <p>Introduction to the Riot API</p>

              <p><A href="/guides/summonerdata/">Example 1 - Fetching summoner data</A></p>

              <p>Example 2 - Fetch match history</p>

              <p>Example 3 - Fetching match data</p>

              <p>Example 4 - Look up a match-in-progress</p>

              <p>Example 5 - Leagues</p>

              <p>Example 6 - A deep dive: Champion Mastery</p>

              <p>Example 7 - A survey of the remainder</p>

              <p>Data mining techniques</p>

              <p><A href='/guides/datadragon/'>Using Data Dragon</A></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Guides;
