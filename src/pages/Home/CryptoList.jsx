import React, { useState, useEffect } from 'react';

function CryptoList() {
    const [cryptoData, setCryptoData] = useState({});

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

    return (
        <div className='crypto-list-container'>Crypto List</div>
    );

}

export default CryptoList;


// Takes in an array of data containing info about top cryptocurrencies
// Maps the data into a dynamic list, where each row is a cryptocurrency's stats
// Data provided by CoinGecko - https://api.coingecko.com/api/v3/