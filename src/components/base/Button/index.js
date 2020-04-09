import React, { Component } from "react";
import '@/components/base/Button/button.scss'

class Select extends Component {
  
  state = {
    value: null
  }

  render() {
    return (
      <button className="button button_blue">Найти</button>
    );
  }
}
export default Select;