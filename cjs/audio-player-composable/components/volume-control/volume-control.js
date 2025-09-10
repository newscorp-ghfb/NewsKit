"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AudioPlayerVolumeControl = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importStar(require("react"));
var react_transition_group_1 = require("react-transition-group");
var screen_reader_only_1 = require("../../../screen-reader-only");
var slider_1 = require("../../../slider");
var with_own_theme_1 = require("../../../utils/with-own-theme");
var utils_1 = require("./utils");
var context_1 = require("../../context");
var defaults_1 = tslib_1.__importDefault(require("./defaults"));
var mute_button_1 = require("./mute-button");
var theme_1 = require("../../../theme");
var style_presets_1 = tslib_1.__importDefault(require("./style-presets"));
var grid_layout_1 = require("../../../grid-layout");
var styled_1 = require("./styled");
var hooks_1 = require("../../../utils/hooks");
var deep_merge_1 = require("../../../utils/deep-merge");
var merge_breakpoint_object_1 = require("../../../utils/merge-breakpoint-object");
var filter_object_1 = require("../../../utils/filter-object");
var utils_2 = require("../../../utils");
var get_transition_class_name_1 = require("../../../utils/get-transition-class-name");
var popover_1 = require("../../../popover");
var overrides_1 = require("../../../utils/overrides");
var ThemelessAudioPlayerVolumeControl = react_1.default.forwardRef(function (props, ref) {
    var getVolumeControlProps = (0, context_1.useAudioPlayerContext)().getVolumeControlProps;
    var _a = getVolumeControlProps(props), volume = _a.volume, onChange = _a.onChange, _b = _a.layout, layout = _b === void 0 ? 'horizontal-expanded' : _b, keyboardShortcuts = _a.keyboardShortcuts, overrides = _a.overrides, initialVolume = _a.initialVolume, muteButtonSize = _a.muteButtonSize;
    var _c = (0, react_1.useState)(volume), unMutedVolume = _c[0], setUnMutedVolume = _c[1];
    (0, react_1.useEffect)(function () {
        // Saves the volume into a state,
        // for re-using it when clicking the mute unmute button.
        if (unMutedVolume !== volume && volume > 0) {
            setUnMutedVolume(volume);
        }
    }, [unMutedVolume, volume]);
    var theme = (0, theme_1.useTheme)();
    var cssTransitionNodeRef = react_1.default.useRef(null);
    var buttonOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.button, (0, filter_object_1.filterOutFalsyProperties)(overrides.button)));
    var sliderOverrides = tslib_1.__assign({}, (0, deep_merge_1.deepMerge)((0, merge_breakpoint_object_1.mergeBreakpointObject)(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.slider, (0, filter_object_1.filterOutFalsyProperties)(overrides.slider)));
    var onSliderChange = (0, react_1.useCallback)(function (_a) {
        var newVolume = _a[0];
        return onChange(newVolume);
    }, [onChange]);
    // useInitialVolume Sets the initial volume on page load
    (0, utils_1.useInitialVolume)({ onChange: onChange, initialVolume: initialVolume });
    var volumeSliderInstructionId = (0, hooks_1.useReactKeys)(1)[0];
    // opens volume control on hover/focus when layout = horizontalExpandable.
    var _d = (0, react_1.useState)(false), open = _d[0], setOpen = _d[1];
    var setOpenHandler = (0, react_1.useCallback)(function (state) {
        if (layout === 'horizontal' || layout === 'vertical') {
            setOpen(state);
        }
    }, [setOpen, layout]);
    // makes sure feedback element is fully visible and not cropped when slider is open and user hover/focus on it.
    var _e = react_1.default.useState(false), isVisible = _e[0], setIsVisible = _e[1];
    var setIsVisibleHandler = (0, react_1.useCallback)(function (state) {
        if (layout === 'horizontal') {
            setIsVisible(state);
        }
    }, [setIsVisible, layout]);
    var useSliderContainer = layout === 'horizontal' || layout === 'horizontal-expanded';
    // used for collapsed and vertical
    var gridSingleAreas = 'muteButton';
    // used for horizontal and horizontal expanded
    var gridMultipleAreas = 'muteButton slider';
    // used for collapsed and vertical
    var gridColumnsSingle = '1fr';
    // used for horizontal and horizontal expanded
    var gridColumnsMultiple = 'auto 1fr';
    var gridAreas = useSliderContainer ? gridMultipleAreas : gridSingleAreas;
    var gridColumns = useSliderContainer
        ? gridColumnsMultiple
        : gridColumnsSingle;
    var sliderComponent = (react_1.default.createElement(slider_1.Slider, { vertical: layout === 'vertical', min: 0, max: 1, step: 0.1, values: [volume], onChange: onSliderChange, ariaLabel: "Volume Control", ariaValueText: "volume level ".concat([volume][0] * 10, " of 10"), dataTestId: "volume-control-slider", ariaDescribedBy: volumeSliderInstructionId, overrides: sliderOverrides }));
    var popoverOverrides = (0, utils_1.getPopoverOverrides)(theme, overrides);
    var popoverContent = (react_1.default.createElement(styled_1.StyledVolumeSliderPopupContainer, { overrides: overrides }, sliderComponent));
    var DefaultPopover = popover_1.Popover;
    var _f = (0, overrides_1.getComponentOverrides)(
    /* istanbul ignore next  */
    overrides === null || overrides === void 0 ? void 0 : overrides.popover, DefaultPopover, {
        id: 'volume-control-slider-popup',
        open: layout === 'vertical' && open,
        hidePointer: false,
        content: popoverContent,
        overrides: popoverOverrides,
        header: undefined,
        closePosition: 'none',
        disableFocusManagement: true,
    }), PopoverComponent = _f[0], popoverProps = _f[1];
    return (react_1.default.createElement(styled_1.StyledGridLayout, { ref: ref, onFocus: function () { return setOpenHandler(true); }, onBlur: function () { return setOpenHandler(false); }, onMouseEnter: function () { return setOpenHandler(true); }, onMouseLeave: function () { return setOpenHandler(false); }, columns: gridColumns, areas: gridAreas, justifyItems: "start", alignItems: "center", overrides: overrides },
        react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "muteButton" },
            react_1.default.createElement(PopoverComponent, tslib_1.__assign({}, popoverProps),
                react_1.default.createElement(mute_button_1.MuteButton, { volume: volume, unMutedVolume: unMutedVolume, onChange: onChange, size: muteButtonSize || 'medium', muteKeyboardShortcuts: keyboardShortcuts === null || keyboardShortcuts === void 0 ? void 0 : keyboardShortcuts.muteToggle, overrides: buttonOverrides }))),
        useSliderContainer && (react_1.default.createElement(grid_layout_1.GridLayoutItem, { area: "slider" },
            react_1.default.createElement(react_transition_group_1.CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: (0, utils_2.getTransitionDuration)("audioPlayerVolumeControl", '')({ theme: theme, overrides: overrides }), classNames: "nk-vc", appear: true, onEnter: function () { return setIsVisibleHandler(true); }, onExited: function () { return setIsVisibleHandler(false); } }, function (state) { return (react_1.default.createElement(styled_1.StyledVolumeSliderContainer, { ref: cssTransitionNodeRef, className: (0, get_transition_class_name_1.getTransitionClassName)('nk-vc', state), layout: layout, overrides: overrides, open: open, visible: isVisible }, sliderComponent)); }),
            react_1.default.createElement(screen_reader_only_1.ScreenReaderOnly, { id: volumeSliderInstructionId, "aria-hidden": "true" }, "Use the arrow keys to adjust volume")))));
});
exports.AudioPlayerVolumeControl = (0, with_own_theme_1.withOwnTheme)(ThemelessAudioPlayerVolumeControl)({ defaults: defaults_1.default, stylePresets: style_presets_1.default });
//# sourceMappingURL=volume-control.js.map