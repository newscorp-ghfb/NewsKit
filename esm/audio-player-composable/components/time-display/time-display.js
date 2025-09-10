import { __assign, __makeTemplateObject, __rest } from "tslib";
import React from 'react';
import { getStylePreset, getTypographyPreset, styled } from '../../../utils';
import { useAudioPlayerContext } from '../../context';
import { withOwnTheme } from '../../../utils/with-own-theme';
import defaults from './defaults';
import stylePresets from './style-presets';
import { TextBlock } from '../../../text-block';
var StyledTextBlock = styled(TextBlock)(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: block;\n  ", "\n  ", ";\n"], ["\n  display: block;\n  ", "\n  ", ";\n"])), getStylePreset("audioPlayerTimeDisplay", ''), getTypographyPreset("audioPlayerTimeDisplay", ''));
var ThemelessTimeDisplay = React.forwardRef(function (_a, ref) {
    var _b = _a.overrides, overrides = _b === void 0 ? {} : _b, format = _a.format, restProps = __rest(_a, ["overrides", "format"]);
    var getTimeDisplayProps = useAudioPlayerContext().getTimeDisplayProps;
    var _c = getTimeDisplayProps(), defaultFormat = _c.format, currentTime = _c.currentTime, duration = _c.duration;
    var formatFn = typeof format === 'function' ? format : defaultFormat;
    return (React.createElement(StyledTextBlock, __assign({ ref: ref, as: "span", overrides: overrides, "data-testid": "audio-player-time-display" }, restProps), formatFn({ currentTime: currentTime, duration: duration })));
});
export var AudioPlayerTimeDisplay = withOwnTheme(ThemelessTimeDisplay)({
    defaults: defaults,
    stylePresets: stylePresets,
});
var templateObject_1;
//# sourceMappingURL=time-display.js.map