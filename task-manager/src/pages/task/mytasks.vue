<template >
  <div>
    <el-table :data="tasksLisk" border style="width: 100%">
      <el-table-column label="名称" width="120">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{scope.row.name}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{scope.row.name}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="负责人" width="120">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{scope.row.taskname}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{scope.row.taskname}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="状态" width="120">
        <template scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{scope.row.state}}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag>{{scope.row.state}}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="开始时间" width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{getDatetime(scope.row.value6)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="结束时间" width="180">
        <template scope="scope">
          <el-icon name="time"></el-icon>
          <span style="margin-left: 10px">{{getDatetime(scope.row.value7)}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作">
        <template scope="scope">
          <template>
            <el-button type="text" @click="taskdelete(scope.row._id)">删除</el-button>
          </template>
          <el-button size="small" @click="dialogFormVisibles =true">编辑</el-button>
          <!--<el-button size="small" >删除</el-button>-->
        </template>
      </el-table-column>
    </el-table>
    <!--任务添加-->
    <el-button type="primary" style="margin-left: 50%; margin-top:15px" @click="dialogFormVisible">任务添加</el-button>
    <el-dialog :visible.sync="dialogFormVisible">
      <el-form :model="form" style="margin-left:-100px;">
        <el-form label-width="180px" :model="form">
          <el-form-item label="名称">
            <el-input v-model="form.name"></el-input>
          </el-form-item>
          <el-form-item label="负责人">
            <el-input v-model="form.taskname"></el-input>
          </el-form-item>
          <el-form-item label="状态">
            <el-input v-model="form.state"></el-input>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker v-model="form.value6" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="结束时间">
            <el-date-picker v-model="form.value7" type="datetime" placeholder="选择日期时间">
            </el-date-picker>
          </el-form-item>
          <el-button type="primary" style="margin-left: 50%; margin-top:15px" @click="taskAdd()">确定添加</el-button>
        </el-form>
      </el-form>
    </el-dialog>
    <!--编辑-->
    <el-dialog :visible.sync="dialogFormVisibles">
      <my-dialog :is-show="isShowDialog" :tasksLisk="tasksLisk" @on-close="closeDialog" :editData="editData">
      </my-dialog>
    </el-dialog>
  </div>
</template>
<script>
import Dialog from './edit/dialog.vue'
export default {
  components: {
    'MyDialog': Dialog,
  },
  data() {
    return {
      tasksLisk: [],
      dialogFormVisible: false,
      dialogFormVisibles: false,
      isShowDialog: false,
      apiUrl: 'http://app.bullstech.cn/test/api/task',
      editData: {},
      form: {
        name: '',
        taskname: '',
        state: '',
        value6: '',
        value7: '',
      }
    }
  },
  computed: {
  },
  mounted() {
    this.getTask()
    this.taskdelete()
    this.taskAdd()
  },
  methods: {
    getDatetime(datestring) {
      let dateTemp = moment(datestring).format('YYYY-MM-DD HH:mm:ss')
      return dateTemp
    },
    getTask() {
      var vm = this
      axios.get('http://app.bullstech.cn/test/api/task?page=0&prepage=10').then(res => {
        this.tasksLisk = res.data.data
        console.log('159a', this.tasksLisk.value6)
      }, res => {
        console.log('888', error)
      })
    },
    taskAdd(s) {
      axios.post('http://app.bullstech.cn/test/api/task/', this.form)
        .then(function(response) {
          this.dialogFormVisible = true
        })
        .catch(function(error) {
          console.log('456', error)
        })
    },
    taskdelete(id) {
      var vm = this
      axios.delete(vm.apiUrl + '/' + id).then((res) => {
        vm.getTask()
      })
    },
    closeDialog() {
      this.isShowDialog = false
    },
    editClick(data) {
      console.log(data)
      this.editData = data
      this.isShowDialog = true
    },
    dialogFormVisible(){
      this.dialogFormVisibles=true
        this.editData = data
      this.isShowDialog = true
    }
  }
}
</script>
