import React from 'react';
import {getAspectRatioStyles} from '../utils/get-aspect-ratio';
import {Container, StyledDiv} from './styled';
import {AspectRatioProps} from './types';

/**
 * @deprecated AspectRatio is deprecated and will be removed in the next major release.
 */
export const AspectRatio: React.FC<AspectRatioProps> = ({
  aspectRatio,
  width,
  height,
  children,
  maxHeight,
  maxWidth,
}) => {
  const {paddingTop, width: $width, height: $height} = getAspectRatioStyles({
    aspectRatio,
    width,
    height,
  });
  const {width: mWidth, height: mHeight} = getAspectRatioStyles({
    aspectRatio,
    width: maxWidth,
    height: maxHeight,
  });
  return (
    <Container paddingTop={paddingTop} maxHeight={mHeight} maxWidth={mWidth}>
      <StyledDiv $width={$width} $height={$height}>
        {children}
      </StyledDiv>
    </Container>
  );
};
