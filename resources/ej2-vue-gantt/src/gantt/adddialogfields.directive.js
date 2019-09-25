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
var AddDialogFieldsDirective = /** @class */ (function (_super) {
    __extends(AddDialogFieldsDirective, _super);
    function AddDialogFieldsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDialogFieldsDirective.prototype.render = function () {
        return;
    };
    AddDialogFieldsDirective = __decorate([
        EJComponentDecorator({})
    ], AddDialogFieldsDirective);
    return AddDialogFieldsDirective;
}(Vue));
export { AddDialogFieldsDirective };
export var AddDialogFieldsPlugin = {
    name: 'e-add-dialog-fields',
    install: function (Vue) {
        Vue.component(AddDialogFieldsPlugin.name, AddDialogFieldsDirective);
    }
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
var AddDialogFieldDirective = /** @class */ (function (_super) {
    __extends(AddDialogFieldDirective, _super);
    function AddDialogFieldDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AddDialogFieldDirective.prototype.render = function () {
        return;
    };
    AddDialogFieldDirective = __decorate([
        EJComponentDecorator({})
    ], AddDialogFieldDirective);
    return AddDialogFieldDirective;
}(Vue));
export { AddDialogFieldDirective };
export var AddDialogFieldPlugin = {
    name: 'e-add-dialog-field',
    install: function (Vue) {
        Vue.component(AddDialogFieldPlugin.name, AddDialogFieldDirective);
    }
};
