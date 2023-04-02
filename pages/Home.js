import Header from '../components/Header.js';
const { ref } = Vue;
const Home = {
    template: `<div>
        <Header/>
        <h1>{{title}}</h1>
        <!--<button @click="count++">Count is {{count}}</button> -->
        <button @click="increment">Count is {{count}}</button>
        <form>
            <input :value="text" @input="event => text = event.target.value">
            <input v-model="text">
        </form>
    </div>`,
    // data() {
    //     return {
    //         title: 'Home Page',
    //         count: 0,
    //         text: '',
    //     };
    // },
    // methods: {
    //     increment: function () {
    //         this.count++;
    //     },
    // },
    // computed: {},
    // mounted() {
    //     this.increment();
    // },
    setup() {
        const title = ref('Home Page');
        const count = ref(0);
        const text = ref('');
        const increment = () => {
            count.value = count.value + 1;
        };
        return {
            title,
            count,
            text,
            increment,
        };
    },
};
export default Home;
