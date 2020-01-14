import {useThumbOverlap, Range} from 'react-range';
import React, {CSSProperties} from 'react';

import {StyledThumbValue} from './styled';
import {SliderProps, ThumbLabelProps} from './types';

interface ThumbLabelWrapperProps
  extends Pick<SliderProps, 'thumbLabel' | 'values' | 'vertical'> {
  index: number;
  rangeRef: Range | null;
  isDragged: boolean;
}

export const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps> = ({
  index,
  values,
  rangeRef,
  isDragged,
  vertical,
  thumbLabel: ThumbLabel,
}) => {
  const [labelValue, style] = useThumbOverlap(rangeRef, values, index) as [
    string,
    CSSProperties,
  ];

  if (!ThumbLabel) {
    return null;
  }

  if (ThumbLabel === true) {
    return (
      <StyledThumbValue style={style} vertical={vertical}>
        {labelValue}
      </StyledThumbValue>
    );
  }

  const props: ThumbLabelProps = {
    index,
    isDragged,
    values,
    vertical,
    children: values[index],
  };
  return <ThumbLabel {...props} />;
};
