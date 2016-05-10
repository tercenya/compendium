import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';
import SampleCode from '../../SampleCode';

const CurrentGame = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Current Game"
        subTitle="How to find a match-in-progress"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Look up a match-in-progress</h2>

                <p>
                  Maybe you want to check in a that's currently in progress instead of something that happened long ago?
                  There's an endpoint for that too.
                  Again, we need a SummonerId.  If you don't have it, you'll need to look it up.
                </p>

                <p>
                  Yet again, we have a new parameter.  This one isn't too hard - it's the region of the game in question.
                  You can look them up <A href="https://developer.riotgames.com/docs/regional-endpoints">here</A>.
                </p>

                <p>
                  This might be a good time to point out that so far, all of our examples have been against the North American region.
                  If you want to make calls against another region (or change the region parameter), you will also need to change the URL to a different server, as noted on the document above.
                </p>

                <CondLang>
                  <CodeExample lang='ruby' code={SampleCode.CurrentGame.id.ruby} />
                  <CodeExample lang='php' code={SampleCode.CurrentGame.id.php} />
                  <CodeExample lang='node' code={SampleCode.CurrentGame.id.node} />
                </CondLang>

                <p>
                  Now comes the time when our knowledge of HTTP status comes in handy.
                  This route can (and frequently does) return a 404.
                  That means there's no game in progress for that user.
                  We will need to check for that status in our code.
                </p>

                <CondLang>
                  <CodeExample lang='ruby' code={SampleCode.CurrentGame.status.ruby} />
                  <CodeExample lang='php' code={SampleCode.CurrentGame.status.php} />
                  <CodeExample lang='node' code={SampleCode.CurrentGame.status.node} />
                </CondLang>

                <p>If we were succesful, we get a response that looks like this.</p>

                <CodeExample lang='jsx' code={SampleCode.CurrentGame.json} />

                <p>Let's try the output.</p>

                <CondLang>
                  <div lang='ruby'>
                    <CodeExample lang='shell' code={SampleCode.CurrentGame.fullOutput.ruby} />
                  </div>
                  <div lang='php'>
                    <CodeExample lang='shell' code={SampleCode.CurrentGame.fullOutput.php} />
                  </div>
                  <div lang='node'>
                    <CodeExample lang='shell' code={SampleCode.CurrentGame.fullOutput.node} />
                  </div>
                </CondLang>

                <p>
                  Ah, well, that's to be expected.
                  I'm writing guides on how to use the Riot API instead of playing League of Legends.
                </p>


            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentGame;
