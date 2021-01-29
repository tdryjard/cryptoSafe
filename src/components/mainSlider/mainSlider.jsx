import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Slider from 'react-animated-slider';
import Particles from 'react-particles-js';
import about from '../../assets/images/about/1a.svg';


class MainSlider extends Component {
  render() {
    const data = [
      {
        title: "L'AI n°1 en anticipation du cours des crypto-monnaies",
        btn1: 'EN SAVOIR PLUS',
        btn2: 'COMMENT INVESTIR'
      },
      {
        title: "+78% de prévisions gagnantes depuis 2019",
        btn1: 'EN SAVOIR PLUS',
        btn2: 'COMMENT INVESTIR'
      },
      {
        title: "Déja plus de 15 000 utilisateurs rentables",
        btn1: 'EN SAVOIR PLUS',
        btn2: 'COMMENT INVESTIR'
      },
    ]
    const Items = data.map((obj, i) => (
      <div className="item" key={i}>
        <Container>
          <Row>
            <Col lg={6} md={6} sm={12} className="col-xs-12">
              <div className="slider-content">
                <h2>{obj.title}</h2>
                <div className="buttons">
                  <a style={{textAlign: 'center', fontWeight: 'bold', marginBottom: '30px'}} href="#previsionSection" className="btn1" >{obj.btn1}</a>
                  <a style={{textAlign: 'center', fontWeight: 'bold', marginLeft: '0px'}} href="#steps" className="btn1" >{obj.btn2}</a>
                </div>
              </div>
            </Col>
            <Col lg={6} md={6} sm={12} className="col-xs-12 hidden-xs hidden-sm">
              <div className="btc_slider_about_img"  >
                <img id="about1a" src={about} alt="about_img" />
              </div>
            </Col>
          </Row>
        </Container>
      </div >
    ))
    return (
      <div className="slider-area">
        <Particles
          style={{ width: window.innerWidth + 'px', height: window.innerHeight + 'px',background: '#0d469f' }}
          params={{
            "particles": {
              "number": {
                "value": 70
              },
              "size": {
                "value": 5
              }
            },
            "interactivity": {
              "events": {
                "onhover": {
                  "enable": false,
                  "mode": "repulse"
                }
              }
            }
          }} />
        <div className="carousel">
          <Slider autoplay duration={6000} >
            {Items}
          </Slider>
        </div>

      </div>
    );
  }
}

export default MainSlider;