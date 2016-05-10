import React from 'react';
import ReactDOM from 'react-dom';
import MFizzIcon from './MFizzIcon';

import _ from 'lodash';

export const Language = (props) => {
  const icon = props.icon || props.lang
  // const onClick = (e) => {
  //   if (props.onClick) { props.onClick(props.lang, e) };
  // };
  const changeLanguage = (lang, event) => {
    console.log(`changing language to ${lang}`);
    window.localStorage.setItem('compendium-language', lang);
  }

  return(
    <button className={`language-bar language-${props.lang}`} onClick={(e) => changeLanguage(props.lang, e)}>
      <MFizzIcon icon={icon}/>&nbsp;{props.children}
    </button>
  )
}

export default class LanguageSelector extends React.Component {
  render() {
    return(
      <div>
        <Language lang='ruby'>ruby</Language>
        <Language lang='php'>php</Language>
        <Language lang='python'>python</Language>
        <Language lang='java'>java</Language>
        <Language lang='nodejs'>nodejs</Language>
        <Language lang='cli' icon='shell'>cURL</Language>
      </div>
    );
  }
}
