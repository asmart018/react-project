import "./App.css";
import { useState } from "react";
import FilmsList from "./components/filmsList";

function App(props) {
  let [list, setList] = useState(["ready", "set", "GO"]);
  let [text, setText] = useState("");

  function onSubmit(event) {
    event.preventDefault();

    let newList = [...list, text];
    setList(newList);
    setText("");
  }

  function resetList() {
    setList(["ready", "set", "GO"]);
    setText("");
  }

  return (
    <div className="App">
      <div className="App-header">
        <h1>Hello World</h1>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
          <button onClick={resetList}>reset</button>
        </ul>
        <FilmsList />
      </div>
    </div>
  );
}
export default App;
