import React, { useState } from 'react';
import './App.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState(""); // Start with empty

  const fetchQuote = async () => {
    try {
      const url = `https://zenquotes.io/api/random?ts=${new Date().getTime()}`;
      const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

      const response = await fetch(proxyUrl);
      const data = await response.json();
      const parsed = JSON.parse(data.contents);
      setQuote(`"${parsed[0].q}" - ${parsed[0].a}`);
    } catch (error) {
      setQuote("Failed to load quote. Please try again.");
    }
  };

  return (
    <div className="quote-container">
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;