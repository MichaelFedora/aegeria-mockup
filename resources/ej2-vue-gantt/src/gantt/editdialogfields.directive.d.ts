import Vue from 'vue';
export declare class EditDialogFieldsDirective extends Vue {
    render(): void;
}
export declare const EditDialogFieldsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `e-edit-dialog-fields` directive represent a add dialog fields in VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-edit-dialog-fields>
 *     <e-edit-dialog-field type='General' headerText='General'/>
 *     <e-edit-dialog-field type='Dependency' headerText='Dependency'/>
 *   </e-edit-dialog-fields>
 * </ejs-gantt>
 * ```
 */
export declare class EditDialogFieldDirective extends Vue {
    render(): void;
}
export declare const EditDialogFieldPlugin: {
    name: string;
    install(Vue: any): void;
};
