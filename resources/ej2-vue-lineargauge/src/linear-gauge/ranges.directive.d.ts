import Vue from 'vue';
export declare class RangesDirective extends Vue {
    render(): void;
}
export declare const RangesPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Ranges` directive represent a ranges of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-axes>
 * <e-axis>
 * <e-ranges><e-range></e-range></e-ranges>
 * </e-axis>
 * </e-axes>
 * </ejs-lineargauge>
 * ```
 */
export declare class RangeDirective extends Vue {
    render(): void;
}
export declare const RangePlugin: {
    name: string;
    install(Vue: any): void;
};
