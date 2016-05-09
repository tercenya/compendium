import React from 'react';

import { Link } from 'react-router';
import { Navbar, Nav } from 'react-bootstrap';

const NAV_LINKS = {
  'introduction': {
    link: '/introduction',
    title: 'introduction'
  },
  'prerequisites': {
    link: '/prerequisites',
    title: 'prerequisites'
  },
  'guides': {
    link: '/guides',
    title: 'guides'
  },
  'faq': {
    link: '/faq',
    title: 'faq'
  },
  'resources': {
    link: '/resources',
    title: 'resources'
  }
};

const NavMainItem = (props) => {
  const linkKey = props.linkKey;
  const link = NAV_LINKS[linkKey];

  return (
    <li className={props.activePage === linkKey ? 'active' : null}>
      <Link to={link.link}>{link.title}</Link>
    </li>
  )
};

const NavMain = (props) => {
  const links = Object.keys(NAV_LINKS).map( (linkKey,i) => {
    return(<NavMainItem linkKey={linkKey} key={i} {...props} />);
  });

  return (
    <Navbar staticTop
      componentClass="header"
      className="compendium-nav"
      role="banner"
    >
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">
            <span className="compendium-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse className="bs-navbar-collapse">
        <Nav role="navigation" key='left'>
          {links}
        </Nav>
        <Nav role="navigation" key='right' pullRight>
          <li key="github-link">
            <a href="https://github.com/react-bootstrap/react-bootstrap" target="_blank">github</a>
          </li>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavMain;
