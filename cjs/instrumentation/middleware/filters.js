"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filterByTrigger = exports.filterByOriginator = void 0;
var filter = function (field) { return function (value) { return function (events) {
    return events.filter(function (event) { return event[field] === value; });
}; }; };
exports.filterByOriginator = filter('originator');
exports.filterByTrigger = filter('trigger');
//# sourceMappingURL=filters.js.map