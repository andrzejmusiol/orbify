import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import styled from 'styled-components'
import WizardServiceMock from '../../test/mocks/WizardServiceMock'
import queryClient from '../../test/lib/tanstack-query'
import browser from '../../test/server/browser'
import Wizard from './Wizard'

const wizardServiceMock = new WizardServiceMock(browser)

export default { title: 'Wizard' }

const StoryWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
`

const renderComponent = () => (
  <QueryClientProvider client={queryClient}>
    <StoryWrapper>
      <Wizard />
    </StoryWrapper>
  </QueryClientProvider>
)

export const WizardStory = () => {
  browser.resetHandlers()
  wizardServiceMock.setupPostMap()
  return renderComponent()
}
