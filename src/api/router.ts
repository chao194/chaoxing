import { createRouter,createWebHashHistory} from "vue-router";

import Home from '../components/user/home.vue'
import Login from '../components/user/login.vue'
import Register from '../components/user/register.vue'
import Repassword from '../components/user/repassword.vue'
import Index from '../components/user/index.vue'
import AdminHome from '../components/admin/home.vue'
import MyCourse from '../components/user/myCourse.vue'
import Examination from '../components/user/examination.vue'
import ChapterDetails from '../components/user/ChapterDetails.vue'

const routes = [
  { path: "/", redirect: "/login" },
  {
    path: "/home",
    name: "home",
    component: Home
  },
  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/register",
    name: "register",
    component: Register
  },
  {
    path: "/repassword",
    name: "repassword",
    component: Repassword
  },
  {
    path: "/index",
    name: "index",
    component: Index
  },
  {
    path: "/adminhome",
    name: "adminhome",
    component: AdminHome
  },
  {
    path: "/course/:courseid",
    name: "course",
    component: MyCourse
  },
  {
    path: "/examination/courseId=:courseId&examId=:examId",
    name: "examination",
    component: Examination
  },
  {
    path: "/chapterDetails",
    name: "chapterDetails",
    component: ChapterDetails
  },
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})

export default router