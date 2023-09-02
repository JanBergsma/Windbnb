import { setActivePinia, createPinia } from 'pinia'
import { beforeEach, describe, expect, it } from 'vitest'

import { useStayStore } from '../StayStore'

describe('Counter Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('get state', () => {
    const stayStore = useStayStore()
    expect(stayStore.$state).toBeDefined()
    expect(stayStore.$state.stays).toBeDefined()
    expect(stayStore.$state.stays).toBeInstanceOf(Array)
  })

  it('get locations by city and country', () => {
    const stayStore = useStayStore()
    expect(stayStore.getLocations('Cy')).toStrictEqual([{ city: 'Cyprus', country: 'Cyprus' }])
    expect(stayStore.getLocations('cy')).toStrictEqual([{ city: 'Cyprus', country: 'Cyprus' }])
    expect(stayStore.getLocations('oul')).toStrictEqual([{ city: 'Oulu', country: 'Finland' }])
    expect(stayStore.getLocations('Finland')).toHaveLength(4)
  })
})
