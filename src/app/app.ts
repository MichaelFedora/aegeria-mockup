import Vue from 'vue';

import TimelineViewComponent from '../components/timeline-view/timeline-view';

export default Vue.extend({
  data() {
    return {
      projectSelector: '',
      timelineView: () => ({ template: TimelineViewComponent })
    };
  }
});
