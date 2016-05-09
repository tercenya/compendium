import React from 'react';
import {IndexRoute, Route} from 'react-router';

import Root from './Root';

import HomePage from './pages/HomePage';
import IntroductionPage from './pages/IntroductionPage';
import PrerequisitesPage from './pages/PrerequisitesPage';
import GuidesPage from './pages/GuidesPage';
import FaqPage from './pages/FaqPage';
import ResourcesPage from './pages/ResourcesPage';
import NotFoundPage from './pages/NotFoundPage';

// guides
import DataDragonPage from './pages/guides/DataDragon';
import SummonerDataPage from './pages/guides/SummonerDataPage';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="introduction" component={IntroductionPage} />
    <Route path="prerequisites" component={PrerequisitesPage} />
    <Route path="guides">
      <IndexRoute component={GuidesPage} />
      <Route path="summonerdata" component={SummonerDataPage} />
      <Route path="datadragon" component={DataDragonPage} />
    </Route>
    <Route path="faq" component={FaqPage} />
    <Route path="resources" component={ResourcesPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
