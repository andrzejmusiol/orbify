import React, { FC } from 'react'

type Props = {
  placeholder: string
}

const DatePicker: FC<Props> = ({ placeholder }) => (
  <input type="date" placeholder={placeholder} data-testid="date-picker" />
)

export default DatePicker
