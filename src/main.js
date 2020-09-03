import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import zimo from './pages/index';
import User from './pages/use';

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

// initUse(Vue);
// Vue.user(pages)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
