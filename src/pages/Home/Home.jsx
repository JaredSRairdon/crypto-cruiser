import React from 'react';
import './Home.css';
import CryptoList from '../../components/CryptoList/CryptoList';
import HomeSideSection from './HomeSideSection';
import Footer from '../../components/Footer/Footer'
import TrendingCoins from '../../components/TrendingCoins/TrendingCoins';
import TrendingNFTs from '../../components/TrendingNFTs/TrendingNFTs';

function Home() {
  return (
    <>
      <header className='home-header-container'>
        <h1 className="home-header">Unlock the Power of Cryptocurrency.</h1>
        <div className='home-header-content'>
          <div className="home-header-content-item trending-coins">
            <TrendingCoins/>
          </div>
          <div className="home-header-content-item trending-nfts">
            <TrendingNFTs/>
          </div>        
        </div>
      </header>
      <body>
        <div className="main-section-home">
          <CryptoList/>
          <HomeSideSection/>
        </div>
      </body>
      <footer><Footer/></footer>
    </>
  )
}

export default Home