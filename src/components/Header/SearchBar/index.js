import React, { Component } from "react";
import s from './style.scss'

import Category from './Category'
import Search from './Search'
import Button from '@/components/base/Button'

class SearchBar extends Component {
  constructor(props) {
    super(props)
  }

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