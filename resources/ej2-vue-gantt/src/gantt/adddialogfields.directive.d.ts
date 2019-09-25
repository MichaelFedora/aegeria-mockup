import Vue from 'vue';
export declare class AddDialogFieldsDirective extends Vue {
    render(): void;
}
export declare const AddDialogFieldsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-add-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-add-dialog-fields>
 *     <e-add-dialog-field type='General' headerText='General'/>
 *     <e-add-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-add-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export declare class AddDialogFieldDirective extends Vue {
    render(): void;
}
export declare const AddDialogFieldPlugin: {
    name: string;
    install(Vue: any): void;
};
