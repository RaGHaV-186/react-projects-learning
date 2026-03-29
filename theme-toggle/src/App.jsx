import { useState } from "react"

function App(){
  const [isDark,setIsDark] = useState(false)

  function toggler(){
    setIsDark(!isDark)
  }
  return (
    <div
      style={{
        backgroundColor: isDark ? "black" : "white",
        height: "100vh"
      }}
    >
      <h1 style={{ color: isDark ? "white" : "black" }}>
        This is a theme toggler
      </h1>

      <button onClick={toggler}>
        {isDark ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  )
}
export default App