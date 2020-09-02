import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
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
