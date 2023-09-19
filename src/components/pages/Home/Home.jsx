import React from 'react';
import './Home.css';
import CryptoList from './CryptoList';
import HomeHeaderContainer from './HomeHeaderContainer';
import HomeSideSection from './HomeSideSection';
import Footer from '../../Footer/Footer'

function Home() {
  return (
    <>
      <HomeHeaderContainer/>
      <div className="main-section-home">
        <CryptoList/>
        <HomeSideSection/>
      </div>
      <Footer/>
    </>
  )
}

export default Home