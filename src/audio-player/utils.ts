const hhmmss: [number, number] = [11, 8];
const mmss: [number, number] = [14, 5];

export const formatTrackTime = (time: number, maxTime: number = time) => {
  const args = Math.max(time, maxTime) >= 3600 ? hhmmss : mmss;
  return new Date(time * 1000).toISOString().substr(...args);
};

export const formatDuration = (time: number, maxTime: number = time) => {
  if (time === 0) {
    return '';
  }
  return formatTrackTime(time, maxTime);
};

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
  const bufferPositions = [];

  const {length} = buffered;
  for (let i = 0; i < length; i += 1) {
    const startPosition = buffered.start(i);
    if (startPosition > time) {
      bufferPositions.push(startPosition);
    }

    const endPosition = buffered.end(i);
    if (endPosition > time) {
      bufferPositions.push(endPosition);
    }
  }

  const colors = [
    indicatorColor,
    ...bufferPositions.map((x, i) => (i % 2 ? trackColor : bufferColor)),
    trackColor,
  ];
  const values = [time, ...bufferPositions];

  return {colors, values};
};

export const getMediaSegment = (duration: number, currentPosition: number) => {
  const currentPositionPercentage = (currentPosition / duration) * 100;

  if (currentPositionPercentage > 0 && currentPositionPercentage <= 25)
    return '0-25';
  if (currentPositionPercentage > 25 && currentPositionPercentage <= 50)
    return '26-50';
  if (currentPositionPercentage > 50 && currentPositionPercentage <= 75)
    return '51-75';

  return '76-100';
};
