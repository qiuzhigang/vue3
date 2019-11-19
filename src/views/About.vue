<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h1 @click="agg()">1111</h1>
    <p ref="hele">{{$store.state.mont}}</p>
    <p @click="ag_click">点我来一下</p>
    <input type="text" ref="input11" value="">
    <p id="cnzz_box"></p>
  </div>
</template>
<script>

export default {
  data(){
    return{
       der:'对对！讲的对'
    }
  },
  methods:{
    agg(){
      this.$store.commit('instare', this.der)    //拿到store里面的方法 instare。 this.der是传递的参数。
    },
  ag_click(){
        this.$refs.input11.value = '12142'
        console.log(this.$refs.hele)
   }
  },
  mounted(){
    

  }
}
</script>
<style  scoped>

.about h1{
  color:block;
  font-size:2rem;

}
</style>

