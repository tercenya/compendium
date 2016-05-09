import React from 'react';
import classNames from 'classnames';

const MFizzIcon = (props) => {
  const classes = classNames(['icon-' + props.icon, props.className]);

  return (
    <i className={classes} aria-hidden='true' />
  );
};

export default MFizzIcon;
