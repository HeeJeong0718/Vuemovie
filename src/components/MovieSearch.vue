<template>
    <div class="d-flex flex-wrap">
    <b-form @submit.prevent="onSearch()">
    <b-form-input v-model="keyword"  placeholder="search movie"></b-form-input>
  </b-form>
     <div class="movie-card"  style="width:150px;" v-for="movie in searchmovie" v-bind:key="movie.id"> 
    <div v-if="movie" @click="goDetail(movie.id)">
      <b-img :src='`https://image.tmdb.org/t/p/original/${movie.poster_path}`' style="width:125px; height:180px" ></b-img>
      <p>{{movie.id}}</p>
     <p>{{movie.title}}</p>
      <p>{{movie.release_date.split("-")[0]}}</p>

    </div>
  </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
  data() {
    
    return {
      searchmovie : [],
      keyword : ""
  
    }
  },
  /*created(){
    this.onSearch()
  },*/

            methods:{
              onSearch(){
              const keyword = this.keyword;
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=deb18f193043c4b8d4956056c2f48184&language=ko&query='+`${keyword}`+'&page=1&include_adult=false').then((response) => {
                  console.log("keyword" + keyword); 
                  this.searchmovie = response.data.results
                    console.log("searchmovie::" + JSON.stringify(response));
                })
              },
                goDetail(id){
                //return alert("id!!" + id);
                this.$router.push(`detail/${id}`);
              },
            }
}
</script>

