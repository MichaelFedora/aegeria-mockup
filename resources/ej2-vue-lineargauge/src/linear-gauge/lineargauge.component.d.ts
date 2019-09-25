import { ComponentBase } from '@syncfusion/ej2-vue-base';
export declare const properties: string[];
export declare const modelProps: string[];
/**
 * Represents Vuejs Linear Gauge Component
 * ```vue
 * <ejs-lineargauge></ejs-lineargauge>
 * ```
 */
export declare class LinearGaugeComponent extends ComponentBase {
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
    render(createElement: any): any;
    setAnnotationValue(annotationIndex: number, content: string, axisValue?: number): void;
    setPointerValue(axisIndex: number, pointerIndex: number, value: number): void;
}
export declare const LinearGaugePlugin: {
    name: string;
    install(Vue: any): void;
};
