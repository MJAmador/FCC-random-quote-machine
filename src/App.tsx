import { useState } from 'react';
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import './App.css';

interface Quote {
  text: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const red = Math.floor(Math.random() * 128);
  const green = Math.floor(Math.random() * 128);
  const blue = Math.floor(Math.random() * 128);

  return `rgb(${red}, ${green}, ${blue})`;
}

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  }

  return (
    <div className="background" style={{ backgroundColor: randomColor, transition }}>
      <div id="quote-box">
        <div className="quote-content" style={{ color: randomColor, transition }}> 
          <h2 id="text">
            <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
            { quote.quote }
            <FaQuoteRight size="30" style={{ marginLeft: "10px" }} />
            </h2>
          <h4 id="author">- {quote.author}</h4>
        </div>
        <div className="buttons">
          <a 
            href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=%22The%20battles%20that%20count%20aren%E2%80%99t%20the%20ones%20for%20gold%20medals.%20The%20struggles%20within%20yourself%E2%80%93the%20invisible%20battles%20inside%20all%20of%20us%E2%80%93that%E2%80%99s%20where%20it%E2%80%99s%20at.%22%20Jesse%20Owens"
            id="tweet-quote"
            target='_blank'
            style={{
              backgroundColor: randomColor,
              marginRight: "10px",
              transition
            }}
          >
            <FaTwitter color="white" />
          </a>
          <button id="new-quote" onClick={changeQuote} style={{ backgroundColor: randomColor, transition }}>
            Change Quote
          </button>
        </div>
      </div>
    </div>
  );
    
}

export default App
