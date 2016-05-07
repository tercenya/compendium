import React from 'react';
import FontAwesomeIcon from './FontAwesomeIcon';

const SmartAnchor = (props) => {
  const external = props.href.match(/^http/);
  const target = external ? '_blank' : null;
  const suffix = external ? <FontAwesomeIcon className='smart-anchor-suffix' icon='external-link' />: null;
  return (
    <a target={target} {...props}>
      {props.children}
      {suffix}
    </a>
  );
};

export default SmartAnchor;
