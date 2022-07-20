/* eslint-disable import/no-extraneous-dependencies */
import {HeightProperty, WidthProperty} from 'csstype';

export interface GetAspectRatioProp {
  children?: React.ReactNode;
  aspectRatio?: string;
  height?: HeightProperty<string>;
  width?: WidthProperty<string>;
}

const getUnit = (value: number, prop?: string) =>
  (prop && prop.replace(value.toString(), '')) || 'px';

export const getAspectRatioStyles = ({
  aspectRatio,
  height,
  width,
}: GetAspectRatioProp) => {
  const widthVal = parseFloat(width!);
  const heightVal = parseFloat(height!);
  if (!Number.isNaN(widthVal) && !Number.isNaN(heightVal)) {
    return {
      paddingTop: `${Math.trunc((heightVal / widthVal) * 100)}%`,
      height: `${heightVal}${getUnit(heightVal, height)}`,
      width: `${widthVal}${getUnit(widthVal, width)}`,
    };
  }
  if (aspectRatio && aspectRatio.includes(':')) {
    const [wRatio, hRatio] = aspectRatio.split(':').map(parseFloat);
    if (!Number.isNaN(wRatio) && !Number.isNaN(hRatio)) {
      const paddingTop = `${Math.trunc((hRatio / wRatio) * 100)}%`;
      if (!Number.isNaN(widthVal)) {
        return {
          paddingTop,
          width: `${widthVal}${getUnit(widthVal, width)}`,
          height: `${Math.trunc((widthVal / wRatio) * hRatio)}${getUnit(
            widthVal,
            width,
          )}`,
        };
      }
      if (!Number.isNaN(heightVal)) {
        return {
          paddingTop,
          width: `${Math.trunc((heightVal / hRatio) * wRatio)}${getUnit(
            heightVal,
            height,
          )}`,
          height: `${heightVal}${getUnit(heightVal, height)}`,
        };
      }
      /* istanbul ignore next */
      return {paddingTop, height, width};
    }
  }
  return {height, width};
};
