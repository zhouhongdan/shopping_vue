<template>
   <div v-swiper:mySwiper="swiperOption">
    <div class="swiper-wrapper">
      <div class="swiper-slide"  v-for="(item,index) in banners" :key="index" :style="{width:item.width}" @click="blink(item.text)">
        <!-- <img :src="banner"> -->
        <span>{{item.text}}</span>
      </div>
    </div>
    <div class="swiper-pagination"></div>
  </div>
</template>
<script>
export default {
   name: '',
   props: ['swiperList'],
   data() {
       return {
            banners:this.swiperList,
            swiperOption: {
                pagination: {
                    el: '.swiper-pagination',
                    clickable :true
                },
                autoHeight:true,
                slidesPerView : 'auto' ,//根据slides的宽度来设定数量
                centeredSlides : true, 
                centeredSlidesBounds: true,//使得第一个和最后一个Slide 始终贴合边缘。
                // ...
                // autoplay:{
                //    delay:5000,
                //    disableOnInteraction: false,
                // },
            } 
        }
   },
  watch: {},
  components: {},
  computed: {},
  created() {},
  mounted() { 
      //  console.log('Current Swiper instance object', this.mySwiper)
    //   this.mySwiper.slideTo(3, 1000, false)  
  },
  methods: {
    blink(val){
        // console.log(val)
        let that = this;
        that.$emit('swiperEve',that.val)
    }     
  },
}
</script>
<style scoped> 
.swiper-slide{display: flex;justify-content: center;align-items: center;padding:20px 0 40px;width:100px;}

</style>