import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Area, Label } from '../styled-components'

type Props = {
  placeholder: string
}

const TextArea: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()

  return (
    <>
      <Label htmlFor="description">Description of the map</Label>
      <Area placeholder={placeholder} id="description" data-testid="text-area" {...register('description')} />
    </>
  )
}

export default TextArea
