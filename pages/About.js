import Header from '../components/Header.js';
const About = {
    template: `<div>
        <Header/>
        <h1>{{title}}</h1>
    </div>`,
    data() {
        return {
            title: 'About Page',
        };
    },
};
export default About;
