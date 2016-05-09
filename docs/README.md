# compendium-docs

The documentation is a standard [React](https://facebook.github.io/react/) single-page webapp.  When built into production, [webpack](https://webpack.github.io/) will distill all end pages into html files that can be uploaded to [github pages](https://pages.github.com/).

## Local Setup

- Building the docs requires a recent version of [nodejs](https://nodejs.org/en/) and [npm](https://www.npmjs.com/)
- Install the dependencies with `npm install`
- To start in development mode, run `npm start`.  This starts a webserver on port 4000, and watches for file changes.  You will need to refresh your browser to see changes - hot refresh is not enabled.
- To build production docs, use `npm run build`

## Design Decisions and Implementation

Since the entire website requires no server component, the first requirements was that the website be hostable on github pages.  Although the first draft was written in markdown, in order to pivot the sample code based on language, I would require some client-side javascript.  React is a foolproof means, and since I planned to use bootstrap as the layout anyway, the react-bootstrap library seemed like a natural starting point.  

The build system is largely based off of the (highly recommended) [react-bootstrap](https://github.com/react-bootstrap/react-bootstrap) documentation component, which is also a dependency.

Although [CodeMirror](https://codemirror.net/) will do our syntax highlighting and code presentation, I implemented the CondtionalLanguage component which toggles which language's code you see at once time.  It also works on any child component with a `lang` attribute, which allows us to annotate notes or body text that is specific to each language.

I also created a "SmartAnchor" that automatically adds an suffix icon, and open in new window if the link is external to the website.

Glyphicons are eschewed in favor of [FontAwesome](https://fortawesome.github.io/Font-Awesome/) and [Font MFizz](http://fizzed.com/oss/font-mfizz), which gets us some very handy icons, some extra polish and adds nice visual cues.

The Compendium icon is simply [Morellonomicon](http://ddragon.leagueoflegends.com/cdn/6.9.1/img/sprite/item1.png), who's been color shifted 92&deg;, and photoshopped to have both 'open' and 'closed' versions.
