import Vue from 'vue';
import BlankWidget from '../widget-blank/widget-blank';

export default Vue.component('my-widgets', {
  components: { BlankWidget },
  data() {
    return {
      apiUrl: 'https://aegeria-api-dev.us-west-2.elasticbeanstalk.com/api/',
      widgets: [
        BlankWidget,
        BlankWidget,
        BlankWidget,
        BlankWidget,
        BlankWidget,
      ]
    };
  },
  async mounted() {

  },
  watch: {

  },
  methods: {
    addWidget(index: number) {
      console.log('Add widget: ' + index);
    }
  }
});
