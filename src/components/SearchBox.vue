<template>
  <div class="drawer">
    <div class="search-container">
      <div class="input-container">
        <input type="search" name="locations" id="locations" placeholder="Add Locations" />
      </div>
      <div class="input-container">
        <input type="number" name="guests" id="guests" placeholder="Add guests" min="1" />
      </div>
      <div class="input-container"><button class="btn-sm material-icons">search</button></div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style locale>
input {
  border: none;
  outline: none;
  min-height: 3.4rem;
  padding-left: 1rem;
  width: 100%;
  height: 100%;
}

input:hover {
  background: #00000006;
}

.drawer {
  width: 100%;
}

.search-container {
  display: grid;
  grid-auto-flow: column;
  border-radius: 12px;
  border: #0000001a solid 4px;
  box-shadow: 0px 1px 6px 0px #0000001a;
  justify-items: center;
  align-items: center;
}

.input-container {
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  overflow: hidden;
}

.input-container:nth-child(2),
.input-container:last-child {
  border-left: #0000001a solid 2px;
}

.btn-sm {
  border: none;
  background: none;
  height: 100%;
  width: 100%;
}

.btn-sm:hover {
  background: #00000006;
  cursor: pointer;
}

.btn-sm:active {
  background: #0000001a;
}

.material-icons {
  color: #eb5757e5;
  padding: 0 1rem;
}
</style>
