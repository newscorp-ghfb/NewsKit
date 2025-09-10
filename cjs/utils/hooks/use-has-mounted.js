"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useHasMounted = void 0;
var react_1 = require("react");
var useHasMounted = function () {
    var _a = (0, react_1.useState)(false), hasMounted = _a[0], setHasMounted = _a[1];
    (0, react_1.useEffect)(function () {
        if (!hasMounted) {
            setHasMounted(true);
        }
    }, [hasMounted]);
    return hasMounted;
};
exports.useHasMounted = useHasMounted;
//# sourceMappingURL=use-has-mounted.js.map