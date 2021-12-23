import './App.css';
import quotes from './quotes.json'
import Phrase from './components/Phrase';
import Author from './components/Author';
import { useState } from 'react';

function App() {

  const colors = [ 
    "#F767C0", "#AB6CDE", "#FF7997", "#FF9F72", "#FFCD5F",
    "#497DEC", "#0085E2", "#0085E2", "#008298", "#007A69",
    "#4C4452", "#B2A8B8", "#E25F3A", "#A32809", "#A32809"
 ];

  const [ quote, setQuote ] = useState(quotes[getNumber(quotes.length)]);
  const [ background, setBackground ] = useState(colors[getNumber(colors.length)]);

  const handleQuote = () => {
    const index = getNumber(quotes.length);
    setQuote(quotes[index]);
    setBackground(colors[getNumber(colors.length)]);
  }

  return (
    <div className="App" style={{background}} >
      <div className='card' >
        <Phrase 
          quote={quote.quote} 
          color={background}
        />
        <i>
          <Author 
            author={quote.author} 
            changeQuote={handleQuote}
            color={background}
          />
        </i>
      </div>
    </div>
  );
}
const getNumber = max => Math.floor(Math.random() * max );

export default App;
