import Vue from 'vue';
export declare class DayWorkingTimeCollectionDirective extends Vue {
    render(): void;
}
export declare const DayWorkingTimeCollectionPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-day-working-time-collection` directive represent a working time ranges in a day.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-day-working-time-collection>
 *     <e-day-working-time from='8' to='12'/>
 *     <e-day-working-time from='13' to='17'/>
 *   </e-day-working-time-collection>
 * </ejs-gantt>
 * ```
 */
export declare class DayWorkingTimeDirective extends Vue {
    render(): void;
}
export declare const DayWorkingTimePlugin: {
    name: string;
    install(Vue: any): void;
};
