import React from 'react'
import { gradientPurple } from '../constants'

const AppWrap = (Component) => () => {
  return (
    <div className={`${gradientPurple} `}>
      <Component />
    </div>
  )
}

export default AppWrap;