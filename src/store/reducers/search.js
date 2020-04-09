import searchImport from '@/assets/json/categories.json'
const search = () => {
  return searchImport.map((cat, i) => {
    return {
      ...cat,
      value: i
    }
  })
}

export default search