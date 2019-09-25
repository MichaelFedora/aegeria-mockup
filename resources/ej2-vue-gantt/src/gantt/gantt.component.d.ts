import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
export declare class GanttComponent extends ComponentBase {
    ej2Instances: any;
    propKeys: string[];
    models: string[];
    hasChildDirective: boolean;
    protected hasInjectedModules: boolean;
    tagMapper: {
        [key: string]: Object;
    };
    tagNameMapper: Object;
    constructor();
    setProperties(prop: any, muteOnChange: boolean): void;
    trigger(eventName: string, eventProp: {
        [key: string]: Object;
    }, successHandler?: Function): void;
    render(createElement: any): any;
    ShowColumn(keys: string | string[], showBy?: string): void;
    addPredecessor(id: number, predecessorString: string): void;
    addRecord(data?: Object | Object, rowPosition?: Object, rowIndex?: number): void;
    cancelEdit(): void;
    clearFiltering(): void;
    clearSorting(): void;
    collapseAll(): void;
    collapseByID(id: number): void;
    collapseByIndex(index: number): void;
    csvExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object;
    deleteRecord(taskDetail: number | string | number[] | string[] | Object | Object[]): void;
    enableItems(items: string[], isEnable: boolean): void;
    excelExport(excelExportProperties?: Object, isMultipleExport?: boolean, workbook?: any, isBlob?: boolean): Object;
    expandAll(): void;
    expandByID(id: number): void;
    expandByIndex(index: number): void;
    filterByColumn(fieldName: string, filterOperator: string, filterValue: string | number | Object | boolean, predicate?: string, matchCase?: boolean, ignoreAccent?: boolean): void;
    fitToProject(): void;
    getDurationString(duration: number, durationUnit: string): string;
    getExpandedRecords(records: Object[]): Object[];
    getFormatedDate(date: Object, format?: string): string;
    getGanttColumns(): Object[];
    getGridColumns(): Object[];
    getRecordByID(id: string): Object;
    getRowByID(id: string | number): Object;
    getRowByIndex(index: number): Object;
    getTaskByUniqueID(id: string): Object;
    getTaskbarHeight(): number;
    hideColumn(keys: string | string[], hideBy?: string): void;
    hideSpinner(): void;
    nextTimeSpan(mode?: string): void;
    openAddDialog(): void;
    openEditDialog(taskId?: number): void;
    previousTimeSpan(mode?: string): void;
    removePredecessor(id: number): void;
    removeSortColumn(columnName: string): void;
    reorderColumns(fromFName: string | string[], toFName: string): void;
    scrollToDate(date: string): void;
    scrollToTask(taskId: string): void;
    search(keyVal: string): void;
    selectCell(cellIndex: Object, isToggle?: boolean): void;
    selectCells(rowCellIndexes: Object[]): void;
    selectRow(index: number, isToggle?: boolean): void;
    selectRows(records: number[]): void;
    setScrollTop(scrollTop: number): void;
    setSplitterPosition(value: string | number, type: string): void;
    showSpinner(): void;
    sortColumn(columnName: string, direction: Object, isMultiSort?: boolean): void;
    updateChartScrollOffset(left: number, top: number): void;
    updateDataSource(dataSource: any[], args: object): void;
    updatePredecessor(id: number, predecessorString: string): void;
    updateProjectDates(startDate: Object, endDate: Object, isTimelineRoundOff: boolean): void;
    updateRecordByID(data: Object): void;
    updateRecordByIndex(index: number, data: Object): void;
    zoomIn(): void;
    zoomOut(): void;
}
export declare const GanttPlugin: {
    name: string;
    install(Vue: any): void;
};
