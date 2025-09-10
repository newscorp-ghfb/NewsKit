import { __makeTemplateObject } from "tslib";
/* istanbul ignore file */
import { Block } from '../block';
import { Visible } from '../grid';
import { getColorCssFromTheme, getSpacingCssFromTheme, styled } from '../utils';
export var ModalWrapper = styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: relative;\n  border: 1px solid orange;\n  width: 80vw;\n  height: 80vh;\n  ", ";\n  ", ";\n"], ["\n  position: relative;\n  border: 1px solid orange;\n  width: 80vw;\n  height: 80vh;\n  ", ";\n  ", ";\n"])), getColorCssFromTheme('color', 'inkContrast'), getColorCssFromTheme('backgroundColor', 'inkInverse'));
export var Box = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 80vw;\n"], ["\n  width: 80vw;\n"])));
export var DrawerContainer = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  ", ";\n  ", ";\n\n  position: relative;\n  border: 1px solid red;\n  width: 50vw;\n  height: 80vh;\n  overflow: hidden;\n"], ["\n  ", ";\n  ", ";\n\n  position: relative;\n  border: 1px solid red;\n  width: 50vw;\n  height: 80vh;\n  overflow: hidden;\n"])), getColorCssFromTheme('color', 'inkContrast'), getColorCssFromTheme('backgroundColor', 'inkInverse'));
export var StyledWrapper = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  ", ";\n  ", ";\n"], ["\n  ", ";\n  ", ";\n"])), getSpacingCssFromTheme('marginTop', 'space050'), getSpacingCssFromTheme('marginBottom', 'space100'));
export var StyledLabel = styled.label(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), getSpacingCssFromTheme('marginRight', 'space050'));
export var StyledInput = styled.input(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  ", ";\n"], ["\n  ", ";\n"])), getSpacingCssFromTheme('marginRight', 'space030'));
export var Container = styled(Block)(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n"], ["\n  width: ", ";\n  height: ", ";\n  border: ", ";\n"])), function (_a) {
    var width = _a.width;
    return width || '300px';
}, function (_a) {
    var height = _a.height;
    return height || '150px';
}, function (_a) {
    var theme = _a.theme, border = _a.border;
    return border ? "solid 1px ".concat(theme.colors.red050) : null;
});
export var StyledFullWidthVisible = styled(Visible)(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
export var AudioPlayerContainer = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  max-width: 1156px;\n  ", ";\n"], ["\n  max-width: 1156px;\n  ", ";\n"])), getSpacingCssFromTheme('marginBottom', 'space050'));
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9;
//# sourceMappingURL=styled.js.map