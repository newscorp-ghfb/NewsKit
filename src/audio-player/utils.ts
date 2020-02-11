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
