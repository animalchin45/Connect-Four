import React from 'react'

import SmallPill from './Buttons/SmallPill'
import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='header'>
      <SmallPill text={'menu'} />
      <Logo />
      <SmallPill text={'restart'} />
    </div>
  )
}

export default Header
