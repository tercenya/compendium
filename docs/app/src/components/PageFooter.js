import React from 'react';
import packageJSON from '../../../package.json';

const version = packageJSON.version;

const PageFooter = (props) => {
  return (
    <footer className="compendium-footer" role="contentinfo">
      <div className="container">
        <ul className="compendium-footer-links">
          <li>&copy; 2016 Craig M. Wellington <i>'Arinya'</i></li>
          <li>·</li>
          <li>MIT license</li>
          <li>·</li>
          <li>v{version}</li>
        </ul>
        <ul className="compendium-disclaimer muted">
          <li>Compendium isn't endorsed by Riot Games and doesn't reflect the views or opinions of Riot Games or anyone officially involved in producing or managing League of Legends.</li>
          <li>League of Legends and Riot Games are trademarks or registered trademarks of Riot Games, Inc.</li>
          <li>League of Legends © Riot Games, Inc.</li>
        </ul>
      </div>
    </footer>
  )
};

export default PageFooter;
