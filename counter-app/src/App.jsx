import {useState} from "react";

function App(){
  const [count,setCount] = useState(0)

  function increase() {
    setCount((prev)=>prev+1)
  }
  function decrease(){
    setCount((prev)=>prev-1)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
    </div>
  )
}

export default App