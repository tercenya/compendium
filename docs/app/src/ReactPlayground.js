// These do not use ES6 imports, because the evaluated code requires un-mangled
// variable names.

/* eslint-disable */
const classNames = require('classnames');
const React = require('react');
const ReactDOM = require('react-dom');

// Keep these in sync with src/index.js.
const Accordion = require('react-bootstrap');
const Alert = require('react-bootstrap');
const Badge = require('react-bootstrap');
const Breadcrumb = require('react-bootstrap');
const Button = require('react-bootstrap');
const ButtonGroup = require('react-bootstrap');
const ButtonInput = require('react-bootstrap');
const ButtonToolbar = require('react-bootstrap');
const Carousel = require('react-bootstrap');
const CarouselItem = require('react-bootstrap');
const Checkbox = require('react-bootstrap');
const Clearfix = require('react-bootstrap');
const Col = require('react-bootstrap');
const Collapse = require('react-bootstrap');
const ControlLabel = require('react-bootstrap');
const Dropdown = require('react-bootstrap');
const DropdownButton = require('react-bootstrap');
const Fade = require('react-bootstrap');
const Form = require('react-bootstrap');
const FormControl = require('react-bootstrap');
const FormControls = require('react-bootstrap');
const FormGroup = require('react-bootstrap');
const Glyphicon = require('react-bootstrap');
const Grid = require('react-bootstrap');
const HelpBlock = require('react-bootstrap');
const Image = require('react-bootstrap');
const Input = require('react-bootstrap');
const InputGroup = require('react-bootstrap');
const Interpolate = require('react-bootstrap');
const Jumbotron = require('react-bootstrap');
const Label = require('react-bootstrap');
const ListGroup = require('react-bootstrap');
const ListGroupItem = require('react-bootstrap');
const Media = require('react-bootstrap');
const MenuItem = require('react-bootstrap');
const Modal = require('react-bootstrap');
const Nav = require('react-bootstrap');
const Navbar = require('react-bootstrap');
const NavbarBrand = require('react-bootstrap');
const NavDropdown = require('react-bootstrap');
const NavItem = require('react-bootstrap');
const Overlay = require('react-bootstrap');
const OverlayTrigger = require('react-bootstrap');
const PageHeader = require('react-bootstrap');
const PageItem = require('react-bootstrap');
const Pager = require('react-bootstrap');
const Pagination = require('react-bootstrap');
const Panel = require('react-bootstrap');
const PanelGroup = require('react-bootstrap');
const Popover = require('react-bootstrap');
const ProgressBar = require('react-bootstrap');
const Radio = require('react-bootstrap');
const ResponsiveEmbed = require('react-bootstrap');
const Row = require('react-bootstrap');
const SafeAnchor = require('react-bootstrap');
const SplitButton = require('react-bootstrap');
const Tab = require('react-bootstrap');
const TabContainer = require('react-bootstrap');
const TabContent = require('react-bootstrap');
const Table = require('react-bootstrap');
const TabPane = require('react-bootstrap');
const Tabs = require('react-bootstrap');
const Thumbnail = require('react-bootstrap');
const Tooltip = require('react-bootstrap');
const Well = require('react-bootstrap');

const bootstrapUtils = require('react-bootstrap');
/* eslint-enable */

import babel from 'babel-core/browser';
import CodeExample from './CodeExample';

const IS_MOBILE = typeof navigator !== 'undefined' && (
  navigator.userAgent.match(/Android/i)
    || navigator.userAgent.match(/webOS/i)
    || navigator.userAgent.match(/iPhone/i)
    || navigator.userAgent.match(/iPad/i)
    || navigator.userAgent.match(/iPod/i)
    || navigator.userAgent.match(/BlackBerry/i)
    || navigator.userAgent.match(/Windows Phone/i)
  );

