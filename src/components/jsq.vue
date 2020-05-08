<template>
  <div>
    <input type="text" placeholder="Text input" @focus="show" data-layout="normal" />
    <vue-touch-keyboard :options="options" v-if="visible" :layout="layout" :cancel="hide" :accept="accept" :input="input" />
  </div>
</template>
 
<script>
    // https://www.npmjs.com/package/vue-touch-keyboard
  import Vue from 'vue'
  import VueTouchKeyboard from "vue-touch-keyboard";
  import style from "vue-touch-keyboard/dist/vue-touch-keyboard.css"; // load default style
 
  Vue.use(VueTouchKeyboard);
 
  export default {
    data () {
        return {
            visible: false,
            layout: "normal",
            input: null,
            options: {
                useKbEvents: false,
                preventClickEvent: false
            }
        }
    },
 
    methods: {
        accept(text) {
          alert("Input text: " + text);
          this.hide();
        },
 
        show(e) {
          this.input = e.target;
          this.layout = e.target.dataset.layout;
 
          if (!this.visible)
            this.visible = true
        },
 
        hide() {
          this.visible = false;
        }
    }
  }
</script> 