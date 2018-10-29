import { createSelector } from 'reselect'
import _ from 'lodash'

const isSelected = (selectedIds, idsToCheck) => {
  return _.reduce(idsToCheck, (all, id) => all && _.includes(selectedIds, id), true)
}

export const checkListSelector = createSelector(
  state => state.checkList,
  checkListState => {
    const allItems = checkListState.itemIds
    const oddIds = _.filter(allItems, id => id % 2 !== 0)
    const evenIds = _.filter(allItems, id => id % 2 === 0)
    const selectedItems = checkListState.selectedItems
    const isOneOrMoreItemsChecked = _.size(selectedItems) >= 1
    return {
      ...checkListState,
      links: [
        {
          id: 1,
          condition: 'Item 1 is checked',
          isEnabled: isSelected(selectedItems, [1]),
        },
        {
          id: 2,
          condition: 'Items 3 & 5 are checked',
          isEnabled: isSelected(selectedItems, [3, 5]),
        },
        {
          id: 3,
          condition: 'all Items are checked',
          isEnabled: isSelected(selectedItems, allItems),
        },
        {
          id: 4,
          condition: 'no items are checked',
          isEnabled: !isOneOrMoreItemsChecked,
        },
        {
          id: 5,
          condition: 'all odd items are checked',
          isEnabled: isSelected(selectedItems, oddIds),
        },
        {
          id: 6,
          condition: 'all even items are checked',
          isEnabled: isSelected(selectedItems, evenIds),
        },
        {
          id: 7,
          condition: 'at least 1 item is checked',
          isEnabled: isOneOrMoreItemsChecked,
        },
      ],
    }
  },
)
