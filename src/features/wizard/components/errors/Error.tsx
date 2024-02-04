import React, { FC } from 'react'

type Props = {
  message: string | undefined
}

const Error: FC<Props> = ({ message }) => {
  if (message) return <div>{message}</div>
  return null
}

export default Error
