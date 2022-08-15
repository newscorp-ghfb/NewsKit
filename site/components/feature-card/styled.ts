import {
  CardInset,
  getMotionFromTheme,
  getMediaQueryFromTheme,
  getStylePresetFromTheme,
  styled,
} from 'newskit';
import {Link} from '../link';

export const StyledCardHorizontalInset = styled(CardInset)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionTimingEaseOut')};
  ${getMediaQueryFromTheme('md')} {
    min-height: 248px;
  }
  ${getMediaQueryFromTheme('lg')} {
    min-height: 304px;
  }
`;
export const StyledCardVerticalInset = styled(CardInset)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionTimingEaseOut')};
  height: 100%;
`;
export const StyledFeatureCardHorizontalMedia = styled.div<{
  stylePreset: string;
}>`
  ${({stylePreset}) => getStylePresetFromTheme(stylePreset)};
  height: 100%;
`;

export const StyledFeatureCardVerticalMedia = styled.div<{stylePreset: string}>`
  ${({stylePreset}) => getStylePresetFromTheme(stylePreset)};
  background-size: cover;
  background-position: right bottom;
  height: 18vh;
  ${getMediaQueryFromTheme('lg')} {
    height: 200px;
  }
`;

export const StyledCardLink = styled(Link)`
  height: 100%;
  display: block;
  > span > div {
    width: 100%;
  }
`;
