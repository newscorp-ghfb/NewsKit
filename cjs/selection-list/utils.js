"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEnd = exports.handleHome = exports.handleArrowUp = exports.handleArrowDown = void 0;
var getActiveElementIndex = function (currentRef) {
    return Array.from(currentRef.childNodes).findIndex(function (e) { return e === document.activeElement; });
};
var handleArrowDown = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var activeElementIndex = getActiveElementIndex(ref);
        var nextOption = (elements[activeElementIndex + 1] ||
            elements[0]);
        nextOption.focus();
    }
};
exports.handleArrowDown = handleArrowDown;
var handleArrowUp = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var activeElementIndex = getActiveElementIndex(ref);
        var prevOption = (elements[activeElementIndex - 1] ||
            elements[elements.length - 1]);
        prevOption.focus();
    }
};
exports.handleArrowUp = handleArrowUp;
var handleHome = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var firstOption = elements[0];
        firstOption.focus();
    }
};
exports.handleHome = handleHome;
var handleEnd = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var lastOption = elements[elements.length - 1];
        lastOption.focus();
    }
};
exports.handleEnd = handleEnd;
//# sourceMappingURL=utils.js.map