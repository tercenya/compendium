import React from 'react';

import { CodeExample, NavMain, PageHeader, PageFooter, A } from '../../components';

const  = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Rate Limits"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">

              <h2>Guide: Rate Limits</h2>

              <p>
                Riot has a fairly comprehensive explanation of <A href="https://developer.riotgames.com/docs/rate-limiting">Rate Limiting</A>, although the actual rate limits are located on the <A href="https://developer.riotgames.com/docs/api-keys">API Keys page</A>.
                Since their documentation is fairly through, and reasonably accessible, we're only going to cover the common pitfalls here.
              </p>

              <h5>User Rate Limit</h5>

              <p>
                There are several reasons why you might receive a _429 Rate limit exceeded_ response, but the one you need to be most aware of as a newcomer is the _user rate limit_.
              </p>

              <p>
                Each API key is limited in the number of requests it can make in a certain length of time:
              </p>

              <table>
                <thead>
                  <tr>
                    <th>Key Type</th>
                    <th>Requests in 10 seconds</th>
                    <th>Requests in 10 minutes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Development</th>
                    <td>10</td>
                    <td>500</td>
                  </tr>
                  <tr>
                    <td>Production</th>
                    <td>3,000</th>
                    <td>180,000</th>
                  </tr>
                </tbody>
              </table>

              <p>
                Each of these limits apply per region.
              </p>

              <p>
                NOTE! You will likely run into the limits on a Development key if you open your website to the public or you are iteratively <A href="/guides/datamining">data mining</A> the API. Even though the Development Key's usage is fairly limited, it should be enough for a proof of concept or personal project.
              </p>

              <h4>Submitting your application</h4>
              <code>@TODO finish this</code>
              <p>
                The next section deals with how to Submit Your Application in order to receive a Production Key, but there are additional requirements you and your application must meet.
                https://developer.riotgames.com/docs/dev-guidelines
                https://developer.riotgames.com/docs/app-guidelines
              </p>


              <h4>Help! And how to get it</h4>

              <p>
                There is an active community surrounding the Riot API, most notably the <A href="https://developer.riotgames.com/discussion/index">developer forums</A>
              </p>

              <p>
                There are dedicated sections for
                <A href="https://developer.riotgames.com/discussion/technical-help">technical help</A>,
                <A href="https://developer.riotgames.com/discussion/tutorials-libraries">tutorials-libraries</A>,
                <A href="https://developer.riotgames.com/discussion/bugs-feedback">bugs</A>,
                and
                <A href="https://developer.riotgames.com/discussion/index">general discussion</A>.
              </p>

              <h5>How to ask for help</h5>


              <p>
              Tips:

              <ul>
                <li>When your question involves more than a handful of lines of code, use services like <A href="http://gist.github.com">gist.github.com</A> to help your fellow coders see multiple files or the whole picture.</li>
                <li><b>Do not</b> include your API keys or other passwords when posting code.</li>
                <li>Do include platform, version numbers for your language and any libraries.</li>
                <li>Clearly state both what happens when you run your code, and your <b>expected</b> outcome.</li>
              </ul>
              </p>

              <h4>Other topics not covered</h4>
              <ul>
                <li>Item Sets https://developer.riotgames.com/docs/item-sets</li>
                <li>Spectating https://developer.riotgames.com/docs/spectating-games</li>
                <li>Tournament API (https://developer.riotgames.com/docs/tournaments-api)</li>
                <li>Running your code in production</li>
              </ul>

              <h4>Further steps</h4>
              - Graceful degradation
              - Caching
              - Code improvement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuidesPage;
