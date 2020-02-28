import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getFontsFromTheme,
  getFontSizingFromTheme,
} from '../../utils/style';
import {H1} from '../../typography';
import {Tag} from '../../tag';

export const LiveTag = styled(Tag)`
  width: ${getSizingFromTheme('sizing080')};
  height: ${getSizingFromTheme('sizing050')};
  padding: 0;
  text-align: center;
  background-color: ${getColorFromTheme('semanticNegative030')};
  color: ${getColorFromTheme('inkInverse')};
  text-transform: uppercase;
`;

export interface CenterProp {
  center?: boolean;
}

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
  margin: ${getSizingFromTheme('spaceStack050')};
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
