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
import { ComponentBase, EJComponentDecorator } from '@syncfusion/ej2-vue-base';
import { LinearGauge } from '@syncfusion/ej2-lineargauge';
import { RangesDirective, RangeDirective, RangesPlugin, RangePlugin } from './ranges.directive';
import { PointersDirective, PointerDirective, PointersPlugin, PointerPlugin } from './pointers.directive';
import { AxesDirective, AxisDirective, AxesPlugin, AxisPlugin } from './axes.directive';
import { AnnotationsDirective, AnnotationDirective, AnnotationsPlugin, AnnotationPlugin } from './annotations.directive';
export var properties = ['annotations', 'axes', 'background', 'border', 'container', 'description', 'enablePersistence', 'enableRtl', 'format', 'height', 'locale', 'margin', 'orientation', 'rangePalettes', 'tabIndex', 'theme', 'title', 'titleStyle', 'tooltip', 'useGroupingSeparator', 'width', 'animationComplete', 'annotationRender', 'axisLabelRender', 'gaugeMouseDown', 'gaugeMouseLeave', 'gaugeMouseMove', 'gaugeMouseUp', 'load', 'loaded', 'resized', 'tooltipRender', 'valueChange'];
export var modelProps = [];
/**
 * Represents Vuejs Linear Gauge Component
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
var LinearGaugeComponent = /** @class */ (function (_super) {
    __extends(LinearGaugeComponent, _super);
    function LinearGaugeComponent() {
        var _this = _super.call(this) || this;
        _this.propKeys = properties;
        _this.models = modelProps;
        _this.hasChildDirective = true;
        _this.hasInjectedModules = true;
        _this.tagMapper = { "e-axes": { "e-axis": { "e-ranges": "e-range", "e-pointers": "e-pointer" } }, "e-annotations": "e-annotation" };
        _this.tagNameMapper = {};
        _this.ej2Instances = new LinearGauge({});
        _this.bindProperties();
        _this.ej2Instances._setProperties = _this.ej2Instances.setProperties;
        _this.ej2Instances.setProperties = _this.setProperties;
        return _this;
    }
    LinearGaugeComponent.prototype.setProperties = function (prop, muteOnChange) {
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
    LinearGaugeComponent.prototype.render = function (createElement) {
        return createElement('div', this.$slots.default);
    };
    LinearGaugeComponent.prototype.setAnnotationValue = function (annotationIndex, content, axisValue) {
        return this.ej2Instances.setAnnotationValue(annotationIndex, content, axisValue);
    };
    LinearGaugeComponent.prototype.setPointerValue = function (axisIndex, pointerIndex, value) {
        return this.ej2Instances.setPointerValue(axisIndex, pointerIndex, value);
    };
    LinearGaugeComponent = __decorate([
        EJComponentDecorator({
            props: properties
        })
    ], LinearGaugeComponent);
    return LinearGaugeComponent;
}(ComponentBase));
export { LinearGaugeComponent };
export var LinearGaugePlugin = {
    name: 'ejs-lineargauge',
    install: function (Vue) {
        Vue.component(LinearGaugePlugin.name, LinearGaugeComponent);
        Vue.component(AxisPlugin.name, AxisDirective);
        Vue.component(AxesPlugin.name, AxesDirective);
        Vue.component(RangePlugin.name, RangeDirective);
        Vue.component(RangesPlugin.name, RangesDirective);
        Vue.component(PointerPlugin.name, PointerDirective);
        Vue.component(PointersPlugin.name, PointersDirective);
        Vue.component(AnnotationPlugin.name, AnnotationDirective);
        Vue.component(AnnotationsPlugin.name, AnnotationsDirective);
    }
};
