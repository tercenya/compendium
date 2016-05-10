import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';

const Overview = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Introduction"
        subTitle="A survey of the Riot API"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Introduction to the Riot API</h2>

              <p>Riot's <A href="https://developer.riotgames.com/api/methods">Full API Reference</A> provides additional details about each attribute in the JSON response.</p>

              <h4>Keeping your key secure</h4>
              <ul>
                <li>don't check your key into source control (e.g. put it on github)</li>
                <li>don't post your key on the forums (e.g. when asking for help with your code)</li>
                <li>don't put your key into javascript (and send it to your clients)</li>
              </ul>
              <p>
                This topic (and many more considerations) is discussed a some length in <A href="https://developer.riotgames.com/discussion/announcements/show/oomYkEK4">the forums.</A>
              </p>

              <h4>Rate Limits</h4>

              <p>
                Riot has a fairly comprehensive explanation of <A href="https://developer.riotgames.com/docs/rate-limiting">Rate Limiting</A>, although the actual rate limits are located on the <A href="https://developer.riotgames.com/docs/api-keys">API Keys page</A>.
                Since their documentation is fairly through, and reasonably accessible, we're only going to cover the common pitfalls here.
              </p>

              <h5>User Rate Limit</h5>

              <p>
                There are several reasons why you might receive a <i>429 Rate limit exceeded</i> response, but the one you need to be most aware of as a newcomer is the <i>user rate limit</i>.
                Each API key is limited in the number of requests it can make in a certain length of time:
              </p>

              <table className='table auto'>
                <thead>
                  <tr>
                    <th>Key Type</th>
                    <th>Requests in 10 seconds</th>
                    <th>Requests in 10 minutes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th>Development</th>
                    <td>10</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <th>Production</th>
                    <td>3,000</td>
                    <td>180,000</td>
                  </tr>
                </tbody>
              </table>

              <p>
                Each of these limits apply per region.
              </p>

              <p>
                NOTE! You will likely run into the limits on a Development key if you open your website to the public or you are iteratively data mining the API.
                Even though the Development Key's usage is fairly limited, it should be enough for a proof of concept or personal project.
              </p>

              <h4>Submitting an Application</h4>

              <p>
                If you require a Production key, there are some rules and regs that you need to follow.
                You shoudln't need to worry about this if you are just setting out, but keep this in mind when you are ready to release your application to the work or you want to start datamining in earnest.

                Riot's pages on Submitting an application:
              </p>
              <ul>
                <li><A href='https://developer.riotgames.com/docs/app-guidelines'>Application Guidelines</A></li>
                <li><A href='https://developer.riotgames.com/docs/dev-guidelines'>Development Guidelines</A></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
