import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {get} from '../../../utils/get';
import {useKeypress} from '../../../utils/hooks';

const defaultKeyboardShortcuts = {
  skipPrevious: ['s', 'shift + p'],
};

const ThemelessAudioPlayerSkipPreviousButton: React.FC<
  AudioPlayerIconButtonProps & {
    keyboardShortcuts: {
      forward: string[] | string;
    };
  }
> = React.memo(
  ({overrides, keyboardShortcuts: keyboardShortcutsProp, ...props}) => {
    const {
      getSkipPreviousButtonProps,
      audioSectionRef,
    } = useAudioPlayerContext();

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerSkipPrevious'),
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getSkipPreviousButtonProps! && getSkipPreviousButtonProps(props);

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };
    useKeypress(
      keyboardShortcuts.skipPrevious,
      // @ts-ignore
      e => propsFromContext.onClick(e),
      options,
    );

    return (
      <IconButton
        data-testid="audio-player-skip-previous-button"
        size={ButtonSize.Medium}
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipPreviousButton = withOwnTheme(
  ThemelessAudioPlayerSkipPreviousButton,
)({defaults});
