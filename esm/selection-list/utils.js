var getActiveElementIndex = function (currentRef) {
    return Array.from(currentRef.childNodes).findIndex(function (e) { return e === document.activeElement; });
};
export var handleArrowDown = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var activeElementIndex = getActiveElementIndex(ref);
        var nextOption = (elements[activeElementIndex + 1] ||
            elements[0]);
        nextOption.focus();
    }
};
export var handleArrowUp = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var activeElementIndex = getActiveElementIndex(ref);
        var prevOption = (elements[activeElementIndex - 1] ||
            elements[elements.length - 1]);
        prevOption.focus();
    }
};
export var handleHome = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var firstOption = elements[0];
        firstOption.focus();
    }
};
export var handleEnd = function (ref) {
    if (ref) {
        var elements = ref.childNodes;
        var lastOption = elements[elements.length - 1];
        lastOption.focus();
    }
};
//# sourceMappingURL=utils.js.map