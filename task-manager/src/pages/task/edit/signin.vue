<template>
  <div>
    <el-form :label-position="labelPosition" label-width="100px" :model="form">
      <el-form-item label="姓名">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="任务名称">
        <el-input v-model="form.taskname"></el-input>
      </el-form-item>
      <el-form-item label="任务难度">
        <el-input v-model="form.region"></el-input>
      </el-form-item>
      <div class="block" style="margin-left:68px;">
        <span class="demonstration">日期</span>
        <el-date-picker v-model="form.value6" type="daterange" placeholder="选择日期范围">
        </el-date-picker>
      </div>
      <el-button type="primary" style="margin-left:90%;" @click="editClick(item,item._id)">修改</el-button>
    </el-form>
  </div>
</template>
<script>
export default {
  props: ['tasksLisk'],
  data() {
    return {
      my: this.tasksLisk,
      labelPosition: 'right',
      apiUrl: 'http://app.bullstech.cn/test/api/task',
      form: {
        name: '',
        region: '',
        type: '',
        value6: '',
      }
    };
  },
  mounted() {
    console.log('5201314', this.tasksLisk)
  },
  methods: {
    editClick(item, id) {
      this.isShowDialog = true
      var vm = this
      axios.put(vm.apiUrl + '/' + id, vm.item).then((res) => {
        vm.getTask()
      })

    },
  }
}
</script>

<style >

</style>


