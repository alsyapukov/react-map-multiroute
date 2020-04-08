import React, { Component } from "react";
import s from './style.scss'

import Select from '@/components/base/Select'
import categories from './categories.json'

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