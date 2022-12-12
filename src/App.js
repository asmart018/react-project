import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>React is so cool!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <h1>Things I have learned:</h1>
        <ul>
          <li>HTML/CSS</li>
          <li>Javascript</li>
          <li>Node</li>
        </ul>
      </header>
    </div>
  );
}

export default App;
