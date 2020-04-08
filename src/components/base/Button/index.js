import React, { Component } from "react";
import s from './style.scss'

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null
    }
  }

  render() {
    return (
      <button className="button button_blue">Найти</button>
    );
  }
}
export default Select;