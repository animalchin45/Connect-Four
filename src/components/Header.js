import React from 'react'

import HeaderBtn from './Buttons/HeaderBtn'
import Logo from '../assets/images/logo.svg'

function Header() {
  return (
    <div className='header'>
      <HeaderBtn text={'menu'} />
      <Logo />
      <HeaderBtn text={'restart'} />
    </div>
  )
}

export default Header
