"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.instrumentationHandlers = void 0;
var tslib_1 = require("tslib");
var console_1 = tslib_1.__importDefault(require("./console"));
var tealium_1 = tslib_1.__importDefault(require("./tealium"));
var tealium_track_1 = tslib_1.__importDefault(require("./tealium-track"));
exports.instrumentationHandlers = {
    createConsoleHandler: console_1.default,
    createTealiumHandler: tealium_1.default,
    createTealiumTrackHandler: tealium_track_1.default,
};
//# sourceMappingURL=index.js.map