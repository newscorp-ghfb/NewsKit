import {IconButtonProps} from '../button';
import {useTheme} from '../theme';
import {filterOutFalsyProperties} from '../utils/filter-object';
import {get} from '../utils/get';
import {useKeypress} from '../utils/hooks';
import {useAudioPlayerContext} from './context';
import {AudioPlayerIconButtonWithShortcuts} from './components/types';

const hhmmss: [number, number] = [11, 8];
const mmss: [number, number] = [14, 5];

export const formatTrackTime = (time: number, maxTime: number = time) => {
  const args = Math.max(time, maxTime) >= 3600 ? hhmmss : mmss;
  return new Date(time * 1000).toISOString().substr(...args);
};

export const formatDuration = (time: number, maxTime: number = time) => {
  if (time === 0) {
    return '';
  }
  return formatTrackTime(time, maxTime);
};

export const getMediaSegment = (duration: number, currentPosition: number) => {
  const currentPositionPercentage = (currentPosition / duration) * 100;

  if (currentPositionPercentage > 0 && currentPositionPercentage <= 25)
    return '0-25';
  if (currentPositionPercentage > 25 && currentPositionPercentage <= 50)
    return '26-50';
  if (currentPositionPercentage > 50 && currentPositionPercentage <= 75)
    return '51-75';

  return '76-100';
};

type UseKeyboardShortcutsType = {
  action?: (e: KeyboardEvent) => void;
  defaults: string | string[];
  props: AudioPlayerIconButtonWithShortcuts;
};

export const useKeyboardShortcutsOnButton = ({
  props,
  defaults: defaultKeys,
  action,
}: UseKeyboardShortcutsType) => {
  const {audioSectionRef} = useAudioPlayerContext();

  const {keyboardShortcuts: keyboardShortcutsProp} = props;

  const options = {target: audioSectionRef, preventDefault: false};
  const keyboardShortcuts = keyboardShortcutsProp || defaultKeys;

  const callback = action || props.onClick;

  useKeypress(keyboardShortcuts, callback, options);
};

export const useButtonOverrides = (
  props: Pick<IconButtonProps, 'overrides'>,
  defaultsPath: string,
): IconButtonProps['overrides'] => {
  const theme = useTheme();
  const {overrides} = props;

  return {
    ...get(theme, `componentDefaults.${defaultsPath}`),
    ...filterOutFalsyProperties(overrides),
  };
};
