<template>
   <no-ssr>
      <div v-masonry transition-duration="0.2s" item-selector=".item" class="masonry-container">
        <div v-masonry-tile :class="['item',{'gigante':classInex==index}]" :key="index" v-for="(item, index) in blocks" @click="tapp(index)">
          <!-- <p >{{item.text}} - {{index}}</p> -->
		  <img :src="item.src" alt="">
        </div>
      </div>
    </no-ssr>
</template>
<script>

import imagesLoaded from 'imagesloaded'

import NoSSR from 'vue-no-ssr'


var msnry ='';
export default {
   name: '',
   props: [],
   data() {
       return {
		classInex : -1,
		blocks:[
			{text:'1.三月到大理赏樱花不远不近',src:require('@/assets/images/1.png')},
			{text:'4.三月到大理赏樱花不远不近,三月到大理赏樱花不远不近',src:require('@/assets/images/2.png')},
			{text:'7.三月到大理赏樱花不远不近,又近又远,月到大理赏樱花不远不近,又近又远',src:require('@/assets/images/2.png')},
			{text:'2.三月到大理赏樱花不远不近',src:require('@/assets/images/1.png')},
			{text:'5.三月到大理赏樱花不远不近,三月到大理赏樱花不远不近',src:require('@/assets/images/1.png')},
			{text:'8.三月到大理赏樱花不远不近,又近又远',src:require('@/assets/images/2.png')}
		],
		obj_swiper:''

        }
   },
  watch: {},
  components: {
	 'no-ssr': NoSSR		
  },
  computed: {},
  created() {},
  mounted() {
	if (typeof this.$redrawVueMasonry === 'function') {
        this.$redrawVueMasonry()
      }
      
	var that = this

	



 },
  methods: {
	tapp(index){
		let that = this
		that.classInex = index
		let kpkp = [
				{text:'1.三月到大理赏樱花不远不近',src:require('@/assets/images/1.png')},
				{text:'4.三月到大理赏樱花不远不近,三月到大理赏樱花不远不近',src:require('@/assets/images/2.png')},
		]
		that.blocks = that.blocks.concat(kpkp)

	}
  },
  directives:{

  }
}
</script>
<style scoped>
.item{width:24%;}
.gigante{background:pink;}
</style>