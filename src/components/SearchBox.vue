<template>
  <div class="query_container">
    <div :class="{ drawer_open: drawerOpen, drawer_closed: !drawerOpen }">
      <div
        :class="{
          container_open: drawerOpen,
          field_container_open: drawerOpen,
          container_closed: !drawerOpen,
          field_container_closed: !drawerOpen
        }"
      >
        <label for="location" class="lbl" v-if="drawerOpen"> LOCATION </label>
        <input
          id="location"
          type="text"
          class="field"
          placeholder="Add location"
          :value="location || ''"
          readonly
          @click="clickLocation"
        />
      </div>
      <div
        :class="{
          container_open: drawerOpen,
          field_container_open: drawerOpen,
          container_closed: !drawerOpen,
          field_container_closed: !drawerOpen
        }"
      >
        <label for="guests" class="lbl" v-if="drawerOpen"> GUESTS</label>
        <input
          id="guests"
          type="number"
          class="field"
          placeholder="Add guests"
          :value="guests || ''"
          readonly
          @click="clickGuests"
        />
      </div>
      <div
        :class="{
          container_open: drawerOpen,
          btn_container_open: drawerOpen,
          container_closed: !drawerOpen,
          btn_container_closed: !drawerOpen
        }"
      >
        <button :class="{ btn_open: drawerOpen, btn_closed: !drawerOpen }" @click="search">
          <span class="material-icons search_icon">search</span
          ><span v-if="drawerOpen">Search</span>
        </button>
      </div>
      <div class="container_open" v-if="drawerOpen && openLocations">
        <ol class="locations">
          <li
            class="location"
            v-for="({ city, country }, index) in locations"
            :key="index"
            :data-city="city"
            :data-country="country"
            @click="toggleLocationSelection"
          >
            <span class="material-icons location_icon">location_on</span>
            {{ city }}, {{ country }}
          </li>
        </ol>
      </div>
      <div class="container_guest_adder" v-if="drawerOpen && openGuestAdder">
        <div class="guest_adder_header">
          <h4 class="guest_adder_header_title">Guests</h4>
          <h5 class="guest_adder_header_count">All ages</h5>
        </div>
        <div class="guest_adder">
          <button class="plus_min" @click="plus">+</button>
          <div class="number_of_guests">{{ !guests ? 0 : guests }}</div>
          <button class="plus_min" @click="minus">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useStayStore } from '@/stores/StayStore'
import { type FilterArguments } from '@/stores/FilterArguments'

const emit = defineEmits<{
  (e: 'search', FilterArguments: FilterArguments): void
}>()
const drawerOpen = ref(false)

const search = () => {
  if (drawerOpen.value) {
    const [city, country] = location.value.split(',').map((s) => s.trim())
    emit('search', { city, country, guests: guests.value })
  }
  drawerOpen.value = !drawerOpen.value
}

const store = useStayStore()
const locations = store.getLocations(null)

locations.sort((a, b) => {
  if (
    a === null ||
    b === null ||
    a.city === undefined ||
    a.city === null ||
    b.city === undefined ||
    b.city === null ||
    a.country === undefined ||
    a.country === null ||
    b.country === undefined ||
    b.country === null
  )
    throw new Error(`${a} and ${b} both should contain city and country!`)

  if (a.city > b.city) {
    return 1
  } else if (a.city < b.city) {
    return -1
  }
  if (a.country > b.country) {
    return 1
  } else if (a.country < b.country) {
    return -1
  }
  return 0
})

const openLocations = ref(false)
const location = ref('')
const openGuestAdder = ref(false)
const guests = ref(0)

const clickLocation = () => {
  drawerOpen.value = true
  openLocations.value = true
  openGuestAdder.value = false
}
const clickGuests = () => {
  drawerOpen.value = true
  openLocations.value = false
  openGuestAdder.value = true
}

const toggleLocationSelection = (event: Event) => {
  const city = (event.target as HTMLElement).dataset.city
  const country = (event.target as HTMLElement).dataset.country
  location.value = `${city}, ${country}`
}

