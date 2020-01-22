import React from 'react';

import {StyledThumbValue} from './styled';
import {SliderProps, ThumbLabelProps} from './types';

interface ThumbLabelWrapperProps
  extends Pick<SliderProps, 'thumbLabel' | 'values' | 'vertical'> {
  index: number;
  isDragged: boolean;
}

export const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps> = ({
  index,
  values,
  isDragged,
  vertical,
  thumbLabel: ThumbLabel,
}) => {
  if (!ThumbLabel) {
    return null;
  }

  if (ThumbLabel === true) {
    return (
      <StyledThumbValue vertical={vertical}>{values[index]}</StyledThumbValue>
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
