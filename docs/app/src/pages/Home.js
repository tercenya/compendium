import React from 'react';

import { Grid } from 'react-bootstrap';
import { NavMain, PageHeader, PageFooter, A } from '../components';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <NavMain activePage="home" />

        <main className="compendium-masthead" id="content" role="main">
          <div className="container">
            <h1 className="title">
              <span className="compendium-logo compendium-logo-outline" />
              Compendium
            </h1>
            <p className="lead">
              <span>A neophyte's guide to programming for the Riot API</span>
            </p>
          </div>
        </main>

        <Grid>

        </Grid>

        <PageFooter />
      </div>
    );
  }
}
