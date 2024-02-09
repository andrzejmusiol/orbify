import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'
import { Input, Label } from '../styled-components'

type Props = {
  placeholder: string
}

const DatePicker: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()

  return (
    <>
      <Label htmlFor="date">Date created</Label>
      <Input type="date" id="date" placeholder={placeholder} data-testid="date-picker" {...register('date')} />
    </>
  )
}

export default DatePicker
