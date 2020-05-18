<template>
  <div id="app">
    <!-- 输入 -->
    <search :inputPlacehoder="search_tip" @searchAjax="searchAjax"></search>
    <router-view/>
    <swiper-c :swiperList="banners" @swiperEve="swiperFn"></swiper-c>
    <pobuliu></pobuliu>
    <div @click="linkfenlei">分类按钮</div>
  </div>
</template>
<script>

import search from '@/components/search.vue'
import swiperC from '@/components/swiperc.vue'
import pobuliu from '@/components/pobuliu.vue'



export default {
  name: 'App',
  components:{
    search,
    swiperC,
    pobuliu

  },
  data () {
    return {
      search_tip: '限时特惠2折6折',
      banners: [
                {text:'苹果',width:'750px'},
                {text:'banner',width:'750px'},
                {text:'origin',width:'750px'},
                {text:'苹果',width:'750px'},
                {text:'banner',width:'750px'},
                {text:'origin',width:'750px'}
            ],
    }
  },
  computed:{
    
  },
  methods:{
    searchAjax(val){
      if(val){
        console.log('ajax')
      }
    },
    swiperFn(val){
      if(val){
        console.log(val)
      }
    },
    linkfenlei(){
      this.$router.push()
    }
  },
  mounted() {
    
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
.pliu{width:100%; height:250px;display: flex;flex-flow: column wrap;justify-content: flex-start;align-items: flex-start;}
.pliu>li{width:50%;break-inside: avoid;/*  ←在制作手机站瀑布流时候，会出现图片错乱，请使用这个属性：避免元素内部断行并产生新列；} */
  }
.pliu>li>img{display: block;width:100%;height: auto;padding-bottom:20px;border:1px solid red;}
</style>
