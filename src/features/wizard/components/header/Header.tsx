import React, { FC } from 'react'
import { WizardHeader } from '../styled-components'

type Props = {
  text: string
}

const Header: FC<Props> = ({ text }) => <WizardHeader>{text}</WizardHeader>

export default Header
