import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './style.scss'

export default props => <p className={classNames('text', props.addStyle)} {..._.omit(props, 'addStyle')} />
