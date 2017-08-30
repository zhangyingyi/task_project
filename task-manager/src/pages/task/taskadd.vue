<template>
  <div>
    <el-form :label-position="labelPosition" label-width="180px" :model="form">
      <el-form-item label="任务名称">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="任务难度">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <el-form-item label="任务类型">
        <el-input v-model="form.type"></el-input>
      </el-form-item>
      <div class="block" style="margin-left:120px;">
        <span class="demonstration">任务时间</span>
        <el-date-picker v-model="form.value6" type="daterange" placeholder="选择日期范围">
        </el-date-picker>
      </div>
      <el-button type="primary" style="margin-left: 50%;" @click="taskAdd">任务添加</el-button>
    </el-form>
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
    // this.taskAdd()
  },
  methods: {
    taskAdd() {
      axios.post('http://app.bullstech.cn/test/api/task/',
      this.form
        )
        .then(function(response) {
          console.log('123', response);
        })
        .catch(function(error) {
          console.log('456', error);
        })
      //  axios.get('http://app.bullstech.cn/test/api/task')
      // .then(function(response) {
      //    console.log('123',response);
      // })
      // .catch(function(error) {
      //   console.log('456',error);
      // })
    }
  }
}
</script>

