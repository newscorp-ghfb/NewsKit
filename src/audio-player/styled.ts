import {IconButton} from '../button/icon-button';
import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getFontsFromTheme,
} from '../utils/style';
import {H1} from '../typography';
import {Tag} from '../tag';

export const PlayerContainer = styled(Grid)`
  box-sizing: border-box;
`;

export const ControlContainer = styled(Hidden)<{
  $playerTrackSize: SizingKeys;
}>`
  width: 100%;
  max-width: 184px;
  padding: 0
    ${({theme, $playerTrackSize}) =>
      `calc(${theme.sizing[$playerTrackSize]} / 2)`};
`;
