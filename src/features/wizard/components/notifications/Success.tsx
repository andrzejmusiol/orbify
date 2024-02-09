import React, { FC } from 'react'
import { SuccessMessage } from '../styled-components'

type Props = {
  message: string | undefined
}

const Success: FC<Props> = ({ message }) => {
  if (message) return <SuccessMessage>{message}</SuccessMessage>
  return null
}

export default Success
