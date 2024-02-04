import { rest } from 'msw'

import ServiceMock from '../ServiceMock'

class WizardServiceMock extends ServiceMock {
  setupPostMap = (statusCode = 200): void => {
    this.msw.use(rest.post('/api/map', (req, res, ctx) => res(ctx.delay(0), ctx.status(statusCode))))
  }
}

export default WizardServiceMock
