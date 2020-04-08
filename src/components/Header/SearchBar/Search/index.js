import React, { Component } from "react";
import s from './style.scss';

const enhanceWithClickOutside = require('react-click-outside');

import categories from '../Category/categories.json';

const optionsCategories = categories.map((cat, i) => {
  return {
    ...cat,
    value: i
  }
})
const SearchList = (() => {
  class SearchList extends Component {
    constructor(props) {
      super(props);
      this.state = {
        view: false
      }
    }

    handleClickOutside() {
      this.toggle();
    }
  
    toggle() {
      this.setState({ view: !this.state.view });
    }
    render() {
      const viewList = this.props.view && this.state.view;
      return (
        viewList &&
        (
          <div className="search__list">
            {
              this.props.categoriesFilter.map((category, i) => {
                return <div className="search__item" key={category.value}>{category.text}</div>
              })
            }
          </div>
        )
      );
    }
  }
  return enhanceWithClickOutside(SearchList);
})();

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      view: false,
      value: "",
      maxItems: 10,
      cat: optionsCategories,
      categoriesFilter: []
    }

    this.viewSearchList = this.viewSearchList.bind(this);
    this.searchChange = this.searchChange.bind(this);
    this.searchFilter = this.searchFilter.bind(this);
  }

  viewSearchList(val) {
    this.setState({ view: val })
  }

  searchChange(e) {
    if(e.target.value.length > 0) {
      this.viewSearchList(true);
    } else {
      this.viewSearchList(false);
    }
    this.searchFilter(e.target.value);
    this.setState({ value: e.target.value });
  }

  searchFilter(val) {
    const filterCat = this.state.cat.filter(
      (category, i) => i < this.state.maxItems && category.text.toLowerCase().includes(val.toLowerCase())
    );
    this.setState({ categoriesFilter: filterCat });
  }

  render() {
    return (
      <div className="search">
        <input type="text" className="search__input" value={this.state.value} onChange={this.searchChange} />
        <SearchList view={this.state.view} categoriesFilter={this.state.categoriesFilter}/>
      </div>
    );
  }
}
export default Search;