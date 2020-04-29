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

export const PlayerGrid = styled(Grid)`
  box-sizing: border-box;
`;

export const PlayerContainer = styled.section`
  width: 100%;
`;

export const ControlContainer = styled(Hidden)<{
  playerTrackSize: SizingKeys;
}>`
  box-sizing: border-box;
  width: calc(
    184px + ${({theme, playerTrackSize}) => `${theme.sizing[playerTrackSize]}`}
  );
  padding: 0
    ${({theme, playerTrackSize}) =>
      `calc(${theme.sizing[playerTrackSize]} / 2)`};
`;
