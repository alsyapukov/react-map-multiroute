import React, { Component } from "react";
import s from './style.scss'

class Select extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
      value: 0
    }
    this.toggle = this.toggle.bind(this);
    this.show = this.show.bind(this);
    this.close = this.close.bind(this);
    this.choiceOption = this.choiceOption.bind(this);
  }


  toggle() {
    if(this.state.view) {
      this.close()
    } else {
      this.show()
    }
  }

  show() {
    this.setState({view: true});
  }

  close() {
    this.setState({view: false});
  }

  choiceOption(i) {
    console.log(i)
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
                    <div className="select__option" onClick={(e) => this.choiceOption(i, e)} key={option.value}>{ option.text }</div>
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