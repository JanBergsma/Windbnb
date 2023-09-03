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
    expect(stayStore.getLocations('ams')).toStrictEqual(stayStore.getLocations('Ams'))
  })
  it('filter properties by city', () => {
    const stayStore = useStayStore()
    expect(stayStore.filterStays({ city: 'Cy' })).toStrictEqual([
      {
        city: 'Cyprus',
        country: 'Cyprus',
        superHost: true,
        title:
          'My unique artistic comfortable two bedroom apartment with fireplace and green terrace    comfortably fits five and is centrally located on a quiet street, just two blocks from \u2018Sygrou-Fix\u2019 metro station.',
        rating: 4.74,
        maxGuests: 5,
        type: 'Entire condo',
        beds: 3,
        photo: 'https://a0.muscache.com/pictures/9616781/ace877e0_original.jpg'
      }
    ])
  })
  it('filter properties by country', () => {
    const stayStore = useStayStore()
    expect(stayStore.filterStays({ country: 'Cy' })).toStrictEqual([
      {
        city: 'Cyprus',
        country: 'Cyprus',
        superHost: true,
        title:
          'My unique artistic comfortable two bedroom apartment with fireplace and green terrace    comfortably fits five and is centrally located on a quiet street, just two blocks from \u2018Sygrou-Fix\u2019 metro station.',
        rating: 4.74,
        maxGuests: 5,
        type: 'Entire condo',
        beds: 3,
        photo: 'https://a0.muscache.com/pictures/9616781/ace877e0_original.jpg'
      }
    ])
  })
  it('filter properties by guests', () => {
    const stayStore = useStayStore()
    expect(stayStore.filterStays({ guests: 10 })).toStrictEqual([
      {
        city: 'Helsinki',
        country: 'Finland',
        superHost: true,
        title: 'Arty interior in 1900 wooden house',
        rating: 4.5,
        maxGuests: 10,
        type: 'Entire house',
        beds: 6,
        photo:
          'https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80'
      },
      {
        city: 'Helsinki',
        country: 'Finland',
        superHost: false,
        title: 'Beautiful and comfortable old wooden house',
        rating: 4.63,
        maxGuests: 10,
        type: 'Entire house',
        beds: null,
        photo:
          'https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80'
      }
    ])
  })
  it('filter properties with no arguments', () => {
    const stayStore = useStayStore()
    expect(stayStore.filterStays({})).toStrictEqual(stayStore.$state.stays)
  })
})
