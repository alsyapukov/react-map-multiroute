import React, { Component } from "react";
import '@/components/Header/SearchBar/Search/SearchList/searchList.scss';

const enhanceWithClickOutside = require('react-click-outside');

const SearchList = (() => {
  class SearchList extends Component {

    state = {
      view: false,
      value: ""
    }

    setValueList = (val) => {
      this.setState({
        value: val,
        view: false
      });
      this.props.updateData(val);
      this.props.close();
    }

    handleClickOutside = () => {
      if (this.props.view) {
        this.props.close();
      }
    }

    render() {
      const viewList = this.props.view;
      return (
        viewList &&
        (
          <div className="search__list">
            {
              this.props.categoriesFilter.map((category, i) => {
                return <div className="search__item" onClick={() => this.setValueList(category.text)} key={category.value}>{category.text}</div>
              })
            }
          </div>
        )
      );
    }
  }
  return enhanceWithClickOutside(SearchList);
})();

export default SearchList;