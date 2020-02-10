import {Button} from '../button';
import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getFontsFromTheme,
} from '../utils/style';
import {H1} from '../typography';
import {Flag} from '../flag';
import {Tag} from '../tag';

export const PlayerContainer = styled.div`
  width: 100%;
  max-width: 920px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${getSizingFromTheme('sizing040')};
  box-shadow: 0px 1px ${getSizingFromTheme('sizing010')} 0px
    rgba(96, 97, 112, 0.5);
  padding: ${getSizingFromTheme('sizing060')};
`;

export const ControlContainer = styled.div`
  width: 100%;
  min-width: ${getSizingFromTheme('sizing110')};
`;

export const LiveFlag = styled(Flag)`
  width: ${getSizingFromTheme('sizing080')};
  height: ${getSizingFromTheme('sizing050')};
  padding: 0;
  text-align: center;
  line-height: 1.6;
  border: none;
  background-color: ${getColorFromTheme('semanticNegative010')};
  color: ${getColorFromTheme('inkInverse')};
  text-transform: uppercase;
  margin-right: ${getSizingFromTheme('sizing040')};
`;

export const Label = styled.span`
  ${getTypePresetFromTheme('meta010')};
  color: ${getColorFromTheme('inkSubtle')};
  font-weight: ${getFontsFromTheme('fontWeight010')};
`;

export const ProgrammeTime = styled(Label)`
  height: ${getSizingFromTheme('sizing050')};
  display: inline-block;
`;

export const ProgrammeTitle = styled(H1)`
  ${getTypePresetFromTheme('heading040')};
  margin-top: ${getSizingFromTheme('sizing040')};
  margin-bottom: ${getSizingFromTheme('sizing020')};
`;

export const ProgrammeDescription = styled(Label)`
  ${getTypePresetFromTheme('subhead010')};
  margin-bottom: ${getSizingFromTheme('sizing040')};
`;

export const ProgrammeTags = styled(Label)`
  font-size: ${getFontsFromTheme('fontSize020')};
`;

export const StyledButton = styled(Button)`
  border: none;
`;

export const StyledTag = styled(Tag)`
  border: none;
`;

export const ImageContainer = styled.div`
  width: 208px;
`;
