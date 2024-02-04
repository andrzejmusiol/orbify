import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import queryClient from '../../test/lib/tanstack-query'
import Wizard from './Wizard'

const mountComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Wizard />
    </QueryClientProvider>
  )

describe('<Wizard />', () => {
  it('should render the wizard', async () => {
    mountComponent()

    await screen.findByTestId('wizard')
  })
  it('should render inputs', async () => {
    mountComponent()

    await screen.findByTestId('text-input')
    await screen.findByTestId('text-area')
    await screen.findByTestId('date-picker')
    await screen.findByTestId('file-uploader')
  })
})
