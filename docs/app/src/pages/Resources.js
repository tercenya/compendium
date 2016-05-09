import React from 'react';

import { CondLang, NavMain, PageHeader, PageFooter, A } from '../components';

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
              <h4>Development tools and languages</h4>

              <table className='table'>
                <thead>
                  <th>Language</th>
                  <th>Windows</th>
                  <th>Mac</th>
                  <th>Redhat/Centos</th>
                  <th>Debian/Ubuntu</th>
                </thead>
                <tbody>
                  <tr>
                    <th>Ruby</th>
                    <td>From <A href='http://rubyinstaller.org/'>rubyinstaller.org</A></td>
                    <td>Included, or use <A href='http://brew.sh/'>homebrew</A> to install <A href='https://github.com/rbenv/rbenv'>rbenv</A> and <A href='https://github.com/rbenv/ruby-build'>ruby-build</A>.</td>
                    <td><code>yum install ruby</code></td>
                    <td><code>apt-get install ruby</code></td>
                  </tr>
                  <tr>
                    <th>Python</th>
                    <td>From <A href='https://www.python.org/downloads/windows/'>python.org</A></td>
                    <td>Included</td>
                    <td><code>yum install python</code></td>
                    <td><code>apt-get install python</code></td>
                  </tr>
                  <tr>
                    <th>nodejs</th>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A></td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or use <A href='http://brew.sh/'>homebrew</A> to install <A href='http://blog.teamtreehouse.com/install-node-js-npm-mac'>node</A></td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or add the <A href='https://github.com/nodesource/distributions'>nodesource repo</A> then <code>yum install nodejs</code></td>
                    <td>From <A href='https://nodejs.org/en/download/'>nodejs.org</A>, or add the <A href='https://github.com/nodesource/distributions'>nodesource repo</A> then <code>apt-get install nodejs</code></td>
                  </tr>
                  <tr>
                    <th>php</th>
                    <td>From <A href='http://windows.php.net/download#php-7.0'>php.net</A></td>
                    <td>Included, or <A href='http://php.net/downloads.php'>php.net</A></td>
                    <td><code>yum install php</code></td>
                    <td><code>apt-get install php5</code></td>
                  </tr>
                </tbody>
              </table>

              Installing ruby on windows / linux / mac
              Installing php on windows / linux / mac
              Installing java on windows / linux / mac
              Installing nodejs on windows / linux / mac
              Installing python on windows / linux / mac
              C#?

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
