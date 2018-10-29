import React from 'react'
import _ from 'lodash'
import { Trail } from 'react-spring'
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

export default props => {
  const items = _.map(props.itemIds, id => <Item id={id} key={id} onChange={props.onToggleItem} {...props} />)
  return (
    <Div addStyle="itemListContainer">
      <Trail
        items={items} keys={item => item.key}
        from={{ transform: 'translate3d(0,-200px,0)' }}
        to={{ transform: 'translate3d(0,0px,0)' }}>
          {item => props =>
            <span style={props}>{item}</span>
          }
      </Trail>
    </Div>
  )
}
