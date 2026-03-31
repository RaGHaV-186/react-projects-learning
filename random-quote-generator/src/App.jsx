import { useEffect } from "react";
import { useState } from "react";

function App(){
  const [quote,setQuote] = useState("")
  const [author,setAuthor] = useState("")
  const [loading,setLoading] = useState(true)
  const [error,setError] = useState(null)

  async function fetchQuote(){
    try {
      setLoading(true)
      setError(null);

      const res = await fetch("https://dummyjson.com/quotes/random")
      const data = await res.json();

      setQuote(data.quote)
      setAuthor(data.author)
    } catch(error) {
      setError("Failed to fetch quote")
    }
    finally {
      setLoading(false)
    }
  }

  useEffect(()=>{
    fetchQuote();
  },[])

  return (
    <div>
      <h1>Random Quote generator</h1>

      {loading && <p>...Loading</p>}

      {error && <p>{error}</p>}

      {!loading && !error &&(
        <div>
          <h2>"{quote}"</h2>
          <p>-{author}</p>
        </div>
      )}

      <button onClick={fetchQuote}>New Quote</button>
    </div>
  )
}

export default App

