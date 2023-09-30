<template>
  <div class="drawer">
    <fieldset>
      <label for="location" class="location">
        <input type="text" name="location" id="location" />
      </label>
      <label for="guests" class="guests">
        <input type="number" name="guests" id="guests" />
      </label>
      <div class="btn-container">
        <button class="btn" type="button">Click Me!</button>
      </div>
    </fieldset>
  </div>
</template>

<script lang="ts" setup>
let drawerOpen = false
</script>

<style locale>
* {
  outline: red solid 1px;
  box-sizing: border-box;
}
.drawer {
  display: grid;
  background: greenyellow;
}

input {
  color: orange;
}

label {
  color: blue;
}

.btn-container {
  background: yellow;
  width: 100%;
}

.btn {
  background: #eb5757e5;
  border: none;
}
</style>
