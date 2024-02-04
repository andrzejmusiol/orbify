import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  placeholder: string
}

const TextInput: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()
  return (
    <input
      type="text"
      placeholder={placeholder}
      data-testid="text-input"
      {...register('name', { required: true, maxLength: 1 })}
    />
  )
}

export default TextInput
