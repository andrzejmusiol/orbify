import { rest } from 'msw'

import ServiceMock from '../ServiceMock'
import { AOI, FromData } from '../../features/types'

class WizardServiceMock extends ServiceMock {
  setupPostMap = (statusCode = 200): void => {
    this.msw.use(
      rest.post('/api/map', async (req, res, ctx) => {
        const body: FromData = await req.json()
        const parsedData: AOI = JSON.parse(body.aoi)
        if (parsedData.geometry.coordinates.length) {
          return res(ctx.delay(0), ctx.status(statusCode))
        }
        return res(ctx.delay(0), ctx.status(400))
      })
    )
  }
}

export default WizardServiceMock
