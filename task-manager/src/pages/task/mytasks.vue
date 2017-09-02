<template>
  <div>
    <div class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition" style="width: 100%;">
      <div class="hidden-columns">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div class="el-table__header-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__header" style="width: 885px;">
          <colgroup><col name="el-table_1_column_1" width="180"><col name="el-table_1_column_2" width="180"><col name="el-table_1_column_3" width="180"><col name="el-table_1_column_4" width="180"><col name="el-table_1_column_5" width="150"><col name="gutter" width=""></colgroup>
          <thead>
            <tr>
              <th colspan="1" rowspan="1" class="el-table_1_column_1 is-leaf">
                <div class="cell">姓名</div>
              </th>
              <th colspan="1" rowspan="1" class="el-table_1_column_2 is-leaf">
                <div class="cell">任务名称</div>
              </th>
              <th colspan="1" rowspan="1" class="el-table_1_column_3 is-leaf">
                <div class="cell">任务难度</div>
              </th>
              <th colspan="1" rowspan="1" class="el-table_1_column_4 is-leaf">
                <div class="cell">日期</div>
              </th>
              <th colspan="1" rowspan="1" class="el-table_1_column_5 is-leaf">
                <div class="cell">操作</div>
              </th>
              <th class="gutter" style="width: 0px;"></th>
            </tr>
          </thead>
        </table>
      </div>
      <div class="el-table__body-wrapper">
        <table cellspacing="0" cellpadding="0" border="0" class="el-table__body" style="width: 885px;">
          <colgroup><col name="el-table_1_column_1" width="180"><col name="el-table_1_column_2" width="180"><col name="el-table_1_column_3" width="180"><col name="el-table_1_column_4" width="180"><col name="el-table_1_column_5" width="150"></colgroup>
          <tbody>
            <template v-for="item in tasksLisk">
              <tr class="el-table__row">
                <td class="el-table_1_column_1">
                  <div class="cell">
                    <span style="margin-left: 10px;">{{item.name}}</span>
                  </div>
                </td>
                <td class="el-table_1_column_2">
                  <div class="cell">
                    <span style="margin-left: 10px;">{{item.taskname}}</span>
                  </div>
                </td>
                <td class="el-table_1_column_3">
                  <div class="cell">
                    <span style="margin-left: 10px;">{{item.region}}</span>
                  </div>
                </td>
                <td class="el-table_1_column_4">
                  <div class="cell">
                    <span>
                      <div class="el-popover" style="display: none;">
                      </div>
                      <div class="name-wrapper">
                        <span class="el-tag">{{item.value6}}
                        </span>
                      </div>
                    </span>
                  </div>
                </td>
                <td class="el-table_1_column_5">
                  <div class="cell">
                    <button type="button" class="el-button el-button--default el-button--small">
                       <span @click="editClick(item)">编辑</span>
                    </button>
                    <button type="button" class="el-button el-button--danger el-button--small">
                      <span @click="taskdelete(item._id)">删除</span>
                    </button>
                  </div>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>
      <div class="el-table__column-resize-proxy" style="display: none;"></div>
      <div class="resize-triggers">
        <div class="expand-trigger">
          <div style="width: 886px; height: 201px;"></div>
        </div>
        <div class="contract-trigger"></div>
      </div>
    </div>
    <my-dialog :is-show="isShowDialog" :tasksLisk="tasksLisk" @on-close="closeDialog" :editData="editData">
      <!--<sign-in></sign-in>-->
    </my-dialog>
  </div>
</template>
<script>
// import signIn from './edit/signin.vue'
import Dialog from './edit/dialog.vue'
export default {
  components: {
    'MyDialog': Dialog,
    // 'signIn': signIn
  },
  data() {
    return {
      tasksLisk: [],
      isShowDialog: false,
      apiUrl: 'http://app.bullstech.cn/test/api/task',
      editData:{},
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
    this.taskdelete()
  },
  methods: {
    getTask() {
      var vm = this
      axios.get(vm.apiUrl).then(res => {
        this.tasksLisk = res.data.data
      }, res => {
        console.log('888', error)
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
        this.editData=data
      this.isShowDialog = true   
    }

  }
}
</script>
