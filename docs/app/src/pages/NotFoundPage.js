import React from 'react';

import { NavMain, PageHeader, PageFooter, A } from '../components';

const NotFoundPage = React.createClass({
  render() {
    return (
        <div>
          <NavMain activePage="" />

          <PageHeader
            title="404"
            subTitle="Hmmm this is awkward." />

          <PageFooter />
        </div>
      );
  }
});

export default NotFoundPage;
