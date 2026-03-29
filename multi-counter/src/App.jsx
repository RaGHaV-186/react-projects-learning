import { useState } from "react";

function App() {
  const [counts, setCounts] = useState([0, 0, 0]);

  function increase(index) {
    setCounts((prev) => {
      const newCounts = [...prev];
      newCounts[index] += 1;
      return newCounts;
    });
  }

  function decrease(index) {
    setCounts((prev) => {
      const newCounts = [...prev];
      if (newCounts[index] > 0){
      newCounts[index] -= 1;
      }
      return newCounts;
    });
  }

  function resetAll() {
    setCounts((prev) => prev.map(() => 0));
  }

  function addCounter() {
    setCounts((prev)=>[...prev,0])
  }

  function removeCounter(){
    setCounts((prev)=> prev.slice(0,-1))
  }
  return (
    <div>
      {counts.map((count, index) => (
        <div key={index}>
          <h1>{count}</h1>

          <button onClick={() => increase(index)}>Increase</button>
          <button onClick={() => decrease(index)}>Decrease</button>
        </div>
      ))}

      <button onClick={resetAll}>RESET ALL</button>
      <button onClick={addCounter}>ADD COUNTER</button>
      <button onClick={removeCounter}>REMOVE COUNTER</button>
    </div>
  );
}

export default App;