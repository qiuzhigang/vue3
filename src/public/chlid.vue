<template>
  <div class="chlid">
    子组件:
    <!-- <span>{{inputName}}</span> -->
 
   <button @click="ag_plablist">点我向父集传递数据</button>
  </div>
</template>
<script>
  export default {
      name:'chlid',
      data(){
           return{
             gavalue:'老头我爱你12121'
           }
      },
    methods:{
     ag_plablist(){
        this.$emit('chlidfun',this.gavalue);
     },
    },

  }
</script>
