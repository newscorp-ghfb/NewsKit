import {
  styled,
  getColorFromTheme,
  getSpacingFromTheme,
  getTypePresetFromTheme,
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
  ${getTypePresetFromTheme('meta010')};
  display: inline-block;
`;

export const ProgrammeTitle = styled(H1)<CenterProp>`
  ${({center}) =>
    center
      ? getTypePresetFromTheme('heading020')
      : getTypePresetFromTheme('heading040')};
  text-align: ${({center}) => (center ? 'center' : 'left')};
  margin: 0;
  width: 100%;
`;

export const ProgrammeDescription = styled(Label)<CenterProp>`
  margin-bottom: ${getSpacingFromTheme('space050')};
  ${getTypePresetFromTheme('subhead010')};
  text-align: ${({center}) => (center ? 'center' : 'left')};
  width: 100%;
`;

export const ProgrammeTags = styled(Label)`
  ${getTypePresetFromTheme('meta010')};
  ${getFontSizingFromTheme('fontSize020', 'fontLineHeight040')};
`;

export const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
`;
