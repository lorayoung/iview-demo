const routers = [{
    path: '/',
    meta: {
        title: ''
    },
    component: (resolve) => require(['./components/home.vue'], resolve)
}, {
    path: '/list',
    component: (resolve) => require(['./components/List.vue'], resolve)
}, {
    path: '/manager',
    component: (resolve) => require(['./components/Manager.vue'], resolve)

}, {
    path: '/detail/:id',
    name: 'detail',
    component: (resolve) => require(['./components/Detail.vue'], resolve)
}, {
    path: '/cart',
    component: (resolve) => require(['./components/Cart.vue'], resolve)
}, {
    path: '/manager',
    component: (resolve) => require(['./components/Manager.vue'], resolve),
    children: [{
        //子路由不需要在前面加/
        path: 'add',
        component: (resolve) => require(['./components/Add.vue'], resolve)
    }, {
        path: 'update',
        component: (resolve) => require(['./components/Update.vue'], resolve)
    }, {
        path: 'delete',
        component: (resolve) => require(['./components/Delete.vue'], resolve)
    }]
}];
export default routers;