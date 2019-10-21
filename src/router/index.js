import Vue from "vue"
import VueRouter from 'vue-router'
import App from '../App.vue'


Vue.use(VueRouter); // 미들웨어로 추가해줘야 뷰라우터 사용이 가능!!

const Login = { template: '<div>Login Page</div>' }
const NotFound = { template: '<div>Page not found</div>' }


const router = new VueRouter ({
  mode: "history",
  // 브라우저 주소에 #이 마지막에 존재함. 그거 지울때 사용.

  routes: [

    { path: "/", component: App },
    { path: "/login", component: Login },
    { path: "*", component: NotFound}

  ]

});
// 라우트는 순서대로 적용이 됨. 고로 마지막에 *을 정의하면 위에서 정의하고 남은 모든 것을 정의함.

export default router;