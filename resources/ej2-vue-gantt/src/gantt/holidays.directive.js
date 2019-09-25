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
var HolidaysDirective = /** @class */ (function (_super) {
    __extends(HolidaysDirective, _super);
    function HolidaysDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidaysDirective.prototype.render = function () {
        return;
    };
    HolidaysDirective = __decorate([
        EJComponentDecorator({})
    ], HolidaysDirective);
    return HolidaysDirective;
}(Vue));
export { HolidaysDirective };
export var HolidaysPlugin = {
    name: 'e-holidays',
    install: function (Vue) {
        Vue.component(HolidaysPlugin.name, HolidaysDirective);
    }
};
/**
 * `e-holidays` directive represent a holidays collection in Gantt.
 * It must be contained in a Gantt component(`ejs-gantt`).
 * ```vue
 * <ejs-gantt :dataSource]='data' allowSelection='true' allowSorting='true'>
 *   <e-holidays>
 *     <e-holiday from='02/20/2018' label='Holiday 1'/>
 *     <e-holiday from='05/15/2018' label='Holiday 2'/>
 *   </e-holidays>
 * </ejs-gantt>
 * ```
 */
var HolidayDirective = /** @class */ (function (_super) {
    __extends(HolidayDirective, _super);
    function HolidayDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HolidayDirective.prototype.render = function () {
        return;
    };
    HolidayDirective = __decorate([
        EJComponentDecorator({})
    ], HolidayDirective);
    return HolidayDirective;
}(Vue));
export { HolidayDirective };
export var HolidayPlugin = {
    name: 'e-holidays',
    install: function (Vue) {
        Vue.component(HolidayPlugin.name, HolidayDirective);
    }
};
