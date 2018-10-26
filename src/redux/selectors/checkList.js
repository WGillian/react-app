import { createSelector } from 'reselect'
import _ from 'lodash'

export const checkListSelector = createSelector(
  state => state.checkList,
  checkListState => {
    const isOneOrMoreItemsChecked = _.some(checkListState)
    const keys = _.keys(checkListState)
    const oddKeys = _.filter(keys, key => _.find(key, char => !_.isNaN(_.parseInt(char, 10)) && char % 2 !== 0))
    const oddKeysAndValues = _.pick(checkListState, oddKeys)
    const evenKeyAndValues = _.omit(checkListState, oddKeys)
    return {
      ...checkListState,
      isLink1Enabled: checkListState.item1,
      isLink2Enabled: checkListState.item3 && checkListState.item5,
      isLink3Enabled: _.every(checkListState),
      isLink4Enabled: !isOneOrMoreItemsChecked,
      isLink5Enabled: _.every(oddKeysAndValues),
      isLink6Enabled: _.every(evenKeyAndValues),
      isLink7Enabled: isOneOrMoreItemsChecked,
    }
  },
)
