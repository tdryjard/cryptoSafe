import React, { Component, useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import {url} from '../../api/url'
import ReactWOW from 'react-wow';
import coin1 from '../../assets/images/icons/1.png';
import coin2 from '../../assets/images/icons/2.png';
import coin3 from '../../assets/images/icons/3.png';
import coin4 from '../../assets/images/icons/4.png';
import coin5 from '../../assets/images/icons/5.png';

const rand = (nb) => {
  return Math.random() < 0.5
}

const Currency = (props) => {
  const [previsions, setPrevisions] = useState({})

  useEffect(() => {
    fetch(`${url}/prevision/find`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => res.json())
    .then(res => {
      setPrevisions(res)
    })
  }, [])

  
    const data = [
      {
        coinName: 'Bitcoin (BTC)',
        price: previsions.prevision1,
        coin: 'BTC',
        image: coin1
      },
      {
        coinName: 'Ethereum (ETH)',
        price: previsions.prevision2,
        coin: 'ETH',
        image: coin2
      },
      {
        coinName: 'DASH',
        price: previsions.prevision3,
        coin: 'USD',
        image: coin3
      },
      {
        coinName: 'Litecoin (LTC)',
        price: previsions.prevision4,
        coin: 'USD',
        image: coin4
      },
      {
        coinName: 'Ripple (XRP)',
        price: previsions.prevision5,
        coin: '',
        image: coin5
      }
    ]


    const Items = ({ image, coinName, price, coin, dir }) => {
        return (
          <ReactWOW animation={props.animate} duration={`${dir + 0.7}s`}>
            <div className="rete-list bt_title">
              <div className="content cardCrypto">
                <div className="con">
                <p className="titleCardCrypto">Prévision</p>
                  <h2><img src={image} alt="" /><span>{coinName}</span></h2>
                  {localStorage.getItem('cryptoSafeUserId') && data.length > 0 ?
                    price ?
                    <button className="buyButton"/>
                    :
                    <button className="sellButton"/>
                  :
                  <div className="notConnectCrypto">VOUS DEVEZ ÊTRE CONNECTÉ</div> }
                </div>
              </div>
            </div>
          </ReactWOW>
        )
    }

    return (
      <section className="currency-area">
        <div id="previsionSection" className="sectionTitle">LES PRÉVISIONS JOURNALIÈRES</div>
        <Container fluid>
          <Row>
            <Col lg={12} md={12} sm={12} className="col-xs-12">
              {
                data.map((obj, i) => (
                  <Items key={i} dir={(i + 1) * 0.3} image={obj.image} coin={obj.coin} coinName={obj.coinName} price={obj.price} />
                ))
              }
            </Col>
          </Row>
        </Container>
      </section>
    );
  }

export default Currency;