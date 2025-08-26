<!--
part 1
    npm create vite@latest ViteprelimPagas
-->


<script setup>

import { computed, ref } from 'vue';
import { toStars } from '@/main';


const showRatings = ref(true);


const movies = ref ([
  {title: "tarzan", rating: 9},
  {title: "avatar", rating: 8},
  {title: "the life of pi", rating: 10}
])

const averageRating = computed(() => {
  const sum = movies.value.reduce((acc, oten) => acc + oten.rating, 0)
  return (sum/ movies.value.length).toFixed(1)
})
</script>

<template>
  <h2>Movie List</h2>

<ul>
    <li v-for="(oten, index) in movies"
     :key="index"
     :class="oten.rating >= 8 ? 'top-rated' : 'average-rated'">
     {{ oten.title }}, {{ oten.rating }}
     <span v-if="showRatings"> - {{ toStars(oten.rating) }}</span>

    </li>
</ul>


<p>Avarage ratings: {{ averageRating }}</p>
</template>


<style scoped>
.top-rated{
  color: gold;
  font-weight: bold;
}
.average-rated{
  color:gray;
}
</style>

