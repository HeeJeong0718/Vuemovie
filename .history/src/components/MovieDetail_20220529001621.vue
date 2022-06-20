<template>
  <div id="movie-detail-image"  :style="{'backgroundImage': 'url(https://image.tmdb.org/t/p/original/'+`${movieDetail.poster_path}`+')'  }">

      <div class="d-flex">
        <b-img :src='`https://image.tmdb.org/t/p/original/${movieDetail.poster_path}`' style="height:80vh;" class="mt-2" ></b-img>
        <div class="ml-4 w-75 mt-3">
        <h2>{{movieDetail.title}}</h2>
        <div class="mt-4">
        <p class="overview">{{movieDetail.overview}}</p>
        </div> 
         <p>{{movieDetail.release_date.split("-")[0]}} ㆍ {{movieDetail.vote_average}}  ㆍ{{movieDetail.runtime}}분</p>
        
       <div class="mt-3">
         <div v-if="movieDetail.videos&& movieDetail.videos.results">
           <iframe v-if="movieDetail.videos.results[0]" 
           class="mt-7" 
            width="640" 
            height="360"
            :src="youtube(movieDetail.videos.results[0].key)" frameborder="0" 
            :key="movieDetail.videos.results[0].key">
            
           </iframe>
        </div>
       </div>   
         </div>
       </div>  
  
</div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      movieDetail : {},
    };
  },
   mounted () {
           
            const id =  this.$route.params.id; 
            //const { id } = this.$route.params.id;
            console.log(this.$route.params);
               console.log(this.$route.params.id);
              console.log(this.$route); //경로에 대한 정보 확인가능 param도 알수잇다
              {
                 axios.get('https://api.themoviedb.org/3/movie/'+`${id}`+'?api_key=deb18f193043c4b8d4956056c2f48184&language=ko',{params:{append_to_response:"videos"}})
                 .then((response) => {
                    this.movieDetail = response.data;
                    console.log("movie::" + JSON.stringify(response.data));
                })
            }    
                 
   } ,
  methods:{
    youtube(src){
       return `https://www.youtube.com/embed/${src}`;
    }
  }
            
}
</script>

<style scoped>
#movie-detail-image{
 background-size: cover;
   height: auto;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
#movie-detail-image ::after{
 background-size: cover;
   height: auto;
   position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
   z-index: -1;
   opacity: 0.5;
}

.movieimg{
  opacity: 0.9;
}
* {
  padding:0;
  margin : 0;
}
.genre {
  display: flex;
  align-items: center;
}
.overview{
  font-weight: bold;
  color:white;
}
</style>
