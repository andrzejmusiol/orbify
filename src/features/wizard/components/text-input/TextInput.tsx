import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, Label } from '../styled-components'

type Props = {
  placeholder: string
}

const TextInput: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()
  return (
    <>
      <Label htmlFor="name">Name of the map</Label>
      <Input
        type="text"
        id="name"
        placeholder={placeholder}
        data-testid="text-input"
        {...register('name', { required: true })}
      />
    </>
  )
}

export default TextInput
