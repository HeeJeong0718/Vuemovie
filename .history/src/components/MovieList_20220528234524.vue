<template>
   <div class="d-flex flex-wrap"> 
    <div id="movielist" v-for="movie in movielist" :key="movie.id">
      <div  @click="goDetail(movie.id)">
      <b-img :src='`https://image.tmdb.org/t/p/original/${movie.poster_path}`' style="width:125px; height:190;"></b-img>
      <p>{{movie.id}}</p>
     <p>{{movie.title}}</p>
      <p>{{movie.release_date.split("-")[0]}}</p>
      </div>
    </div>
  </div>
</template>
<script>

export default{
  //1.무비리스트를 보여주는 템플릿설정
  props : ['movielist'],
  data(){
      return {

      }
  },
  methods:{
       goDetail(id){
                //return alert("id!!" + id);
                alert("id!!" + id);
                this.$router.push(`detail/${id}`);
              }
    }

}

</script>

<style scoped>
#movielist{
  
  margin: 10px
  
}
</style>
