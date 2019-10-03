import Vue from 'vue'
import App from './App.vue'
import Mintui from 'mint-ui';
import 'mint-ui/lib/style.css'
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
import router from './router'
Vue.use(Mintui);

import vueResource from 'vue-resource'
Vue.use(vueResource)
Vue.http.options.root = 'http://www.liulongbin.top:3005'
Vue.http.options.emulateJSON = true

import moment from 'moment'
Vue.filter('dataFormat',function(dataStr,pattern = "YYYY-MM-DD HH:mm:ss"){
	return moment(dataStr).format(pattern)
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
