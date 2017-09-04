<template>
  <div>
    <el-form :label-position="labelPosition" label-width="180px" :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="任务名称">
        <el-input v-model="form.taskname"></el-input>
      </el-form-item>
      <el-form-item label="任务难度">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <div class="block"style="margin-left:120px;">
        <span class="demonstration">开始日期</span>
        <el-date-picker  v-model="form.value6"  type="datetime" placeholder="选择日期时间">
        </el-date-picker>
         <span class="demonstration" >结束日期</span>
        <el-date-picker  v-model="form.value7"  type="datetime" placeholder="选择日期时间">
        </el-date-picker>
      </div> 
      <el-button type="primary" style="margin-left: 50%;" @click="taskAdd(form.value6)">任务添加</el-button>
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
        value7: '',
      }
    };
  },
  mounted() {
    this.taskAdd()
  },
  methods: {
    taskAdd(s) {
      axios.post('http://app.bullstech.cn/test/api/task/', this.form)
        .then(function(response) {
          // alert('添加成功')
        })
        .catch(function(error) {
          console.log('456', error)
        })
      console.log('ssss',s)
      console.log('日期', moment(s).format('YYYY-MM-DD HH:mm:ss'))

    }
  }
}
</script>