class CodeMirrorEditor extends React.Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    if (IS_MOBILE || CodeMirror === undefined) {
      return;
    }

    this.editor = CodeMirror.fromTextArea(this.refs.editor, {
      mode: 'jsx',
      lineNumbers: false,
      lineWrapping: false,
      matchBrackets: true,
      tabSize: 2,
      theme: 'lesser-dark',
      readOnly: this.props.readOnly
    });
    this.editor.on('change', this.handleChange);
  }

  componentDidUpdate() {
    if (this.props.readOnly) {
      this.editor.setValue(this.props.codeText);
    }
  }

  handleChange() {
    if (!this.props.readOnly && this.props.onChange) {
      this.props.onChange(this.editor.getValue());
    }
  }

  render() {
    // wrap in a div to fully contain CodeMirror
    let editor;

    if (IS_MOBILE) {
      editor = (
        <CodeExample
          mode="jsx"
          codeText={this.props.codeText}
        />
      );
    } else {
      editor = <textarea ref="editor" defaultValue={this.props.codeText} />;
    }

    return (
      <div style={this.props.style} className={this.props.className}>
        {editor}
      </div>
      );
  }
}

const selfCleaningTimeout = {
  componentDidUpdate() {
    clearTimeout(this.timeoutID);
  },

  updateTimeout() {
    clearTimeout(this.timeoutID);
    this.timeoutID = setTimeout.apply(null, arguments);
  }
};

const ReactPlayground = React.createClass({
  mixins: [selfCleaningTimeout],

  propTypes: {
    codeText: React.PropTypes.string.isRequired,
    transformer: React.PropTypes.func
  },

  getDefaultProps() {
    return {
      transformer(code) {
        return babel.transform(code).code;
      }
    };
  },

  getInitialState() {
    return {
      code: this.props.codeText,
      codeChanged: false,
      showCode: false
    };
  },

  componentWillMount() {
    // For the initial render, we can hijack React.render to intercept the
    // example element and render it normally. This is safe because it's code
    // that we supply, so we can ensure ahead of time that it won't throw an
    // exception while rendering.
    const originalRender = ReactDOM.render;
    ReactDOM.render = (element) => this._initialExample = element;

    // Stub out mountNode for the example code.
    const mountNode = null;  // eslint-disable-line no-unused-vars

    try {
      const compiledCode = this.props.transformer(this.props.codeText);

      /* eslint-disable */
      eval(compiledCode);
      /* eslint-enable */
    } finally {
      ReactDOM.render = originalRender;
    }
  },

  componentWillUnmount() {
    this.clearExample();
  },

  handleCodeChange(value) {
    this.setState(
      {code: value, codeChanged: true},
      this.executeCode
    );
  },

  handleCodeModeToggle() {
    this.setState({
      showCode: !this.state.showCode
    });
  },

  render() {
    return (
      <div className="playground">
        {this.renderExample()}

        {this.renderEditor()}
        {this.renderToggle()}
      </div>
    );
  },

  renderExample() {
    let example;
    if (this.state.codeChanged) {
      example = (
        <div ref="mount" />
      );
    } else {
      example = (
        <div>{this._initialExample}</div>
      );
    }

    return (
      <div className={classNames('bs-example', this.props.exampleClassName)}>
        {example}
      </div>
    );
  },

  renderEditor() {
    if (!this.state.showCode) {
      return null;
    }

    return (
      <CodeMirrorEditor
        key="jsx"
        onChange={this.handleCodeChange}
        className="highlight"
        codeText={this.state.code}
      />
    );
  },

  renderToggle() {
    return (
      <SafeAnchor
        className={classNames('code-toggle', {'open': this.state.showCode})}
        onClick={this.handleCodeModeToggle}
      >
        {this.state.showCode ? 'hide code' : 'show code'}
      </SafeAnchor>
    );
  },

  clearExample() {
    if (!this.state.codeChanged) {
      return null;
    }

    const mountNode = this.refs.mount;
    try {
      ReactDOM.unmountComponentAtNode(mountNode);
    } catch (e) {
      console.error(e); // eslint-disable-line no-console
    }

    return mountNode;
  },

  executeCode() {
    const mountNode = this.clearExample();

    let compiledCode = null;
    try {
      compiledCode = this.props.transformer(this.state.code);

      /* eslint-disable */
      eval(compiledCode);
      /* eslint-enable */
    } catch (err) {
      if (compiledCode !== null) {
        console.log(err, compiledCode); // eslint-disable-line no-console
      } else {
        console.log(err); // eslint-disable-line no-console
      }

      this.updateTimeout(
        () => {
          ReactDOM.render(
            <Alert bsStyle="danger">
              {err.toString()}
            </Alert>,
            mountNode
          );
        },
        500
      );
    }
  }
});

export default ReactPlayground;
