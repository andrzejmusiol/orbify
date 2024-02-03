import React from 'react'
import { QueryClientProvider } from '@tanstack/react-query'
import { render, screen } from '@testing-library/react'
import queryClient from '../test/lib/tanstack-query'
import Wizard from './Wizard'

const mountComponent = () =>
  render(
    <QueryClientProvider client={queryClient}>
      <Wizard />
    </QueryClientProvider>
  )

describe('Communication side panel', () => {
  it('should render communication button', async () => {
    mountComponent()

    await screen.findByTestId('wizard')
  })
})
