<template>
  <div class="home">
    <MovieSearch></MovieSearch>
    <MovieMain></MovieMain>
    
  </div>
</template>

<script>
// @ is an alias to /src
import MovieMain from '@/components/MovieMain.vue'
import MovieSearch from '@/components/MovieSearch.vue'
export default {
  name: 'HomeView',
  components: {
    MovieMain,
    MovieSearch
  },

}
</script>
