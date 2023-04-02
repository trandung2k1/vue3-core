const { createApp, ref } = Vue;
import Hi from './pages/Hi.js';
import Home from './pages/Home.js';
import About from './pages/About.js';
import Header from './components/Header.js';
const app = createApp({
    // data() {
    //     return {
    //         message: 'Hello Vue!',
    //     };
    // },
    setup() {
        const count = ref(0);
        const increase = () => {
            count.value = count.value + 1;
        };
        return {
            message: 'Hello Vue!',
            count,
            increase,
        };
    },
});
const Contact = {
    template: `<div>
        <Header/>
        <h1>Contact</h1>
    </div>`,
    data: () => ({ item: 'test' }),
};
app.component('Header', Header);
//Config routes
const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/hi', component: Hi },
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
});
app.use(router);
app.mount('#app');
