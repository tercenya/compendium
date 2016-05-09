import React from 'react';
import { IndexRoute, Route } from 'react-router';

import Root from './Root';

import Home from './pages/Home';
import Introduction from './pages/Introduction';
import Prerequisites from './pages/Prerequisites';
import Guides from './pages/Guides';
import Faq from './pages/Faq';
import Resources from './pages/Resources';
import NotFound from './pages/NotFound';

// guides
import DataDragon from './pages/guides/DataDragon';
import SummonerData from './pages/guides/SummonerData';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="introduction" component={Introduction} />
    <Route path="prerequisites" component={Prerequisites} />
    <Route path="guides">
      <IndexRoute component={Guides} />
      <Route path="summonerdata" component={SummonerData} />
      <Route path="datadragon" component={DataDragon} />
    </Route>
    <Route path="faq" component={Faq} />
    <Route path="resources" component={Resources} />

    <Route path="*" component={NotFound} />
  </Route>
);
