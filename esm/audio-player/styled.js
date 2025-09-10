import { __makeTemplateObject } from "tslib";
import { styled } from '../utils/style';
import { Grid } from '../grid/grid';
import { Hidden } from '../grid';
import { logicalProps } from '../utils/logical-properties';
export var PlayerGrid = styled(Grid)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  box-sizing: border-box;\n"], ["\n  box-sizing: border-box;\n"])));
export var PlayerContainer = styled.section(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 100%;\n  ", ";\n"], ["\n  width: 100%;\n  ", ";\n"])), logicalProps('audioPlayer'));
export var ControlContainer = styled(Hidden)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  box-sizing: border-box;\n  width: calc(\n    184px + ", "\n  );\n  padding: 0\n    ", ";\n"], ["\n  box-sizing: border-box;\n  width: calc(\n    184px + ", "\n  );\n  padding: 0\n    ", ";\n"])), function (_a) {
    var theme = _a.theme, playerTrackSize = _a.playerTrackSize;
    return "".concat(theme.sizing[playerTrackSize]);
}, function (_a) {
    var theme = _a.theme, playerTrackSize = _a.playerTrackSize;
    return "calc(".concat(theme.sizing[playerTrackSize], " / 2)");
});
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=styled.js.map