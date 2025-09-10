import { __assign, __spreadArray } from "tslib";
import { useEffect, useRef } from 'react';
import { composeEventHandlers } from '../compose-event-handlers';
var isKeyboardEvent = function (event) {
    return 'key' in event;
};
/*
 This store together with addEventIfNotExist and removeEvent track if the event with the same
  keyShortcut is already attached to the element. This is needed to prevent adding the same event twice.

  In context of audio-player if you add 2 buttons for SkipBackward with same
  keyShortcut it will attach event only for the first one.
*/
var eventsStore = new WeakMap();
var addEventIfNotExist = function (_a) {
    var element = _a.element, keyShortcut = _a.keyShortcut, keyUp = _a.keyUp, keyDown = _a.keyDown;
    var attachedShortcuts = eventsStore.get(element);
    var attachEvents = function () {
        element.addEventListener('keydown', keyDown, false);
        element.addEventListener('keyup', keyUp, false);
    };
    if (!attachedShortcuts) {
        eventsStore.set(element, [keyShortcut]);
        attachEvents();
    }
    else if (Array.isArray(attachedShortcuts) &&
        attachedShortcuts.indexOf(keyShortcut) === -1) {
        eventsStore.set(element, __spreadArray(__spreadArray([], attachedShortcuts, true), [keyShortcut], false));
        attachEvents();
    }
};
var removeEvent = function (_a) {
    var element = _a.element, keyShortcut = _a.keyShortcut, keyUp = _a.keyUp, keyDown = _a.keyDown;
    var attachedShortcuts = eventsStore.get(element);
    if (attachedShortcuts) {
        eventsStore.set(element, attachedShortcuts.filter(function (shortcut) { return shortcut !== keyShortcut; }));
    }
    element.removeEventListener('keyup', keyUp, false);
    element.removeEventListener('keydown', keyDown, false);
};
/*
In order to use multiple keys at once, you need to use keyDown and keyUp simultaneously.
- on KeyDown event, keys code is stored in a object ( keyStore )
- on KeyUp event, keys code is removed from the object

When the keyStore values match the key argument , the callback is called.
https://www.gavsblog.com/blog/detect-single-and-multiple-keypress-events-javascript
*/
export var useKeypress = function (key, action, opts) {
    var keyStore = useRef({});
    var keyLowerCase = (typeof key === 'string' ? [key] : key).map(function (k) {
        return k.toLowerCase();
    });
    useEffect(function () {
        var defaultOptions = {
            enabled: true,
            eventType: 'keyup',
            preventDefault: true,
        };
        var options = __assign(__assign({}, defaultOptions), opts);
        var enabled = options.enabled, eventType = options.eventType, target = options.target, preventDefault = options.preventDefault;
        var handle = function (e) {
            /* istanbul ignore if */
            if (!isKeyboardEvent(e)) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            if (e.type === eventType) {
                var pressedKey = Object.entries(keyStore.current)
                    .filter(function (_a) {
                    var value = _a[1];
                    return value;
                })
                    .map(function (_a) {
                    var activeKey = _a[0];
                    return activeKey.toLowerCase();
                })
                    .join(' + ');
                var keyIsMatched = keyLowerCase.includes(pressedKey);
                if (action && keyIsMatched) {
                    action(e);
                    if (preventDefault) {
                        e.preventDefault();
                        e.stopPropagation();
                    }
                }
            }
        };
        var targetNode = target && target.current ? target.current : document;
        var addToStore = function (e) {
            keyStore.current[e.key] = true;
        };
        var removeFromStore = function (e) {
            delete keyStore.current[e.key];
        };
        var onKeyDown = composeEventHandlers([addToStore, handle]);
        var onKeyUp = composeEventHandlers([handle, removeFromStore]);
        if (enabled && typeof targetNode !== 'undefined') {
            addEventIfNotExist({
                element: targetNode,
                keyShortcut: keyLowerCase.toString(),
                keyUp: onKeyUp,
                keyDown: onKeyDown,
            });
        }
        return function () {
            if (targetNode) {
                removeEvent({
                    element: targetNode,
                    keyShortcut: keyLowerCase.toString(),
                    keyUp: onKeyUp,
                    keyDown: onKeyDown,
                });
            }
        };
    }, [keyLowerCase, action, opts]);
};
//# sourceMappingURL=use-keypress.js.map