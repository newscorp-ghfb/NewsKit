import { useState, useEffect } from 'react';
export var useHasMounted = function () {
    var _a = useState(false), hasMounted = _a[0], setHasMounted = _a[1];
    useEffect(function () {
        if (!hasMounted) {
            setHasMounted(true);
        }
    }, [hasMounted]);
    return hasMounted;
};
//# sourceMappingURL=use-has-mounted.js.map