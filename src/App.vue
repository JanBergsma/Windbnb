<template>
  <header>
    <img src="logo.svg" alt="Logo" />
    <SearchBox class="searchbox" @search="handleSearch" />
  </header>
  <div class="body">
    <div class="title">
      <h2>Stays {{ filterArgs.country ? `in ${filterArgs.country}` : '' }}</h2>
      <p>{{ stays.length }}+ stays</p>
    </div>
    <StayCardList class="staycardlist" :stays="stays" />
  </div>
  <footer><p>created by username - devChallenges.io</p></footer>
</template>

<script setup lang="ts">
import SearchBox from './components/SearchBox.vue'
import StayCardList from './components/StayCardList.vue'

import { computed, ref, type Ref } from 'vue'
import type { FilterArguments } from './stores/FilterArguments'
import { useStayStore } from '@/stores/StayStore'

const drawerOpen = ref(false)
const filterArgs: Ref<FilterArguments> = ref({})
const store = useStayStore()
const stays = computed(() => store.filterStays(filterArgs.value))
const drawerWidth = computed(() => (drawerOpen.value ? '100%' : 'min(50%, 400px)'))
const handleSearch = (a: FilterArguments) => {
  filterArgs.value = a
  drawerOpen.value = !Object.keys(a).length
}
</script>

<style scoped>
header {
  width: 100%;
  padding: 0.8rem 1.2rem;
}

.searchbox,
.staycardlist {
  padding: 1.8rem 0.6rem;
}

@media (width > 780px) {
  header {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 2rem;
  }
  .searchbox,
  .staycardlist {
    padding: 0.4rem 0.6rem;
  }
  .searchbox {
    width: v-bind(drawerWidth);
  }
}

.title {
  font-family: 'Montserrat', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
}

footer {
  font-family: Montserrat, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 17px;
  letter-spacing: 0;
  margin-top: 5em;
  text-align: center;
}
</style>
