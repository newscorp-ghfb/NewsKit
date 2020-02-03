import React from 'react';

import {StyledThumbValue} from './styled';
import {SliderProps, ThumbLabelProps} from './types';

interface ThumbLabelWrapperProps
  extends Pick<
    SliderProps,
    'thumbLabel' | 'values' | 'vertical' | '$labelStylePreset'
  > {
  index: number;
  isDragged: boolean;
}

export const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps> = ({
  index,
  values,
  isDragged,
  vertical,
  thumbLabel: ThumbLabel,
  $labelStylePreset,
}) => {
  if (!ThumbLabel) {
    return null;
  }

  if (ThumbLabel === true) {
    return (
      <StyledThumbValue
        $labelStylePreset={$labelStylePreset}
        vertical={vertical}
      >
        {values[index]}
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
