import React, { useState, useEffect } from 'react'
import CryptoNewsArticle from './CryptoNewsArticle';

function CryptoNews() {
  const [loading, setLoading] = useState(true);
  const [cryptoNewsArticles, setCryptoNewsArticles] = useState([]);

  // Function to fetch the crypto news from 'TheNewsApi'
  const fetchCryptoNews = async() => {
    let requestOptions = {
      method: 'GET'
    };

    let params = {
      api_token: 'wHpA4RYJ44hv1PSe7qUFXBXM1p9fv5gmiNwBjWsv',
      categories: 'business,tech',
      search: 'crypto',
      limit: '3',
    };

    // Creates a query string from an object of parameters. 
    let query = Object.keys(params)
      .map(function(k) {return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);})
      .join('&');

    fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
      .then((response) => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then((data) => {
          // Handle the data from the API
          setCryptoNewsArticles(data.data);
          console.log(`Successfully fetched CryptoNews!`)
          console.log(data.data)
      })
      .catch((error) => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });
  }

  // Effect to call the fetchCryptoNews function and set the loading state while doing so.
  useEffect(() => {
    fetchCryptoNews()
        .then(() => {
            setLoading(false);
        })
        .catch((error) => {
            setLoading(false);
        });
  }, []); // empty dependency array, so effect will only run once

  if (loading) { 
      return <div>Loading...</div>
  } else if (!loading) {
      const cryptoNewsArticleElements = cryptoNewsArticles.map((newsArticleData) => (
        <React.Fragment key={newsArticleData.uuid}>
          <CryptoNewsArticle newsArticleData={newsArticleData}/>
        </React.Fragment>
      ));

      return (
        <>
          <div className="crypto-news">
            {cryptoNewsArticleElements}
          </div>
        </>
      )
  }


}

export default CryptoNews