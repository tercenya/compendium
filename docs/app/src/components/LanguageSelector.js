import React from 'react';
import ReactDOM from 'react-dom';
import MFizzIcon from './MFizzIcon';

import _ from 'lodash';

export const Language = (props, context) => {
  const changeLanguage = (lang, event) => {
    console.log(`changing language to ${lang}`);
    if (props.onClick) { props.onClick(lang); };
  }

  const icon = props.icon || props.lang

  return(
    <button className={`language-bar language-${props.lang}`} onClick={(e) => changeLanguage(props.lang, e)}>
      <MFizzIcon icon={icon}/>&nbsp;{props.children}
    </button>
  )
}

function renderChildren(props, state) {
  return React.Children.map(props.children, child => {
    return React.cloneElement(child, {
      lang: state.lang
    })
  })
}

export default class LanguageSelector extends React.Component {
  constructor(props) {
    super(props);
    this.state = {lang: 'ruby'}
  }

  componentDidMount() {
    if (typeof window !== "undefined") {
      lang = window.localStorage.getItem('compendium-language');
      if (lang) { this.setState({lang: lang}); }
    }
  }

  update(l) {
    this.setState({lang: l});
    if (typeof window != "undefined") {
      window.localStorage.setItem('compendium-language', l);
    }

    this.forceUpdate();
  }


  render() {
    return(
      <div>
        <div>
          <Language lang='ruby' onClick={(l) => { this.update(l) }}>ruby</Language>
          <Language lang='php' onClick={(l) => { this.update(l) }}>php</Language>
          <Language lang='node' icon='nodejs' onClick={(l) => { this.update(l) }}>nodejs</Language>
        </div>
        {renderChildren(this.props, this.state)}
      </div>
    );
  }
}


// <Language lang='python'>python</Language>
// <Language lang='java'>java</Language>
// <Language lang='cli' icon='shell'>cURL</Language>
