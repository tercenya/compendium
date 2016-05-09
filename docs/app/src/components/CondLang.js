import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import CodeExample from './CodeExample';

export default class CondLang extends React.Component {
  render() {
    const lang = this.props.lang || 'ruby';

    const children = this.props.children;
    const target = _.first(children, (c) => { c.props.lang === lang });

    return (<div>{target}</div>);
  }
}
