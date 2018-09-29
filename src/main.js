import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import Vuex from 'vuex';
import Util from './libs/util';
import App from './app.vue';
import 'iview/dist/styles/iview.css';
import { BUY_BOOK, ADD_BOOK, DELETE_BOOK, UPDATE_BOOK, CANCEL_BOOK } from './mutation-types'


Vue.use(VueRouter);
Vue.use(Vuex);

Vue.use(iView);



// 路由配置
const RouterConfig = {
    mode: 'history',
    routes: Routers
};
const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    next();
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});


const store = new Vuex.Store({
    state: {
        bookInfo: [
            {
                id: 1, bookName: 'Vue权威指南',
                imgUrl: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/w%3D268%3Bg%3D0/sign=ec841956eecd7b89e96c3d85371f259a/0dd7912397dda14495b7752ebab7d0a20df486eb.jpg',
                price: 10
            }, {
                id: 2, bookName: 'Vue实践揭秘',
                imgUrl: 'https://upload-images.jianshu.io/upload_images/80120-6d9df752d88e3637.jpeg?imageMogr2/auto-orient/strip%7CimageView2/2/w/591/format/webp',
                price: 12
            },
            {
                id: 3, bookName: 'Vue深入浅出',
                imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1495629494117&di=5a934908d8cfb3bdb57bed9880ff0d13&imgtype=0&src=http%3A%2F%2Fjiuye-res.jikexueyuan.com%2Fzhiye%2Fshowcase%2Fattach-6ae2b991-803f-4b63-bda9-89434d70d665.jpg',
                price: 33
            },
            {
                id: 4, bookName: 'Vue实战',
                imgUrl: 'http://www.tup.tsinghua.edu.cn/upload/bigbookimg/074441-01.jpg',
                price: 33
            }],
        added: [],
    },
    getters: {
        books: state => {
            return state.bookInfo
        },
        buyBooks: state => {
            return state.added
        }
    },
    mutations: {
        [BUY_BOOK](state, book) {
            if (!book.num) {
                book.num = 1;
                state.added.push(book)
            } else {
                state.added.find(item => {
                    if (item.id == book.id) {
                        item.num++
                    }
                })
            }
            console.log(state.added)
        },
        [ADD_BOOK](state, book) {
            if (state.bookInfo.length == 0) {
                book.id = 1;
            } else {
                book.id = state.bookInfo[state.bookInfo.length - 1].id + 1;
            }
            state.bookInfo.push(book)
        },
        [DELETE_BOOK](state, id) {
            state.bookInfo = state.bookInfo.filter(item => {
                return item.id != id
            })
        }, [UPDATE_BOOK](state, book) {
            state.bookInfo.map(item => {
                if (item.id == book.id) {
                    return book
                }
            })
        },
        [CANCEL_BOOK](state, id) {
            state.added = state.added.filter(item => {
                if (item.id == id) {
                    item.num = 0
                }
                return item.id != id;
            })
            console.log(state.added)
        }
    },
    actions: {
        buyBook({ commit }, book) {
            commit('BUY_BOOK', book)
        },
        addBook({ commit }, book) {
            commit('ADD_BOOK', book)
        }, deleteBook({ commit }, id) {
            commit('DELETE_BOOK', id)
        },
        updateBook({ commit }, book) {
            commit('UPDATE_BOOK', book)
        },
        cancelBook({ commit }, id) {
            commit('CANCEL_BOOK', id)
        }
    }
});


new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
});