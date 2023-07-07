import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import TurnMarker from './TurnMarker'

function Footer() {
  const { winner } = useSelector((state) => state.game)

  const [footerFill, setFooterFill] = useState({ backgroundColor: '#5c2dd5' })

  useEffect(() => {
    if (winner == 1) {
      setFooterFill({ backgroundColor: '#fd6687' })
    } else if (winner == 2) {
      setFooterFill({ backgroundColor: '#ffce67' })
    } else {
      setFooterFill({ backgroundColor: '#5c2dd5' })
    }
  }, [winner])

  return (
    <div className='footer'>
      <TurnMarker />
      <div className='footer__fill' style={footerFill}></div>
    </div>
  )
}

export default Footer
