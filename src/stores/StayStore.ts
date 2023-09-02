import { defineStore } from 'pinia'
import stays from '../data/stays.json'

interface Location {
  city: string | null
  country: string | null
}

export const useStayStore = defineStore('StayStore', {
  state: () => {
    return {
      stays
    }
  },
  getters: {
    getLocations() {
      return (searchTerm: string): Location[] => {
        searchTerm = searchTerm.toLowerCase()
        return Array.from(
          new Set(
            this.stays
              .filter(
                (stay) =>
                  stay.city &&
                  stay.country &&
                  (stay.city.toLowerCase().includes(searchTerm) ||
                    stay.country.toLowerCase().includes(searchTerm))
              )
              .map((stay) =>
                JSON.stringify({
                  city: stay.city,
                  country: stay.country
                })
              )
          )
        ).map((stay) => JSON.parse(stay))
      }
    }
  }
})
