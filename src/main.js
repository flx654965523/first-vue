import Vue from 'vue'
import App from './App.vue'
import { Header,Swipe, SwipeItem } from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Header.name, Header);

import vueResource from 'vue-resource'
Vue.use(vueResource)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
