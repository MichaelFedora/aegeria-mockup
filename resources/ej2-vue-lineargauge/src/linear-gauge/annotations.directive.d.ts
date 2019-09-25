import Vue from 'vue';
export declare class AnnotationsDirective extends Vue {
    render(): void;
}
export declare const AnnotationsPlugin: {
    name: string;
    install(Vue: any): void;
};
/**
 * `Annotations` directive represent a annotations of the VueJS linear gauge.
 * ```vue
 * <ejs-lineargauge>
 * <e-annotations><e-annotation></e-annotation></e-annotations>
 * </ejs-lineargauge>
 * ```
 */
export declare class AnnotationDirective extends Vue {
    render(): void;
}
export declare const AnnotationPlugin: {
    name: string;
    install(Vue: any): void;
};
