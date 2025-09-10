import { __assign } from "tslib";
import React, { useCallback, useEffect, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import { ScreenReaderOnly } from '../../../screen-reader-only';
import { Slider } from '../../../slider';
import { withOwnTheme } from '../../../utils/with-own-theme';
import { getPopoverOverrides, useInitialVolume } from './utils';
import { useAudioPlayerContext } from '../../context';
import defaults from './defaults';
import { MuteButton } from './mute-button';
import { useTheme } from '../../../theme';
import stylePresets from './style-presets';
import { GridLayoutItem } from '../../../grid-layout';
import { StyledGridLayout, StyledVolumeSliderContainer, StyledVolumeSliderPopupContainer, } from './styled';
import { useReactKeys } from '../../../utils/hooks';
import { deepMerge } from '../../../utils/deep-merge';
import { mergeBreakpointObject } from '../../../utils/merge-breakpoint-object';
import { filterOutFalsyProperties } from '../../../utils/filter-object';
import { getTransitionDuration } from '../../../utils';
import { getTransitionClassName } from '../../../utils/get-transition-class-name';
import { Popover } from '../../../popover';
import { getComponentOverrides } from '../../../utils/overrides';
var ThemelessAudioPlayerVolumeControl = React.forwardRef(function (props, ref) {
    var getVolumeControlProps = useAudioPlayerContext().getVolumeControlProps;
    var _a = getVolumeControlProps(props), volume = _a.volume, onChange = _a.onChange, _b = _a.layout, layout = _b === void 0 ? 'horizontal-expanded' : _b, keyboardShortcuts = _a.keyboardShortcuts, overrides = _a.overrides, initialVolume = _a.initialVolume, muteButtonSize = _a.muteButtonSize;
    var _c = useState(volume), unMutedVolume = _c[0], setUnMutedVolume = _c[1];
    useEffect(function () {
        // Saves the volume into a state,
        // for re-using it when clicking the mute unmute button.
        if (unMutedVolume !== volume && volume > 0) {
            setUnMutedVolume(volume);
        }
    }, [unMutedVolume, volume]);
    var theme = useTheme();
    var cssTransitionNodeRef = React.useRef(null);
    var buttonOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.button, filterOutFalsyProperties(overrides.button)));
    var sliderOverrides = __assign({}, deepMerge(mergeBreakpointObject(Object.keys(theme.breakpoints)), theme.componentDefaults.audioPlayerVolumeControl.slider, filterOutFalsyProperties(overrides.slider)));
    var onSliderChange = useCallback(function (_a) {
        var newVolume = _a[0];
        return onChange(newVolume);
    }, [onChange]);
    // useInitialVolume Sets the initial volume on page load
    useInitialVolume({ onChange: onChange, initialVolume: initialVolume });
    var volumeSliderInstructionId = useReactKeys(1)[0];
    // opens volume control on hover/focus when layout = horizontalExpandable.
    var _d = useState(false), open = _d[0], setOpen = _d[1];
    var setOpenHandler = useCallback(function (state) {
        if (layout === 'horizontal' || layout === 'vertical') {
            setOpen(state);
        }
    }, [setOpen, layout]);
    // makes sure feedback element is fully visible and not cropped when slider is open and user hover/focus on it.
    var _e = React.useState(false), isVisible = _e[0], setIsVisible = _e[1];
    var setIsVisibleHandler = useCallback(function (state) {
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
    var sliderComponent = (React.createElement(Slider, { vertical: layout === 'vertical', min: 0, max: 1, step: 0.1, values: [volume], onChange: onSliderChange, ariaLabel: "Volume Control", ariaValueText: "volume level ".concat([volume][0] * 10, " of 10"), dataTestId: "volume-control-slider", ariaDescribedBy: volumeSliderInstructionId, overrides: sliderOverrides }));
    var popoverOverrides = getPopoverOverrides(theme, overrides);
    var popoverContent = (React.createElement(StyledVolumeSliderPopupContainer, { overrides: overrides }, sliderComponent));
    var DefaultPopover = Popover;
    var _f = getComponentOverrides(
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
    return (React.createElement(StyledGridLayout, { ref: ref, onFocus: function () { return setOpenHandler(true); }, onBlur: function () { return setOpenHandler(false); }, onMouseEnter: function () { return setOpenHandler(true); }, onMouseLeave: function () { return setOpenHandler(false); }, columns: gridColumns, areas: gridAreas, justifyItems: "start", alignItems: "center", overrides: overrides },
        React.createElement(GridLayoutItem, { area: "muteButton" },
            React.createElement(PopoverComponent, __assign({}, popoverProps),
                React.createElement(MuteButton, { volume: volume, unMutedVolume: unMutedVolume, onChange: onChange, size: muteButtonSize || 'medium', muteKeyboardShortcuts: keyboardShortcuts === null || keyboardShortcuts === void 0 ? void 0 : keyboardShortcuts.muteToggle, overrides: buttonOverrides }))),
        useSliderContainer && (React.createElement(GridLayoutItem, { area: "slider" },
            React.createElement(CSSTransition, { nodeRef: cssTransitionNodeRef, in: open, timeout: getTransitionDuration("audioPlayerVolumeControl", '')({ theme: theme, overrides: overrides }), classNames: "nk-vc", appear: true, onEnter: function () { return setIsVisibleHandler(true); }, onExited: function () { return setIsVisibleHandler(false); } }, function (state) { return (React.createElement(StyledVolumeSliderContainer, { ref: cssTransitionNodeRef, className: getTransitionClassName('nk-vc', state), layout: layout, overrides: overrides, open: open, visible: isVisible }, sliderComponent)); }),
            React.createElement(ScreenReaderOnly, { id: volumeSliderInstructionId, "aria-hidden": "true" }, "Use the arrow keys to adjust volume")))));
});
export var AudioPlayerVolumeControl = withOwnTheme(ThemelessAudioPlayerVolumeControl)({ defaults: defaults, stylePresets: stylePresets });
//# sourceMappingURL=volume-control.js.map