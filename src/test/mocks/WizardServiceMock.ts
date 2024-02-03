import { rest } from 'msw'

import ServiceMock from '../ServiceMock'

class WizardServiceMock extends ServiceMock {
  setupGetInfo = (response = 'test'): void => {
    this.msw.use(rest.get('/api/test', (req, res, ctx) => res(ctx.delay(0), ctx.status(200), ctx.json(response))))
  }
}

export default WizardServiceMock
