import { useState } from 'react'
import '../styles/App.css'
import quotes from "quote-library"
import xTwitter from '@fortawesome/fontawesome-free/svgs/brands/square-x-twitter.svg'


function App() {
  const colors = ["#EE431F", "#1F8EEE", "#EEBD1F", "#1FEEB6", "#541FEE",
"#EE1FC6", "#EED21F", "#D6214E", "#9921D6"];

  const [quote, setQuote] = useState(quotes.randomQuote());

  const tweetText = encodeURIComponent(quote.quoteText);
  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;

  const [index, updateIndex] = useState(1)
  const [color, setColor] = useState(colors[0]);

  document.body.style.backgroundColor = color;
  
  const handleClick = () => {
    setQuote(quotes.randomQuote());
    if(index < colors.length - 1) {
      updateIndex(index + 1);
    }
    else {
      updateIndex(0);
    }
    setColor(colors[index]);
    document.body.style.backgroundColor = color;
  }

  

  return (
    <main id="quote-box">
      <blockquote style={{color: color}} className="text-center" id="text">
        <div>
          <p>{quote.quoteText}</p>
        </div>
        <cite id="author">&mdash; {quote.quoteAuthor}</cite>
      </blockquote>
      <div id="button-row">
        <a id="tweet-quote" href={tweetUrl} target="_blank">
          <img src={xTwitter} alt="X Twitter Icon" loading='lazy'/>
        </a>
        <button style={{backgroundColor: color}} className="btn btn-primary" id="new-quote" onClick={handleClick}>
          New Quote
        </button>
      </div>
    </main>
  )
}

export default App
