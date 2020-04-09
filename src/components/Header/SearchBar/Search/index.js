import React, { Component } from "react";
import '@/components/Header/SearchBar/Search/search.scss';

import SearchList from '@/components/Header/SearchBar/Search/SearchList';

const enhanceWithClickOutside = require('react-click-outside');

import categories from '@/components/Header/SearchBar/Category/categories.json';

const optionsCategories = categories.map((cat, i) => {
  return {
    ...cat,
    value: i
  }
})

class Search extends Component {
  state = {
    view: false,
    value: "",
    maxItems: 10,
    cat: optionsCategories,
    categoriesFilter: []
  }

  viewSearchList = (val) => {
    this.setState({ view: val })
  }

  searchChange = (e) => {
    if(e.target.value.length > 0) {
      this.viewSearchList(true);
    } else {
      this.viewSearchList(false);
    }
    this.searchFilter(e.target.value);
    this.setState({ value: e.target.value });
  }

  searchFilter = (val) => {
    const filterCat = this.state.cat.filter(
      (category, i) => i < this.state.maxItems && category.text.toLowerCase().includes(val.toLowerCase())
    );
    this.setState({ categoriesFilter: filterCat });
  }

  updateData = (value) => {
    this.setState({ value: value });
  }

  // toggle = (val) => {
  //   val
  //     ? this.close()
  //     : this.show()
  // }

  close = () => {
    this.setState({ view: false });
  }

  show = () => {
    this.setState({ view: true });
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.updateData(
        this.state.categoriesFilter.length > 0 
          ? this.state.categoriesFilter[0].text 
          : ""
      );
      this.close();
    }
  }

  render() {
    return (
      <div className="search">
        <input type="text" className="search__input" value={this.state.value} onKeyPress={this.handleKeyPress} onChange={this.searchChange} />
        <SearchList updateData={this.updateData} view={this.state.view} close={this.close} categoriesFilter={this.state.categoriesFilter}/>
      </div>
    );
  }
}
export default Search;