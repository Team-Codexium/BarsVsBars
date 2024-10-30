import React from 'react'
import { gradientPurple } from '../constants'

const AppWrap = (Component) => () => {
  return (
    <div className={`${gradientPurple} p-4`}>
      <Component />
    </div>
  )
}

export default AppWrap