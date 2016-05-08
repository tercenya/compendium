import CodeMirror from 'codemirror';
import 'codemirror/addon/runmode/runmode';
import 'codemirror/mode/jsx/jsx';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import 'bootstrap/less/bootstrap.less';

import './assets/docs.css';
import './assets/style.css';


import './assets/compendium.scss';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/lesser-dark.css';
import 'codemirror/theme/material.css';
import './assets/CodeMirror.css';

import './assets/morellonomicon.png';
import './assets/morellonomicon-shift92.png';
import './assets/favicon.ico';

global.CodeMirror = CodeMirror;

Root.assetBaseUrl = window.ASSET_BASE_URL;
Root.propData = window.PROP_DATA;

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history} children={routes} />,
  document
);
