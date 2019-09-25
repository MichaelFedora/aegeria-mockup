import Vue from 'vue';
import { DashboardLayoutPlugin, SplitterPlugin } from '@syncfusion/ej2-vue-layouts';
import { LinearGaugePlugin } from '@syncfusion/ej2-vue-lineargauge';
import { GanttPlugin } from '@syncfusion/ej2-vue-gantt';
import AppComponent from './app/app';

import './styles.scss';

console.log('Environment:', process.env.NODE_ENV);

Vue.use(DashboardLayoutPlugin);
Vue.use(SplitterPlugin);
Vue.use(LinearGaugePlugin);
Vue.use(GanttPlugin);

const v = new Vue({
  el: '#app',
  components: { AppComponent },
  render: h => h(AppComponent, { key: 'app' })
});
