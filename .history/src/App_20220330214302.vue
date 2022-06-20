<template>
  <div id="app">
    <nav id="nav">
      <div class="clock">
    <p>현재시간:{{now}}</p>
    </div>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view/>
  </div>
</template>
<script>
export default{
 data(){
   return {
       now : "00:00:00"
   }
 },
 mounted(){
      this.setTime();
 },
 methods:{
            //시계만들기
              setTime(){
                setInterval(() => {
                  const date = new Date()
                  this.now = date.getHours() + 
                  ":" + this.checkSingleDigit(date.getMinutes()) + ":" + 
                        this.checkSingleDigit(date.getSeconds());
                },1000)
              },
              //1의자리로 시작하는거 0붙여주기
              checkSingleDigit(digit){
                return ('0' + digit).slice(-2)
              }
 }
}
</script>

<style>
* {
  color: #ffffff;
  margin:0;
  padding:0;
}
body{
  background-color: rgb(20, 20, 20);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
    background-color: rgb(20, 20, 20);
}
#nav {
  text-align: center;
  padding: 20px;
  position: relative;
  z-index: 99;
  background: black;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
.router-link-exact-active {
  color: white !important;
}
.clock {
    font-size: 35px;
  }
</style>
