<template>
  <div class="home">
    <MovieSearch></MovieSearch>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import MovieSearch from '@/components/MovieSearch.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    MovieSearch
  },

}
</script>
