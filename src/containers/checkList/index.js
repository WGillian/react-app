import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleItem } from 'redux/actions/checkList'
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
        itemIds={this.props.itemIds}
        selectedItems={this.props.selectedItems}
        onToggleItem={item => this.props.dispatch(toggleItem(item))}
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
