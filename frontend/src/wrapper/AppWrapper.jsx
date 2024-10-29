import React from 'react'

const AppWrap = (Component) => () => {
  return (
    <div className='bg-gradient-to-bl from-slate-900 via-purple-900 to-slate-900 background-color: #1c1678;
background-image: radial-gradient(at 80% 31%, #1c1678 0%, transparent 60%), radial-gradient(at 99% 41%, #8576ff 0%, transparent 50%), radial-gradient(at 5% 59%, #7bc9ff 0%, transparent 40%), radial-gradient(at 27% 40%, #a3ffd6 0%, transparent 30%); p-4'>
      <Component />
    </div>
  )
}

export default AppWrap