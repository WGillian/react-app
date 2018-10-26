import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './style.scss'

export default props => {
  const filteredProps = _.omit(props, 'addStyle')
  return <div className={classNames('coreDiv', props.addStyle)} {...filteredProps} />
}
