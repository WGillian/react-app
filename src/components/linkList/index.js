import React from 'react'
import _ from 'lodash'
import { Spring, Trail } from 'react-spring'
import Div from 'components/core/div'
import Text from 'components/core/text'
import './style.scss'

const LinkProgress = props => {
  const [ goFrom, to ] = props.item.props.isEnabled ? [{ background: '#fff' }, { background: '#50c878' }] : [{ background: '#50c878' }, { background: '#fff' }]
  return (
    <Spring from={goFrom} to={to}>
      {({background}) => <Div style={{background, ...props.trailStyle}} addStyle="linkSpring">{props.item}</Div>}
    </Spring>
  )
}

const LinkItem = props => {
  return (
    <li className="listLinkItem">
      <Div addStyle="linkItem">
        <a href={props.isEnabled ? props.link : null}>Link {props.id} </a>
        <Text> - Enabled when </Text>
        <Text addStyle="condition">{props.condition}</Text>
      </Div>
    </li>
  )
}

export default props => {
  const items = _.map(props.links, link => <LinkItem id={link.id} key={link.id} condition={link.condition} link={props.link} isEnabled={link.isEnabled} />)
  return (
    <Div addStyle="linkListContainer">
      <ol>
        <Trail
          items={items} keys={item => item.key}
          from={{ transform: 'translate3d(-100px, 0, 0)' }}
          to={{ transform: 'translate3d(0,0px,0)' }}>
            {item => props =>
              <LinkProgress trailStyle={props} item={item}/>
            }
          </Trail>
      </ol>
    </Div>
  )
}

