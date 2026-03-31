import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setResults([]);
        return;
      }

      async function fetchData() {
        try {
          setLoading(true);

          const res = await fetch(
            `https://dummyjson.com/products/search?q=${searchTerm}`
          );
          const data = await res.json();

          setResults(data.products);
        } catch (err) {
          console.log("Error fetching data");
        } finally {
          setLoading(false);
        }
      }

      fetchData();
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Live Search</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Loading */}
      {loading && <p>Searching...</p>}

      {/* Results */}
      <ul>
        {results.map((item) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;