import React, { Component } from 'react'
import { connect } from 'react-redux'
import { toggleItem } from 'redux/actions/checkList'
import Div from 'components/core/div'
import ItemList from 'components/itemList'
import LinkList from 'components/linkList'
import { checkListSelector } from 'redux/selectors/checkList'

class CheckListContainer extends Component {
  render(){
    return (
      <Div>
        <ItemList
          itemIds={this.props.itemIds}
          selectedItems={this.props.selectedItems}
          onToggleItem={item => this.props.dispatch(toggleItem(item))}
        />
        <LinkList
          link={'www.google.com'}
          links={this.props.links}
        />
      </Div>
    )
  }
}

export default connect(state => checkListSelector(state))(CheckListContainer)
