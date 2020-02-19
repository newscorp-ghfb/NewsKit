import {styled} from '../utils/style';
import {Grid} from '../grid/grid';
import {Hidden} from '../grid';
import {SizingKeys} from '../themes';

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
