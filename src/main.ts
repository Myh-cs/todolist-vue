import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import SetMock from '@/mock';

SetMock();

Vue.config.productionTip = false;

// Vue.filter('timeFormat', function (value: Date) {
//   if (!value) return ''
//   return value;
// })

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
