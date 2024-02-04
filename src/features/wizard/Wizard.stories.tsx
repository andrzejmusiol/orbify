import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import WizardServiceMock from '../../test/mocks/WizardServiceMock'
import queryClient from '../../test/lib/tanstack-query'
import browser from '../../test/server/browser'
import Wizard from './Wizard'

const wizardServiceMock = new WizardServiceMock(browser)

export default { title: 'Wizard' }

const renderComponent = () => (
  <QueryClientProvider client={queryClient}>
    <Wizard />
  </QueryClientProvider>
)

const setupDefaultMockData = () => {
  wizardServiceMock.setupGetInfo()
}

export const WizardStory = () => {
  browser.resetHandlers()
  setupDefaultMockData()
  return renderComponent()
}
