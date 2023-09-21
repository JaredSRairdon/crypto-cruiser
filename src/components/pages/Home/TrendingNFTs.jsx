import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../../CryptoContext';

function TrendingNFTs() {
    const { trendingCrypto, fetchTrendingCrypto } = useContext(CryptoContext);
    const [loading, setLoading] = useState(true);
  
      // format number to US dollar
      let USDollar = new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
      });
  
      useEffect(() => {
          fetchTrendingCrypto()
              .then(() => {
                  setLoading(false);
              })
              .catch((error) => {
                  setLoading(false);
              });
      }, []);
  
  
      if (loading) { 
          return <div>Loading...</div>
      } else if (!loading) {
          const maxItemsToShow = 3;
          const trendingNFTItems = trendingCrypto.nfts.slice(0, maxItemsToShow).map((trendingNFT) => (
              <div key={trendingNFT.id} className="trending-coin-item">
                  <img src={trendingNFT.thumb} alt="" />
                  <p>{trendingNFT.id}</p>
                  <p>{trendingNFT.floor_price_24h_percentage_change}%</p>
              </div>
          ))
          
          console.log(trendingCrypto)
  
          return (
              <>
                  <h3>trendingNFTs</h3>
                  <div className='crypto-list-container'>{trendingNFTItems}</div>
              </>
          );
      }
}

export default TrendingNFTs