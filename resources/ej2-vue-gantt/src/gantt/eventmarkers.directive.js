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
var EventMarkersDirective = /** @class */ (function (_super) {
    __extends(EventMarkersDirective, _super);
    function EventMarkersDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMarkersDirective.prototype.render = function () {
        return;
    };
    EventMarkersDirective = __decorate([
        EJComponentDecorator({})
    ], EventMarkersDirective);
    return EventMarkersDirective;
}(Vue));
export { EventMarkersDirective };
export var EventMarkersPlugin = {
    name: 'e-event-markers',
    install: function (Vue) {
        Vue.component(EventMarkersPlugin.name, EventMarkersDirective);
    }
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
var EventMarkerDirective = /** @class */ (function (_super) {
    __extends(EventMarkerDirective, _super);
    function EventMarkerDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    EventMarkerDirective.prototype.render = function () {
        return;
    };
    EventMarkerDirective = __decorate([
        EJComponentDecorator({})
    ], EventMarkerDirective);
    return EventMarkerDirective;
}(Vue));
export { EventMarkerDirective };
export var EventMarkerPlugin = {
    name: 'e-event-marker',
    install: function (Vue) {
        Vue.component(EventMarkerPlugin.name, EventMarkerDirective);
    }
};
