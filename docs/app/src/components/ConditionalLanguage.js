import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import CodeExample from './CodeExample';

export default class ConditionalLanguage extends React.Component {
  render() {
    const lang = this.props.lang || 'ruby';

    const children = this.props.children;
    const target = _.find(children, (c) => { return c.props.lang === lang; });

    return (<div className='condLang'>{target}</div>);
  }
}
