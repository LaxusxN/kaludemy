import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(1);

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Mira mi Nita, Mi amor lo logré</h1>
      <p>
        Es para un nuevo proyecto para mi portafolio, pero siempre pensando en
        tí
      </p>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          TE QUIERO X {count}
        </button>
      </div>
    </>
  );
}

export default App;
