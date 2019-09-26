import Vue from 'vue';
import axios from 'axios';

import testData from './testData';
import { Edit, Toolbar } from '@syncfusion/ej2-vue-gantt';

interface GanttData {
  id: number;
  name: string;
  shortName?: string;
  status: number;

  // startDate: Date;
  // endDate: Date;

  subTasks: {
    id: number;
    goalID: number;
    name: string;
    shortName: string;
    startDate: Date;
    endDate: Date;
    status: number;
    percentCompleted: number;
    dependency: string;
  }[];
}

function getDays(start: Date, end: Date) {
  return Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
}

export default Vue.component('my-timeline', {
  data() {
    return {
      apiUrl: 'https://aegeria-api-dev.us-west-2.elasticbeanstalk.com/api/',
      data: [] as GanttData[],
      taskFields: {
        id: 'id',
        name: 'name',
        startDate: 'startDate',
        endDate: 'endDate',
        progress: 'percentCompleted',
        duration: 'duration',
        child: 'subTasks',
        dependency: 'dependency'
      },
      editSettings: {
        allowEditing: true,
        allowTaskbarEditing: true,
        mode: 'Dialog'
      },
      eventMarkers: [],
    };
  },
  computed: {

  },
  async mounted() {
    /*const res = await axios.get<{
      headers: {
        id: number;
        name: string;
        shortName: string;
        description: string;
        ownerID: number;
        ownerName: string;
        ownerImage: string;
        status: number;
        permission: number;
      }[];
      goals: {
        id: number;
        name: string;
        shortName?: string;
        status: number;
      }[];
      targets: {
        id: number;
        goalID: number;
        name: string;
        shortName: string;
        startDate: Date;
        endDate: Date;
        status: number;
        percentCompleted: number;
      }[];
    }>(this.apiUrl + 'outcomes?sessionID=0090b1c0-ca15-11e9-9237-b3899551d435&id=1&objectType=h&goals=true');*/
    const res = { data: testData };
    const data: GanttData[] = res.data.goals.map(a => {
      return Object.assign(a, { subTasks: [] as typeof res.data.targets });
    });
    for(const target of res.data.targets) {
      const goal = data.find(a => a.id === target.goalID);
      if(!goal)
        continue;
      if(typeof target.startDate === 'string')
        target.startDate = new Date(target.startDate);
      if(typeof target.endDate === 'string')
        target.endDate = new Date(target.endDate);
      target.dependency = '';
      target.duration = target.endDate ? getDays(target.startDate, target.endDate) : 0;
      target.id = target.id + 1024;
      goal.subTasks.push(target);
    }
    this.data = data;
    console.log(data);
  },
  watch: {

  },
  methods: {

  },
  provide: {
    gantt: [ Edit ]
  }
});
