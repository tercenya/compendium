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
import MatchData from './pages/guides/MatchData';
import MatchHistory from './pages/guides/MatchHistory';
import Overview from './pages/guides/Overview';
import Riot from './pages/guides/Riot';
import ChampionMastery from './pages/guides/ChampionMastery';
import CurrentGame from './pages/guides/CurrentGame';
import Etc from './pages/guides/Etc';

export default (
  <Route path="/" component={Root}>
    <IndexRoute component={Home} />
    <Route path="introduction" component={Introduction} />
    <Route path="prerequisites" component={Prerequisites} />
    <Route path="guides">
      <IndexRoute component={Guides} />
      <Route path="summoner-data" component={SummonerData} />
      <Route path="match-history" component={MatchHistory} />
      <Route path="match-data" component={MatchData} />
      <Route path="data-dragon" component={DataDragon} />
      <Route path="current-game" component={CurrentGame} />
      <Route path="champion-mastery" component={ChampionMastery} />

      <Route path="api" component={Overview} />
      <Route path="riot" component={Riot} />
      <Route path="etc" component={Etc} />
    </Route>
    <Route path="faq" component={Faq} />
    <Route path="resources" component={Resources} />

    <Route path="*" component={NotFound} />
  </Route>
);
