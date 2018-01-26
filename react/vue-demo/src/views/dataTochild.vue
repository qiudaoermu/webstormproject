<template>
    <div>
       <div >{{text}}</div>
    </div>

</template>


<script>
    export default {
        props:{
            text:{
                type:String,
                default:'didi'
            }
        },
        data(){
            return{
                msg:'请输入'
            }
        },
        methods:{
            onInput:function () {

              
             
            }
        }

    }
</script>