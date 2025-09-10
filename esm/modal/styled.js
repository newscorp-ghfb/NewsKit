import { __makeTemplateObject } from "tslib";
import { BaseDialogView } from '../dialog';
import { styled, getStylePreset, getResponsiveSize } from '../utils/style';
import { getMediaQueryFromTheme } from '../utils';
import { getTransitionPreset } from '../utils/style/transition-preset';
import { logicalPaddingProps } from '../utils/logical-properties';
export var StyledModalWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), function (_a) {
    var $open = _a.$open, inline = _a.inline;
    return $open &&
        "\n      display: flex;\n      align-items: center;\n      justify-content: center;\n      // Remove events on the modal wrapper so that users can click on the content behind it ( like overlay or body )\n      pointer-events: none;\n      top: 0;\n      right: 0;\n      bottom: 0;\n      left: 0;\n      position: ".concat(inline ? 'absolute' : 'fixed', ";\n  ");
});
export var StyledModal = styled(BaseDialogView)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  // adds pointer events which are removed by its parent ( StyledModalWrapper ) so that modal is interactive\n  pointer-events: all;\n\n  ", " {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", "\n"], ["\n  // adds pointer events which are removed by its parent ( StyledModalWrapper ) so that modal is interactive\n  pointer-events: all;\n\n  ", " {\n    ", ";\n  }\n\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n  ", ";\n\n  ", ";\n\n  ", "\n"])), getMediaQueryFromTheme('md'), getResponsiveSize('top', 'modal.panel', 'panel', 'topOffset'), getStylePreset('modal.panel', 'panel'), getResponsiveSize('width', 'modal.panel', 'panel', 'width'), getResponsiveSize('minWidth', 'modal.panel', 'panel', 'minWidth'), getResponsiveSize('maxWidth', 'modal.panel', 'panel', 'maxWidth'), getResponsiveSize('height', 'modal.panel', 'panel', 'height'), getResponsiveSize('minHeight', 'modal.panel', 'panel', 'minHeight'), getResponsiveSize('maxHeight', 'modal.panel', 'panel', 'maxHeight'), getTransitionPreset("modal.panel", 'panel', 'nk-modal'), logicalPaddingProps('modal.panel', 'panel'));
var templateObject_1, templateObject_2;
//# sourceMappingURL=styled.js.map