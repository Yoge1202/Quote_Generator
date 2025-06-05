import React, { useState, useEffect } from 'react';
import './App.css';

const QuoteGenerator = () => {
  const [quote, setQuote] = useState("Click the button to get a random quote!");
  

const fetchQuote = async () => {
  try {
    const url = `https://zenquotes.io/api/random?ts=${new Date().getTime()}`; // Add timestamp to bypass cache
    const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;

    const response = await fetch(proxyUrl);
    const data = await response.json();
    const parsed = JSON.parse(data.contents);
    setQuote(`"${parsed[0].q}" - ${parsed[0].a}`);
  } catch (error) {
    setQuote("Failed to load quote. Please try again.");
  }
};

  useEffect(() => {
    fetchQuote(); // Fetch a quote when the component loads
  }, []);

  return (
    <div className="quote-container">
      <h1>Random Quote Generator</h1>
      <p>{quote}</p>
      <button onClick={fetchQuote}>New Quote</button>
    </div>
  );
};

export default QuoteGenerator;


