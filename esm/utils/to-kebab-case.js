export var toKebabCase = function (str) {
    if (str) {
        return str
            .match(/[A-Z]{2,}(?=[A-Z][a-z0-9]*|\b)|[A-Z]?[a-z0-9]*|[A-Z]|[0-9]+/g)
            .filter(Boolean)
            .map(function (x) { return x.toLowerCase(); })
            .join('-');
    }
    /* istanbul ignore next */
    return '';
};
//# sourceMappingURL=to-kebab-case.js.map