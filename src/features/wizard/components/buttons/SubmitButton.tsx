import React, { FC } from 'react'
import { Button } from '../styled-components'

type Props = {
  disabled?: boolean
}

const SubmitButton: FC<Props> = ({ disabled }) => (
  <Button type="submit" data-testid="submit-button" disabled={disabled}>
    Send
  </Button>
)

export default SubmitButton
