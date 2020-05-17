// import Index from './Pages/Index/Index.vue';
import About from "./Pages/About.vue";
import Experience from "./Pages/Experience.vue";
import Education from "./Pages/Education.vue";
import Skills from "./Pages/Skills.vue";
import Sample from "./Pages/Sample.vue";
import Indexdb from "./Pages/Sample/Indexdb.vue";
export const Routes = [
  //     {
  //     path: '/',
  //     component: Index
  //   },
  {
    path: "/About",
    component: About
  },
  {
    path: "/Experience",
    component: Experience
  },
  {
    path: "/Education",
    component: Education
  },
  {
    path: "/Skills",
    component: Skills
  },
  {
    path: "/Sample",
    component: Sample
  },
  {
    path: "/Sample/Indexdb",
    component: Indexdb
  }
];
