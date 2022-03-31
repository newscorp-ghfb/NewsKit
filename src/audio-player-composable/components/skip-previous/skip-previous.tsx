import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';

const defaultKeyboardShortcuts = ['s', 'shift + p'];

const ThemelessAudioPlayerSkipPreviousButton: React.FC<AudioPlayerIconButtonWithShortcuts> = React.memo(
  props => {
    const {getSkipPreviousButtonProps} = useAudioPlayerContext();

    const overrides = useButtonOverrides(
      props,
      'audioPlayerSkipPreviousButton',
    );

    const propsFromContext =
      getSkipPreviousButtonProps! && getSkipPreviousButtonProps(props);

    useKeyboardShortcutsOnButton({
      props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
      defaults: defaultKeyboardShortcuts,
    });

    return (
      <IconButton
        data-testid="audio-player-skip-previous-button"
        size={ButtonSize.Medium}
        overrides={overrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipPreviousButton = withOwnTheme(
  ThemelessAudioPlayerSkipPreviousButton,
)({defaults});
