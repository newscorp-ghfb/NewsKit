import React from 'react';

import {StyledThumbValue} from './styled';
import {SliderProps, ThumbLabelProps} from './types';

interface ThumbLabelWrapperProps
  extends Pick<SliderProps, 'thumbLabel' | 'values' | 'vertical' | 'overrides'>,
    Omit<ThumbLabelProps, 'children'> {
  index: number;
}

export const ThumbLabelWrapper: React.FC<ThumbLabelWrapperProps> = ({
  disabled,
  index,
  isDragged,
  thumbLabel: ThumbLabel,
  values,
  vertical,
  overrides,
}) => {
  if (!ThumbLabel) {
    return null;
  }

  if (ThumbLabel === true) {
    return (
      <StyledThumbValue vertical={vertical} overrides={overrides}>
        {values[index]}
      </StyledThumbValue>
    );
  }

  const props: ThumbLabelProps = {
    children: values[index],
    disabled,
    index,
    isDragged,
    values,
    vertical,
    overrides,
  };
  return <ThumbLabel {...props} />;
};
