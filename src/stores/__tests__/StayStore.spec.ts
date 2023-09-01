import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useStayStore } from '../StayStore'

describe('Counter Store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('get state', () => {
    const stayStore = useStayStore()
    expect(stayStore.$state).toBeDefined()
    expect(stayStore.$state.stays).toBeDefined()
    expect(stayStore.$state.stays).toBeInstanceOf(Array)
  })
})
