import React from 'react'
import './CryptoNews.css'

function CryptoNewsArticle({ newsArticleData }) {
  return (
    <article key={newsArticleData.uuid} className='crypto-news-article'>
      <img src={newsArticleData.image_url} alt="" />
      <h3 className="article-title">{newsArticleData.title}</h3>
      <p className="article-snippet">{newsArticleData.snippet}</p>
      <a href={newsArticleData.url} className="article-link" target='_blank'>Visit this article</a>
    </article>
  )
}

export default CryptoNewsArticle

/*
newsArticleData Example:
{
    "uuid": "c5a303db-e9bc-454a-952e-aad7139db4d3",
    "title": "Crypto 101: Crypto Wallets",
    "description": "Crypto wallets are digitally connected storage devices or programs to keep your blockchain assets safe. When you create a crypto wallet, the wallet provider gen...",
    "keywords": "",
    "snippet": "Crypto 101: Crypto Wallets 5 Things You Can Do with a Crypto Wallet Right Now Photo by Morthy Jameson What is a crypto wallet? Crypto wallets are digitally conn...",
    "url": "https://medium.com/@mario.solis/crypto-101-crypto-wallets-3e086c0dfe4b",
    "image_url": "https://miro.medium.com/max/998/1*LBDDj8hDxCdy5Nf9789SlQ.png",
    "language": "en",
    "published_at": "2022-08-11T04:50:20.000000Z",
    "source": "medium.com",
    "categories": [
        "tech",
        "science",
        "business"
    ],
    "relevance_score": 21.599636
}
*/