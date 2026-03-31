import { useState, useEffect } from "react";


function App(){
  const [time,setTime] = useState(0)
  const [isRunning,setIsRunning] = useState(false)

  useEffect(()=>{
    if(!isRunning) return;

    const timer = setInterval(()=>{
      setTime((prev)=>prev + 1)
    },1000);

    return ()=> clearInterval(timer);
  },[isRunning])

  return (
    <div>
      <h1>{time} seconds</h1>
      <button onClick={()=>setIsRunning(true)}>Start Timer</button>
      <button onClick={()=>setIsRunning(false)}>Stop Timer</button>
      <button onClick={()=>setTime(0)}>Reset</button>

    </div>
  )

}

export default App