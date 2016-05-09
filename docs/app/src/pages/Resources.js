import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

const Resources = (props) => {
  return (
    <div>
      <NavMain activePage="resources" />

      <PageHeader
        title="Resources"
        subTitle="" />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-9" role="main">
            <div className="compendium-section">
              <a name='tools'></a>
              <h4>Development tools and languages</h4>

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
