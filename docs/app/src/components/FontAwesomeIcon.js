import React from 'react';
import classNames from 'classnames';

const FontAwesomeIcon = (props) => {
  const classes = classNames(['fa', 'fa-' + props.icon, props.className]);
  
  return (
    <i className={classes} aria-hidden='true' />
  );
};

export default FontAwesomeIcon;
