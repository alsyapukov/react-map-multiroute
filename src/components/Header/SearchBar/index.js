import React, { Component } from "react";
import '@/components/Header/SearchBar/searchBar.scss'

import Category from '@/components/Header/SearchBar/Category'
import Search from '@/components/Header/SearchBar/Search'
import Button from '@/components/base/Button'

class SearchBar extends Component {

  render() {
    return (
      <div className={`${this.props.className} search-bar`}>
        <div className="search-bar__item search-bar__category">
          <Category />
        </div>
        <div className="search-bar__item search-bar__search">
          <Search />
        </div>
        <div className="search-bar__item search-bar__location">
          <Category />
        </div>
        <div className="search-bar__item search-bar__find">
          <Button />
        </div>
      </div>
    );
  }
}
export default SearchBar;