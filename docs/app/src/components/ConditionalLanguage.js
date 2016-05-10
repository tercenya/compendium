import React from 'react';
import ReactDOM from 'react-dom';

import _ from 'lodash';
import CodeExample from './CodeExample';

const ConditionalLanguage = (props, context) => {
  var lang = context.lang || props.lang || 'ruby'

  const children = props.children;
  const target = _.find(children, (c) => { return c.props.lang === lang; });

  return (
    <div className='condLang'>
      {target}
    </div>);
};

export default ConditionalLanguage;
