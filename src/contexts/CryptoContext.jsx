import React, { createContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
    const [cryptoData, setCryptoData] = useState({});
    const [trendingCrypto, setTrendingCrypto] = useState({});

    const app = initializeApp({
        apiKey: "AIzaSyDjYUKzRj1FeInoS6UNs7i3ThyFnR9R3Hw",
        authDomain: "crypto-cruiser.firebaseapp.com",
        projectId: "crypto-cruiser",
        storageBucket: "crypto-cruiser.appspot.com",
        messagingSenderId: "724621495083",
        appId: "1:724621495083:web:4ce8d15f3c15060129136e",
        measurementId: "G-BEFY1LFC3S"
    });
    
    const db = getFirestore(app);
    const auth = getAuth();
    const [user] = useAuthState(auth);

    // Calling CoinGeck API for grabbing CryptoData
    const fetchCryptoData = () => {
        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Handle the data from the API
            setCryptoData(data);
            console.log(data);
        })
        .catch((error) => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    const fetchTrendingCrypto = () => {
        return fetch('https://api.coingecko.com/api/v3/search/trending')
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then((data) => {
            // Handle the data from the API
            setTrendingCrypto(data);
        })
        .catch((error) => {
            // Handle errors
            console.error('There was a problem with the fetch operation:', error);
        });
    }

    // useEffect hook for fetching cryptoData from CoinGecko API
    useEffect(() => {
        setCryptoData({});
        fetchCryptoData();
    }, []);

    // Provides the game state and actions to consuming components
    const contextValue = {
        cryptoData,
        setCryptoData,
        trendingCrypto,
        setTrendingCrypto,
        fetchTrendingCrypto,
        user,
        auth,
        app,
        db
    };

    return (
        <CryptoContext.Provider value={contextValue}>
            {children}
        </CryptoContext.Provider>
    );
}

export { CryptoContext, CryptoContextProvider };