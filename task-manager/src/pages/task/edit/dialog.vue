<template>
    <div class="dialog-wrap"  :class="getForm">
        <el-button type="primary" style="margin-left: 50%; margin-top:15px" @click="dialogFormVisible =true">任务添加</el-button>
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
    </div>
</template>
<script>
export default {
    props: ['isShow', 'editData'],
    data() {
        return {
            labelPosition: 'right',
            apiUrl: 'http://app.bullstech.cn/test/api/task',
            form: {
                name: '',
                region: '',
                type: '',
                value6: '',
            }
        }
    },
    computed: {
        getForm() {
            this.form = this.editData
        }
    },
    methods: {
        closeMyself() {
            this.$emit('on-close')
        },
        getTask() {
            var vm = this
            axios.get(vm.apiUrl).then(res => {
                this.tasksLisk = res.data.data
            }, res => {
                console.log('888', error)
            })
        },
        editClick(data) {
            var vm = this
            console.log(data, +'`' + data._id)
            axios.put(this.apiUrl + '/' + data._id, data).then((res) => {
                this.isShow = false
                vm.getTask()
            })
        },
    }
}
</script>







