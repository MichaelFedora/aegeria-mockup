var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { isUndefined } from '@syncfusion/ej2-base';
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { Gantt } from '@syncfusion/ej2-gantt';
import { ColumnsDirective, ColumnDirective, ColumnsPlugin, ColumnPlugin } from './columns.directive';
import { AddDialogFieldsDirective, AddDialogFieldDirective, AddDialogFieldsPlugin, AddDialogFieldPlugin } from './adddialogfields.directive';
import { EditDialogFieldsDirective, EditDialogFieldDirective, EditDialogFieldsPlugin, EditDialogFieldPlugin } from './editdialogfields.directive';
import { DayWorkingTimeCollectionDirective, DayWorkingTimeDirective, DayWorkingTimeCollectionPlugin, DayWorkingTimePlugin } from './dayworkingtime.directive';
import { HolidaysDirective, HolidayDirective, HolidaysPlugin, HolidayPlugin } from './holidays.directive';
import { EventMarkersDirective, EventMarkerDirective, EventMarkersPlugin, EventMarkerPlugin } from './eventmarkers.directive';
export var properties = ['addDialogFields', 'allowExcelExport', 'allowFiltering', 'allowReordering', 'allowResizing', 'allowSelection', 'allowSorting', 'allowUnscheduledTasks', 'autoFocusTasks', 'baselineColor', 'collapseAllParentTasks', 'columnMenuItems', 'columns', 'connectorLineBackground', 'connectorLineWidth', 'contextMenuItems', 'dataSource', 'dateFormat', 'dayWorkingTime', 'durationUnit', 'editDialogFields', 'editSettings', 'enableContextMenu', 'enablePersistence', 'enablePredecessorValidation', 'enableRtl', 'eventMarkers', 'filterSettings', 'gridLines', 'height', 'highlightWeekends', 'holidays', 'includeWeekend', 'labelSettings', 'locale', 'milestoneTemplate', 'parentTaskbarTemplate', 'projectEndDate', 'projectStartDate', 'query', 'renderBaseline', 'resourceIDMapping', 'resourceNameMapping', 'resources', 'rowHeight', 'searchSettings', 'selectedRowIndex', 'selectionSettings', 'showColumnMenu', 'showInlineNotes', 'sortSettings', 'splitterSettings', 'taskFields', 'taskbarHeight', 'taskbarTemplate', 'timelineSettings', 'toolbar', 'tooltipSettings', 'treeColumnIndex', 'width', 'workWeek', 'actionBegin', 'actionComplete', 'actionFailure', 'beforeExcelExport', 'beforeTooltipRender', 'cellDeselected', 'cellDeselecting', 'cellEdit', 'cellSelected', 'cellSelecting', 'collapsed', 'collapsing', 'columnDrag', 'columnDragStart', 'columnDrop', 'columnMenuClick', 'columnMenuOpen', 'contextMenuClick', 'contextMenuOpen', 'created', 'dataBound', 'destroyed', 'endEdit', 'excelExportComplete', 'excelHeaderQueryCellInfo', 'excelQueryCellInfo', 'expanded', 'expanding', 'headerCellInfo', 'load', 'queryCellInfo', 'queryTaskbarInfo', 'resizeStart', 'resizeStop', 'resizing', 'rowDataBound', 'rowDeselected', 'rowDeselecting', 'rowSelected', 'rowSelecting', 'splitterResizeStart', 'splitterResized', 'splitterResizing', 'taskbarEdited', 'taskbarEditing', 'toolbarClick'];
export var modelProps = ['dataSource'];
/**
 * `ejs-gantt` represents the VueJS Gantt Component.
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'></ejs-gantt>
 * ```
 */
