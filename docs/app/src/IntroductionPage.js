import React from 'react';

import NavMain from './NavMain';
import PageHeader from './PageHeader';
import PageFooter from './PageFooter';
import A from './SmartAnchor';

const IntroductionPage = (props) => {
  return (
    <div>
      <NavMain activePage="introduction" />

      <PageHeader
        title="Introduction"
        subTitle="What am I reading here?"
      />

      <div className="container compendium-container">
        <div className="row">
          <div className="col-md-12" role="main">
            <div className="compendium-section">

              <h4>Purpose</h4>
              <p>Compendium is a neophyte's guide to the Riot Games API for League of Legends.</p>

              <p>
                As <A href='http://engineering.riotgames.com/news/riot-games-api-goals-and-design'>stated by Riot</A>, the purpose of the API is to engage the community.
                However, a survey of the developer forums shows many users struggle to get started.
              </p>

              <p>Compendium is a step-by-step walkthrough to get you going.</p>

              <p>
                Riot has a Getting Started page.
                But there's a lot you can do with the Riot API, and quite a bit more you need to know when you get involved... one page just can't quite cover everything.  This guide introduce you to the concepts and walk you through the code you need to get off the ground.</p>

              <h4>Audience</h4>

              <p>Compendium targets the novice programmer.</p>

              <p>
                Perhaps you have taken a course or two on programming?
                Or perhaps you already know what you want to build, but found the official documentation a bit terse?
                You want to try your hand at the Riot API challenge, but you're having trouble calling the API?
              </p>

              <p>This is the guide for you.</p>

              <p>
                That said, if you are completely new to programming, even this guide may pose a challenge.
                However I would encourage you to try, as every program every written was once just the desire of a would-be programmer, who they themselves set forth to learn just the same.  We won't teach you how to program from scratch, although there is a lengthy list of <A href='/resources'>Resources</A> available in the appendix if you need primers on the programming concepts and languages discussed here.
              </p>

              <h4>Structure</h4>

              <h4>Languages</h4>

              <p>
                This guide provides examples in ruby, java, nodejs, python, and php.
                Calls against the Riot API also have command-line examples using cURL.
              </p>

              <h5>Why no javascript?</h5>
              <p>
                Javascript is client-side only.
                If you were to embed your secret API key and serve it in a web browser to the public, your key wouldn't be secret anymore!
                If you really love javascript, you can still use it for your front end and UI, but also create a non-isomorphic javascript-powered website that calls a nodejs webservice for all Riot API activities, thereby securing your key.
                This guide can get you started on the latter.
              </p>


              <h4>Community libraries</h4>

              <h5>Why use a library?</h5>

              <p>
                There are pros and cons to using a library, which mostly revolves around programmers&rsquo; love and hate to <A href="https://sourcemaking.com/antipatterns/reinvent-the-wheel">reinvent the wheel</A>.
              </p>

              <p>
                Using a library means you don't have to "invent" another way to call the API, process the JSON output, and return something useful.
                On the other hand, you'll need to read the library's documentation carefully, and you will be dependent on said library to some extent when it comes to capabilities and updates.
              </p>

              <p>
                Most of Riot's API is not so complicated that it requires a heavy investment in programming to build your own functions.
                Also, if your project is small, you are unlikely to require more than a handful of endpoints.
                Doing it yourself will also give you a better understanding of the Riot API and the various JSON payloads, at the expensive of having to figure out the details of the Riot API and its various JSON payloads.
                Luckily for you, we will walk through the most common endpoints in the Guides sections using both natively and using libraries, and you can choose the method that best suits your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
      <PageFooter />
    </div>
  );
};

export default IntroductionPage;
