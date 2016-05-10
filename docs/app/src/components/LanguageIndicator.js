import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';

const dummyStorage = {
  'getItem': () => { return null }
};

export default class LanguageIndicator extends React.Component {
  constructor(props) {
    super(props);
    this.state = { lang: 'ruby'};
  }

  componentDidMount() {
    const storage = (typeof window == "undefined") ? dummyStorage : window.localStorage;
    this.state.lang = storage.getItem('compendium-language');
  }

  render() {
    return(
      <div>
        The current language is {this.state.lang}
      </div>
    );
  }
}
