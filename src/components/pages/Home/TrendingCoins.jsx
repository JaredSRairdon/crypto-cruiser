import React, { useContext, useEffect, useState } from 'react'
import { CryptoContext } from '../../CryptoContext';

function TrendingCoins() {
  const { trendingCrypto, fetchTrendingCrypto } = useContext(CryptoContext);
  const [loading, setLoading] = useState(true);

    // format number to US dollar
    let USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

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
        const trendingCoinsItems = trendingCrypto.coins.slice(0, maxItemsToShow).map((trendingCoin) => (
            <div key={trendingCoin.item.id} className="trending-crypto-item">
                <img src={trendingCoin.item.small} alt="" />
                <p>{trendingCoin.item.name}</p>
                <p>{trendingCoin.item.price_btc.toFixed(7)}</p>
                <p>{trendingCoin.item.market_cap_rank}</p>
            </div>
        ))
        
        return (
            <>
                <h3>Trending Coins</h3>
                <div className='trending-crypto-container'>{trendingCoinsItems}</div>
            </>
        );
    }
}


export default TrendingCoins