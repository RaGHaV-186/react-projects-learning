import {useState} from "react";

function App(){
  const [count,setCount] = useState(0)

  function increase() {
    setCount((prev)=>prev+1)
  }
  function decrease(){
    if (count>0){
    setCount((prev)=>prev-1)
    }
  }
  function reset(){
    setCount(0)
  }
  return (
    <div>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease} disabled={count===0}>Decrease</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}

export default App