import React, { useState, useEffect, useContext } from 'react';
import { CryptoContext } from '../../contexts/CryptoContext';
import PrevNextButtons from './PrevNextButtons';
import './CryptoList.css'

function CryptoList() {
    const [cryptoData, setCryptoData] = useState({});
    const [cryptoDataLoading, setCryptoDataLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);



    // format number to US dollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    function abbreviateNumber(value) {
        let newValue = value;
        if (value >= 1e12) { // Trillion
            newValue = (value / 1e12).toFixed(1) + "T";
        } else if (value >= 1e9) { // Billion
            newValue = (value / 1e9).toFixed(1) + "B";
        } else if (value >= 1e6) { // Million
            newValue = (value / 1e6).toFixed(1) + "M";
        }
        return newValue;
    }

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

    const itemsPerPage = 10;
    const totalPages = Math.ceil(cryptoData.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    if (cryptoDataLoading) { 
        return <div>Loading...</div>
    } else if (!cryptoDataLoading) {
        if (Object.keys(cryptoData).length > 0) { // If cryptoData is not empty   
            const cryptoListItems = cryptoData.slice(startIndex, endIndex).map((crypto) => (
                <div key={crypto.id} className="crypto-list-item">
                    <div className="ticker-container">
                        <img src={crypto.image} alt={crypto.name} className='item-image'/>
                        <div className='ticker'>
                            <h2 className="item-symbol">{crypto.symbol.toUpperCase()}</h2>
                            <h4 className='item-name'>{crypto.name}</h4>
                        </div>
                    </div>
                    <div className="item-data-container">
                        <div className="item-data">
                            <label>Current Price</label>
                            <p>{USDollar.format(crypto.current_price)}</p>
                        </div>
                        <div className="item-data">
                            <label>24Hr Change</label>
                            <p>{crypto.price_change_percentage_24h.toFixed(2)}%</p>
                        </div>
                        <div className="item-data">
                            <label>Market Cap</label>
                            <p>{abbreviateNumber(crypto.market_cap)}</p>
                        </div>
                    </div>
                    <div className="button-wrapper">
                        <button className='crypto-list-button' id='add-to-watchlist'>Add to Watchlist</button>
                        <button className="crypto-list-button" id='details'>Details</button>
                    </div>
                </div>
            ));         
            return (
                <>
                    <div className='crypto-list-container'>
                        <div className="crypto-list-header">
                            <h2>Top 100 Crypto</h2>
                            <PrevNextButtons
                                cryptoData={cryptoData}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                totalPages={totalPages}
                            />
                        </div>
                        {cryptoListItems}
                    </div>
                </>
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