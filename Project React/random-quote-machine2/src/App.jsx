import React, {useState, useEffect} from 'react'
import './App.scss'
import COLORS_ARRAY from './colorsArray'

let quoteDBUrl = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json'

function App() {
  const firstQuote = [
    {author: "Ann Landers",
      quote : "It is not what you do for your children, but what you have taught them to do for themselves, that will make them successful human beings."},
    ];

  const [quote, setQuote] =useState(firstQuote[0].quote);
  const [author, setAuthor] = useState(firstQuote[0].author);

  const [randomIndex, setRandomIndex] = useState(5);
  const [prevRandomIndex, setPrevRandomIndex] = useState(5);
  const[quotesArray, setQuotesArray] = useState(null)
  const [accentColor, setAccentColor] = useState('#F44336')

  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parsedJSON = await response.json()
    setQuotesArray(parsedJSON.quotes)
  } 

  useEffect(() => {
    fetchQuotes(quoteDBUrl);
  }, [quoteDBUrl])

  
  function changeQuote(){
    let newRandomIndex;
    
    // Keep generating a new random index until it's different from the previous one
    do {
      newRandomIndex = Math.round(Math.random() * (quotesArray.length - 1));
    } while (newRandomIndex === prevRandomIndex);
  
    // Update the previous random index
    setPrevRandomIndex(newRandomIndex);
  
    // Update the current random index
    setRandomIndex(newRandomIndex);
    console.log(randomIndex)
    setAccentColor(COLORS_ARRAY[randomIndex])
    setQuote(quotesArray[randomIndex].quote);
    setAuthor(quotesArray[randomIndex].author);
  }

  return (
    <body style={{backgroundColor: accentColor, color: accentColor}}>
      <div className="App" >
        <div id="quote-box" style={{color: accentColor}}>
          <p id="text"><i class="fa-solid fa-quote-left fa-2xl"></i> {quote}" </p>
          <p id="author">- {author}</p>
          <a id="tweet-quote" href={encodeURI(`http://www.twitter.com/intent/tweet?text=${quote} - ${author}`)}><button><i className="fa-brands fa-twitter"></i></button></a>
          <button id="new-quote" onClick={() => changeQuote()}>Change Quote</button>
        </div>
      </div>
    </body>
  )
}

export default App
