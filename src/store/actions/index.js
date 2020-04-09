export const searchValue = (value) => {
  console.log(value)
  return {
    type: "SEARCH_SELECTED",
    payload: value
  }
}