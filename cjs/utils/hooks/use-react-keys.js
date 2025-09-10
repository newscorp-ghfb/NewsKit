"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useReactKeys = void 0;
var react_1 = require("react");
var __1 = require("..");
var useReactKeys = function (keysCount) {
    var _a = (0, react_1.useState)([]), keysArray = _a[0], setKeysArray = _a[1];
    (0, react_1.useEffect)(function () {
        var tempArray = [];
        for (var keyIdx = 0; keyIdx < keysCount; keyIdx += 1) {
            tempArray.push((0, __1.getSSRId)());
        }
        setKeysArray(tempArray);
    }, [keysCount]);
    return keysArray;
};
exports.useReactKeys = useReactKeys;
//# sourceMappingURL=use-react-keys.js.map