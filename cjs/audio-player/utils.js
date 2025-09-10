"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seekBarAriaValueText = exports.getMediaSegment = exports.formatTrackData = exports.formatDuration = exports.formatTrackTime = void 0;
var tslib_1 = require("tslib");
var hhmmss = [11, 8];
var mmss = [14, 5];
var formatTrackTime = function (time, maxTime) {
    var _a;
    if (maxTime === void 0) { maxTime = time; }
    var args = Math.max(time, maxTime) >= 3600 ? hhmmss : mmss;
    return (_a = new Date(time * 1000).toISOString()).substr.apply(_a, args);
};
exports.formatTrackTime = formatTrackTime;
var formatDuration = function (time, maxTime) {
    if (maxTime === void 0) { maxTime = time; }
    if (time === 0) {
        return '';
    }
    return (0, exports.formatTrackTime)(time, maxTime);
};
exports.formatDuration = formatDuration;
var formatTrackData = function (trackColor, indicatorColor, bufferColor, timeArr, buffered) {
    if (!buffered) {
        return { colors: [], values: [] };
    }
    var time = timeArr[0];
    var bufferPositions = [];
    var length = buffered.length;
    for (var i = 0; i < length; i += 1) {
        var startPosition = buffered.start(i);
        if (startPosition > time) {
            bufferPositions.push(startPosition);
        }
        var endPosition = buffered.end(i);
        if (endPosition > time) {
            bufferPositions.push(endPosition);
        }
    }
    var colors = tslib_1.__spreadArray(tslib_1.__spreadArray([
        indicatorColor
    ], bufferPositions.map(function (x, i) { return (i % 2 ? trackColor : bufferColor); }), true), [
        trackColor,
    ], false);
    var values = tslib_1.__spreadArray([time], bufferPositions, true);
    return { colors: colors, values: values };
};
exports.formatTrackData = formatTrackData;
var getMediaSegment = function (duration, currentPosition) {
    var currentPositionPercentage = (currentPosition / duration) * 100;
    if (currentPositionPercentage > 0 && currentPositionPercentage <= 25)
        return '0-25';
    if (currentPositionPercentage > 25 && currentPositionPercentage <= 50)
        return '26-50';
    if (currentPositionPercentage > 50 && currentPositionPercentage <= 75)
        return '51-75';
    return '76-100';
};
exports.getMediaSegment = getMediaSegment;
var seekBarAriaValueText = function (seekTime) {
    var time = new Date(seekTime[0] * 1000)
        .toISOString()
        .substr(11, 8)
        .split(':')
        .map(function (x) { return (+x < 10 ? (+x).toString() : x); });
    var hour = time[0] !== '0' ? "".concat(time[0], " ").concat(time[0] === '1' ? 'hour' : 'hours') : '';
    var min = hour || time[1] !== '0'
        ? "".concat(time[1], " ").concat(time[1] === '1' ? 'minute' : 'minutes')
        : '';
    var sec = "".concat(time[2], " ").concat(time[2] === '1' ? 'second' : 'seconds');
    return [hour, min, sec].filter(Boolean).join(' ');
};
exports.seekBarAriaValueText = seekBarAriaValueText;
//# sourceMappingURL=utils.js.map