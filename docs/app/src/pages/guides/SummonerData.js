import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';
import SampleCode from '../../SampleCode';

const SummonerData = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="Summoner Data"
        subTitle=""
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: Fetching Summoner Data</h2>

              <p>Our first route is the <A href="https://developer.riotgames.com/api/methods#!/1079">Summoner endpoint</A>.  There are several endpoints in the space actually, but only going to use one of them.  We are going to look up a summoner by name.</p>

              <p>
                First we notice is that we didn't put the API key in the code.  We&apos;re getting it from the command line.  You will need to prefix your command with API_KEY=xxxx, like this:
                <CodeExample lang='shell' code="API_KEY=12345678-abcd-1234-abcd-1234567890ab" />

                <CondLang>
                  <p lang='ruby'>
                    We can read this value back in easily using the <code><A href="http://ruby-doc.org/core-2.2.0/ENV.html">ENV</A></code> global.
                    <CodeExample lang='ruby' code={SampleCode.Summoner.apikey.ruby} />
                  </p>
                  <p lang='php'>
                    We can read this value back in easily using the <code><A href="http://php.net/manual/en/function.getenv.php">getenv</A></code> function.
                    <CodeExample lang='php' code={SampleCode.Summoner.apikey.php} />
                  </p>
                </CondLang>
              </p>

              <CondLang>
                <p lang='ruby'>
                  Note that we use a URI object, we'll need to escape the summoner name, first.
                  We can use the <code><A href='http://ruby-doc.org/stdlib-2.1.1/libdoc/uri/rdoc/URI/Escape.html'>URI.escape</A></code> function.
                  <CodeExample lang='ruby' code={SampleCode.Summoner.Name.ruby} />
                </p>
                <p lang='php'>
                  Note that we use a URI object, we'll need to escape the summoner name, first.
                  We can use the <code><A href='http://php.net/manual/en/function.urlencode.phpl'>urlencode</A></code> function.
                  <CodeExample lang='php' code={SampleCode.Summoner.Name.php} />
                </p>

                <p lang='cli'>When using cURL, if your url contains spaces or special characters, make sure enclose it in quotes.</p>
              </CondLang>

              <p>
                Subsitute in the name and api key to build the URL.  The result will look something like:<br/>
                <code>https://na.api.pvp.net/api/lol/na/v1.4/summoner/by-name/Arinya?api_key=xxxxxxx</code>
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.Url.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.Url.php} />
              </CondLang>

              <p>Now we call the Riot API endpoint.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.ApiCall.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.ApiCall.php} />
              </CondLang>

              <p>
                The result that we get back is a string, and it should look something like this:
                <CodeExample lang='jsx' code={SampleCode.Summoner.json} />
                That string isn't very useful, but we can parse it into a useful data structure.
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.parseJson.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.parseJson.php} />
              </CondLang>

              <p>Notice that the key for our hash isn't exactly what we provided.  We will need to remove all whitespace, and lowercase all characters in order to match the key.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.fixName.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.fixName.php} />
              </CondLang>

              <p>Now we can do something useful with the hash.  We will emit the summoner id, which will need for several other endpoints.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.output.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.output.php} />
              </CondLang>

              <p>Wrapping this up, let's see the whole program at work:</p>
              <CondLang>
                <div lang='ruby'>
                  <CodeExample lang='shell' code={SampleCode.Summoner.fullOutput.ruby} />
                </div>
                <div lang='php'>
                  <CodeExample lang='shell' code={SampleCode.Summoner.fullOutput.php} />
                </div>
              </CondLang>

              <p>We've made our first call to the Riot API!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummonerData;
