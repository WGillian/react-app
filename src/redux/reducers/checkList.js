import _ from 'lodash'

const initialState = {
  itemIds: [1, 2, 3, 4, 5],
  selectedItems: [],
}

const removeItem = (items, currentItem) => {
  const indexOfCurrentItem = _.indexOf(items, currentItem)
  return [..._.slice(items, 0, indexOfCurrentItem), ..._.slice(items, indexOfCurrentItem + 1)]
}

const addOrRemoveItem = (items, currentItem) => {
  if (_.includes(items, currentItem)) {
    return removeItem(items, currentItem)
  }

  return [...items, currentItem]
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'checkList/TOGGLE_ITEM':
      return {
        ...state,
        selectedItems: addOrRemoveItem(state.selectedItems, action.payload),
      }
    default:
      return state
  }
}
