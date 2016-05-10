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
                First, notice that we didn't put the API key in our code. We&apos;re getting it from the command line.  You will need to prefix your command with API_KEY=xxxx, like this:
              </p>
              <CodeExample lang='shell' code="API_KEY=12345678-abcd-1234-abcd-1234567890ab" />

              <CondLang>
                <div lang='ruby'>
                  <p>We can read this value back in easily using the <code><A href="http://ruby-doc.org/core-2.2.0/ENV.html">ENV</A></code> global.</p>
                  <CodeExample lang='ruby' code={SampleCode.Summoner.apikey.ruby} />
                </div>
                <div lang='php'>
                  <p>We can read this value back in easily using the <code><A href="http://php.net/manual/en/function.getenv.php">getenv</A></code> function.</p>
                  <CodeExample lang='php' code={SampleCode.Summoner.apikey.php} />
                </div>
                <div lang='node'>
                  <p>We can read this value back in easily using the <code><A href="https://nodejs.org/api/process.html#process_process_env">process.env</A></code> object.</p>
                  <CodeExample lang='node' code={SampleCode.Summoner.apikey.node} />
                </div>

              </CondLang>


              <CondLang>
                <div lang='ruby'>
                  <p>
                  Note that we use a URI object, we'll need to escape the summoner name, first.
                  We can use the <code><A href='http://ruby-doc.org/stdlib-2.1.1/libdoc/uri/rdoc/URI/Escape.html'>URI.escape</A></code> function.
                  </p>
                  <CodeExample lang='ruby' code={SampleCode.Summoner.Name.ruby} />
                </div>
                <div lang='php'>
                  <p>
                  Note that we use a URI object, we'll need to escape the summoner name, first.
                  We can use the <code><A href='http://php.net/manual/en/function.urlencode.phpl'>urlencode</A></code> function.
                  </p>
                  <CodeExample lang='php' code={SampleCode.Summoner.Name.php} />
                </div>
                <p lang='node'>
                  In most languages, we would need to specifically escape our username. <code>fetch</code> will do this for us, automatically when we pass in the string.
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
                <CodeExample lang='node' code={SampleCode.Summoner.Url.node} />
              </CondLang>

              <p>Now we call the Riot API endpoint.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.ApiCall.ruby} />
                <div lang='php'>
                  <p>For these examples we're using the curl library that is built into PHP.  We have to set the <code>CURLOPT_RETURNTRANSFER</code> flag so that <code>curl_exec</code> returns the data, instead of writing it all to the screen.</p>
                  <CodeExample lang='php' code={SampleCode.Summoner.ApiCall.php} />
                </div>
                <div lang='node'>
                  <p>
                    <code>fetch</code> returns a <A href='https://www.promisejs.org/'>promise</A>, a way of chaining functions together when asynchronous (delayed) I/O is involved.
                    It's not critical that you know everything about promises, but you may note that structure of the nodejs solution is slightly different than the ruby or php counterparts because of this.
                  </p>
                  <CodeExample lang='node' code={SampleCode.Summoner.ApiCall.node} />
                </div>
              </CondLang>

              <p>
                The result that we get back is a string, and it should look something like this:
              </p>
              <CodeExample lang='jsx' code={SampleCode.Summoner.json} />
              <p>
                That string isn't very useful, but we can parse it into a useful data structure.
              </p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.parseJson.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.parseJson.php} />
                <CodeExample lang='node' code={SampleCode.Summoner.parseJson.node} />
              </CondLang>

              <p>Notice that the key for our hash isn't exactly what we provided.  We will need to remove all whitespace, and lowercase all characters in order to match the key.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.fixName.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.fixName.php} />
                <CodeExample lang='node' code={SampleCode.Summoner.fixName.node} />
              </CondLang>

              <p>Now we can do something useful with the hash.  We will emit the summoner id, which will need for several other endpoints.</p>

              <CondLang>
                <CodeExample lang='ruby' code={SampleCode.Summoner.output.ruby} />
                <CodeExample lang='php' code={SampleCode.Summoner.output.php} />
                <CodeExample lang='node' code={SampleCode.Summoner.output.node} />
              </CondLang>

              <p>Wrapping this up, let's see the whole program at work:</p>
              <CondLang>
                <div lang='ruby'>
                  <CodeExample lang='shell' code={SampleCode.Summoner.fullOutput.ruby} />
                </div>
                <div lang='php'>
                  <CodeExample lang='shell' code={SampleCode.Summoner.fullOutput.php} />
                </div>
                <div lang='node'>
                  <CodeExample lang='shell' code={SampleCode.Summoner.fullOutput.node} />
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
