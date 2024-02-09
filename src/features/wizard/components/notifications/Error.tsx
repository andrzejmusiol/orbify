import React, { FC } from 'react'
import { ErrorMessage } from '../styled-components'

type Props = {
  message: string | undefined
}

const Error: FC<Props> = ({ message }) => {
  if (message) return <ErrorMessage>{message}</ErrorMessage>
  return null
}

export default Error
