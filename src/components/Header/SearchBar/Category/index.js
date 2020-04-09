import React, { Component } from "react";
import '@/components/Header/SearchBar/Category/category.scss'

import Select from '@/components/base/Select'
import categories from '@/components/Header/SearchBar/Category/categories.json'

class Category extends Component {

  render() {
    const optionsCategories = categories.map((cat, i) => {
      return {
        ...cat,
        value: i
      }
    })
    return (
      <Select options={optionsCategories} />
    );
  }
}
export default Category;