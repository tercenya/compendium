import React from 'react';

import { CodeExample, CondLang, NavMain, PageHeader, PageFooter, A } from '../../components';
import SampleCode from '../../SampleCode';
const sampleJson = SampleCode.Overview.JsonExample;

const Overview = (props) => {
  return (
    <div>
      <NavMain activePage="guides" />

      <PageHeader
        title="JSON APIs"
        subTitle="And a general idea of how they work"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">
              <h2>Guide: How to use a JSON API</h2>

              <p>
                 It's important to have some familiarity with JSON to use a JSON API such as Riot's.
                 When using a client library, some of these details will be obscured from or taken care of for you.
                 However, you will still want to be awaren of how the JSON and web APIs work.
                 This will come in handy when reading Riot's documentation, learning the API, or just debugging your program.
              </p>

              <h4>What is JSON?</h4>

              <p>
                JSON, short for <i>JavaScript Object Notation</i>, is a human and computer readable format for sharing data.
                It&apos;s not as scary as it seems, and most the data you get back from the Riot API can be discerned without too much effort.
                Here's an example:
              </p>

              <CodeExample
                lang='jsx'
                code={sampleJson}
              />

              <p>
                There are many good tutorials about JSON on the web.
                For an overview, consider <A href="http://www.w3schools.com/json/default.asp">w3schools</A>, or <A href="http://www.copterlabs.com/json-what-it-is-how-it-works-how-to-use-it/">copter labs</A>.
                I would <b>not</b> recommend trying to read the <A href="http://www.json.org/">specifications</A>; it's mostly technical and not very informative.
                I <b>would</b> recommend using a library in your language of choice to process the JSON into a usable data structures.
              </p>

              <h4>How do JSON APIs work?</h4>

              <p>
                JSON APIs are just webpages, really.
                Fetching the pages works the same way any other page does; you can even use your browser.
                However, in order to do this <i>programatically</i>, we'll need to know a little more.
              </p>

              <p>
                The HTTP protocol is used to transfer web content.  Most requests use the <i>GET</i> verb (command).
                In response, you get a status code, and a body - which for a JSON api, will always be JSON, instead of the usual HTML your browser uses.
                There are <A href="https://en.wikipedia.org/wiki/List_of_HTTP_status_codes">many status codes</A>, but only a couple are really important to us:
              </p>

              <ul>
                <li>
                  <dl>
                    <dt>200 - "OK"</dt>
                    <dd>The data you requested was succesfully retrieved.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>403 - Access Denied</dt>
                    <dd>Many of the features in Riot's API require an <i>API KEY</i>. You will get this if you forget to include your API KEY when making your request, or if your key is invalid.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>404 - Not Found</dt>
                    <dd>The data was missing! You have undoubtly seen these in your browser, but it means the same thing when calling a JSON API. For example, if you ask for a data on about a particular game, but that game does not exist, the server will respond with <i>404</i>.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>429 - Too Many Requests</dt>
                    <dd>You have exceeded the rate limits - made too many requests in to short a time.  We will discuss this in detail in a later chapter.</dd>
                  </dl>
                </li>
                <li>
                  <dl>
                    <dt>500 - Server Error</dt>
                    <dd>Something went wrong, probably on Riot's end.  Trying again will either clear up the issue, or prove that there is something horribly wrong.</dd>
                  </dl>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;
