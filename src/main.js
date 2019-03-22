import Vue from 'vue';
import {
  Col, Row, Button, message, Popconfirm,
} from 'ant-design-vue';
import moment from 'moment';
import App from './App.vue';
import router from './router';
import './assets/scss/app.scss';


Vue.config.productionTip = false;

Vue.use(Col);
Vue.use(Row);
Vue.use(Button);
Vue.use(Popconfirm);

Vue.prototype.$message = message;

Vue.directive('date', {
  // When the bound element is inserted into the DOM...
  inserted(el, { value }) {
    // Focus the element
    el.innerHTML = moment(value).fromNow();
  },
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
