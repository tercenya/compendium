import React from 'react';

import CodeExample from './CodeExample';
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
              <h4 className='lead'>
                Compendium is a neophyte's guide to the Riot Games API for League of Legends.
              </h4>
              <p>
                Although Riot provides a <A href='https://developer.riotgames.com/docs/getting-started'>Getting Started</A> page, many newcomers opine their struggles on the forums when starting out.
                There's a lot you can do with the Riot API, and a bit you need to know before hand... one page just can't quite cover everything you need to know to get started.
                Compendium is a step-by-step walkthrough to get you going.
              </p>

              <h4 className='lead'>
                Compendium targets the novice programmer.
              </h4>
              <p>
                Perhaps you have taken a course or two on programming?
                Or perhaps you already know what you want to build, but found the official documentation a bit terse?
                You want to try your hand at the Riot API challenge, but you're having trouble getting off the ground?
                This is the guide for you.
              </p>
              <p>
                If you are completely new to programming, even this guide may pose a challenge.
                However, I would encourge you to try, as every program every written was once just the desire of a would-be programmer, who they themselves had to set forth and learn, just the same.
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
