import {styled} from '../utils/style';
import {Grid} from '../grid/grid';
import {Hidden} from '../grid';
import {AudioPlayerProps} from './types';
import {logicalProps} from '../utils/logical-properties';

export const PlayerGrid = styled(Grid)`
  box-sizing: border-box;
`;

export const PlayerContainer = styled.section<
  Pick<AudioPlayerProps, 'overrides'>
>`
  width: 100%;
  ${logicalProps('audioPlayer')};
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
