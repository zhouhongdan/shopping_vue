<template>
   <div>
        <input type="text" :placeholder="input_place" v-model="input_val">
        <span @click="searchFn()">搜索</span>
   </div>
</template>
<script>
export default {
   name: '',
   props: ['inputPlacehoder'],
   data() {
       return {
            input_place: this.inputPlacehoder,
            input_val:''
        }
   },
  watch: {},
  components: {},
  computed: {},
  created() {},
  mounted() {},
  methods: {
       searchFn(){
           let that = this;
           console.log(that.input_val)
           
           that.$emit('searchAjax',that.input_val)
       }

    },
}
</script>
<style scoped>
</style>