<template>
  <div class="staylist">
    <StayCard v-for="stay in stays" :stay="stay" :key="stay.title" />
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

<style scoped></style>
