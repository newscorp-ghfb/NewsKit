export var calculateTime = function (secs) {
    var hours = Math.floor(secs / 3600);
    var minutes = Math.floor((secs % 3600) / 60);
    var seconds = Math.floor(secs % 60);
    var returnedSeconds = seconds < 10 ? "0".concat(seconds) : "".concat(seconds);
    var returnedMinutes = minutes < 10 ? "0".concat(minutes) : "".concat(minutes);
    var returnedHours = hours < 10 ? "0".concat(hours) : "".concat(hours);
    if (hours > 0) {
        return "".concat(returnedHours, ":").concat(returnedMinutes, ":").concat(returnedSeconds);
    }
    return "".concat(returnedMinutes, ":").concat(returnedSeconds);
};
export var formatFunction = function (_a) {
    var currentTime = _a.currentTime, duration = _a.duration;
    var currentFormattedTime = calculateTime(currentTime);
    var totalDuration = calculateTime(duration);
    return "".concat(currentFormattedTime, "/").concat(totalDuration, " ");
};
//# sourceMappingURL=utils.js.map