var filter = function (field) { return function (value) { return function (events) {
    return events.filter(function (event) { return event[field] === value; });
}; }; };
export var filterByOriginator = filter('originator');
export var filterByTrigger = filter('trigger');
//# sourceMappingURL=filters.js.map