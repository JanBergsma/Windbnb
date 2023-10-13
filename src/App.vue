<template>
  <header>
    <img src="logo.svg" alt="Logo" />
    <SearchBox class="searchbox" @search="handleSearch" />
  </header>
  <div class="body">
    <div class="title">
      <h2>Stays in Finland</h2>
      <p>12+ stays</p>
    </div>
    <StayCardList class="staycardlist" :stays="stays" />
  </div>
</template>

<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import StayCardList from './components/StayCardList.vue'

import { computed, ref, type Ref } from 'vue'
import type { FilterArguments } from './stores/FilterArguments'
import { useStayStore } from '@/stores/StayStore'

const openDrwaer = ref(false)
const filterArgs: Ref<FilterArguments> = ref({})
const store = useStayStore()
const stays = computed(() => store.filterStays(filterArgs.value))
const handleSearch = (a: FilterArguments) => {
  console.log(a)
  filterArgs.value = a
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 0.8rem 0.6rem;
}

.searchbox,
.staycardlist {
  padding: 1.8rem 0.6rem;
}

.title {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
