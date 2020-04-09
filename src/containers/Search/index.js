import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './search.scss';
import SearchList from '@/containers/Search/SearchList';
import { searchValue } from '@/store/actions'
const enhanceWithClickOutside = require('react-click-outside');



function mapStateToProps(state) {
  return {
    search: state.search
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({
    searchValue: searchValue
  }, dispatch)
}

class Search extends Component {
  state = {
    view: false,
    value: "",
    maxItems: 10,
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
    const filterCat = this.props.search.filter(
      (category, i) => i < this.state.maxItems && category.text.toLowerCase().includes(val.toLowerCase())
    );
    this.setState({ categoriesFilter: filterCat });
  }

  updateData = (value) => {
    this.setState({ value: value });
    this.props.searchValue(value);
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
export default connect(mapStateToProps, matchDispatchToProps)(Search);