import React from 'react'
import Div from 'components/core/div'
import Text from 'components/core/text'
import './style.scss'


const LinkItem = props => (
  <li className="listLinkItem">
    <Div addStyle="linkItem">
      <a href={props.isEnabled ? props.link : null}>Link {props.number} </a>
      <Text> - Enabled when </Text>
      <Text addStyle="condition"> {props.condition}</Text>
    </Div>
  </li>
)


export default props => (
  <Div>
    <ol>
      <LinkItem number="1" condition="Item 1 is checked" link={props.link} isEnabled={props.isLink1Enabled} />
      <LinkItem number="2" condition="Items 3 & 5 are checked" link={props.link} isEnabled={props.isLink2Enabled} />
      <LinkItem number="3" condition="all Items are checked" link={props.link} isEnabled={props.isLink3Enabled} />
      <LinkItem number="4" condition="no items are checked" link={props.link} isEnabled={props.isLink4Enabled} />
      <LinkItem number="5" condition="all odd items are checked" link={props.link} isEnabled={props.isLink5Enabled} />
      <LinkItem number="6" condition="all even items are checked" link={props.link} isEnabled={props.isLink6Enabled} />
      <LinkItem number="7" condition="at least 1 item is checked" link={props.link} isEnabled={props.isLink7Enabled} />
    </ol>
  </Div>
)
