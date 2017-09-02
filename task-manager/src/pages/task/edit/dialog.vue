<template>
    <div class="dialog-wrap" v-if="isShow" :class="getForm">
        <div class="dialog-cover" @click="closeMyself"></div>
        <div class="dialog-content" v-if="isShow">
            <p class="dialog-close" @click="closeMyself">x</p>
            <!--<slot :tasksLisk="tasksLisk"></slot>-->
            <template>
                <div>
                    <el-form :label-position="labelPosition" label-width="100px">
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
                        <el-button type="primary" style="margin-left:90%;" @click="editClick(editData)">修改</el-button>
                    </el-form>
                </div>
            </template>
        </div>
    </div>
</template>
<script>
export default {
    props: ['isShow','editData'],
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
            console.log(data,+'`'+data._id)
            axios.put(this.apiUrl + '/' +data._id,data).then((res) => {
                this.isShow = false
                vm.getTask()
            })
        },
    }
}
</script>
<style scoped>
.drop-enter-active {
    transition: all .5s ease;
}

.drop-leave-active {
    transition: all .3s ease;
}

.drop-enter {
    transform: translateY(-500px);
}

.drop-leave-active {
    transform: translateY(-500px);
}

.dialog-wrap {
    position: fixed;
    width: 100%;
    height: 100%;
}

.dialog-cover {
    background: #000;
    opacity: .3;
    position: fixed;
    z-index: 5;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.dialog-content {
    width: 50%;
    position: fixed;
    max-height: 50%;
    overflow: auto;
    background: #fff;
    top: 20%;
    left: 50%;
    margin-left: -25%;
    z-index: 10;
    border: 2px solid #464068;
    padding: 2%;
    line-height: 1.6;
}

.dialog-close {
    position: absolute;
    right: 5px;
    top: 5px;
    width: 20px;
    height: 20px;
    text-align: center;
    cursor: pointer;
}

.dialog-close:hover {
    color: #4fc08d;
}
</style>
