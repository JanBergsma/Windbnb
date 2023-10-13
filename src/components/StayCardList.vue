<template>
  <div class="staylist-container">
    <div class="staylist">
      <StayCard v-for="stay in stays" :stay="stay" :key="stay.title" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import StayCard from './StayCard.vue'
import { type Stay } from '../stores/Stay'

export interface Props {
  stays: Array<Stay>
}
defineProps<Props>()
</script>

<style scoped>
* {
  box-sizing: border-box;
}

StayCard {
  width: 100%;
}
.staylist-container {
  container-type: inline-size;
}

@container (min-width: 780px) {
  .staylist {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: repeat(auto, 1fr);
    gap: 1.6rem;
  }
}
</style>
