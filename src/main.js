import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import zimo from './pages/index';
import User from './pages/use';
// 自定义封装的Vue.use() 方法
User(Vue);
Vue.user(zimo);

import { 
  Button,
  NavBar,
  Tabbar, 
  TabbarItem,
  PullRefresh,
  ShareSheet,
  Cell, 
  Card,
  Checkbox,
  SubmitBar,
  Empty
} from 'vant';

Vue.config.productionTip = false
Vue.use(Empty);
Vue.use(Cell);
Vue.use(SubmitBar);
Vue.use(Checkbox);
Vue.use(Card);
Vue.use(Button);
Vue.use(ShareSheet);
Vue.use(NavBar);
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(PullRefresh);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
