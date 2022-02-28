import './App.css';
import quotes from './quotes.json';
import { useState } from 'react';

function App() {

  const colors = [
    "#845EC2",
    "#2C73D2",
    "#0089BA",
    "#008F7A",
    "#B39CD0",
    "#FF6F91",
    "#FFC75F",
    "#C34A36",
    "#B0A8B9",
    "#1D87A4",
    "#B0A8B9"
  ]

  const color = colors[Math.floor(Math.random() * 11)];

  document.body.style = `background: ${color}`;

  const [ quote, setQuote ] = useState( quotes[ quoteRandom(  ) ] )

  const changeQuote = ( ) => {
    setQuote( quotes[ quoteRandom( ) ] )
  }

  return (
    <div className="App">
      <div className='QuoteBox' style={{ color: color }}>
        <div className='Cite'>
          <i className="fa-solid fa-quote-left"></i>
          <p>{ quote.quote }</p>
        </div>
        <div className='H3-icon'>
          <h3>{ quote.author }</h3>
          <i className="fa-solid fa-angles-right" onClick={ changeQuote }></i>
        </div>
      </div>
    </div>
  );
}

const quoteRandom = () => Math.floor( Math.random(  ) * quotes.length )

export default App;
