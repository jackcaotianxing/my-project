import Vue from 'vue'
import VueRouter from 'vue-router'
import TransferOptions from '../view/tranferOptions'
import TreeDemo from "../view/treeDemo";

const routes = [
    {
        path: '/',
        name: 'basicLayout',
        component: () => import('../components/layout/basicLayout'),
        meta: {title: '欢迎'},
        redirect: '/transferOptions',
        children: [
            {
                path: '/transferOptions',
                name: 'TransferOptions',
                component: TransferOptions,
                meta: {title: 'Ant Design Vue 树穿梭框示例'},
            },
            {
                path: '/treeDemo',
                name: 'TreeDemo',
                component: TreeDemo,
                meta: {title: '树示例'},
            },
        ]
    }
]
Vue.use(VueRouter)
const router = new VueRouter({
    routes
})
const VueRouterPush = VueRouter.prototype.push

VueRouter.prototype.push = function push (to) {

    return VueRouterPush.call(this, to).catch(err => err)

}

export default router
