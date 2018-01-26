//index.vue
<template>
    <div class="container">
        <ol>
            <li v-for="todo in todos">
                {{ todo.text }}
            </li>
        </ol>
        <button @click="eClick()">事件</button>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="url">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <button type="submit" class="btn btn-primary"
            @click="sendData()"
            >Submit</button>
        </form>
    </div>
</template>

<script>

export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
        data:''
    }
  },
  methods:{
    eClick(){
        console.log(9999);
    },
    sendData(){
        $.ajax({url:'http://10.16.0.41:9200/_search',data:{
                "query":{
                    "match_all":{}
                },
                "from":0,
                "size":10

            }}).done(function(data){
                    this.data = data
            });
    }
  }
}
</script>
