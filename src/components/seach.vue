<template>
   <div class="app_search">
      <input type="text" :placeholder="search_tip" class="search_input" v-model="search_val">
      <span class="search_btn" @click="searchFn">搜索</span>
    </div>
</template>
<script>
export default {
   name: 'app_search',
   props: ['inputPlacehoder'],
   data() {
       return {
            search_tip: this.inputPlacehoder,
            search_val:''
       }
   },
  watch: {},
  components: {},
  computed: {},
  created() {
    console.log(this.inputPlacehoder)
  },
  mounted() {},
  methods: {
    searchFn(){
      let that = this
      console.log()
      that.$emit('searchAjax',that.search_val)
    }
  },
}
</script>
<style scoped>
 .app_search{display: flex;width:7rem;justify-content: space-between;align-items: center;margin:auto;}
  .search_input{width:5.5rem;height: .8rem;box-sizing: border-box;border:1px solid #ccc;border-radius: 4px;padding:0 0.2rem;} 
  .search_input:focus{border: 1px solid red;outline: 1px solid #ccc;border-radius: 4px;}
  .search_btn{width: 1.5rem;height: .8rem;text-align: center;line-height:.8rem;color:#ccc;font-size: .4rem;}
</style>