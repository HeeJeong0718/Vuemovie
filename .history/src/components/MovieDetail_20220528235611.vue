<template>
   <div class="movie-detail-image" :style="{ 'backgroundImage': 'url(https://image.tmdb.org/t/p/original/'+`${movieDetail.poster_path}`+')' }">
    
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
   height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 0;
}
* {
  padding:0;
  margin : 0;
}
.genre {
  display: flex;
  align-items: center;
}
</style>
