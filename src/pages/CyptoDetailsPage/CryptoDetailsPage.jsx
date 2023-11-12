import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useParams } from 'react-router-dom';
import { CryptoContext } from '../../contexts/CryptoContext'
import MainCryptoContent from '../../components/MainCryptoContent/MainCryptoContent'
import CurrencyConverter from '../../components/CurrencyConverter/CurrencyConverter';
import './CryptoDetailsPage.css'

function CryptoDetailsPage() {
    const { cryptoData, setCryptoData, cryptoDataLoading } = useContext(CryptoContext);
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
      if (!cryptoDataLoading && cryptoData.length > 0) {
        setProduct(cryptoData.find(item => item.id === id));
      }
    }, [cryptoDataLoading, cryptoData, id]); // Add dependencies that, when changed, should re-run this effect
    
    if (cryptoDataLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          <div className="crypto-details-page-container">
            <section className="crypto-details-left">
              <div className="crypto-ticker">
                <img src={product.image} alt="icon for the pages crypto" id='crypto-image'/>
                <h2 id='crypto-name'>{product.name}</h2>
                <h4 id='crypto-symbol'>{product.symbol.toUpperCase()}</h4>
              </div>
              <MainCryptoContent cryptoData={cryptoData} product={product}/>
            </section>
            {/* <section className="crypto-details-right">
              <CurrencyConverter current_price={0}/>
            </section> */}
          </div>
        </>
      )
  }
}

export default CryptoDetailsPage

  /* <div>ID: {product.id}</div>
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
  <div>Last Updated: {product.last_updated}</div> */