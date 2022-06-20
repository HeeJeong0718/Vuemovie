<template>
  <div class="home">
    <MovieSearch></MovieSearch>

    
  </div>
</template>

<script>
// @ is an alias to /src

import MovieSearch from '@/components/MovieSearch.vue'
export default {
  name: 'HomeView',
  components: {
  
    MovieSearch
  },

}
</script>
