import { createElement, isNullOrUndefined, updateBlazorTemplate } from '@syncfusion/ej2-base';
import { getTemplateFunction, getElement, getElementOffset } from '../utils/helper';
import { getFontStyle, valueToCoefficient } from '../utils/helper';
import { annotationRender } from '../model/constant';
/**
 * Represent the Annotation rendering for gauge
 */
var Annotations = /** @class */ (function () {
    function Annotations(gauge) {
        this.gauge = gauge;
    }
    /**
     * To render annotation elements
     */
    Annotations.prototype.renderAnnotationElements = function () {
        var _this = this;
        var secondaryID = this.gauge.element.id + '_Secondary_Element';
        var annotationGroup = createElement('div', { id: this.gauge.element.id + '_AnnotationsGroup' });
        annotationGroup.style.position = 'absolute';
        annotationGroup.style.top = '0px';
        annotationGroup.style.left = '0px';
        this.gauge.annotations.map(function (annotation, index) {
            if (annotation.content !== null) {
                _this.createAnnotationTemplate(annotationGroup, index, annotationGroup, secondaryID);
            }
        });
    };
    /**
     * To create annotation elements
     */
    //tslint:disable
    Annotations.prototype.createAnnotationTemplate = function (element, annotationIndex, annotationGroup, secondaryID) {
        var _this = this;
        var left;
        var top;
        var templateFn;
        var renderAnnotation = false;
        var templateElement;
        var axis;
        var axisIndex;
        var axisValue;
        var id = this.gauge.element.id + '_Annotation_' + annotationIndex;
        var annotation = this.gauge.annotations[annotationIndex];
        var childElement;
        childElement = createElement('div', {
            id: this.gauge.element.id + '_Annotation_' + annotationIndex, styles: 'position: absolute; z-index:' + annotation.zIndex + ';'
        });
        var argsData = {
            cancel: false, name: annotationRender, content: annotation.content,
            annotation: annotation, textStyle: annotation.font
        };
        argsData.textStyle.color = annotation.font.color || this.gauge.themeStyle.labelColor;
        var annotationRenderSuccess = function (argsData) {
            if (!argsData.cancel) {
                var blazor = 'Blazor';
                templateFn = getTemplateFunction(argsData.content);
                if (templateFn && (!window[blazor] ? templateFn(_this.gauge, null, null, _this.gauge.element.id + '_ContentTemplate' + annotationIndex).length : {})) {
                    templateElement = Array.prototype.slice.call(templateFn(!window[blazor] ? _this.gauge : {}, null, null, _this.gauge.element.id + '_ContentTemplate' + annotationIndex));
                    var length_1 = templateElement.length;
                    for (var i = 0; i < length_1; i++) {
                        childElement.appendChild(templateElement[i]);
                    }
                }
                else {
                    childElement.appendChild(createElement('div', {
                        innerHTML: argsData.content,
                        styles: getFontStyle(argsData.textStyle)
                    }));
                }
                var offset = getElementOffset(childElement.cloneNode(true), _this.gauge.element);
                if (!(isNullOrUndefined(argsData.annotation.axisValue))) {
                    axisIndex = isNullOrUndefined(argsData.annotation.axisIndex) ? 0 : argsData.annotation.axisIndex;
                    axis = _this.gauge.axes[axisIndex];
                    var range = axis.visibleRange;
                    renderAnnotation = (argsData.annotation.axisValue >= range.min && argsData.annotation.axisValue <= range.max) ? true : false;
                    var line = axis.lineBounds;
                    if (_this.gauge.orientation === 'Vertical') {
                        left = line.x + argsData.annotation.x;
                        top = ((valueToCoefficient(argsData.annotation.axisValue, axis, _this.gauge.orientation, range) * line.height) + line.y);
                        top += argsData.annotation.y;
                    }
                    else {
                        left = ((valueToCoefficient(argsData.annotation.axisValue, axis, _this.gauge.orientation, range) * line.width) + line.x);
                        left += argsData.annotation.x;
                        top = line.y + argsData.annotation.y;
                    }
                    left -= (offset.width / 2);
                    top -= (offset.height / 2);
                }
                else {
                    var elementRect = _this.gauge.element.getBoundingClientRect();
                    var bounds = _this.gauge.svgObject.getBoundingClientRect();
                    renderAnnotation = true;
                    left = Math.abs(bounds.left - elementRect.left);
                    top = Math.abs(bounds.top - elementRect.top);
                    left = (argsData.annotation.horizontalAlignment === 'None') ? (left + argsData.annotation.x) : left;
                    top = (argsData.annotation.verticalAlignment === 'None') ? top + argsData.annotation.y : top;
                    switch (argsData.annotation.verticalAlignment) {
                        case 'Near':
                            top = top + argsData.annotation.y;
                            break;
                        case 'Center':
                            top = top + argsData.annotation.y + ((bounds.height / 2) - (offset.height / 2));
                            break;
                        case 'Far':
                            top = (top + bounds.height) + argsData.annotation.y - offset.height;
                            break;
                    }
                    switch (argsData.annotation.horizontalAlignment) {
                        case 'Near':
                            left = left + argsData.annotation.x;
                            break;
                        case 'Center':
                            left = left + argsData.annotation.x + ((bounds.width / 2) - (offset.width / 2));
                            break;
                        case 'Far':
                            left = (left + bounds.width) + argsData.annotation.x - offset.width;
                            break;
                    }
                }
                childElement.style.left = left + 'px';
                childElement.style.top = top + 'px';
                if (renderAnnotation) {
                    element.appendChild(childElement);
                }
            }
            if (!isNullOrUndefined(getElement(secondaryID))) {
                getElement(secondaryID).appendChild(annotationGroup);
                for (var i = 0; i < _this.gauge.annotations.length; i++) {
                    updateBlazorTemplate(_this.gauge.element.id + '_ContentTemplate' + i, 'ContentTemplate', _this.gauge.annotations[i]);
                }
            }
        };
        annotationRenderSuccess.bind(this.gauge);
        this.gauge.trigger(annotationRender, argsData, annotationRenderSuccess);
    };
    /*
     * Get module name.
     */
    Annotations.prototype.getModuleName = function () {
        return 'Annotations';
    };
    /**
     * To destroy the annotation.
     * @return {void}
     * @private
     */
    Annotations.prototype.destroy = function (gauge) {
        // Destroy method performed here
    };
    return Annotations;
}());
export { Annotations };
