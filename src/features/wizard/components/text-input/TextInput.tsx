import React, { FC } from 'react'

type Props = {
  placeholder: string
}

const TextInput: FC<Props> = ({ placeholder }) => (
  <input type="text" placeholder={placeholder} data-testid="text-input" />
)

export default TextInput
