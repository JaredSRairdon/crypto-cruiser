import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../../contexts/CryptoContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TrendingNFTs() {
    const { trendingCrypto, fetchTrendingCrypto } = useContext(CryptoContext);
    const [loading, setLoading] = useState(true);
  
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
  
  
    const settings = {
        className: "center",
        infinite: true,
        arrows: false,
        dots: false,
        autoplay: true,
        centerPadding: "60px",
        slidesToShow: 3,
        swipeToSlide: true,
        afterChange: function(index) {
          console.log(
            `Slider Changed to: ${index + 1}, background: #222; color: #bada55`
          );
        },
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
              }
            }
          ]
    };


    if (loading) { 
        return <div>Loading...</div>
    } else if (!loading) {
        const maxItemsToShow = 10;
        const trendingNFTItems = trendingCrypto.nfts.slice(0, maxItemsToShow).map((trendingNFT) => (
            <React.Fragment key={trendingNFT.id}>
                <div key={trendingNFT.id} className="trending-crypto-item">
                <img src={trendingNFT.thumb} alt="" />
                <p>{truncateString(trendingNFT.name, 17)}</p>
                <p>{trendingNFT.floor_price_24h_percentage_change.toFixed(3)}%</p>
            </div>
            </React.Fragment>
        ))
    
        return (
            <>
                <div className='trending-crypto-container'>
                    <h2>Trending NFTs</h2>
                    <Slider {...settings}>
                        {trendingNFTItems}
                    </Slider>
                </div>
            </>
        );
    }
}

export default TrendingNFTs