import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';
import SampleCode from '../../SampleCode';

const MatchHistory = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Match History"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Fetching Match History</h2>

              <p>
                The structure of our program is going to look very much like the previous one.
                If you're unclear about a particular line of code that isn't covered here, check the previous guides.
              </p>

              <p>In this lesson, we're going to look up a user's Match History. </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.MatchHistory.id.ruby} />
                <CodeExample lang='php' code={SampleCode.MatchHistory.id.php} />
                <CodeExample lang='node' code={SampleCode.MatchHistory.id.node} />
              </CondLang>

              <p>
                How did we get the number 66209320?
                That was the exercise of the previous guide.
                Many endpoints require a Summoner ID instead of name, and this is one of them.
                In your own projects, if you don't have the Summoner ID of the user you're looking for, you will need to call the
                <A href="https://developer.riotgames.com/api/methods#!/1079">Summoner endpoint</A> first, before you can proceed.
              </p>

              <p>Our URL looks very similar to the last one.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.MatchHistory.Url.ruby} />
                <CodeExample lang='php' code={SampleCode.MatchHistory.Url.php} />
                <CodeExample lang='node' code={SampleCode.MatchHistory.Url.node} />
              </CondLang>

              <p>
                The response from the server will look like this.
                The real answer will be much longer, as it returns many matches, but this should give you an idea of what data is available.
              </p>

              <CodeExample lang='jsx' code={SampleCode.MatchHistory.json} />

              <p>
                So what good is this information?  While there's some interesting tidbits here and there, the important piece of data is the <code>matchId</code>.
                With it, you can go to the <A href="https://developer.riotgames.com/api/methods#!/1064/3671">Match endpoint</A>, and a full accouting of the entire match!
                Before we get ahead of ourselves, let's check the output of our program.
              </p>

              <CondLang>
                <div lang='ruby'>
                  <CodeExample lang='shell' code={SampleCode.MatchHistory.fullOutput.ruby} />
                </div>
                <div lang='php'>
                  <CodeExample lang='shell' code={SampleCode.MatchHistory.fullOutput.php} />
                </div>
                <div lang='node'>
                  <CodeExample lang='shell' code={SampleCode.MatchHistory.fullOutput.node} />
                </div>
              </CondLang>

              <p>Now we can move on to finding out what happened in that match...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchHistory;
