import Vue from 'vue';
export declare class EventMarkersDirective extends Vue {
    render(): void;
}
export declare const EventMarkersPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-event-markers` directive represent a event marker collection in Gantt
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-event-markers>
 *     <e-event-marker day='02/10/2018' label='Project Starts'/>
 *   </e-event-markers>
 * </ejs-gantt>
 * ```
 */
export declare class EventMarkerDirective extends Vue {
    render(): void;
}
export declare const EventMarkerPlugin: {
    name: string;
    install(Vue: any): void;
};
