<template>
    <div detail-wrap>
        <el-row class="tac detail-left">
            <el-col :span="3">
                <el-menu default-active="2" class="el-menu-vertical-demo" theme="dark">
                    <router-link v-for="item in products" :to="{path:item.path}" tag="li" active-class="active">
                        <el-menu-item index="2"> {{item.name}}</el-menu-item>
                    </router-link>
                </el-menu>
            </el-col>
        </el-row>
        <div class="detail-right">
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            products: [
              
                {
                    name: '任务列表',
                    path: 'mytasks',
                },
                  {
                    name: '我的任务',
                    path: 'taskadd',
                },
                {
                    name: '统计',
                    path: 'mytasks',
                }
            ],
        }
    },
    computed: {
    },
    methods: {
    }
}
</script>

<style>
.el-menu li {
    list-style: none;
    padding-right: 65px;
}
.el-menu--dark {
    background-color: #324157;
    padding-bottom: 132px;
}
.el-col-3 {
    width: 97.5%;
}
.detail-wrap {
    width: 1200px;
    margin: 0 auto;
    overflow: hidden;
    padding-top: 20px;
}

.detail-left {
    float: left;
    width: 200px;
    text-align: center;
}

.detail-right {
    float: left;
    width: 980px;
    margin-left: 20px;
}

.product-board {
    background: #fff;
    padding: 20px 0;
}

.product-board ul {
    margin-top: 20px;
}

.product-board li {
    text-align: left;
    padding: 10px 15px;
    cursor: pointer;
}

.product-board li.active,
.product-board li:hover {
    background: #4fc08d;
    color: #fff;
}

.product-board li a {
    display: block;
}

.sales-board {
    background: #fff;
}

.sales-board-form {}

.sales-board-intro h2 {
    font-size: 20px;
    padding: 20px;
}

.sales-board-intro p {
    background: #f7fcff;
    padding: 10px 20px;
    color: #999;
    line-height: 1.8;
}

.sales-board-form {
    padding: 30px 20px;
    font-size: 14px;
}

.sales-board-line {
    clear: both;
    padding-bottom: 20px;
}

.sales-board-line-left {
    display: inline-block;
    width: 100px;
}

.sales-board-line-right {
    display: inline-block;
    width: 75%;
}

.sales-board-des {
    border-top: 20px solid #f0f2f5;
    padding: 15px 20px;
}

.sales-board-des p {
    line-height: 1.6;
}

.sales-board-des h2 {
    font-size: 20px;
    padding-bottom: 15px;
}

.sales-board-des h3 {
    font-size: 18px;
    font-weight: bold;
    padding: 20px 0 10px 0;
}

.sales-board-des li {
    padding: 5px 0;
}

.sales-board-table {
    width: 100%;
    margin-top: 20px;
}

.sales-board-table th {
    background: #4fc08d;
    color: #fff;
}

.sales-board-table td {
    border: 1px solid #f0f2f5;
    padding: 15px;
}
</style>
