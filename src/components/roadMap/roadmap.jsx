import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import video2 from '../../assets/images/video/2.png';
import video3 from '../../assets/images/video/3.png';
import video4 from '../../assets/images/video/4.png';
import video5 from '../../assets/images/video/5.png';
import video9 from '../../assets/images/video/9.png';


const Roadmap = () => {

    let titleAni = (
      <h2>Développement de la plateforme CryptoSafe<br />(Road Map)</h2>
    )
    return (
      <div id="road_map" className="wd_scroll_wrap wd_scroll">
        <section className="video-area section">
          <Container>
            <Row>
              <Col lg={12} md={12} sm={12} className="col-xs-12">
                <div className="videos-heding">
                  {titleAni}
                </div>
              </Col>
            </Row>
          </Container>
        </section>
        <div className="wd_scroll_wrap">
          <section className="video-des">
            <Container>
              <Row>
                <Col lg={12} md={12} sm={12} className="col-xs-12">
                  <div className="deslidt">
                  <ul>
        <li>
          <span className="years"><span className="con">2016</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video2} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <h3>Idée</h3>
                      <p>(Septembre - Octobre)</p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <h3>Étude de marché</h3>
                      <p>(Octobre - Decembre)</p>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video3} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years"><span className="con">2017</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video3} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(1Q 2017)</p>
                      <h3>
Formation du business plan de l'équipe fondatrice</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <p>(2Q 2017)</p>
                      <h3>Début de la<br/> plateforme<br/>Développement</h3>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video4} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video5} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(3Q 2017)</p>
                      <h3>WhitePaper<br /> Page d'accueil</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <p>(4Q 2017)</p>
                      <h3>Développement<br/> Intelligence <br/>artificielle</h3>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video5} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
        <li>
          <span className="years"><span className="con">2018</span></span>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={6} className="col-xs-12 left-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video5} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(2018)</p>
                      <h3>Développement<br/> Intelligence <br/>artificielle</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col sm={6} className="col-xs-12 right-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="content">
                      <p>(2019)</p>
                      <h3>Développement<br/> Intelligence <br/>artificielle</h3>
                    </div>
                  </div>
                  <div className="dright">
                    <div className="imgs"><img src={video5} alt="video" /></div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
          <div className="serials">
            <span className="cre"></span>
            <Col sm={12} className="col-xs-12 center-con">
              <div className="box-con">
                <div className="dbox">
                  <div className="dleft">
                    <div className="imgs"><img src={video9} alt="video" /></div>
                  </div>
                  <div className="dright">
                    <div className="content">
                      <p>(2020)</p>
                      <h3>Pré-vente<br/>Plateforme de lancement</h3>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </div>
        </li>
      </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </section>
        </div>
      </div>
    );
  }

export default Roadmap