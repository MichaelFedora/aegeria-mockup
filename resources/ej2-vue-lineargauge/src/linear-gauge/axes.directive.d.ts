import Vue from 'vue';
export declare class AxesDirective extends Vue {
    render(): void;
}
export declare const AxesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * Axes directive represent a axes of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes><e-axis></e-axis></e-axes>
 * </ejs-lineargauge>
 * ```
 */
export declare class AxisDirective extends Vue {
    render(): void;
}
export declare const AxisPlugin: {
    name: string;
    install(Vue: any): void;
};
