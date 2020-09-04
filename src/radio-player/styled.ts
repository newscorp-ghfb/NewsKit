import {
  styled,
  getColorFromTheme,
  getSpacingFromTheme,
  getTypographyPresetFromTheme,
  getFontsFromTheme,
  getFontSizingFromTheme,
} from '../utils/style';
import {H1} from '../typography';
import {CenterProp} from './types';

export const Label = styled.span`
  color: ${getColorFromTheme('inkSubtle')};
  font-weight: ${getFontsFromTheme('fontWeight010')};
`;

export const ProgrammeTime = styled(Label)`
  ${getTypographyPresetFromTheme('meta010')};
  display: inline-block;
`;

export const ProgrammeTitle = styled(H1)<CenterProp>`
  ${({center}) =>
    center
      ? getTypographyPresetFromTheme('heading020')
      : getTypographyPresetFromTheme('heading040')};
  text-align: ${({center}) => (center ? 'center' : 'left')};
  margin: 0;
  width: 100%;
`;

export const ProgrammeDescription = styled(Label)<CenterProp>`
  margin-bottom: ${getSpacingFromTheme('space050')};
  ${getTypographyPresetFromTheme('subhead010')};
  text-align: ${({center}) => (center ? 'center' : 'left')};
  width: 100%;
`;

export const ProgrammeTags = styled(Label)`
  ${getTypographyPresetFromTheme('meta010')};
  ${getFontSizingFromTheme('fontSize020', 'fontLineHeight040')};
`;

export const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
`;
