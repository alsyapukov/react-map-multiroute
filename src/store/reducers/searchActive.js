const ads = (state = "", action) => {
  switch (action.type) {
    case "SEARCH_SELECTED":
      return action.payload;
      break;
    default:
      return state;
      break;
  }
}

export default ads