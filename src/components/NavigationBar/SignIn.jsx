import React, { useContext } from 'react'
import { CryptoContext } from '../CryptoContext';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

function SignIn() {
    const { user, auth, db } = useContext(CryptoContext);

    const signInWithGoogle = () => {
        const provider = new GoogleAuthProvider();
        
        signInWithPopup(auth, provider)
            .then(async (result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                // IdP data available using getAdditionalUserInfo(result)
                // ...
                console.log(user);
                await setDoc(doc(db, 'users', user.uid), {
                  displayName: user.displayName,
                  email: user.email,
                  favorites: [{ 
                    createdAt: "10:26:00 PM CST",
                    name: "Ethereum",
                    symbol: "ETH"
                  },
                  {
                    createdAt: "10:28:00 PM CST",
                    name: "Bitcoiiiin",
                    symbol: "BTC"
                }],
                  photoURL: "imgur.com"
                });
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                // const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });
        
        


    }

  return (
    <button onClick={signInWithGoogle}>Sign in with Google</button>
  )
}

export default SignIn