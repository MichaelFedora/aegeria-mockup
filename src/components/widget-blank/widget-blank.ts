import Vue from 'vue';

export default Vue.component('my-widget-blank', {
  props: { hello: { type: Boolean, required: false } },
  mounted() { console.log(this.hello); },
  methods: {
    clicked() {
      // register ??
    }
  }
});
