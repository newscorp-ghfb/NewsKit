"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useNewsKitContext = exports.NewsKitInternalContext = void 0;
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
// This provider is internal and is used only to detect when NewsKitProvider is used inside NewsKitProvider
// On the very first Provider we set value of {initialized: true} based on that we know if NewsKitProvider is already used
exports.NewsKitInternalContext = react_1.default.createContext({
    initialized: false,
    themeOptions: {},
});
var useNewsKitContext = function () { return react_1.default.useContext(exports.NewsKitInternalContext); };
exports.useNewsKitContext = useNewsKitContext;
//# sourceMappingURL=context.js.map