import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import team1 from '../../assets/images/team/1.jpg';
import team2 from '../../assets/images/team/2.jpg';
import team3 from '../../assets/images/team/3.jpg';
import team4 from '../../assets/images/team/4.jpg';
import team5 from '../../assets/images/team/5.jpg';
import team6 from '../../assets/images/team/6.jpg';
import team7 from '../../assets/images/team/7.jpg';
import team8 from '../../assets/images/team/8.jpg';


class Teams extends Component {
  render() {
    const coreTeam = [
      {
        meamber: 'Byron Cadieux',
        position: 'Co-Founder & CEO',
        image: team1
      },
      {
        meamber: 'Huan Gaudreau',
        position: 'Co-Founder & CEO',
        image: team2,
      },
      {
        meamber: 'Susanne Belisle',
        position: 'Lead développeur',
        image: team3,
      },
      {
        meamber: 'Daniel Levasseur',
        position: 'Data annalyst',
        image: team4,
      },
    ]

    const advisorsTeam = [
      {
        meamber: 'Charle Mercier',
        position: 'Spécialiste cryptomonaie',
        image: team5,
      },
      {
        meamber: 'Philippe Artois',
        position: 'Tradeur professionnel',
        image: team6,
      },
      {
        meamber: 'Iva Lussier',
        position: 'Conseillère en gestion financière',
        image: team7,
      },
      {
        meamber: 'Laurene Bernard',
        position: 'Responsable service client',
        image: team8,
      },
    ]

    const Items = ({ meamber, position, image, text, dur }) => {
      if (this.props.animate) {
        return (
          <ReactWOW animation={this.props.animate} duration={`${dur + 1}s`}>
            <Col lg={6} md={6} sm={6} className="col-xs-12">
              <div className="team-list">
                <div className="conte">
                  <div className="dbox">
                    <div className="dleft">
                      <img style={{borderRadius: '5px', height: '130px', width: 'auto'}} src={image} alt="team member" />
                    </div>
                    <div className="dright">
                      <div className="content">
                        <h3>{meamber}</h3>
                        <span>({position})</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </ReactWOW>
        )
      } else {
        return (
          <Col lg={6} md={6} sm={6} className="col-xs-12">
            <div className="team-list">
              <div className="conte">
                <div className="dbox">
                  <div className="dleft">
                    <img style={{borderRadius: '5px', height: '130px', width: 'auto'}} src={image} alt="team member" />
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>{meamber}</h3>
                      <span>({position})</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        )
      }
    }

    return (
      <React.Fragment>
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill:  this.props.fill ? this.props.fill : '#10122d'}} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
              </g>
            </svg>
        </div>
        <section id="teamSection" className="team-area pd-t100 pd-b50">
          <div className="particles-team">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="section-heading2">
                    {
                      this.props.animate ?
                        (
                          <ReactWOW animation={this.props.animate} duration="1s">
                            <h2>Équipe CryptoSafe</h2>
                          </ReactWOW>
                        ) : (
                          <h2>Équipe CryptoSafe</h2>
                        )
                    }
                  </div>
                </Col>
              </Row>
              <Row>
                {
                  coreTeam.map((obj, i) => (
                    <Items key={i} dur={(i + 1) * 0.3} meamber={obj.meamber} position={obj.position} image={obj.image} text={obj.text} />
                  ))
                }
              </Row>
            </Container>
          </div>
        </section>
        <section className="team2-area pd-t100 pd-b50">
          <div className="particles-team">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="section-heading2">
                    {
                      this.props.animate ?
                        (
                          <ReactWOW animation={this.props.animate} duration="1s">
                            <h2>Nos conseillers</h2>
                          </ReactWOW>
                        ) : (
                          <h2>Nos conseillers</h2>
                        )
                    }
                  </div>
                </Col>
              </Row>
              <Row>
                {
                  advisorsTeam.map((obj, i) => (
                    <Items key={i} dur={(i + 1) * 0.3} meamber={obj.meamber} position={obj.position} image={obj.image} text={obj.text} />
                  ))
                }
              </Row>
            </Container>
          </div>
        </section>
        <div className="sud">
          <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1920 181.1" style={{enableBackground:"new 0 0 1920 181.1"}} space="preserve">
              <g>
                  <path style={{fillRule:'evenodd',clipRule:'evenodd',fill: this.props.fill ? this.props.fill : '#10122d'}} className="st0" d="M0,80c0,0,28.9-4.2,43-13c14.3-9,71-35.7,137,5c17.3,7.7,33.3,13,48,11c17.3,0.3,50.3,4.7,66,23
                    c20.3,9.7,68,40.3,134-12c24-11,59-16.3,104,2c21,7.3,85,27.7,117-14c24-30.7,62.7-55,141-12c26,10.3,72,14.7,110-14
                    c37.7-19,89.7-29,122,53c23,32.7,47.7,66.3,97,26c24-22.7,51-78.3,137-38c0,0,28.3,15.7,52,15c23.7-0.7,50.7,4.3,76,41
                    c19.7,19.7,71,36.7,121-2c0,0,22.3-16,55-12c0,0,32.7,6.7,56-71c23.3-76,79-92,122-29c9.3,13.7,25,42,62,43c37,1,51.7,25.3,67,48
                    c15.3,22.7,51,22.7,53,23v28.1H0V80z" />
              </g>
          </svg>
        </div>
      </React.Fragment>
    );
  }
}

export default Teams;