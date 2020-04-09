import React, { Component } from "react";
import './header.scss'

import SearchBar from '@/components/Header/SearchBar'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="header__logo logo">
          <div className="logo__img"></div>
          <div className="logo__text">Lulu</div>
        </div>
        <SearchBar className="header__search-bar" />
      </header>
    );
  }
}
export default Header;