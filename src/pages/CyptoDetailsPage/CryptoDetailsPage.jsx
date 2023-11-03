import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CryptoContext } from '../../contexts/CryptoContext'

function CryptoDetailsPage() {
    const { cryptoData, setCryptoData, cryptoDataLoading } = useContext(CryptoContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    // useEffect hook for fetching cryptoData from CoinGecko API on context mount
    // useEffect(() => {
    //     console.log("Fetching crypto data...")
    //     setCryptoData({});
    //     fetchCryptoData()
    //         .then(() => {
    //             setCryptoDataLoading(false);
    //             setProduct(cryptoData.find(item => item.id === id))
    //         })
    //         .catch((error) => {
    //             setCryptoDataLoading(false);
    //         });

    // }, [])

    // if (cryptoData.length > 1) {
    //     setProduct(cryptoData.find(item => item.id === id))
    // }

    console.log(cryptoDataLoading)
// Inside your component
useEffect(() => {
    if (!cryptoDataLoading && cryptoData.length > 0) {
      setProduct(cryptoData.find(item => item.id === id));
    }
  }, [cryptoDataLoading, cryptoData, id]); // Add dependencies that, when changed, should re-run this effect
  
  if (cryptoDataLoading) {
    return <div>Loading...</div>;
  }




    return (
        <>
            <div>ID: {product.id}</div>
            <div>Symbol: {product.symbol}</div>
            <div>Name: {product.name}</div>
            <img src={product.image} alt="" />
            <div>Current Price: {product.current_price}</div>
            <div>Market Cap: {product.market_cap}</div>
            <div>Market Cap Rank: {product.market_cap_rank}</div>
            <div>Fully Diluted Valuation: {product.fully_diluted_valuation}</div>
            <div>Total Volume: {product.total_volume}</div>
            <div>High 24h: {product.high_24h}</div>
            <div>Low 24h: {product.low_24h}</div>
            <div>Price Change 24h: {product.price_change_24h}</div>
            <div>Price Change Percentage 24h: {product.price_change_percentage_24h}</div>
            <div>Market Cap Change 24h: {product.market_cap_change_24h}</div>
            <div>Market Cap Change Percentage 24h: {product.market_cap_change_percentage_24h}</div>
            <div>Circulating Supply: {product.circulating_supply}</div>
            <div>Total Supply: {product.total_supply}</div>
            <div>Max Supply: {product.max_supply}</div>
            <div>All-Time High (ATH): {product.ath}</div>
            <div>ATH Change Percentage: {product.ath_change_percentage}</div>
            <div>ATH Date: {product.ath_date}</div>
            <div>All-Time Low (ATL): {product.atl}</div>
            <div>ATL Change Percentage: {product.atl_change_percentage}</div>
            <div>ATL Date: {product.atl_date}</div>
            <div>Last Updated: {product.last_updated}</div>
        </>



    )
}

export default CryptoDetailsPage