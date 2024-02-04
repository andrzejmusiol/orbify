import React, { FC } from 'react'

type Props = {
  placeholder: string
}

const TextArea: FC<Props> = ({ placeholder }) => <textarea placeholder={placeholder} data-testid="text-area" />

export default TextArea
