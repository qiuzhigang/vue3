<template>
    <div class="father">
       <p>不是兄</p>
       <input type="button" value="点击出发" @click="monClick">
       <nofather></nofather>

    </div>
</template>
<script>
import Bus from './js/bus'
import nofather from './nofather'
export default {
    name:'father',
    data(){
        return{
             agvalue:1 ,
        }
    },
    methods:{
        monClick(){
           Bus.$emit('send',this.agvalue)
           this.agvalue++;
        },
    },
    components:{
        nofather,
    }
}
</script>