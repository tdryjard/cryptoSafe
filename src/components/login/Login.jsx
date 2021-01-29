import React, {useState} from 'react'
import Subscription from './subscription'
import EspacePerso from './EspacePerso'
import Pricing from './pricing/Pricing'
import {url} from '../../api/url'
import './loginStyle.css'

const Login = () => {
    const [sub, setSub] = useState(true)
    const [payment, setPayment] = useState(false)
    const [goodPay, setGoodPay] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailSub, setEmailSub] = useState('')
    const [passWordSub, setPassWordSub] = useState('')

    const [error, setError] = useState('')

    const connect = async () => {
        if(!email) setError('Veuillez entrer votre email')
        else if(!password) setError('Veuillez entrer votre mot de passe')
        else {
        const resConnect = await fetch(`${url}/user/connect`, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        if(resConnect.status === 200){
            const resJson = await resConnect.json()
            localStorage.setItem('cryptoSafeUserId', resJson.id)
            localStorage.setItem('cryptoSafeUserEmail', email)
            window.location.reload()
        } else {
            setError('email ou mot de passe incorrect')
        }
    }
    }


    return(
        <div className="cardLogin">
            {(!localStorage.getItem('cryptoSafeUserId') || goodPay) ? (
            sub ?
                <Subscription setEmailSub={setEmailSub} setPassWordSub={setPassWordSub} passwordSub={passWordSub} setSub={setSub} setPayment={setPayment} emailSub={emailSub}/>
            : payment ?
                <Pricing emailSub={emailSub} passwordSub={passWordSub} setGoodPay={setGoodPay} />
            :
            <>
                <h4 className="titleLogin">Connexion</h4>
            {error && <p style={{color: 'red', fontSize: '16px'}}>{error}</p> }
                <input onChange={(e) => setEmail(e.target.value)} className="input" placeholder="email"/>
                <input type="password" style={{marginTop: '25px'}} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="mot de passe"/>
            <button onClick={connect} style={{marginTop: '20px', marginBottom: '20px'}} className="btn1">Se connecter</button>
            <button onClick={() => setSub(true)} className="btn1">S'inscrire</button>
            </>
            )
            :
                <EspacePerso/>}
        </div>
    )
}

export default Login