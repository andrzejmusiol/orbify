import React, { FC } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  placeholder: string
}

const DatePicker: FC<Props> = ({ placeholder }) => {
  const { register } = useFormContext()

  return <input type="date" placeholder={placeholder} data-testid="date-picker" {...register('date')} />
}

export default DatePicker
