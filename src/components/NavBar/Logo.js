import React from 'react'
import { Images } from '../../constants/images'
import { FillSquare, WhiteMask, FillImage } from './Logo.components'

export function Logo() {
  return (
    <FillSquare>
      <WhiteMask />
      <FillImage source={Images.SlackLogo} />
    </FillSquare>
  )
}
