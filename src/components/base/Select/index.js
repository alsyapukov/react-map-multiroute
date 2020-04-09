import React, { Component } from "react";
import '@/components/base/Select/select.scss'

class Select extends Component {

  state = {
    view: false,
    value: 0
  }


  toggle = () => {
    if(this.state.view) {
      this.close()
    } else {
      this.show()
    }
  }

  show = () => {
    this.setState({view: true});
  }

  close = () => {
    this.setState({view: false});
  }

  choiceOption = (i) => {
    this.setState({value: i});
  }

  render() {
    return (
      <div className="select" onClick={this.toggle}>
        <div className="select__selected">{ this.props.options[this.state.value].text }</div>
        {this.state.view && 
          (
            <div className="select__list">
              {
                (this.props.options.map((option, i) => {
                  return (
                    <div className="select__option" onClick={() => this.choiceOption(i)} key={option.value}>{ option.text }</div>
                  )
                }))
              }
            </div>
          )
        }
      </div>
    );
  }
}
export default Select;