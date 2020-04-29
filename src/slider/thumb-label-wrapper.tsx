import React from 'react';

import {StyledThumbValue} from './styled';
import {SliderProps, ThumbLabelProps} from './types';

interface ThumbLabelWrapperProps
  extends Pick<SliderProps, 'thumbLabel' | 'values' | 'vertical'>,
    Omit<ThumbLabelProps, 'children'> {
  index: number;
}

export const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps> = ({
  stylePreset,
  thumbSize,
  disabled,
  index,
  isDragged,
  thumbLabel: ThumbLabel,
  values,
  vertical,
}) => {
  if (!ThumbLabel) {
    return null;
  }

  if (ThumbLabel === true) {
    return (
      <StyledThumbValue stylePreset={stylePreset} vertical={vertical}>
        {values[index]}
      </StyledThumbValue>
    );
  }

  const props: ThumbLabelProps = {
    stylePreset,
    thumbSize,
    children: values[index],
    disabled,
    index,
    isDragged,
    values,
    vertical,
  };
  return <ThumbLabel {...props} />;
};
