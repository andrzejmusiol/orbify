import React, { Suspense } from 'react'
import type { GlobalProvider } from '@ladle/react'
import worker from '../src/test/server/browser'

worker.start()

export const Provider: GlobalProvider = ({ children }) => (
  <>
    <link rel="stylesheet" type="text/css" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
    <Suspense fallback="">{children}</Suspense>
  </>
)
