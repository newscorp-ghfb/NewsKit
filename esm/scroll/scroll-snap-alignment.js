import React, { useContext } from 'react';
import { ScrollSnapAlignmentContext } from './context';
import { StyledScrollSnapAlignment } from './styled';
export var ScrollSnapAlignment = function (_a) {
    var children = _a.children, snapAlign = _a.snapAlign;
    var snapAlignContextValue = useContext(ScrollSnapAlignmentContext);
    return (React.createElement(StyledScrollSnapAlignment, { snapAlign: snapAlign || snapAlignContextValue }, children));
};
//# sourceMappingURL=scroll-snap-alignment.js.map