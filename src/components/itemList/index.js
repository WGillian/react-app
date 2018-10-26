import React from 'react'
import Div from 'components/core/div'
import Text from 'components/core/text'
import CheckBox from 'components/core/checkBox'
import './style.scss'

const Item = props => (
  <Div addStyle="item">
    <CheckBox onChange={() => props.onChange(props.number)} checked={props.checked} />
    <Text>Item {props.number}</Text>
  </Div>
)


export default props => (
  <Div>
    <Item number="1" onChange={props.onToggleItem} checked={props.item1Checked} />
    <Item number="2" onChange={props.onToggleItem} checked={props.item2Checked} />
    <Item number="3" onChange={props.onToggleItem} checked={props.item3Checked} />
    <Item number="4" onChange={props.onToggleItem} checked={props.item4Checked} />
    <Item number="5" onChange={props.onToggleItem} checked={props.item5Checked} />
  </Div>
)
