import Vue from 'vue';

export default Vue.component('my-widget-blank', {
  methods: {
    clicked() {
      this.$emit('clicked');
    }
  }
});
