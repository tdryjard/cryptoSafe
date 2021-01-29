import React, { Component, Fragment } from 'react';
import About from '../components/about/about';
import Features from '../components/features/features';
import Projects from '../components/projects/projects';
import Steps from '../components/steps/steps';
import Roadmap from '../components/roadMap/roadmap';
import Tokens from '../components/token/tokens';
import PressMedia from '../components/pressmedia/pressmedia';
import Subscribe from '../components/subscribe/subscribe';
import MainSlider from '../components/mainSlider/mainSlider';
import Currency from '../components/currency/currency';
import Teams from '../components/team/team';
import Blogs from '../components/blog/blog';

class HomePage extends Component {
  render() {
    return (
      <Fragment>
        <div className="wd_scroll_wrap">
          <MainSlider />
          <Currency />
        </div>
        <About fill="#1f58b1" />
        <Features />
        <Projects />
        <Steps fill="#1f58b1" />
        <Roadmap fill="#1f58b1" />
        <div className="wd_scroll_wrap">
          <Teams fill="#1f58b1" />
        </div>
      </Fragment>
    );
  }
}

export default HomePage;