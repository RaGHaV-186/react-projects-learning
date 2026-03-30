import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState("");
  const [scale, setScale] = useState("c");

  function toFarhenheit(c) {
    return (c * 9 / 5) + 32;
  }

  function toCelsius(f) {
    return (f - 32) * 5 / 9;
  }

  return (
    <div>
      <label>Celsius</label>
      <input
        type="text"
        value={scale === "c" ? temperature : toCelsius(temperature)}
        onChange={(e) => {
          setTemperature(e.target.value);
          setScale("c");
        }}
      />

      <label>Fahrenheit</label>
      <input
        type="text"
        value={scale === "f" ? temperature : toFarhenheit(temperature)}
        onChange={(e) => {
          setTemperature(e.target.value);
          setScale("f");
        }}
      />
    </div>
  );
}

export default App;