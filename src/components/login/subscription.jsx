import React, {useState} from 'react'

const Subscription = ({setSub, setPayment, setEmailSub, setPassWordSub, passwordSub, emailSub}) => {
    const [error, setError] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')


    return(
        <>
            <h4 className="titleLogin">Inscription</h4>
            {error &&
            <p style={{fontSize: '18px', color: 'red'}}>{error}</p> }
            <input onChange={(e) => setEmailSub(e.target.value)} className="input" placeholder="email"/>
            <input type="password" style={{marginTop: '25px'}} onChange={(e) => setPassWordSub(e.target.value)} className="input" placeholder="mot de passe"/>
            <input type="password" style={{marginTop: '25px'}} onChange={(e) => setPasswordRepeat(e.target.value)} className="input" placeholder="répéter mot de passe"/>
            <button onClick={() => { 
                if(passwordSub !== passwordRepeat) setError('Les deux mots de passe ne sont pas identiques')
                else if(!passwordSub) setError('Veuillez entrer un mot de passe svp')
                else if(!emailSub) setError('Veuillez entrer votre email svp')
                else{
                    setSub(false)
                    setPayment(true)
                }}} style={{marginTop: '20px', marginBottom: '20px'}} className="btn1">S'inscire</button>
            <button onClick={() => setSub(false)} className="btn1">Se connecter</button>
        </>
    )
}

export default Subscription