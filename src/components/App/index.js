import React, { Component } from "react";
import Aside from "../Aside/";
import Header from "../Header/";
import s from "./app.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      privet: 'Privet'
    }

    // this.inputChange = this.inputChange.bind(this);
    // this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <div className="app">
        <Header />
        <Aside />
      </div>
    );
  }
}
export default App;