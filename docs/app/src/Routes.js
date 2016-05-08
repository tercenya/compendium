import React from 'react';
import {IndexRoute, Route} from 'react-router';

import HomePage from './HomePage';

import IntroductionPage from './IntroductionPage';
import PrerequisitesPage from './PrerequisitesPage';
import GuidesPage from './GuidesPage';
import FaqPage from './FaqPage';
import ResourcesPage from './ResourcesPage';

import NotFoundPage from './NotFoundPage';
import Root from './Root';

// guides
import DataDragonPage from './guides/DataDragon';


export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="introduction" component={IntroductionPage} />
    <Route path="prerequisites" component={PrerequisitesPage} />
    <Route path="guides">
      <IndexRoute component={GuidesPage} />
      <Route path="datadragon" component={DataDragonPage} />
    </Route>
    <Route path="faq" component={FaqPage} />
    <Route path="resources" component={ResourcesPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
