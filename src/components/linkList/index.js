import React from 'react'
import _ from 'lodash'
import Div from 'components/core/div'
import Text from 'components/core/text'
import './style.scss'

const LinkItem = props => (
  <li className="listLinkItem">
    <Div addStyle="linkItem">
      <a href={props.isEnabled ? props.link : null}>Link {props.id} </a>
      <Text> - Enabled when </Text>
      <Text addStyle="condition"> {props.condition}</Text>
    </Div>
  </li>
)

export default props => (
  <Div>
    <ol>
      {_.map(props.links, link => <LinkItem id={link.id} key={link.id} condition={link.condition} link={props.link} isEnabled={link.isEnabled} />)}
    </ol>
  </Div>
)
