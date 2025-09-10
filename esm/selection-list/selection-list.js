import { __assign, __rest } from "tslib";
import React, { useRef } from 'react';
import composeRefs from '@seznam/compose-react-refs';
import defaults from './defaults';
import { withOwnTheme } from '../utils/with-own-theme';
import { useKeypress, useReactKeys } from '../utils/hooks';
import { handleArrowDown, handleArrowUp, handleHome, handleEnd } from './utils';
import { StyledSelectionList } from './styled';
import { ScreenReaderOnly } from '../screen-reader-only';
var ThemelessSelectionList = React.forwardRef(function (_a, ref) {
    var children = _a.children, _b = _a.overrides, overrides = _b === void 0 ? {} : _b, restProps = __rest(_a, ["children", "overrides"]);
    var listDescriptionId = useReactKeys(1)[0];
    var selectionListRef = useRef(null);
    useKeypress('ArrowDown', function () { return handleArrowDown(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    useKeypress('ArrowUp', function () { return handleArrowUp(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    useKeypress('Home', function () { return handleHome(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    useKeypress('End', function () { return handleEnd(selectionListRef.current); }, {
        target: selectionListRef,
        eventType: 'keydown',
    });
    var screenReaderOnlyMessage = (React.createElement(ScreenReaderOnly, { id: listDescriptionId }, "Press down arrow key to navigate to the first item"));
    return (React.createElement(React.Fragment, null,
        screenReaderOnlyMessage,
        React.createElement(StyledSelectionList, __assign({ ref: composeRefs(selectionListRef, ref), role: "menu", "aria-describedby": listDescriptionId, overrides: overrides }, restProps), children)));
});
ThemelessSelectionList.displayName = 'SelectionList';
export var SelectionList = withOwnTheme(ThemelessSelectionList)({ defaults: defaults });
//# sourceMappingURL=selection-list.js.map