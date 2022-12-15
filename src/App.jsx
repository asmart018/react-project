import "./App.css";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      list: ["ready", "set", "GO"],
      text: "",
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.resetList = this.resetList.bind(this);
  }

  onSubmit(event) {
    event.preventDefault();

    let newList = [...this.state.list, this.state.text];
    this.setState({ list: newList, text: "" });
  }

  resetList(){
    this.setState({
      list: ["ready", "set", "GO"],
      text: "",
    });
  }

  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            value={this.state.text}
            onChange={(event) => this.setState({ text: event.target.value })}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.state.list.map((item, idx) => {
            return <li key={item + idx}>{item}</li>;
          })}
          <button onClick={this.resetList}>reset</button>
        </ul>
      </div>
    );
  }
}

export default App;
