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
        <input id="location" type="text" class="field" placeholder="Add location" />
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
        <input id="guests" type="number" class="field" placeholder="Add guests" />
      </div>
      <div
        :class="{
          container_open: drawerOpen,
          btn_container_open: drawerOpen,
          container_closed: !drawerOpen,
          btn_container_closed: !drawerOpen
        }"
      >
        <button :class="{ btn_open: drawerOpen, btn_closed: !drawerOpen }">
          <span class="material-icons search_icon">search</span
          ><span v-if="drawerOpen">Search</span>
        </button>
      </div>
      <div class="container_open" v-if="drawerOpen">
        <ol class="locations">
          <li class="location">
            <span class="material-icons location_icon">location_on</span>Helsinki, Finland
          </li>
          <li class="location">
            <span class="material-icons location_icon">location_on</span>Turku, Finland
          </li>
          <li class="location">
            <span class="material-icons location_icon">location_on</span>Oulu, Finland
          </li>
          <li class="location">
            <span class="material-icons location_icon">location_on</span>Vaasa, Finland
          </li>
        </ol>
      </div>
      <div class="container_guest_adder" v-if="drawerOpen">
        <div class="guest_adder_header">
          <h4 class="guest_adder_header_title">Adults</h4>
          <h5 class="guest_adder_header_count">Ages 13 or above</h5>
        </div>
        <div class="guest_adder">
          <button class="plus_min">+</button>
          <div class="number_of_guests">0</div>
          <button class="plus_min">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
let drawerOpen = false
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
