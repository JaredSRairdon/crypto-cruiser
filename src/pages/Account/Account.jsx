import React, { useContext } from 'react'
import { CryptoContext } from '../../contexts/CryptoContext';
import SignIn from '../../components/SignIn/SignIn'
import './Account.css'


function Account() {
  const { user, auth, db } = useContext(CryptoContext);

  if (user) { // if user is signed in
    return (
      <div>{user.displayName}</div>
    )
  } else return (
    <>
      <div>Not signed in!</div>
      <SignIn/>
    </>
  )
  
}

export default Account