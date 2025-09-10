import { useState, useEffect } from 'react';
import { getSSRId } from '..';
export var useReactKeys = function (keysCount) {
    var _a = useState([]), keysArray = _a[0], setKeysArray = _a[1];
    useEffect(function () {
        var tempArray = [];
        for (var keyIdx = 0; keyIdx < keysCount; keyIdx += 1) {
            tempArray.push(getSSRId());
        }
        setKeysArray(tempArray);
    }, [keysCount]);
    return keysArray;
};
//# sourceMappingURL=use-react-keys.js.map