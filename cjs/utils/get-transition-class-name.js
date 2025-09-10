"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTransitionClassName = void 0;
var getTransitionClassName = function (componentName, state) {
    var suffixClassName = '';
    // eslint-disable-next-line default-case
    switch (state) {
        case 'exiting':
            suffixClassName = 'exit-active';
            break;
        case 'entering':
            suffixClassName = 'enter-active';
            break;
        case 'exited':
            suffixClassName = 'exit-done';
            break;
        case 'entered':
            suffixClassName = 'enter-done';
            break;
    }
    return "".concat(componentName, "-").concat(suffixClassName);
};
exports.getTransitionClassName = getTransitionClassName;
//# sourceMappingURL=get-transition-class-name.js.map