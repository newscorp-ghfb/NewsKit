"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useIntersection = void 0;
var tslib_1 = require("tslib");
// use-intersection is copy from Next.js
// https://github.com/vercel/next.js/blob/0af3b526408bae26d6b3f8cab75c4229998bf7cb/packages/next/client/use-intersection.tsx
var react_1 = require("react");
var observers = new Map();
function createObserver(options) {
    var id = options.rootMargin || '';
    var instance = observers.get(id);
    if (instance) {
        return instance;
    }
    var elements = new Map();
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            var callback = elements.get(entry.target);
            var isVisible = entry.isIntersecting;
            /* istanbul ignore else */
            if (callback) {
                callback(isVisible);
            }
        });
    }, options);
    observers.set(id, (instance = {
        id: id,
        observer: observer,
        elements: elements,
    }));
    return instance;
}
function observe(element, callback, options) {
    var _a = createObserver(options), id = _a.id, observer = _a.observer, elements = _a.elements;
    elements.set(element, callback);
    observer.observe(element);
    return function unobserve() {
        elements.delete(element);
        observer.unobserve(element);
        // Destroy observer when there's nothing left to watch:
        if (elements.size === 0) {
            observer.disconnect();
            observers.delete(id);
        }
    };
}
function useIntersection(_a) {
    var disabled = _a.disabled, options = tslib_1.__rest(_a, ["disabled"]);
    var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
    var isDisabled = disabled || !hasIntersectionObserver;
    var unobserve = (0, react_1.useRef)(undefined);
    var _b = (0, react_1.useState)(false), visible = _b[0], setVisible = _b[1];
    var setRef = (0, react_1.useCallback)(function (el) {
        if (unobserve.current) {
            unobserve.current();
            unobserve.current = undefined;
        }
        if (isDisabled)
            return;
        if (el && el.tagName) {
            unobserve.current = observe(el, function (isVisible) {
                /* istanbul ignore else */
                if (visible !== isVisible) {
                    setVisible(isVisible);
                }
            }, options);
        }
    }, [isDisabled, options, visible]);
    return [setRef, visible];
}
exports.useIntersection = useIntersection;
//# sourceMappingURL=use-intersection.js.map