const initialState = {
  item1: false,
  item2: false,
  item3: false,
  item4: false,
  item5: false,
}

export default (state = initialState, action) => {
    switch (action.type) {
      case `checkList/TOGGLE_ITEM_${action.payload}`:
        return { ...state, [`item${action.payload}`]: !state[`item${action.payload}`] }
      default:
        return state
    }
}