const plus = () => {
  ++guests.value
}

const minus = () => {
  if (guests.value > 0) --guests.value
  else guests.value = 0
}
</script>

<style locale>
* {
  box-sizing: border-box;
}

body {
  font-family: 'Mulish', sans-serif;
}

.query_container {
  container-type: inline-size;
  width: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  appearance: textfield;
}

.drawer_open {
  display: grid;
  grid-template-columns: 5fr 5fr 5fr;
  grid-row-gap: 1rem;
}

@container (max-width: 765px) {
  .drawer_open {
    grid-template-columns: 1fr;
    grid-template-rows: 4.2rem 4.2rem 2fr 2fr 1fr;
  }
}

.container_open {
  display: grid;
}

.btn_container_open {
  justify-items: center;
  display: grid;
}

@container (max-width: 765px) {
  .btn_container_open {
    order: 2;
  }
}

.field_container_open {
  box-shadow: 0px 1px 6px 0px #0000001a;
  padding: 0.4rem 1rem;
  border-radius: 12px;
}

.field_container_open:focus-within {
  outline: 1px solid #333333;
}

.lbl {
  font-size: 0.625rem;
  font-weight: 800;
}

.field {
  height: 1.4rem;
  border: none;
  font-size: 0.875rem;
  font-weight: 400;
  color: #333333;
  width: 100%;
}

.field:focus {
  outline: none;
}

.btn_open {
  box-shadow: 0px 1px 6px 0px #0000001a;
  display: grid;
  align-items: center;
  gap: 0.4rem;
  grid-auto-flow: column;
  height: 3rem;
  padding: 0 1rem;
  background: #eb5757e5;
  cursor: pointer;
  border: none;
  border-radius: 12px;
  font-size: 0.875rem;
  font-weight: 700;
  color: #f2f2f2;
}

.btn_open:active {
  background: #ee4242;
}

.locations {
  margin: 0;
  padding: 1rem;
  font-size: 0.875rem;
  font-weight: 400;
  color: #4f4f4f;
  list-style-type: none;
}

.location {
  display: grid;
  justify-content: left;
  align-items: center;
  column-gap: 0.4rem;
  grid-auto-flow: column;
}

.location:hover {
  background: #eb575720;
  cursor: pointer;
}

.guest_adder_header {
  padding: 1rem 1rem 0 1rem;
  font-size: 0.875rem;
}

.guest_adder_header_title {
  margin: 0;
  font-weight: 800;
}

.guest_adder_header_count {
  margin: 0;
  font-weight: 400;
}

.guest_adder {
  display: grid;
  justify-content: flex-start;
  gap: 0.6rem;
  grid-auto-flow: column;
  padding: 0.8rem 1rem;
  font-size: 1rem;
  font-weight: 800;
  color: #333333;
}

.plus_min {
  justify-items: center;
  display: grid;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  background: #fff;
  cursor: pointer;
  border: 1px solid #828282;
  border-radius: 6px;
  color: #828282;
}

.plus_min:active {
  background: #969696c2;
  color: #fff;
}

.number_of_guests {
  height: 1rem;
}

.drawer_closed {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  box-shadow: 0px 1px 6px 0px #0000001a;
  border-radius: 12px;
}

@container (max-width: 380px) {
  .drawer_closed {
    grid-template-columns: 5fr 2fr 1fr;
  }
}

.container_closed {
  display: grid;
  align-items: center;
  height: 3.5rem;
}

.container_closed:not(:last-child) {
  border-right: #f2f2f2 solid 1px;
}

.btn_container_closed {
  justify-items: center;
  display: grid;
}

.field_container_closed {
  padding: 0.4rem 1rem;
}

.field_container_closed:focus-within {
  outline: 1px solid #333333;
  border-radius: 16px;
}

.btn_closed {
  display: grid;
  align-items: center;
  grid-auto-flow: column;
  color: #eb5757e5;
  cursor: pointer;
  border: none;
  font-size: 0.875rem;
  font-weight: 700;
  background: #fff;
}

.btn_closed:active {
  background: #f2f2f2;
}
</style>
