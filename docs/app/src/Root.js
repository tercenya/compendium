import React from 'react';

const Root = React.createClass({
  statics: {
    /**
     * Get the list of pages that are renderable
     *
     * @returns {Array}
     */
    getPages() {
      return [
        'index.html',
        'introduction.html',
        'prerequisites.html',
        'guides.html',
        'summoner-data.html',
        'match-data.html',
        'match-history.html',
        'data-dragon.html',
        'current-game.html',
        'champion-mastery.html',
        'api.html',
        'riot.html',
        'etc.html',
        'faq.html',
        'resources.html',
      ];
    }
  },

  childContextTypes: {
    metadata: React.PropTypes.object
  },

  getChildContext() {
    return {metadata: Root.propData};
  },

  render() {
    // Dump out our current props to a global object via a script tag so
    // when initialising the browser environment we can bootstrap from the
    // same props as what each page was rendered with.
    let browserInitScriptObj = {
      __html:
        `window.ASSET_BASE_URL = ${JSON.stringify(Root.assetBaseUrl)};
        window.PROP_DATA = ${JSON.stringify(Root.propData)};
        // console noop shim for IE8/9
        (function (w) {
          var noop = function () {};
          if (!w.console) {
            w.console = {};
            ['log', 'info', 'warn', 'error'].forEach(function (method) {
              w.console[method] = noop;
            });
         }
        }(window));`
    };

    let head = {
      __html: `<title>Compendium</title>
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="${Root.assetBaseUrl}/assets/bundle.css" rel="stylesheet">
        <link href="${Root.assetBaseUrl}/assets/morellonomicon-shift92.png" type="image/png" rel="icon">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.1/css/font-awesome.min.css">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-mfizz/2.3.0/font-mfizz.css">
        <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
        <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-shim.js"></script>
        <script src="http://cdnjs.cloudflare.com/ajax/libs/es5-shim/3.4.0/es5-sham.js"></script>
        <![endif]-->`
    };

    return (
      <html>
        <head dangerouslySetInnerHTML={head} />

        <body>
          {this.props.children}

          <script dangerouslySetInnerHTML={browserInitScriptObj} />
          <script src={`${Root.assetBaseUrl}/assets/bundle.js`} />
        </body>
      </html>
    );
  }
});


export default Root;
