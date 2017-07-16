import 'mocha'
import { Observable } from 'rxjs/Observable'
import { TestScheduler } from 'rxjs/testing/TestScheduler'
import 'rxjs/add/observable/of'
import 'rxjs/add/operator/mergeMap'
import { assert } from 'chai'

import connect from '.'

describe('rxjs-websockets', () => {
  let scheduler: TestScheduler
  let expect: typeof scheduler.expectObservable
  let flush: typeof scheduler.flush
  let cold: typeof scheduler.createColdObservable
  beforeEach(() => {
    scheduler = new TestScheduler(assert.deepEqual)
    expect = scheduler.expectObservable.bind(scheduler)
    flush = scheduler.flush.bind(scheduler)
    cold = scheduler.createColdObservable.bind(scheduler)
  })

  it('connects to websocket lazily and retrieves data', () => {
    // TODO: stuff
    flush()
  })
})
