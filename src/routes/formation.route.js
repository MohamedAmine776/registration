import CourseList from "../components/content/formation/content/CourseList";
import Page404 from "../components/Page404";


const formationRoute = [
    { path: '/', exact: true, name: 'Home', component:CourseList },
    { path: '/course-list', exact: true, name: 'Home', component:CourseList },
    { path: '*', exact: true, name: '404', component: Page404 },
];

export default formationRoute;