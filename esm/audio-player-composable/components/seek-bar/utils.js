import { __spreadArray } from "tslib";
export var formatTrackData = function (trackColor, indicatorColor, bufferColor, timeArr, buffered) {
    if (!buffered) {
        return { colors: [], values: [] };
    }
    var time = timeArr[0];
    var bufferPositions = [];
    var closestBuffer = 0;
    var length = buffered.length;
    for (var i = 0; i < length; i += 1) {
        // get all buffer segments
        bufferPositions.push({ type: 'start', value: buffered.start(i) });
        bufferPositions.push({ type: 'end', value: buffered.end(i) });
    }
    if (bufferPositions.length) {
        // get closest buffer segment to curser
        var closest = bufferPositions.reduce(function (prev, curr) {
            return Math.abs(curr.value - time) < Math.abs(prev.value - time) ? curr : prev;
        });
        // get index of closest buffer in array
        var pos = bufferPositions.map(function (a) { return a.value; }).indexOf(closest.value);
        var value = void 0;
        if (closest.type === 'start') {
            // if closest buffer is type start set the next end as value
            value = bufferPositions[pos + 1].value;
        }
        if (closest.type === 'end' && closest.value > time) {
            // if closest buffer is type end and greater then current time set as value
            value = bufferPositions[pos].value;
        }
        if (value) {
            // set value for buffer
            closestBuffer = value;
        }
    }
    var colors = __spreadArray(__spreadArray([
        indicatorColor
    ], (closestBuffer ? [closestBuffer] : []).map(function () { return bufferColor; }), true), [
        trackColor,
    ], false);
    var values = closestBuffer ? [time, closestBuffer] : [time];
    return { colors: colors, values: values };
};
export var seekBarAriaValueText = function (seekTime) {
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
//# sourceMappingURL=utils.js.map