import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  placeholder: string
}

const TextArea: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()

  return <textarea placeholder={placeholder} data-testid="text-area" {...register('description')} />
}

export default TextArea
