import { combineReducers } from 'redux'
import ads from './ads'
import search from './search'
import searchActive from './searchActive'

export default combineReducers({
  ads,
  search,
  searchActive
})