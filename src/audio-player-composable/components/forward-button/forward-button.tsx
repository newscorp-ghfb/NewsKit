import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {useKeypress} from '../../../utils/hooks/use-keypress';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonProps} from '../../types';
import defaults from './defaults';

const defaultKeyboardShortcuts = {
  forward: ['l'],
};

const ThemelessAudioPlayerForwardButton: React.FC<
  AudioPlayerIconButtonProps & {
    keyboardShortcuts?: {
      forward: string[] | string;
    };
    seconds?: number;
  }
> = React.memo(
  ({overrides, keyboardShortcuts: keyboardShortcutsProp, ...props}) => {
    const {getForwardButtonProps, audioSectionRef} = useAudioPlayerContext();

    const theme = useTheme();

    const audioPlayerForwardOverrides: ButtonOverrides = {
      ...theme.componentDefaults.audioPlayerForwardButton,
      ...filterOutFalsyProperties(overrides),
    };

    const propsFromContext =
      getForwardButtonProps! && getForwardButtonProps(props);

    // Keyboard shortcuts
    const options = {target: audioSectionRef, preventDefault: false};
    const keyboardShortcuts = {
      ...defaultKeyboardShortcuts,
      ...keyboardShortcutsProp,
    };
    useKeypress(
      keyboardShortcuts.forward,
      // @ts-ignore
      e => propsFromContext.onClick(e),
      options,
    );

    return (
      <IconButton
        data-testid="audio-player-forward-button"
        size={ButtonSize.Medium}
        overrides={audioPlayerForwardOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerForwardButton = withOwnTheme(
  ThemelessAudioPlayerForwardButton,
)({
  defaults,
});
