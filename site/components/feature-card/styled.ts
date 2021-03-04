import {
  CardInset,
  getMotionFromTheme,
  getMediaQueryFromTheme,
  getStylePresetFromTheme,
  styled,
} from 'newskit';

export const StyledCardHorizontalInset = styled(CardInset)`
  transition-property: box-shadow;
  transition-duration: ${getMotionFromTheme('motionDuration020')};
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};
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
  transition-timing-function: ${getMotionFromTheme('motionEaseOut')};
  ${getMediaQueryFromTheme('lg')} {
    min-height: 380px;
  }
`;

export const StyledFeatureCardHorizontalMedia = styled.div<{
  stylePreset: string;
}>`
  ${({stylePreset}) => getStylePresetFromTheme(stylePreset)};
  height: 100%;
  width: 39.8vw;
  ${getMediaQueryFromTheme('lg')} {
    width: 20vw;
  }
  ${getMediaQueryFromTheme('xl')} {
    width: 25.55vw;
  }
`;

export const StyledFeatureCardVerticalMedia = styled.div<{stylePreset: string}>`
  ${({stylePreset}) => getStylePresetFromTheme(stylePreset)};
  background-size: cover;
  background-position: center;
  height: 30vh;
`;