var GanttComponent = /** @class */ (function (_super) {
    __extends(GanttComponent, _super);
    function GanttComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-columns": "e-column", "e-add-dialog-fields": "e-add-dialog-field", "e-edit-dialog-fields": "e-edit-dialog-field", "e-day-working-time-collection": "e-day-working-time", "e-holidays": "e-holidays", "e-event-markers": "e-event-marker" };
        _this.tagNameMapper = { "e-add-dialog-fields": "e-addDialogFields", "e-edit-dialog-fields": "e-editDialogFields", "e-day-working-time-collection": "e-dayWorkingTime", "e-event-markers": "e-eventMarkers" };
        _this.ej2Instances = new Gantt({});
        _this.ej2Instances._trigger = _this.ej2Instances.trigger;
        _this.ej2Instances.trigger = _this.trigger;
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    GanttComponent.prototype.setProperties = function (prop, muteOnChange) {
        var _this = this;
        if (this.ej2Instances && this.ej2Instances._setProperties) {
            this.ej2Instances._setProperties(prop, muteOnChange);
        }
        if (prop && this.models && this.models.length) {
            Object.keys(prop).map(function (key) {
                _this.models.map(function (model) {
                    if ((key === model) && !(/datasource/i.test(key))) {
                        _this.$emit('update:' + key, prop[key]);
                    }
                });
            });
        }
    };
    GanttComponent.prototype.trigger = function (eventName, eventProp, successHandler) {
        if ((eventName === 'change' || eventName === 'input') && this.models && (this.models.length !== 0)) {
            var key = this.models.toString().match(/checked|value/) || [];
            var propKey = key[0];
            if (eventProp && key && !isUndefined(eventProp[propKey])) {
                this.$emit('update:' + propKey, eventProp[propKey]);
                this.$emit('modelchanged', eventProp[propKey]);
            }
        }
        if (this.ej2Instances && this.ej2Instances._trigger) {
            this.ej2Instances._trigger(eventName, eventProp, successHandler);
        }
    };
    GanttComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    GanttComponent.prototype.ShowColumn = function (keys, showBy) {
        return this.ej2Instances.ShowColumn(keys, showBy);
    };
    GanttComponent.prototype.addPredecessor = function (id, predecessorString) {
        return this.ej2Instances.addPredecessor(id, predecessorString);
    };
    GanttComponent.prototype.addRecord = function (data, rowPosition, rowIndex) {
        return this.ej2Instances.addRecord(data, rowPosition, rowIndex);
    };
    GanttComponent.prototype.cancelEdit = function () {
        return this.ej2Instances.cancelEdit();
    };
    GanttComponent.prototype.clearFiltering = function () {
        return this.ej2Instances.clearFiltering();
    };
    GanttComponent.prototype.clearSorting = function () {
        return this.ej2Instances.clearSorting();
    };
    GanttComponent.prototype.collapseAll = function () {
        return this.ej2Instances.collapseAll();
    };
    GanttComponent.prototype.collapseByID = function (id) {
        return this.ej2Instances.collapseByID(id);
    };
    GanttComponent.prototype.collapseByIndex = function (index) {
        return this.ej2Instances.collapseByIndex(index);
    };
    GanttComponent.prototype.csvExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.csvExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.deleteRecord = function (taskDetail) {
        return this.ej2Instances.deleteRecord(taskDetail);
    };
    GanttComponent.prototype.enableItems = function (items, isEnable) {
        return this.ej2Instances.enableItems(items, isEnable);
    };
    GanttComponent.prototype.excelExport = function (excelExportProperties, isMultipleExport, workbook, isBlob) {
        return this.ej2Instances.excelExport(excelExportProperties, isMultipleExport, workbook, isBlob);
    };
    GanttComponent.prototype.expandAll = function () {
        return this.ej2Instances.expandAll();
    };
    GanttComponent.prototype.expandByID = function (id) {
        return this.ej2Instances.expandByID(id);
    };
    GanttComponent.prototype.expandByIndex = function (index) {
        return this.ej2Instances.expandByIndex(index);
    };
    GanttComponent.prototype.filterByColumn = function (fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent) {
        return this.ej2Instances.filterByColumn(fieldName, filterOperator, filterValue, predicate, matchCase, ignoreAccent);
    };
    GanttComponent.prototype.fitToProject = function () {
        return this.ej2Instances.fitToProject();
    };
    GanttComponent.prototype.getDurationString = function (duration, durationUnit) {
        return this.ej2Instances.getDurationString(duration, durationUnit);
    };
    GanttComponent.prototype.getExpandedRecords = function (records) {
        return this.ej2Instances.getExpandedRecords(records);
    };
    GanttComponent.prototype.getFormatedDate = function (date, format) {
        return this.ej2Instances.getFormatedDate(date, format);
    };
    GanttComponent.prototype.getGanttColumns = function () {
        return this.ej2Instances.getGanttColumns();
    };
    GanttComponent.prototype.getGridColumns = function () {
        return this.ej2Instances.getGridColumns();
    };
    GanttComponent.prototype.getRecordByID = function (id) {
        return this.ej2Instances.getRecordByID(id);
    };
    GanttComponent.prototype.getRowByID = function (id) {
        return this.ej2Instances.getRowByID(id);
    };
    GanttComponent.prototype.getRowByIndex = function (index) {
        return this.ej2Instances.getRowByIndex(index);
    };
    GanttComponent.prototype.getTaskByUniqueID = function (id) {
        return this.ej2Instances.getTaskByUniqueID(id);
    };
    GanttComponent.prototype.getTaskbarHeight = function () {
        return this.ej2Instances.getTaskbarHeight();
    };
    GanttComponent.prototype.hideColumn = function (keys, hideBy) {
        return this.ej2Instances.hideColumn(keys, hideBy);
    };
    GanttComponent.prototype.hideSpinner = function () {
        return this.ej2Instances.hideSpinner();
    };
    GanttComponent.prototype.nextTimeSpan = function (mode) {
        return this.ej2Instances.nextTimeSpan(mode);
    };
    GanttComponent.prototype.openAddDialog = function () {
        return this.ej2Instances.openAddDialog();
    };
    GanttComponent.prototype.openEditDialog = function (taskId) {
        return this.ej2Instances.openEditDialog(taskId);
    };
    GanttComponent.prototype.previousTimeSpan = function (mode) {
        return this.ej2Instances.previousTimeSpan(mode);
    };
    GanttComponent.prototype.removePredecessor = function (id) {
        return this.ej2Instances.removePredecessor(id);
    };
    GanttComponent.prototype.removeSortColumn = function (columnName) {
        return this.ej2Instances.removeSortColumn(columnName);
    };
    GanttComponent.prototype.reorderColumns = function (fromFName, toFName) {
        return this.ej2Instances.reorderColumns(fromFName, toFName);
    };
    GanttComponent.prototype.scrollToDate = function (date) {
        return this.ej2Instances.scrollToDate(date);
    };
    GanttComponent.prototype.scrollToTask = function (taskId) {
        return this.ej2Instances.scrollToTask(taskId);
    };
    GanttComponent.prototype.search = function (keyVal) {
        return this.ej2Instances.search(keyVal);
    };
    GanttComponent.prototype.selectCell = function (cellIndex, isToggle) {
        return this.ej2Instances.selectCell(cellIndex, isToggle);
    };
    GanttComponent.prototype.selectCells = function (rowCellIndexes) {
        return this.ej2Instances.selectCells(rowCellIndexes);
    };
    GanttComponent.prototype.selectRow = function (index, isToggle) {
        return this.ej2Instances.selectRow(index, isToggle);
    };
    GanttComponent.prototype.selectRows = function (records) {
        return this.ej2Instances.selectRows(records);
    };
    GanttComponent.prototype.setScrollTop = function (scrollTop) {
        return this.ej2Instances.setScrollTop(scrollTop);
    };
    GanttComponent.prototype.setSplitterPosition = function (value, type) {
        return this.ej2Instances.setSplitterPosition(value, type);
    };
    GanttComponent.prototype.showSpinner = function () {
        return this.ej2Instances.showSpinner();
    };
    GanttComponent.prototype.sortColumn = function (columnName, direction, isMultiSort) {
        return this.ej2Instances.sortColumn(columnName, direction, isMultiSort);
    };
    GanttComponent.prototype.updateChartScrollOffset = function (left, top) {
        return this.ej2Instances.updateChartScrollOffset(left, top);
    };
    GanttComponent.prototype.updateDataSource = function (dataSource, args) {
        return this.ej2Instances.updateDataSource(dataSource, args);
    };
    GanttComponent.prototype.updatePredecessor = function (id, predecessorString) {
        return this.ej2Instances.updatePredecessor(id, predecessorString);
    };
    GanttComponent.prototype.updateProjectDates = function (startDate, endDate, isTimelineRoundOff) {
        return this.ej2Instances.updateProjectDates(startDate, endDate, isTimelineRoundOff);
    };
    GanttComponent.prototype.updateRecordByID = function (data) {
        return this.ej2Instances.updateRecordByID(data);
    };
    GanttComponent.prototype.updateRecordByIndex = function (index, data) {
        return this.ej2Instances.updateRecordByIndex(index, data);
    };
    GanttComponent.prototype.zoomIn = function () {
        return this.ej2Instances.zoomIn();
    };
    GanttComponent.prototype.zoomOut = function () {
        return this.ej2Instances.zoomOut();
    };
    GanttComponent = __decorate([
        EJComponentDecorator({
            props: properties,
            model: {
                event: 'modelchanged'
            }
        })
    ], GanttComponent);
    return GanttComponent;
}(ComponentBase));
export { GanttComponent };
export var GanttPlugin = {
    name: 'ejs-gantt',
    install: function (Vue) {
        Vue.component(GanttPlugin.name, GanttComponent);
        Vue.component(ColumnPlugin.name, ColumnDirective);
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
        Vue.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
        Vue.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
        Vue.component(EditDialogFieldPlugin.name, EditDialogFieldDirective);
        Vue.component(EditDialogFieldsPlugin.name, EditDialogFieldsDirective);
        Vue.component(DayWorkingTimePlugin.name, DayWorkingTimeDirective);
        Vue.component(DayWorkingTimeCollectionPlugin.name, DayWorkingTimeCollectionDirective);
        Vue.component(HolidayPlugin.name, HolidayDirective);
        Vue.component(HolidaysPlugin.name, HolidaysDirective);
        Vue.component(EventMarkerPlugin.name, EventMarkerDirective);
        Vue.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
};
