<template>
  <div class="chlid1">
    子组件:
    <span>{{inputName}}</span>
 

  </div>
</template>
<script>
  export default {
      name:'chlid1',
      data(){
           return{
           
           }
      },
    // 接受父组件的值
    props: {
      inputName: String,
      required: true
    },
    methods:{
    },

  }
</script>
