import React, { createContext, useEffect, useState } from 'react';

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
    const [cryptoData, setCryptoData] = useState([]);
    const [cryptoDataLoading, setCryptoDataLoading] = useState(true);
    const [trendingCrypto, setTrendingCrypto] = useState({});
    const [trendingCryptoLoading, setTrendingCryptoLoading] = useState(true);

    // function to call CoinGecko API for crypto data
    const fetchCryptoData = async () => {
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

    const fetchTrendingCrypto = async () => {
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

    // useEffect hook for fetching cryptoData from CoinGecko API on context mount
    useEffect(() => {
        console.log("Fetching crypto data...")
        setCryptoData([]);
        fetchCryptoData()
            .then(() => {
                setCryptoDataLoading(false);
            })
            .catch((error) => {
                setCryptoDataLoading(false);
            });

    }, []);

    useEffect(() => {
        console.log("Fetching trending crypto...")
        setTrendingCrypto([]);
        fetchTrendingCrypto()
            .then(() => {
                setTrendingCryptoLoading(false);
            })
            .catch((error) => {
                setTrendingCryptoLoading(false);
            });
    }, []);

    // Provides the game state and actions to consuming components
    const contextValue = {
        cryptoData,
        setCryptoData,
        fetchCryptoData,
        cryptoDataLoading,
        setCryptoDataLoading,
        trendingCrypto,
        setTrendingCrypto,
        fetchTrendingCrypto,
        trendingCryptoLoading
    };

    return (
        <CryptoContext.Provider value={contextValue}>
            {children}
        </CryptoContext.Provider>
    );
}

export { CryptoContext, CryptoContextProvider };