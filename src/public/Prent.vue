<template>
  <div class="prent"> 
    父组件:
    <input type="text" v-model="name">
    <br>
    <br>
    <!-- 引入子组件 -->
    <!-- <child :inputName="name"></child> -->
    <child v-on:chlidfun = "chlidfun"></child>
  </div>
</template>
<script>
 import child from './chlid'
  export default {
    name:'prent',

    
    data () {
      return {
        name:''

      }
    },
    methods:{
      chlidfun(gavalue){
        this.name = gavalue;

      }
    },


    components: {
      child,
    },
  }
</script>
