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
  background-color: ${getColorFromTheme('semanticNegative010')};
  color: ${getColorFromTheme('inkInverse')};
  text-transform: uppercase;
  margin-right: ${getSizingFromTheme('sizing040')};
`;

export const Label = styled.span`
  color: ${getColorFromTheme('inkSubtle')};
  font-weight: ${getFontsFromTheme('fontWeight010')};
`;

export const ProgrammeTime = styled(Label)`
  ${getTypePresetFromTheme('meta010')};
  display: inline-block;
`;

export const ProgrammeTitle = styled(H1)`
  ${getTypePresetFromTheme('heading040')};
  margin: 0;
`;

export const ProgrammeDescription = styled(Label)`
  ${getTypePresetFromTheme('subhead010')};
`;

export const ProgrammeTags = styled(Label)`
  ${getTypePresetFromTheme('meta010')};
  ${getFontSizingFromTheme('fontSize020', 'fontLineHeight040')};
`;

export const ImageContainer = styled.div`
  max-width: 212px;
  max-height: 212px;
  margin-left: auto;
`;
