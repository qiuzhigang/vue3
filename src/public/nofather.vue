<template>
    <div class="nofather">
       <p>不是弟</p>
       <span>{{name}}</span>
    </div>
</template>
<script>

import Bus from './js/bus'
export default {
    name:'nofather',
    data(){
        return{
            name:''
        }
    },
    methods:{
       
    },
    created(){
       Bus.$on('send',(data) => {
           this.name = data;
           console.log(data) 
       }) 
    }
}
</script>
