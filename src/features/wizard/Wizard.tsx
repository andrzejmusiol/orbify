import React from 'react'
import styled from 'styled-components'
import TextInput from './components/text-input/TextInput'
import TextArea from './components/text-area/TextArea'
import DatePicker from './components/date-picker/DatePicker'
import Uploader from './components/uploader/Uploader'

export const WizardWrapper = styled.div`
  max-width: 10rem;
`

const Wizard = () => (
  <WizardWrapper data-testid="wizard">
    <TextInput placeholder="Name..." />
    <TextArea placeholder="Description..." />
    <DatePicker placeholder="Pick a date..." />
    <Uploader />
  </WizardWrapper>
)

export default Wizard
