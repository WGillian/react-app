import React from 'react'
import _ from 'lodash'
import Div from 'components/core/div'
import Text from 'components/core/text'
import CheckBox from 'components/core/checkBox'
import './style.scss'

const Item = props => (
  <Div addStyle="item">
    <CheckBox onChange={() => props.onChange(props.id)} checked={_.includes(props.selectedItems, props.id)} />
    <Text>Item {props.id}</Text>
  </Div>
)

export default props => (
  <Div>
    {_.map(props.itemIds, id => <Item id={id} key={id} onChange={props.onToggleItem} {...props} />)}
  </Div>
)
