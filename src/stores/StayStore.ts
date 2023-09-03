import { defineStore } from 'pinia'
import stays from '../data/stays.json'

interface Location {
  city: string | null
  country: string | null
}

interface FilterArguments {
  city?: string
  country?: string
  guests?: number
}

export const useStayStore = defineStore('StayStore', {
  state: () => {
    return {
      stays
    }
  },
  getters: {
    filterStays() {
      return (args: FilterArguments) => {
        return this.stays.filter(
          (stay) =>
            (typeof args.city === 'undefined' ||
              stay.city?.toLowerCase().includes(args.city.toLocaleLowerCase())) &&
            (typeof args.country === 'undefined' ||
              stay.country?.toLowerCase().includes(args.country.toLocaleLowerCase())) &&
            (typeof args.guests === 'undefined' || stay.maxGuests >= args.guests)
        )
      }
    },
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
