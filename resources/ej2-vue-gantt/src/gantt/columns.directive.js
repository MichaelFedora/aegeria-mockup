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
import Vue from 'vue';
import { EJComponentDecorator } from '@syncfusion/ej2-vue-base';
var ColumnsDirective = /** @class */ (function (_super) {
    __extends(ColumnsDirective, _super);
    function ColumnsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnsDirective.prototype.render = function () {
        return;
    };
    ColumnsDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnsDirective);
    return ColumnsDirective;
}(Vue));
export { ColumnsDirective };
export var ColumnsPlugin = {
    name: 'e-columns',
    install: function (Vue) {
        Vue.component(ColumnsPlugin.name, ColumnsDirective);
    }
};
/**
 * `e-column` directive represent a column of the VueJS Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource='data' allowSelection='true' allowSorting='true'>
 *   <e-columns>
 *    <e-column field='ID' width='150'/>
 *    <e-column field='taskName' headerText='Task Name' width='200'/>
 *   </e-columns>
 * </ejs-gantt>
 * ```
 */
var ColumnDirective = /** @class */ (function (_super) {
    __extends(ColumnDirective, _super);
    function ColumnDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ColumnDirective.prototype.render = function () {
        return;
    };
    ColumnDirective = __decorate([
        EJComponentDecorator({})
    ], ColumnDirective);
    return ColumnDirective;
}(Vue));
export { ColumnDirective };
export var ColumnPlugin = {
    name: 'e-column',
    install: function (Vue) {
        Vue.component(ColumnPlugin.name, ColumnDirective);
    }
};
