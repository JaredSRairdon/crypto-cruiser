import React, { useState, useEffect } from 'react'

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
      limit: '3'
    };

    // Creates a query string from an object of parameters. 
    let query = Object.keys(params)
      .map(function(k) {return encodeURIComponent(k) + '=' + encodeURIComponent(params[k]);})
      .join('&');

    console.log("https://api.thenewsapi.com/v1/news/all?" + query)

    // fetch("https://api.thenewsapi.com/v1/news/all?" + query, requestOptions)
    //   .then(response => response.text())
    //   .then(result => console.log(result))
    //   .catch(error => console.log('error', error));

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
          console.log(data.data)
      })
      .catch((error) => {
          // Handle errors
          console.error('There was a problem with the fetch operation:', error);
      });
  }

  // Effect to call the fetchCryptoNews function and set the loading state while doing so.
  useEffect(() => {
    console.log("Fetching crypto news...")
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
      const cryptoNewsArticleElements = cryptoNewsArticles.map((newsArticle) => (
        <React.Fragment key={newsArticle.uuid}>
          <article key={newsArticle.uuid} className='crypto-news-article'>
            <img src={newsArticle.image_url} alt="" />
            <h3 className="article-title">{newsArticle.title}</h3>
          </article>
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