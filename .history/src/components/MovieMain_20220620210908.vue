<template>
<div class="d-flex flex-wrap hello">
 <!-- <b-form @submit.prevent="onSearch()">
    <b-form-input v-model="keyword"  placeholder="search movie"></b-form-input>
  </b-form>-->
  <MovieText :text="'nowPlaying'"></MovieText>
  <MovieList :movielist="movieList"></MovieList>
    <MovieText :text="'Popular'"></MovieText>
    <MovieList :movielist="popularList"></MovieList>
    <MovieText :text="'upComing'"></MovieText>
    <MovieList :movielist="upComingList"></MovieList>
    
  </div> 
</template>

<script>
import axios from 'axios'
import MovieText from "../components/MovieText";
import MovieList from "../components/MovieList";
export default {
  name: 'HelloWorld',
  components:{
    MovieText,MovieList
  },

  data() {
     const BASE_URL = "https://image.tmdb.org/t/p/original/";
    return {
      movieList : [],
      popularList : [],
      upComingList : [],
      BASE_URL,
      popular : {},
     
     // searchmovie : [],
     // keyword : ""
  
    }
  },
  /*created(){
    this.onSearch()
  },*/
   mounted () {
  
        
           const  popular  = 'https://api.themoviedb.org/3/movie/popular?api_key=deb18f193043c4b8d4956056c2f48184&language=ko&page=1%C2%AEion=KR'
           const  nowPlaying ='https://api.themoviedb.org/3/movie/now_playing?api_key=deb18f193043c4b8d4956056c2f48184&language=ko&page=1%C2%AEion=KR'    
            const  upComing ='https://api.themoviedb.org/3/movie/upcoming?api_key=deb18f193043c4b8d4956056c2f48184&language=ko&page=1%C2%AEion=KR'    
              axios.get(nowPlaying).then((response) => {
                    this.movieList = response.data.results
                    console.log("movie::" + JSON.stringify(response.data.results));
                }),
                
               axios.get(popular).then((response) => {
                    this.popularList = response.data.results
                    console.log("moviepopular::" + JSON.stringify(response.data.results));
                }),
                 axios.get(upComing).then((response) => {
                    this.upComingList = response.data.results
                    console.log("upComingList::" + JSON.stringify(response.data.results));
                })
               
               
            },
            methods:{
              image(img){
                 return `https://image.tmdb.org/t/p/original/${img}`;
              },
              goDetail(id){
                //return alert("id!!" + id);
                this.$router.push(`detail/${id}`);
              },
              onSearch(){
              const keyword = this.keyword;
                axios.get('https://api.themoviedb.org/3/search/movie?api_key=deb18f193043c4b8d4956056c2f48184&language=ko&query='+`${keyword}`+'&page=1&include_adult=false').then((response) => {
                  console.log("keyword" + keyword); 
                  this.searchmovie = response.data.results
                    console.log("searchmovie::" + JSON.stringify(response));
                })
              },

            }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.clock {
    display: inline-block;
    font-size: 35px;
  }
</style>
