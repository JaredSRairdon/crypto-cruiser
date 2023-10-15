import React from 'react';
import './Home.css';
import CryptoList from '../../components/CryptoList/CryptoList';
import Footer from '../../components/Footer/Footer'
import TrendingCoins from '../../components/TrendingCoins/TrendingCoins';
import TrendingNFTs from '../../components/TrendingNFTs/TrendingNFTs';
import CryptoNews from '../../components/CryptoNews/CryptoNews';

function Home() {
  return (
    <>
      <h1 className="home-header">Unlock the Power of Cryptocurrency.</h1>
      <body>
        <div className="trending trending-coins">
            <TrendingCoins/>
        </div> 
        <div className="main-section-home">
          <CryptoList/>
          <CryptoNews key="cryoto-news-component"/>
        </div>
        <div className="trending trending-nfts">
            <TrendingNFTs/>
        </div>
      </body>
    </>
  )
}

export default Home