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
import {useKeypress} from '../../../utils/hooks/use-keypress';

const defaultKeyboardShortcuts = {
  skipNext: ['a', 'shift + n'],
};

const ThemelessAudioPlayerSkipNextButton: React.FC<
  AudioPlayerIconButtonProps & {
    keyboardShortcuts: {
      forward: string[] | string;
    };
  }
> = React.memo(
  ({overrides, keyboardShortcuts: keyboardShortcutsProp, ...props}) => {
    const {getSkipNextButtonProps, audioSectionRef} = useAudioPlayerContext();

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerSkipNextButton'),
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getSkipNextButtonProps! && getSkipNextButtonProps(props);

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };
    useKeypress(
      keyboardShortcuts.skipNext,
      // @ts-ignore
      e => propsFromContext.onClick(e),
      options,
    );

    return (
      <IconButton
        data-testid="audio-player-skip-next-button"
        size={ButtonSize.Medium}
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipNextButton = withOwnTheme(
  ThemelessAudioPlayerSkipNextButton,
)({defaults});
