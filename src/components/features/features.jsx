import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactWOW from 'react-wow';
import features1 from '../../assets/images/features/1.svg';
import features2 from '../../assets/images/features/2.svg';
import features3 from '../../assets/images/features/3.svg';
import features4 from '../../assets/images/features/4.png';


class Features extends Component {
  render() {
    let con = (
      <Container>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="section-heading2">
              <h2>Nos avantages</h2>
            </div>
          </Col>
        </Row>
        <Row>
          <Col lg={12} md={12} sm={12} className="col-xs-12">
            <div className="featured-lists">

            <ul>
                <li>
                  <Col style={{marginTop: '40px'}} className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>78% de prédictions correctes</h2>
                      <p>L'IA CryptoSafe a comptabilisé en moyenne 78% de prédictions corrects depuis 2018.<br />Ce qui est un taux record dans le domaine du trading.</p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img style={{width: '300px', height: 'auto'}} src={features1} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>78% de prédictions correctes</h2>
                      <p>L'IA CryptoSafe a comptabilisé en moyenne 78% de prédictions corrects depuis 2018.<br />Ce qui est un taux record dans le domaine du trading.</p>
                    </div>
                  </Col>
                </li>
                <li className="rl">
                  <Col style={{marginTop: '40px'}} className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                    <div className="contents-r">
                      <h2>Une accessibilité exemplaire</h2>
                      <p>Se faire de l'argent avec CryptoSafe est un jeu d'enfant. <br />Il faut simplement checker chaque jour les prédictions publiées en page d'accueil puis de les répliquer sur une application de trading comme par exemple Etoro.</p>
                      <a href="#steps" className="btn1">Voir le shéma d'utilisation</a>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-r">
                      <figure><img style={{width: '300px', height: 'auto'}} src={features2} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Une accessibilité exemplaire</h2>
                      <p>Se faire de l'argent avec CryptoSafe est un jeu d'enfant. <br />Il faut simplement checker chaque jour les prédictions publiées en page d'accueil puis de les répliquer sur une application de trading comme par exemple Etoro.</p>
                      <a href="#steps" className="btn1">Voir le shéma d'utilisation</a>
                    </div>
                  </Col>
                </li>
                <li>
                  <Col style={{marginTop: '40px'}} className="pd-0 hidden-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Des prédictions calculées la veille</h2>
                      <p>Le traitement des données pour les prédictions est réalisé chaque nuit lorsque la plupart des échanges sont fermés. <br /> Puis ils sont publiés chaque jour à 6h (heure de Paris) en page d'accueil de notre site web.</p>
                    </div>
                  </Col>
                  <Col className="pd-0" sm={6}>
                    <div className="imgs-l">
                      <figure><img style={{width: '300px', height: 'auto'}} src={features3} alt="" /></figure>
                    </div>
                  </Col>
                  <Col className="pd-0 visible-xs" sm={6}>
                    <div className="contents-l mr-b30">
                      <h2>Des prédictions calculées la veille</h2>
                      <p>Le traitement des données pour les prédictions est réalisé chaque nuit lorsque la plupart des échanges sont fermés. <br /> Puis ils sont publiés chaque jour à 6h (heure de Paris) en page d'accueil de notre site web.</p>
                    </div>
                  </Col>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </Container>
    )
    if (this.props.animate) {
      con = (
        <Container>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="section-heading2">
                <ReactWOW animation={this.props.animate} duration="1s">
                  <h2>Our Features</h2>
                </ReactWOW>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              <div className="featured-lists">
                <ul>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br />and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features1} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Lending</h2>
                          <p>Unique platform for lending and investment with a safety fund <br /> and cooperation with world-wide arbitration.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks. <br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features2} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.6s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Exchange Money</h2>
                          <p>Exchange between all popular currencies with a couple of clicks.<br />Instant send from one currency to another.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 hidden-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-l">
                          <figure><img src={features3} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="1.9s">
                      <Col className="pd-0 visible-xs" sm={6}>
                        <div className="contents-l mr-b30">
                          <h2>Investment</h2>
                          <p>Improved system of borrower's verification. Providing <br />verification services for other services.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                  <li className="rl">
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 hidden-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0" sm={6}>
                        <div className="imgs-r">
                          <figure><img src={features4} alt="" /></figure>
                        </div>
                      </Col>
                    </ReactWOW>
                    <ReactWOW animation={this.props.animate} duration="2.1s">
                      <Col className="pd-0 floatright mr-b30 visible-xs" sm={6}>
                        <div className="contents-r">
                          <h2>Online Wallet</h2>
                          <p>Keep your money, exchange your money, invest your money, pay  <br />services and make purchases.</p>
                          <Link to="#" className="btn1">read more</Link>
                        </div>
                      </Col>
                    </ReactWOW>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      )
    }

    return (
      <div id="features" className="wd_scroll_wrap wd_scroll">
        <section className="features-area section">
          {con}
        </section>
      </div>
    );
  }
}

export default Features;