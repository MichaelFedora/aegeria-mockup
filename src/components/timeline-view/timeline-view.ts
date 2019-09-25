import Vue from 'vue';

import WidgetsComponent from '../widgets/widgets';
import TimelineComponent from '../timeline/timeline';

export default Vue.component('my-timeline-view', {
  data() {
    return {
      widgetsPane: () => ({ template: WidgetsComponent }),
      timelinePane: () => ({ template: TimelineComponent })
    };
  }
});
