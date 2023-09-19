import React, { useContext } from 'react';
import { CryptoContext } from '../../CryptoContext';

function HomeHeader() {
  const { trendingCoins } = useContext(CryptoContext);

  return (
    <div className='home-header-container'>
      <h1 className="home-header">Unlock the Power of Cryptocurrency.</h1>
      <div className='home-header-content'>
        <div className="home-header-content-item trending-coins">
          <h3 className="trending-title">Trending Coins</h3>
        </div>
        <div className="home-header-content-item trending-nfts">
          <h3 className="trending-title">Trending NFTs</h3>
        </div>        
    </div>
    </div>
  )
}

export default HomeHeader