import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setTrue } from 'redux/actions/checkList'
import Div from 'components/core/div'
import ItemList from 'components/itemList'
import LinkList from 'components/linkList'
import { checkListSelector } from 'redux/selectors/checkList'

class CheckListContainer extends Component {
  render(){
    console.log(this.props)
    return (
      <Div>
      <ItemList
        item1Checked={this.props.item1}
        item2Checked={this.props.item2}
        item3Checked={this.props.item3}
        item4Checked={this.props.item4}
        item5Checked={this.props.item5}
        onToggleItem={item => this.props.dispatch(setTrue(item))}
      />
      <LinkList
        link={'www.google.com'}
        isLink1Enabled={this.props.isLink1Enabled}
        isLink2Enabled={this.props.isLink2Enabled}
        isLink3Enabled={this.props.isLink3Enabled}
        isLink4Enabled={this.props.isLink4Enabled}
        isLink5Enabled={this.props.isLink5Enabled}
        isLink6Enabled={this.props.isLink6Enabled}
        isLink7Enabled={this.props.isLink7Enabled}
      />
      </Div>
    )
  }
}

export default connect(state => checkListSelector(state))(CheckListContainer)
