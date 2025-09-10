import { __rest } from "tslib";
import React from 'react';
import { RenderScripts } from '../utils/render-scripts';
import { getNonTCFScripts, getV2Scripts, getUnifiedScripts, isNonTCFV1Props, isV2Props, isUnifiedProps, } from './consent-utils';
export var Consent = function (_a) {
    var reactHelmet = _a.reactHelmet, props = __rest(_a, ["reactHelmet"]);
    if (isV2Props(props)) {
        return (React.createElement(RenderScripts, { scripts: getV2Scripts(props.sourcePointConfigTCFV2), reactHelmet: reactHelmet }));
    }
    if (isUnifiedProps(props)) {
        return (React.createElement(RenderScripts, { scripts: getUnifiedScripts(props.sourcePointConfigUnified), reactHelmet: reactHelmet }));
    }
    if (isNonTCFV1Props(props)) {
        return (React.createElement(RenderScripts, { scripts: getNonTCFScripts(props.sourcePointConfigNonTCFV1), reactHelmet: reactHelmet }));
    }
    return null;
};
//# sourceMappingURL=consent.js.map