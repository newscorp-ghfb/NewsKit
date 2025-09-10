export var getTransitionClassName = function (componentName, state) {
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
//# sourceMappingURL=get-transition-class-name.js.map