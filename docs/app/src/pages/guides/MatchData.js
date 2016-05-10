import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';
import SampleCode from '../../SampleCode';

const MatchData = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Match Data"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Fetching Match Data</h2>

              <p>
                We'll start again with data we fetched in the last guide. We want to know what happened in that game!
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.MatchData.id.ruby} />
                <CodeExample lang='php' code={SampleCode.MatchData.id.php} />
                <CodeExample lang='node' code={SampleCode.MatchData.id.node} />
              </CondLang>

              <p>
                There is also new setting in our sample code: include timelime.
                This a paramater we can send to the server, and it changes the output we get.
                Riot says:
              </p>
              <blockquote>
                Flag indicating whether or not to include match timeline data.
              </blockquote>
              <p>
                Setting it to true massively increases the payload, and contains a lot more informaiton about what happened during the battle.
                We won't be processing the timeline for this example, but if you have time to spare, you should try setting this to true and investaing what changes in the payload.
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.MatchData.Url.ruby} />
                <CodeExample lang='php' code={SampleCode.MatchData.Url.php} />
                <CodeExample lang='node' code={SampleCode.MatchData.Url.node} />
              </CondLang>

              <p>Here's a (much shortened) version of the answer:</p>

              <CodeExample lang='jsx' code={SampleCode.MatchData.json} />

              <p>
                There's <b>a lot</b> of data here (and we've hidden most of it so it will at least fit on the page).
                Riot has a complete reference of what each field means, so you may want to glance at the numerous sections located in the
                <A href="https://developer.riotgames.com/api/methods#!/1064/3671">Match API Reference</A>.
              </p>

              <p>
                For this example, we're going to dig into the <code>participantIdentities</code> section.
                Let's deduce who was on each team.
                For each entry, we dig down to the <code>player</code> then the <code>summonerName</code> attribute.
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.MatchData.output.ruby} />
                <CodeExample lang='php' code={SampleCode.MatchData.output.php} />
                <CodeExample lang='node' code={SampleCode.MatchData.output.node} />
              </CondLang>

              <p>Let's check the output.</p>

              <CondLang>
                <div lang='ruby'>
                  <CodeExample lang='shell' code={SampleCode.MatchData.fullOutput.ruby} />
                </div>
                <div lang='php'>
                  <CodeExample lang='shell' code={SampleCode.MatchData.fullOutput.php} />
                </div>
                <div lang='node'>
                  <CodeExample lang='shell' code={SampleCode.MatchData.fullOutput.node} />
                </div>
              </CondLang>

              <p>Yup, that's right.</p>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchData;
