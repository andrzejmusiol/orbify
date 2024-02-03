/* eslint-disable import/no-extraneous-dependencies */
import { SetupWorker } from 'msw'
import { SetupServer } from 'msw/node'

class ServiceMock {
  public msw: SetupServer | SetupWorker

  constructor(msw: SetupServer | SetupWorker) {
    this.msw = msw
  }
}

export default ServiceMock
