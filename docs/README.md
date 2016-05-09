# compendium-docs

The documentation is a standard [React](https://facebook.github.io/react/) single-page webapp.  When built into production, [webpack](https://webpack.github.io/) will distill all end pages into html files that can be uploaded to [github pages](https://pages.github.com/).

The build system is largely based off of the (highly recommended) [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) component.

## Local Setup

- Building the docs requires a recent version of [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
- Install the dependencies with `npm install`
- To start in development mode, run `npm start`.  This starts a webserver on port 4000, and watches for file changes.  You will need to refresh your browser to see changes - hot refresh is not enabled.
- To build production docs, use `npm run build`
