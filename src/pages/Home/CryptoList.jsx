import React, { useState, useEffect } from 'react';

function CryptoList() {
    const [cryptoData, setCryptoData] = useState([
        {
            "id":"bitcoin",
            "symbol":"btc",
            "name":"Bitcoin",
            "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
            "current_price":26455,
            "market_cap":515514320109,
            "market_cap_rank":1,
            "fully_diluted_valuation":555547666995,
            "total_volume":10094062821,
            "high_24h":26654,
            "low_24h":26227,
            "price_change_24h":-146.78326031746474,
            "price_change_percentage_24h":-0.55179,
            "market_cap_change_24h":-2919464128.55365,
            "market_cap_change_percentage_24h":-0.56313,
            "circulating_supply":19486718.0,
            "total_supply":21000000.0,
            "max_supply":21000000.0,
            "ath":69045,
            "ath_change_percentage":-61.66947,
            "ath_date":"2021-11-10T14:24:11.849Z",
            "atl":67.81,
            "atl_change_percentage":38929.08022,
            "atl_date":"2013-07-06T00:00:00.000Z",
            "roi":null,
            "last_updated":"2023-09-15T21:31:34.963Z"
        },
        {
            "id":"ethereum",
            "symbol":"eth",
            "name":"Ethereum",
            "image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
            "current_price":1628.65,
            "market_cap":196015599243,
            "market_cap_rank":2,
            "fully_diluted_valuation":196015599243,
            "total_volume":6141676425,
            "high_24h":1635.73,
            "low_24h":1611.36,
            "price_change_24h":-0.18671667907983647,
            "price_change_percentage_24h":-0.01146,
            "market_cap_change_24h":143330787,
            "market_cap_change_percentage_24h":0.07318,
            "circulating_supply":120222835.02996,
            "total_supply":120222835.02996,
            "max_supply":null,
            "ath":4878.26,
            "ath_change_percentage":-66.57888,
            "ath_date":"2021-11-10T14:24:19.604Z",
            "atl":0.432979,
            "atl_change_percentage":376447.12924,
            "atl_date":"2015-10-20T00:00:00.000Z",
            "roi":{
                "times":81.30356196101523,
                "currency":"btc",
                "percentage":8130.356196101523
            },
            "last_updated":"2023-09-15T21:31:29.412Z"
        },
    ]);

    // useEffect(() => {
    //     fetch('https://api.coingecko.com/api/v3/coins/list')
    //         .then(response => {
    //             if (response.ok) {
    //                 setCryptoData(response.json());
    //             } else {
    //                 throw new Error('API request failed');
    //             }
    //         })
    //         .then(data => {
    //             console.log(data);
    //         })
    //         .catch(error => {
    //             console.error(error);
    //         });

    // }, []);

    // format number to US dollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // format number to British pounds
    let pounds = Intl.NumberFormat('en-GB', {
        style: 'currency',
        currency: 'GBP',
    });

    // format number to Indian rupee
    let rupee = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    });

    // format number to Euro
    let euro = Intl.NumberFormat('en-DE', {
        style: 'currency',
        currency: 'EUR',
    });

    const cryptoListItems = cryptoData.map((crypto) => (
        <div key={crypto.id} className="crypto-list-item">
          <img src={crypto.image} alt={crypto.name} />
          <p>{crypto.name}</p>
          <p>Price: {USDollar.format(crypto.current_price)}</p>
        </div>
    ));
      
    return (
        <div className='crypto-list-container'>{cryptoListItems}</div>
    );

}

export default CryptoList;


// Takes in an array of data containing info about top cryptocurrencies
// Maps the data into a dynamic list, where each row is a cryptocurrency's stats
// Data provided by CoinGecko - https://api.coingecko.com/api/v3/

// Sample Data
// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd
//
// [
//     {
//         "id":"bitcoin",
//         "symbol":"btc",
//         "name":"Bitcoin",
//         "image":"https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579",
//         "current_price":26455,
//         "market_cap":515514320109,
//         "market_cap_rank":1,
//         "fully_diluted_valuation":555547666995,
//         "total_volume":10094062821,
//         "high_24h":26654,
//         "low_24h":26227,
//         "price_change_24h":-146.78326031746474,
//         "price_change_percentage_24h":-0.55179,
//         "market_cap_change_24h":-2919464128.55365,
//         "market_cap_change_percentage_24h":-0.56313,
//         "circulating_supply":19486718.0,
//         "total_supply":21000000.0,
//         "max_supply":21000000.0,
//         "ath":69045,
//         "ath_change_percentage":-61.66947,
//         "ath_date":"2021-11-10T14:24:11.849Z",
//         "atl":67.81,
//         "atl_change_percentage":38929.08022,
//         "atl_date":"2013-07-06T00:00:00.000Z",
//         "roi":null,
//         "last_updated":"2023-09-15T21:31:34.963Z"
//     },
//     {
//         "id":"ethereum",
//         "symbol":"eth",
//         "name":"Ethereum",
//         "image":"https://assets.coingecko.com/coins/images/279/large/ethereum.png?1595348880",
//         "current_price":1628.65,
//         "market_cap":196015599243,
//         "market_cap_rank":2,
//         "fully_diluted_valuation":196015599243,
//         "total_volume":6141676425,
//         "high_24h":1635.73,
//         "low_24h":1611.36,
//         "price_change_24h":-0.18671667907983647,
//         "price_change_percentage_24h":-0.01146,
//         "market_cap_change_24h":143330787,
//         "market_cap_change_percentage_24h":0.07318,
//         "circulating_supply":120222835.02996,
//         "total_supply":120222835.02996,
//         "max_supply":null,
//         "ath":4878.26,
//         "ath_change_percentage":-66.57888,
//         "ath_date":"2021-11-10T14:24:19.604Z",
//         "atl":0.432979,
//         "atl_change_percentage":376447.12924,
//         "atl_date":"2015-10-20T00:00:00.000Z",
//         "roi":{
//             "times":81.30356196101523,
//             "currency":"btc",
//             "percentage":8130.356196101523
//         },
//         "last_updated":"2023-09-15T21:31:29.412Z"
//     },
// ]