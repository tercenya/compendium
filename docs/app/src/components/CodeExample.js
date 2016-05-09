import React from 'react';
import ReactDOM from 'react-dom';

export default class CodeExample extends React.Component {
  render() {
    return (
      <pre className="cm-s-lesser-dark cm-s-dark CodeMirror">
        <code>
          {this.props.codeText}
        </code>
      </pre>
    );
  }

  componentDidMount() {
    if (CodeMirror === undefined) {
      return;
    }

    CodeMirror.runMode(
      this.props.codeText,
      this.props.lang || 'jsx',
      ReactDOM.findDOMNode(this).children[0]
    );
  }
}
