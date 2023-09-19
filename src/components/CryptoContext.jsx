import React, { createContext, useState } from 'react';

const CryptoContext = createContext();

const CryptoContextProvider = ({ children }) => {
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

    const [trendingCoins, setTrendingCoins] = useState({
        "coins": [{"item":{"id":"matic-network","coin_id":4713,"name":"Polygon","symbol":"MATIC","market_cap_rank":14,"thumb":"https://assets.coingecko.com/coins/images/4713/thumb/matic-token-icon.png?1624446912","small":"https://assets.coingecko.com/coins/images/4713/small/matic-token-icon.png?1624446912","large":"https://assets.coingecko.com/coins/images/4713/large/matic-token-icon.png?1624446912","slug":"polygon","price_btc":1.992177633004226e-05,"score":0}},{"item":{"id":"bella-protocol","coin_id":12478,"name":"Bella Protocol","symbol":"BEL","market_cap_rank":465,"thumb":"https://assets.coingecko.com/coins/images/12478/thumb/Bella.png?1602230054","small":"https://assets.coingecko.com/coins/images/12478/small/Bella.png?1602230054","large":"https://assets.coingecko.com/coins/images/12478/large/Bella.png?1602230054","slug":"bella-protocol","price_btc":2.3175050005601288e-05,"score":1}},{"item":{"id":"trust-wallet-token","coin_id":11085,"name":"Trust Wallet","symbol":"TWT","market_cap_rank":100,"thumb":"https://assets.coingecko.com/coins/images/11085/thumb/Trust.png?1588062702","small":"https://assets.coingecko.com/coins/images/11085/small/Trust.png?1588062702","large":"https://assets.coingecko.com/coins/images/11085/large/Trust.png?1588062702","slug":"trust-wallet-token","price_btc":3.051364502407562e-05,"score":2}},{"item":{"id":"gala","coin_id":12493,"name":"GALA","symbol":"GALA","market_cap_rank":89,"thumb":"https://assets.coingecko.com/coins/images/12493/thumb/GALA-COINGECKO.png?1600233435","small":"https://assets.coingecko.com/coins/images/12493/small/GALA-COINGECKO.png?1600233435","large":"https://assets.coingecko.com/coins/images/12493/large/GALA-COINGECKO.png?1600233435","slug":"gala","price_btc":5.574090111440059e-07,"score":3}},{"item":{"id":"apecoin","coin_id":24383,"name":"ApeCoin","symbol":"APE","market_cap_rank":84,"thumb":"https://assets.coingecko.com/coins/images/24383/thumb/apecoin.jpg?1647476455","small":"https://assets.coingecko.com/coins/images/24383/small/apecoin.jpg?1647476455","large":"https://assets.coingecko.com/coins/images/24383/large/apecoin.jpg?1647476455","slug":"apecoin","price_btc":4.234456452967565e-05,"score":4}},{"item":{"id":"edu-coin","coin_id":29948,"name":"Open Campus","symbol":"EDU","market_cap_rank":266,"thumb":"https://assets.coingecko.com/coins/images/29948/thumb/EDU_Logo.png?1682327357","small":"https://assets.coingecko.com/coins/images/29948/small/EDU_Logo.png?1682327357","large":"https://assets.coingecko.com/coins/images/29948/large/EDU_Logo.png?1682327357","slug":"open-campus","price_btc":1.6300591918514315e-05,"score":5}},{"item":{"id":"veloce-vext","coin_id":31214,"name":"Veloce","symbol":"VEXT","market_cap_rank":845,"thumb":"https://assets.coingecko.com/coins/images/31214/thumb/VEXT_Logo.jpg?1691461995","small":"https://assets.coingecko.com/coins/images/31214/small/VEXT_Logo.jpg?1691461995","large":"https://assets.coingecko.com/coins/images/31214/large/VEXT_Logo.jpg?1691461995","slug":"veloce","price_btc":1.982533453805421e-05,"score":6}}],
        "nfts": [{"id":"cyberkongz","name":"CyberKongz","symbol":"KONGZ","thumb":"https://assets.coingecko.com/nft_contracts/images/90/small/cyberkongz.gif?1629727890","nft_contract_id":90,"native_currency_symbol":"eth","floor_price_in_native_currency":5.499999999,"floor_price_24h_percentage_change":23.3284595920684},{"id":"ggsg-galactic-geckos","name":"GGSG: Galactic Geckos","symbol":"GGSG","thumb":"https://assets.coingecko.com/nft_contracts/images/2444/small/ggsg-galactic-geckos.png?1672905292","nft_contract_id":2444,"native_currency_symbol":"sol","floor_price_in_native_currency":47.05370687470051,"floor_price_24h_percentage_change":16.970281221484},{"id":"milady-maker","name":"Milady Maker","symbol":"MIL","thumb":"https://assets.coingecko.com/nft_contracts/images/317/small/milady-maker.png?1649219659","nft_contract_id":317,"native_currency_symbol":"eth","floor_price_in_native_currency":2.646198056273928,"floor_price_24h_percentage_change":13.6160207237156},{"id":"redacted-remilio-babies","name":"Redacted Remilio Babies","symbol":"TEST","thumb":"https://assets.coingecko.com/nft_contracts/images/2736/small/redacted-remilio-babies.?1674465796","nft_contract_id":2736,"native_currency_symbol":"eth","floor_price_in_native_currency":0.5150538640059287,"floor_price_24h_percentage_change":12.8585869911336},{"id":"nouns","name":"Nouns","symbol":"NOUN","thumb":"https://assets.coingecko.com/nft_contracts/images/391/small/nouns.png?1653374165","nft_contract_id":391,"native_currency_symbol":"eth","floor_price_in_native_currency":39.99,"floor_price_24h_percentage_change":9.99825076076826}],
        "exchanges": []
        });

    // Provides the game state and actions to consuming components
    const contextValue = {
        cryptoData,
        setCryptoData,
        trendingCoins,
        setTrendingCoins
    };

    return (
        <CryptoContext.Provider value={contextValue}>
            {children}
        </CryptoContext.Provider>
    );
}

export { CryptoContext, CryptoContextProvider };