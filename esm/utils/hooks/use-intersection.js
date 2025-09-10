import { __rest } from "tslib";
// use-intersection is copy from Next.js
// https://github.com/vercel/next.js/blob/0af3b526408bae26d6b3f8cab75c4229998bf7cb/packages/next/client/use-intersection.tsx
import { useCallback, useRef, useState } from 'react';
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
export function useIntersection(_a) {
    var disabled = _a.disabled, options = __rest(_a, ["disabled"]);
    var hasIntersectionObserver = typeof IntersectionObserver !== 'undefined';
    var isDisabled = disabled || !hasIntersectionObserver;
    var unobserve = useRef(undefined);
    var _b = useState(false), visible = _b[0], setVisible = _b[1];
    var setRef = useCallback(function (el) {
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
//# sourceMappingURL=use-intersection.js.map