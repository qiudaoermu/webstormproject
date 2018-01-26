//about.vue
<template>
    <div>
        <div>about</div>
        <bottom></bottom>
        <chilrd v-on:message="receiveMessage"></chilrd>
        <div v-on:click="clickText">clickText</div>
        <dataTochild text='baidu' ></dataTochild>
    </div>

</template>

<script>


    import bottom from './bottom.vue'
    import chilrd from  './child.vue'
    import dataTochild from './dataTochild.vue'
    export default {

        components:{
            bottom,
            chilrd,
            dataTochild
        }
        ,
        methods:{
            receiveMessage:function (text) {
                console.log(text)
            },
            clickText:function(){
                console.log('baidu')
            }
        }
    }


</script>