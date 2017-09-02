// import VueRouter from 'vue-router'
import taskHall from '../components/taskhall.vue'
import myTask from '../components/mytask.vue'
import taskAdd from '../pages/task/taskadd.vue'
import myTasks from '../pages/task/mytasks.vue'
import taskTrack from '../pages/task/tasktrack.vue'
import taskManagement from '../pages/task/taskmanagement.vue'
export default new VueRouter({
    routes: [{
            path: '/taskHall',
            component: taskHall,
            redirect: '/taskHall/taskadd',
            children: [{
                    path: 'taskadd',
                    component: taskAdd
                },
                {
                    path: 'mytasks',
                    component: myTasks
                },
                {
                    path: 'tasktrack',
                    component: taskTrack
                },
                {
                    path: 'taskmanagement',
                    component: taskManagement
                }
            ]
        },
        {
            path: '/myTask',
            component: myTask,
        }
    ]
})