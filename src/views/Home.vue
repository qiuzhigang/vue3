<template>
  <div class="home">
    <h2>父组件</h2>

    <!-- <h1>{{$store.getters.opter}}</h1>     -->
    <p></p>
  </div>
</template>

<script>


export default {
  name: 'home',
  data(){
      return{
        // url:process.env.VUE_APP_URL,
        msg:'父向子组件传了我是一个小小鸟！'
      }
  },
  methods:{

  },
  created(){
    console.log(1111)
  },
  components: {
   
  }
}
</script>
<style lang="scss" scoped>

</style>

