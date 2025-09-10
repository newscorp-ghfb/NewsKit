import { __makeTemplateObject } from "tslib";
import { Button } from '../button';
import { getStylePreset, getResponsiveSpace, styled } from '../utils/style';
import { logicalProps } from '../utils/logical-properties';
export var StyledMenu = styled.nav(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n  > ul {\n    box-sizing: border-box;\n    position: relative;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    display: flex;\n    ", "\n\n    ", "\n  }\n\n  li:last-of-type {\n    ", "\n  }\n\n  ", ";\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n  > ul {\n    box-sizing: border-box;\n    position: relative;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    display: flex;\n    ", "\n\n    ", "\n  }\n\n  li:last-of-type {\n    ", "\n  }\n\n  ", ";\n  ", "\n"])), function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'height: 100%;' : 'width: 100%;');
}, function (_a) {
    var vertical = _a.vertical;
    return vertical && 'flex-direction: column;';
}, function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'height: 100%;' : 'width: 100%;');
}, function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'margin-bottom:0;' : 'margin-right: 0');
}, getStylePreset('menu', ''), logicalProps());
export var StyledMenuGroup = styled.li(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  // empty string because there is no default and no overrides path because overrides are not nested\n  ", ";\n\n  ", "\n\n  > ul {\n    box-sizing: border-box;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    ", "\n  }\n"], ["\n  box-sizing: border-box;\n\n  // empty string because there is no default and no overrides path because overrides are not nested\n  ", ";\n\n  ", "\n\n  > ul {\n    box-sizing: border-box;\n    list-style-type: none;\n    margin: 0;\n    padding: 0;\n\n    ", "\n  }\n"])), getStylePreset(''), function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginBottom' : 'marginRight', vertical ? "menuGroup" : "menu", '', 'spaceInline');
}, function (_a) {
    var vertical = _a.vertical;
    return !vertical && 'display: flex;';
});
export var StyledMenuGroupTitle = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"], ["\n  box-sizing: border-box;\n\n  ", "\n  ", "\n"])), getResponsiveSpace('marginBottom', 'menuGroup.title', 'title', 'spaceInline'), logicalProps('menuGroup.title', 'title'));
export var StyledMenuItem = styled.li(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  box-sizing: border-box;\n  ", "\n"], ["\n  box-sizing: border-box;\n  ", "\n"])), function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginBottom' : 'marginRight', "menu", '', 'spaceInline');
});
var menuItemFlexAlign = {
    start: 'flex-start',
    center: 'center',
    end: 'flex-end',
    spaceBetween: 'space-between',
};
var menuItemTextAlign = {
    start: 'left',
    center: 'center',
    end: 'right',
};
var getTextAlign = function (align) {
    return align === 'spaceBetween' ? menuItemTextAlign.start : menuItemTextAlign[align];
};
export var StyledButton = styled(Button)(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  width: 100%;\n  ", "\n  ", "\n  text-align: ", ";\n"], ["\n  width: 100%;\n  ", "\n  ", "\n  text-align: ", ";\n"])), function (_a) {
    var selected = _a.selected, vertical = _a.vertical, size = _a.size;
    return selected &&
        getStylePreset("menuItem.".concat(vertical ? 'vertical' : 'horizontal', ".").concat(size), '', { isSelected: selected });
}, function (_a) {
    var align = _a.align;
    return align &&
        menuItemFlexAlign[align] && {
        justifyContent: menuItemFlexAlign[align],
    };
}, function (_a) {
    var align = _a.align;
    return align && getTextAlign(align);
});
export var StyledMenuDivider = styled.li(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  box-sizing: border-box;\n\n  .nk-menu-group + & {\n    ", "\n  }\n\n  .nk-menu-item + & {\n    ", "\n  }\n"], ["\n  box-sizing: border-box;\n\n  .nk-menu-group + & {\n    ", "\n  }\n\n  .nk-menu-item + & {\n    ", "\n  }\n"])), function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginBottom' : 'marginRight', "menuGroup", '', 'spaceInline');
}, function (_a) {
    var vertical = _a.vertical;
    return getResponsiveSpace(vertical ? 'marginBottom' : 'marginRight', "menu", '', 'spaceInline');
});
export var StyledUl = styled.ul(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  display: ", ";\n  flex-direction: ", ";\n  box-sizing: border-box;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"], ["\n  display: ", ";\n  flex-direction: ", ";\n  box-sizing: border-box;\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n\n  ", ";\n\n  ", ";\n\n  ", ";\n"])), function (_a) {
    var expanded = _a.expanded;
    return (expanded ? 'flex' : 'none');
}, function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'column' : 'row');
}, function (_a) {
    var size = _a.size, vertical = _a.vertical;
    return getStylePreset("menuSubItem.".concat(vertical ? 'vertical' : 'horizontal', ".").concat(size, ".list"), 'list');
}, function (_a) {
    var size = _a.size, vertical = _a.vertical;
    return logicalProps("menuSubItem.".concat(vertical ? 'vertical' : 'horizontal', ".").concat(size, ".list"), 'list');
}, function (_a) {
    var vertical = _a.vertical;
    return vertical
        ? {}
        : {
            position: 'absolute',
            left: '0',
            width: '100%',
        };
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=styled.js.map