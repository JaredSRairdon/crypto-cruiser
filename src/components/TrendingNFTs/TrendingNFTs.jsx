import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../../contexts/CryptoContext';

function TrendingNFTs() {
    const { trendingCrypto, fetchTrendingCrypto } = useContext(CryptoContext);
    const [loading, setLoading] = useState(true);
  
    // format number to US dollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
  
    function truncateString(str, maxLength) {
        if (str.length <= maxLength) {
            return str;
        } else {
            return str.slice(0, maxLength) + '...';
        }
    }

/* The `useEffect` hook in React is used to perform side effects in functional components. In this
case, the `useEffect` hook is used to fetch trending crypto data and update the component's state. */
    useEffect(() => {
        console.log("Fetching trending crypto...")
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
          const maxItemsToShow = 10;
          const trendingNFTItems = trendingCrypto.nfts.slice(0, maxItemsToShow).map((trendingNFT) => (
              <div key={trendingNFT.id} className="trending-crypto-item">
                  <img src={trendingNFT.thumb} alt="" />
                  <p>{truncateString(trendingNFT.name, 17)}</p>
                  <p>{trendingNFT.floor_price_24h_percentage_change.toFixed(3)}%</p>
              </div>
          ))
            
          return (
              <>
                  <h3>Trending NFTs</h3>
                  <div className='trending-crypto-container'>{trendingNFTItems}</div>
              </>
          );
      }
}

export default TrendingNFTs