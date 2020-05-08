<template>
  <div id="app">
    <!-- 输入 -->
    <search :inputPlacehoder="search_tip" @searchAjax="searchAjax"></search>
    <router-view/>
    
  </div>
</template>
<script>
import search from '@/components/seach.vue'
export default {
  name: 'App',
  data () {
    return {
      search_tip: '限时特惠2折6折'
    }
  },
  components:{search},
  methods:{
    searchAjax(val){
      if(val){
        console.log('ajax')
      }
    }
  }
}
</script>
<style>
html,body{width:100%;max-width:750px;margin:auto;}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  width:100%;
  font-size:20px;
}

</style>
