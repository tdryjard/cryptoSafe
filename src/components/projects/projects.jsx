import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactWOW from 'react-wow';
import icon6 from '../../assets/images/icons/6.png';
import icon7 from '../../assets/images/icons/7.png';
import icon8 from '../../assets/images/icons/8.png';
import icon9 from '../../assets/images/icons/9.png';
import icon10 from '../../assets/images/icons/10.png';
import icon11 from '../../assets/images/icons/11.png';

class Projects extends Component {
  render() {
    const data = [
      {
        image: icon6,
        title: ["Technologie", "Blockchain"]
      },
      {
        image: icon7,
        title: ["Securité Systeme", "avancé"]
      },
      {
        image: icon8,
        title: ["Multi", "Devise"]
      },
      {
        image: icon9,
        title: ["Annalyse", "Des échanges"]
      },
      {
        image: icon10,
        title: ["Prédictions", "Vérifiés"]
      },
      {
        image: icon11,
        title: ["Coopérations", "avec les meilleurs"]
      },
    ]

    const Items = ({ image, title, dur, animate }) => {
      if (animate) {
        return (
          <Col lg={4} md={4} sm={6} className="col-xs-12">
            <ReactWOW animation={animate} duration={`${(dur + 1) - 0.3}s`}>
              <div className="project-list">
                <div className="content">
                  <span className="icons"><img src={image} alt="project" /></span>
                  <h3>{title[0]} <br />{title[1]}</h3>
                </div>
              </div>
            </ReactWOW>
          </Col>
        )
      } else {
        return (
          <Col lg={4} md={4} sm={6} className="col-xs-12">
            <div className="project-list">
              <div className="content">
                <span className="icons"><img src={image} alt="project" /></span>
                <h3>{title[0]} <br />{title[1]}</h3>
              </div>
            </div>
          </Col>
        )
      }
    }

    return (
      <div id="project" className="wd_scroll_wrap wd_scroll">
        <section className="projects bg-img pd-t100 pd-b70">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12 text-center">
                <div className="section-heading">
                  <ReactWOW animation='fadeInUp' duration="1s">
                    <h2>Les points forts de l'IA CryptoSafe</h2>
                  </ReactWOW>
                </div>
              </Col>
            </Row>
            <Row>
              {
                data.map((obj, i) => (
                  <Items key={i} dur={(i + 1) * 0.3} image={obj.image} animate={this.props.animate} title={obj.title} />
                ))
              }
            </Row>
          </Container>
        </section>
      </div>
    );
  }
}

export default Projects;