import React, { useContext } from 'react'
import { CryptoContext } from '../CryptoContext';

function SignOut() {
    const { user, auth } = useContext(CryptoContext);

    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

export default SignOut