<template>
  <h1>{{ props.stay }}</h1>
</template>

<script lang="ts" setup>
import { type Stay } from '../stores/Stay'

export interface Props {
  stay: Stay
}
const props = defineProps<Props>()
</script>

<style scoped>
h1 {
  background-color: red;
  color: green;
}
</style>
