import { __makeTemplateObject } from "tslib";
import { getStylePreset, getTransitionPreset, styled } from '../utils/style';
import { GridLayout } from '../grid-layout/grid-layout';
import { LinkStandalone } from '../link';
var StyledGrid = styled(GridLayout)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  ", ";\n  ", ";\n  ", "\n"], ["\n  ", ";\n  ", ";\n  ", "\n"])), getStylePreset('', ''), getTransitionPreset('', ''), function (_a) {
    var areaName = _a.areaName;
    return areaName && "grid-area: ".concat(areaName, ";");
});
export var StyledCard = styled(StyledGrid)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
export var StyledMedia = StyledGrid;
export var StyledContent = StyledGrid;
export var StyledActions = styled(StyledGrid)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  z-index: 2;\n"], ["\n  position: relative;\n  z-index: 2;\n"])));
export var StyledLink = styled(LinkStandalone)(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  text-decoration: none;\n  ", "\n"], ["\n  text-decoration: none;\n  ", "\n"])), function (_a) {
    var expand = _a.expand;
    return expand &&
        "\n    &:before {\n      content: '';\n      position: absolute;\n      inset: 0;\n      z-index: 1;\n    }\n    ";
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=styled.js.map