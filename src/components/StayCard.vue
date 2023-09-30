<template>
  <figure>
    <img :src="stay.photo" :alt="stay.title" />
    <figcaption>
      <div class="stay-info">
        <div v-if="stay.superHost" class="superhost">SUPER HOST</div>
        <div class="type">
          {{ stay.type }}.
          <span v-if="stay.beds">{{ stay.beds }} {{ stay.beds === 1 ? 'bed' : 'beds' }}</span>
        </div>
        <div class="rating"><span class="material-icons">star</span>{{ stay.rating }}</div>
      </div>
      <h3>{{ stay.title }}</h3>
    </figcaption>
  </figure>
</template>

<script lang="ts" setup>
import { type Stay } from '../stores/Stay'

export interface Props {
  stay: Stay
}
defineProps<Props>()
</script>

<style scoped>
figure {
  display: 100%;
  margin: auto;
}

img {
  width: 100%;
  aspect-ratio: 4/3;
  object-fit: cover;
  object-position: bottom;
  border-radius: 7.5%;
}

figcaption {
  margin-top: 1rem;
  line-height: 1.2rem;
}

.stay-info {
  display: grid;
  grid-auto-flow: column;
  font-size: 0.75rem;
  justify-content: space-between;
  align-items: center;
}
.superhost {
  font-weight: 700;
  font-size: 0.625rem;
  outline: solid 2px;
  border-radius: 20px;
  padding: 0.2rem 0.4rem;
}
.type {
  color: #828282;
}
.rating {
  display: grid;
  grid-auto-flow: column;
  align-items: center;
}
.material-icons {
  color: #eb5757b8;
}
h3 {
  font-size: 0.875rem;
  font-weight: 600;
  color: #333333;
}
</style>
