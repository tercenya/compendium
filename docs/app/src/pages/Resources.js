import React from 'react';

import { CondLang, NavMain, PageHeader, PageFooter, A, MFizzIcon, FontAwesomeIcon } from '../components';

const Resources = (props) => {
  return (
    <div>
      <NavMain activePage="resources" />

      <PageHeader
        title="Resources"
        subTitle="" />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <a name='tools'></a>
              <h4>Installing langauges</h4>

              <table className='table'>
                <thead>
                  <th></th>
                  <th><FontAwesomeIcon icon='windows' />&nbsp;Windows</th>
                  <th><FontAwesomeIcon icon='apple' />&nbsp;Mac</th>
                  <th>
                    <MFizzIcon icon='redhat' />&nbsp;Redhat
                    /&nbsp;
                    <MFizzIcon icon='centos' />&nbsp;Centos
                  </th>
                  <th>
                    <MFizzIcon icon='debian' />&nbsp;Debian
                    /&nbsp;
                    <MFizzIcon icon='ubuntu' />&nbsp;Ubuntu
                  </th>
                </thead>
                <tbody>
                  <tr>
                    <th className='nobreak'><MFizzIcon icon='ruby' />&nbsp;Ruby</th>
                    <td>From <A href='http://rubyinstaller.org/'>rubyinstaller.org</A></td>
                    <td>Included, or use <A href='http://brew.sh/'>homebrew</A> to install <A href='https://github.com/rbenv/rbenv'>rbenv</A> and <A href='https://github.com/rbenv/ruby-build'>ruby-build</A>.</td>
                    <td><code>yum install ruby</code></td>
                    <td><code>apt-get install ruby</code></td>
                  </tr>
                  <tr>
                    <th className='nobreak'><MFizzIcon icon='python' />&nbsp;Python</th>
                    <td>From <A href='https://www.python.org/downloads/windows/'>python.org</A></td>
                    <td>Included</td>
                    <td><code>yum install python</code></td>
                    <td><code>apt-get install python</code></td>
                  </tr>
                  <tr>
                    <th className='nobreak'><MFizzIcon icon='php' />&nbsp;php</th>
                    <td>From <A href='http://windows.php.net/download#php-7.0'>php.net</A></td>
                    <td>Included, or <A href='http://php.net/downloads.php'>php.net</A></td>
                    <td><code>yum install php</code></td>
                    <td><code>apt-get install php5</code></td>
                  </tr>
                  <tr>
                    <th className='nobreak'><MFizzIcon icon='nodejs' />&nbsp;nodejs</th>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A></td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or use <A href='http://brew.sh/'>homebrew</A> to install the <A href='http://blog.teamtreehouse.com/install-node-js-npm-mac'>node</A> package</td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or add the <A href='https://github.com/nodesource/distributions'>nodesource repo</A> then <code>yum install nodejs</code></td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or add the <A href='https://github.com/nodesource/distributions'>nodesource repo</A> then <code>apt-get install nodejs</code></td>
                  </tr>
                </tbody>
              </table>


              <p>Installing java on windows / linux / mac</p>

              curl for windows / linux / mac
            </div>
          </div>
        </div>
      </div>

      <PageFooter />
    </div>
  );
};


export default Resources;
