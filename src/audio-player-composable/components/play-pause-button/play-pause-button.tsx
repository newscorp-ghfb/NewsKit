import React, {useCallback} from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {PlayPauseButtonProps} from './types';
import {useKeypress} from '../../../utils/hooks/use-keypress';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {useTheme} from '../../../theme';
import {get} from '../../../utils/get';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';

const defaultKeyboardShortcuts = {
  toggle: ['k', ' '],
};

const ThemelessAudioPlayerPlayPauseButton: React.FC<PlayPauseButtonProps> = React.memo(
  ({overrides, keyboardShortcuts: keyboardShortcutsProp, ...props}) => {
    const {
      getPlayPauseButtonProps,
      audioSectionRef,
      togglePlay,
    } = useAudioPlayerContext();

    const propsFromContext =
      getPlayPauseButtonProps! && getPlayPauseButtonProps(props);

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerPlayPauseButton'),
      ...filterOutFalsyProperties(overrides),
    };

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };

    const toggleAction = useCallback(
      ({target, key}: KeyboardEvent) => {
        const {tagName} = target as HTMLElement;
        const actionKeys = [' ', 'Enter'];
        const actionElements = ['BUTTON', 'INPUT', 'A'];
        const isActionKey = actionKeys.includes(key);
        const isActionElement = target && actionElements.includes(tagName);

        if (
          typeof togglePlay === 'function' &&
          (!isActionKey ||
            // pressing Space or Enter when the focused element is a Button, A or Input will not trigger the toggle
            (isActionKey && !isActionElement))
        ) {
          togglePlay();
        }
      },
      [togglePlay],
    );

    useKeypress(keyboardShortcuts.toggle, toggleAction, options);

    return (
      <IconButton
        data-testid="audio-player-play-pause-button"
        size={ButtonSize.Large}
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerPlayPauseButton = withOwnTheme(
  ThemelessAudioPlayerPlayPauseButton,
)({defaults});
