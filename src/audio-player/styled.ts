import {styled} from '../utils/style';
import {Grid} from '../grid/grid';
import {Hidden} from '../grid';

export const PlayerGrid = styled(Grid)`
  box-sizing: border-box;
`;

export const PlayerContainer = styled.section`
  width: 100%;
`;

export const ControlContainer = styled(Hidden)<{
  playerTrackSize: string;
}>`
  box-sizing: border-box;
  width: calc(
    184px + ${({theme, playerTrackSize}) => `${theme.sizing[playerTrackSize]}`}
  );
  padding: 0
    ${({theme, playerTrackSize}) =>
      `calc(${theme.sizing[playerTrackSize]} / 2)`};
`;
