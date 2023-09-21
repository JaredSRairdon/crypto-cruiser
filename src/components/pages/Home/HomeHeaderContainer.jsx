import React, { useContext } from 'react';
import { CryptoContext } from '../../CryptoContext';
import TrendingCoins from './TrendingCoins';
import TrendingNFTs from './TrendingNFTs';

function HomeHeader() {

  return (
    <div className='home-header-container'>
      <h1 className="home-header">Unlock the Power of Cryptocurrency.</h1>
      <div className='home-header-content'>
        <div className="home-header-content-item trending-coins">
          <TrendingCoins/>
        </div>
        <div className="home-header-content-item trending-nfts">
          <TrendingNFTs/>
        </div>        
    </div>
    </div>
  )
}

export default HomeHeader