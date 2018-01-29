//index.vue
<template>
    <div class="container">

        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Elasticsearch</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
            </div>


            <button type="submit" class="btn btn-primary"
            @click="sendData()"
            >Submit</button>
        </form>
        <div v-if="flag">
            <div>{{data}}</div>
        </div>
        <div v-else-if="flag===false">

            <ul class="list-group">
                <li v-for="item in data" class="list-group-item">
                    {{item._source.newsSummary}}
                </li>
            </ul>
        </div>

    </div>
</template>

<script>
import $ from "jquery"
export default {
  name: 'indexP',
  data () {
    return {
       todos: [
          { text: 'Learn JavaScript' },
          { text: 'Learn Vue' },
          { text: 'Build something awesome' }
        ],
        data:'',
        flag:true
    }
  },
  methods:{
    eClick(){

    },
    sendData(){
        this.flag = false
            var self =this
        $.ajax({url:'http://10.16.0.41:9200/_search',data:
                {
                "query":{
                    "match_all":{}
                },
                "from":3,
                "size":13

            }}).done(function(data){
                    console.log(data.hits.hits)
                    self.data = data.hits.hits
            });
    }
  }
}
</script>
