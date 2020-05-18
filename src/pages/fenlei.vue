<template>
   <div class="fenlei">
       <!-- 输入 -->
        <search :inputPlacehoder="search_tip" @searchAjax="searchAjax"></search> 
        <div class="fenleiSection">
            <div class="fenTheme">
                <ul>
                    <li></li>
                </ul>
            </div>
            <div class="fenContain">
                <swiper-c :swiperList="banners" @swiperEve="swiperFn"></swiper-c>
            </div> 
        </div>
    </div>
</template>
<script>
import search from '@/components/search.vue'
import swiperC from '@/components/swiperc.vue'
export default {
   name: 'fenlei',
   props: [],
   data() {
       return {
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
  watch: {},
  components:{
    search,
    swiperC,
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    searchAjax(val){
      if(val){
        console.log('ajax')
      }
    },
    swiperFn(val){
      if(val){
        console.log(val)
      }
    }
  },
}
</script>
<style scoped>
</style>