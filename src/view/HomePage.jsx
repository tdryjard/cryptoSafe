import React, { Component, Fragment } from 'react';
import About from '../components/about/about';
import Features from '../components/features/features';
import Projects from '../components/projects/projects';
import {Steps} from '../components/steps/steps';
import MainSlider from '../components/mainSlider/mainSlider';
import Currency from '../components/currency/currency';
import Teams from '../components/team/team';
import Blogs from '../components/blog/blog';
import RoadMap from '../components/roadMap/roadmap'

const HomePage = () => {
    return (
      <>
        <div className="wd_scroll_wrap">
          <MainSlider />
          <Currency />
        <Steps fill="#1f58b1" />
        </div>
        <About fill="#1f58b1" />
        <Features />
        <Projects />
        <RoadMap/>
        <div className="wd_scroll_wrap">
          <Teams fill="#1f58b1" />
        </div>
      </>
    );
  }

export default HomePage;