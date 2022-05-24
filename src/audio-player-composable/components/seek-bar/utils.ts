export const formatTrackData = (
  trackColor: string,
  indicatorColor: string,
  bufferColor: string,
  timeArr: number[],
  buffered: TimeRanges | undefined,
) => {
  if (!buffered) {
    return {colors: [], values: []};
  }

  const time = timeArr[0];
  const bufferPositions: {type: 'start' | 'end'; value: number}[] = [];
  const closestBuffer = [];

  const {length} = buffered;
  for (let i = 0; i < length; i += 1) {
    // get all buffer segments
    bufferPositions.push({type: 'start', value: buffered.start(i)});
    bufferPositions.push({type: 'end', value: buffered.end(i)});
  }

  if (bufferPositions.length) {
    // get closest buffer segment to curser
    const closest = bufferPositions.reduce((prev, curr) =>
      Math.abs(curr.value - time) < Math.abs(prev.value - time) ? curr : prev,
    );
    // get index of closest buffer in array
    const pos = bufferPositions.map(a => a.value).indexOf(closest.value);

    let value;
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
      closestBuffer.push(value);
    }
  }

  const colors = [
    indicatorColor,
    ...closestBuffer.map(() => bufferColor),
    trackColor,
  ];

  const values = [time, ...closestBuffer];
  return {colors, values};
};

export const seekBarAriaValueText = (seekTime: number[]) => {
  const time = new Date(seekTime[0] * 1000)
    .toISOString()
    .substr(11, 8)
    .split(':')
    .map(x => (+x < 10 ? (+x).toString() : x));

  const hour =
    time[0] !== '0' ? `${time[0]} ${time[0] === '1' ? 'hour' : 'hours'}` : '';
  const min =
    hour || time[1] !== '0'
      ? `${time[1]} ${time[1] === '1' ? 'minute' : 'minutes'}`
      : '';
  const sec = `${time[2]} ${time[2] === '1' ? 'second' : 'seconds'}`;

  return [hour, min, sec].filter(Boolean).join(' ');
};
