import React, {useState} from 'react'
import {url} from '../../api/url'
import {Redirect, Link} from 'react-router-dom'

const EspacePerso = () => {
    const [redirect, setRedirect] = useState(false)
    const [desub, setDesub] = useState(false)



  async function cancelSubscription1() {
      const userId = localStorage.getItem('cryptoSafeUserId')
    const resSubId = await fetch(`${url}/user/find/${userId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    const subId = await resSubId.json()
    const resCancel = await fetch(`${url}/cancel-subscription`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subscriptionId: subId.customer_id,
      }),
    })
      .then(response => {
        return response.json();
      })
      .then(cancelSubscriptionResponse => {
        // Display to the user that the subscription has been cancelled.
      });
    const res = await fetch(`${url}/user/delete/${userId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res) {
        localStorage.setItem('cryptoSafeUserId', '')
        localStorage.setItem('cryptoSafeUserEmail', '')
      window.location.reload()
    }
  }


    return(
        <>
        {!desub ?
        <>
        {redirect && <Redirect to='/'/> }
        <h4 style={{marginBottom: '30px'}} className="titleLogin">Hello on CryptoSafe !</h4>
        <h4 style={{fontWeight: '400', fontSize: '15px', marginTop: '0px'}} className="titleLogin">{localStorage.getItem('cryptoSafeUserEmail')}</h4>
        <h4 style={{fontWeight: '400', fontSize: '18px', marginTop: '30px'}} className="titleLogin">Voir les prévisions CryptoSafe des crypto-monnaies du jour</h4>
            <button style={{marginTop: '15px', marginBottom: '15px', height: '65px'}} onClick={() => setRedirect(true)} className="btn1">Voir les prévisions</button>
            <button style={{marginTop: '85px', marginBottom: '5px'}} onClick={() => {
                localStorage.setItem('cryptoSafeUserId', '')
                localStorage.setItem('cryptoSafeUserEmail', '')
                window.location.reload()
                setTimeout(() => {
                    setRedirect(true)
                }, 200)
            }} className="btn1">Se déconnecter</button>
            <button style={{marginTop: '15px', marginBottom: '15px'}} onClick={() => setDesub(true)} className="btn1">Se désabonner</button>
        </>
        :
        <>
        {redirect && <Redirect to='/'/> }
        <h4 style={{marginBottom: '50px'}} className="titleLogin">Êtes vous sûr de vouloir vous désabonner ?</h4>
        <h4 style={{fontWeight: '400', fontSize: '16px', marginBottom: '30px', marginTop: '0px'}} className="titleLogin">Votre compte actuel sera supprimé et vous n'aurez plus accès aux prévisions crypto-monnaies<br/>
        Il peut arriver que certaines semaines soient moins bonnes que d'autres, il n'y a que le temps qui vous sépare de la rentabilité.</h4>
        <div style={{display: 'flex'}}>
            <button style={{marginLeft: '15px', marginRight: '15px'}} onClick={() => cancelSubscription1()} className="btn1">Oui</button>
            <button style={{marginLft: '15px', marginRight: '15px'}} onClick={() => setDesub(false)} className="btn1">Non</button>
            </div>
        </>}
        </>
    )
}

export default EspacePerso