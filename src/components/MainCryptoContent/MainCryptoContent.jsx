import React from 'react'
import './MainCryptoContent.css'

function MainCryptoContent({ product }) {
  const currencyFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(value);

  const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 1
    }).format(value);

  if (Object.keys(product).length != 0) { // Check to see if product is not empty
    return (
      <>
        <div className='main-crypto-content'>
          <span id='rank'># {product.market_cap_rank}</span>
          <div className="crypto-prices">
            <h2 id="price">{currencyFormat(product.current_price)} USD</h2>
            <span id="per-change">{product.price_change_percentage_24h.toFixed(2)} (24H)</span>
          </div>
          <div className="crypto-data">
            <div className="data-group" id='supply-info'>
              <div className="data-item">Low 24H<br/><h3>{currencyFormat(product.low_24h)}</h3></div>
              
            </div>
            <div className="data-group" id='supply-info'>
              <div className="data-item">High 24H<br/><h3>{currencyFormat(product.high_24h)}</h3></div>
      
            </div>
            {/* <div className="data-group" id='volume-info'>
              <div className="data-item-container">
                <div className="data-item">Total Volume<br/><h3>{numberFormat(product.total_volume)}</h3></div>
                <div id='low-high-24h'>
                  <div className="data-item">Low 24H<br/><h3>{currencyFormat(product.low_24h)}</h3></div>
                  <div className="data-item">High 24H<br/><h3>{currencyFormat(product.high_24h)}</h3></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </>
    )
  } else {
    return (<div>Loading...</div>)
  }



}


export default MainCryptoContent

            {/* <div>ID: {product.id}</div>
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
            <div>Last Updated: {product.last_updated}</div> */}