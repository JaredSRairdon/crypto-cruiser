import React, { useContext, useEffect, useState, useRef } from 'react'
import { CryptoContext } from '../../contexts/CryptoContext';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function TrendingCoins() {
    const { trendingCrypto, fetchTrendingCrypto, trendingCryptoLoading } = useContext(CryptoContext);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const containerRef = useRef(null);

    // useEffect(() => {
    //     console.log("Fetching trending crypto...")
    //     fetchTrendingCrypto()
    //         .then(() => {
    //             setLoading(false);
    //         })
    //         .catch((error) => {
    //             setLoading(false);
    //         });
    // }, []);

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

    if (trendingCryptoLoading) { 
        return <div>Loading...</div>
    } else if (!trendingCryptoLoading) {
        const maxItemsToShow = 10;
        // TODO: Handle errors for missing data with the below slice function
        const trendingCoinsItems = trendingCrypto.coins.slice(0, maxItemsToShow).map((trendingCoin) => (
            <React.Fragment key={trendingCoin.item.id}>
                <div key={trendingCoin.item.id} className="trending-crypto-item">
                    <img src={trendingCoin.item.small} alt="" />
                    <div>
                      <header><h4>{trendingCoin.item.name}</h4></header>
                      <body className='trending-crypto-data'>
                        <div className="trending-data-item">
                          <p>{trendingCoin.item.price_btc.toFixed(7)}</p>
                          <label>BTC</label>

                        </div>
                        <div className="trending-data-item">
                          <p>{trendingCoin.item.market_cap_rank}</p>
                          <label>Rank</label>

                        </div>
                      </body>
                    </div>
                </div>
            </React.Fragment>
        ))
        
        return (
            <>
                <div className="trending-crypto-container">
                    {
                        <>
                            <h2>Trending coins</h2>
                            <Slider {...settings}>
                                {trendingCoinsItems}
                            </Slider>
                        </>

                    }
                </div>
            </>
        );
    }
}


export default TrendingCoins