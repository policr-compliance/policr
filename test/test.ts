import { tap, expect } from 'tapbundle'

import * as myModule from '../ts/index'

tap.test('first test', async () => {
  myModule
})

tap.start()
