<template>
    <div>
        <input type="text" v-model="msg" @input="onInput"/>
        <img src="https://wx3.sinaimg.cn/crop.66.0.400.300.240/005M94J9ly4fnjdhf175nj30es08cjs1.jpg"/>
    </div>

</template>


<script>
    export default {
        data(){
            return{
                msg:'请输入'
            }
        },
        watch:{
            msg(val,oldval){
                consoele.log(this.msg)
            }
        },
        methods:{
            onInput:function () {

              
                    this.$emit('message',this.msg)
             
            }
        }

    }
</script>