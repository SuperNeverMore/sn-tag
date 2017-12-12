import Vue from 'vue';
import Demo from './sn-tag.vue';
import Loading from '../src/sn-loading/sn-directive';
Vue.use(Loading);
new Vue({ // eslint-disable-line
  el: '#app',
  render: h => h(Demo)
});
