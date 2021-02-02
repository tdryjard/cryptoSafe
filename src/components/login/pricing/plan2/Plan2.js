import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import CheckoutForm from './CheckoutForm'
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

const Plan2 = (props) => {
    const [active, setActive] = useState(false)
    const [userId, setUserId] = useState()
    const [token, setToken] = useState()
    const [type, setType] = useState()

    const stripePromise = loadStripe('pk_test_AGb35S7bWUgRgRUh3tsxgfrL00MDuBTKPS');

    useEffect(() => {
        if (localStorage.getItem('userId')) {
            setUserId(localStorage.getItem('userId'))
            setToken(localStorage.getItem('token'))
            setType(localStorage.getItem('type'))
        }
    }, [])

    useEffect(() => {
        if (localStorage.getItem('type')) setType(localStorage.getItem('type'))
    }, [])

    return (
        <>
            {!active ?
                <div className="contentPlan">
                    <h2 className="titlePlan2">ACCÈS ILLIMITÉ AUX NOUVELLES PRÉVISIONS DES COURS CRYPTO MONNAIE</h2>
                    <div className="pricePlan">29.00€/mois </div>
                    <div onClick={() => { setActive(true) }} className="buttonPricing2">
                                Souscrire <p style={{ fontSize: "15px", margin: "0px", marginTop: "5px" }}>Sans engagement</p>
                    </div>
                </div>
                :

                <Elements stripe={stripePromise}>
                    <CheckoutForm setGoodPay={props.setGoodPay} emailSub={props.emailSub} passwordSub={props.passwordSub} />
                </Elements>
            }
        </>
    );
};

export default Plan2