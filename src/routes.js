import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <About />
    },
    {
        path: "/resume",
        exact: false,
        main: () => <Resume />
    },
    {
        path: "/projects",
        exact: false,
        main: () => <Projects />
    },
]

export default routes;
