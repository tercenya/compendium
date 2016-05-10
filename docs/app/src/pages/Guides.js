import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

import Root from '../Root';
const baseUrl = Root.assetBaseUrl || '';

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

              <p><A href={`${baseUrl}/api.html`}>How to use a JSON API</A></p>

              <p><A href={`${baseUrl}/riot.html`}>Introduction to the Riot API</A></p>

              <p><A href={`${baseUrl}/summoner-data.html`}>Example 1 - Fetching summoner data</A></p>

              <p><A href={`${baseUrl}/match-history.html`}>Example 2 - Fetch match history</A></p>

              <p><A href={`${baseUrl}/match-data.html`}>Example 3 - Fetching match data</A></p>

              <p><A href={`${baseUrl}/current-game.html`}>Example 4 - Look up a match-in-progress</A></p>

              <p><A href={`${baseUrl}/champion-mastery.html`}>Example 5 - A deep dive: Champion Mastery</A></p>

              <p><A href={`${baseUrl}/data-dragon.html`}>Using Data Dragon</A></p>

              <p><A href={`${baseUrl}/etc.html`}>A survey of the remainder</A></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Guides;
