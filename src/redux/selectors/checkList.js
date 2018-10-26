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
      isLink1Enabled: isSelected(selectedItems, [1]),
      isLink2Enabled: isSelected(selectedItems, [3, 5]),
      isLink3Enabled: isSelected(selectedItems, allItems),
      isLink4Enabled: !isOneOrMoreItemsChecked,
      isLink5Enabled: isSelected(selectedItems, oddIds),
      isLink6Enabled: isSelected(selectedItems, evenIds),
      isLink7Enabled: isOneOrMoreItemsChecked,
      oddIds: oddIds,
    }
  },
)
