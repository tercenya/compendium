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


export default (
  <Route path="/" component={Root}>
    <IndexRoute component={HomePage} />
    <Route path="introduction.html" component={IntroductionPage} />
    <Route path="prerequisites.html" component={PrerequisitesPage} />
    <Route path="guides.html" component={GuidesPage} />
    <Route path="faq.html" component={FaqPage} />
    <Route path="resources.html" component={ResourcesPage} />

    <Route path="*" component={NotFoundPage} />
  </Route>
);
