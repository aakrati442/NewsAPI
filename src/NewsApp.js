import React, { useEffect, useState } from 'react';

const NewsApp = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6163d586310c4348aa875f935596c9df&q=india');
        const data = await response.json();
        setNews(data.articles);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <h2>LATEST NEWS TILL TODAY</h2>
      {news.map((article) => (
        <div key={article.id} >
          <h3>{article.title}</h3>
          <p>{article.description}</p>
        </div>
      ))}
    </div>
  );
};

export default NewsApp;
