<template>
  <div>
    <li v-for="item in getTask()">
      <div class="pic">
      </div>
      <div class="main">
        <div class="name">{{item.name}}</div>
        <div class="price">{{}}</div>
        <div class="btn-area">
        </div>
      </div>
    </li>

  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      form: {
        name: '',
        region: '',
        type: '',
        value6: '',

      }
    };
  },
  mounted() {
    this.getTask()
  },
  methods: {
    getTask() {
       axios.get('http://app.bullstech.cn/test/api/task')
      .then(function(response) {
         console.log('777',response);
         return response
      })
      .catch(function(error) {
        console.log('888',error);
      })
    }
  }
}
</script>
