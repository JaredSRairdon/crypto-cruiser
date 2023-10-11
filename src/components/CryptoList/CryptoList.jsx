import React, { useState, useEffect, useContext } from 'react';
import { CryptoContext } from '../../contexts/CryptoContext';

function CryptoList() {
    const [cryptoData, setCryptoData] = useState({});
    const [cryptoDataLoading, setCryptoDataLoading] = useState(true);
    // const { cryptoData, cryptoDataLoading } = useContext(CryptoContext);

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

    // useEffect hook for fetching cryptoData from CoinGecko API on context mount
    useEffect(() => {
        console.log("Fetching crypto data...")
        setCryptoData({});
        fetchCryptoData()
            .then(() => {
                setCryptoDataLoading(false);
            })
            .catch((error) => {
                setCryptoDataLoading(false);
            });

    }, []);

    // format number to US dollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    if (cryptoDataLoading) { 
        return <div>Loading...</div>
    } else if (!cryptoDataLoading) {
        if (Object.keys(cryptoData).length > 0) { // If cryptoData is not empty
            const maxItemsToShow = 8;
            const cryptoListItems = cryptoData.slice(0, maxItemsToShow).map((crypto) => (
                <div key={crypto.id} className="crypto-list-item">
                    <img src={crypto.image} alt={crypto.name} className='item-image'/>
                    <p className='item-name'>{crypto.name}</p>
                    <p className='item-price'>Price: {USDollar.format(crypto.current_price)}</p>
                    <p className='item-change'>Change: {crypto.price_change_percentage_24h.toFixed(2)}%</p>
                </div>
            ));

            return (
                <div className='crypto-list-container'>{cryptoListItems}</div>
            );
        }
    }
}

export default CryptoList;


// Takes in an array of data containing info about top cryptocurrencies
// Maps the data into a dynamic list, where each row is a cryptocurrency's stats
// Data provided by CoinGecko - https://api.coingecko.com/api/v3/

// API Link for cryptoData
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd

// API Link for trendingCrypto
// https://api.coingecko.com/api/v3/search/trending