import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';


const Footer = () => {
  const date = new Date()
    return (
      <div className="wd_scroll_wrap">
        <footer className="foo-bot">
          <div className="footer-bottom">
            <Container>
              <Row>
                <Col lg={6} md={6} sm={12} className="col-xs-12">
                  <div className="copyright">
                    <p>© {date.getFullYear() - 1} - {date.getFullYear()} <Link to="#"><span>CryptoSafe</span></Link> | All rights reserved.</p>
                  </div>
                </Col>
                <Col lg={6} md={6} sm={12} className="col-xs-12">
                  <div className="foo-link">
                    <ul>
                    </ul>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </footer>
      </div>
    );
  }

export default Footer;