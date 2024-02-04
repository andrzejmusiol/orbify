import React, { FC } from 'react'

type Props = {
  disabled?: boolean
}

const SubmitButton: FC<Props> = ({ disabled }) => (
  <input type="submit" data-testid="submit-button" disabled={disabled} />
)

export default SubmitButton
