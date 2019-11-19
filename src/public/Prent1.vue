<template>
  <div class="prent1"> 
    父组件:
    <br>
    <br>
    <!-- 引入子组件 -->
    <chlid1 :inputName="name"></chlid1>
  </div>
</template>
<script>
 import chlid1 from './chlid1'
  export default {
    name:'prent1',
    data () {
      return {
        name:'父向子组件传值了'
      }
    },
    methods:{
    },
    components: {
      chlid1,
    },
  }
</script>
