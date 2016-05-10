/* eslint no-console: 0 */

import fsp from 'fs-promise';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {match, RouterContext} from 'react-router';

import Root from './src/Root';
import routes from './src/Routes';

import metadata from './generate-metadata';

import fsu from '../tools/fs-utils';
const copy = fsu.copy;
import x from '../tools/exec';
const exec = x.exec;

const repoRoot = path.resolve(__dirname, '../');
const docsBuilt = path.join(repoRoot, 'docs-built');

const license = path.join(repoRoot, '../LICENSE');
const riotVerify = path.join(repoRoot, 'riot.txt');
const readmeSrc = path.join(__dirname, '../README.docs.md');
const readmeDest = path.join(docsBuilt, 'README.md');

/**
 * Generates HTML code for `fileName` page.
 *
 * @param {string} fileName Path for Router.Route
 * @return {Promise} promise
 * @internal
 */
function generateHTML(fileName) {
  return new Promise( resolve => {
    const location = fileName === 'index.html' ? '/' : `/${fileName}`;
    match({routes, location}, (error, redirectLocation, renderProps) => {
      let html = ReactDOMServer.renderToString(
        <RouterContext {...renderProps} />
      );
      html = '<!doctype html>' + html;
      let write = fsp.writeFile(path.join(docsBuilt, fileName), html);
      resolve(write);
    });
  });
}

export default function BuildDocs() {
  var dev = false;
  console.log('Building: '.cyan + 'docs'.green + (dev ? ' [DEV]'.grey : ''));

  const devOption = '';

  return exec(`rimraf ${docsBuilt}`)
    .then(() => fsp.mkdir(docsBuilt))
    .then(metadata)
    .then(propData => {
      Root.assetBaseUrl = '/compendium';
      Root.propData = propData;

      const pagesGenerators = Root.getPages().map(generateHTML);

      return Promise.all(pagesGenerators.concat([
        exec(`webpack --config webpack.docs.js --bail ${devOption}`),
        copy(license, docsBuilt),
        copy(riotVerify, docsBuilt),
        copy(readmeSrc, readmeDest)
      ]));
    })
    .then(() => console.log('Built: '.cyan + 'docs'.green + (dev ? ' [DEV]'.grey : '')));
}
