import React, { useState, useContext } from 'react';
import { CryptoContext } from '../../contexts/CryptoContext';
import { useNavigate } from 'react-router-dom'
import PrevNextButtons from './PrevNextButtons';
import PageNumbers from './PageNumbers';
import './CryptoList.css'

function CryptoList() {
    const { cryptoData, cryptoDataLoading } = useContext(CryptoContext);
    const [currentPage, setCurrentPage] = useState(1);

    const navigate = useNavigate();

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
                        {/* <button className='crypto-list-button' id='add-to-watchlist'>Add to Watchlist</button> */}
                        <button className="crypto-list-button" id='details'onClick={() => navigate(`/crypto/${crypto.id}`)} >Details</button>
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
                        <div className="crypto-list-items">
                            {cryptoListItems}
                        </div>
                        <PageNumbers
                            cryptoData={cryptoData}
                            setCurrentPage={setCurrentPage}
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
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