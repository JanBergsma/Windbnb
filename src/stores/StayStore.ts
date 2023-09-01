import { defineStore } from 'pinia'
import stays from '../data/stays.json'

export const useStayStore = defineStore('StayStore', {
  state: () => {
    return {
      stays
    }
  }
  // action
  // getters
})
