import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useButtonOverrides, useKeyboardShortcutsOnButton} from '../../utils';
import {AudioPlayerSkipNextButtonProps} from './types';

const defaultKeyboardShortcuts = ['shift + n'];

const ThemelessAudioPlayerSkipNextButton: React.FC<AudioPlayerSkipNextButtonProps> = React.memo(
  props => {
    const {getSkipNextButtonProps} = useAudioPlayerContext();

    const overrides = useButtonOverrides(props, 'audioPlayerSkipNextButton');

    const propsFromContext =
      getSkipNextButtonProps! && getSkipNextButtonProps(props);

    useKeyboardShortcutsOnButton({
      props: propsFromContext as AudioPlayerSkipNextButtonProps,
      defaults: defaultKeyboardShortcuts,
    });

    return (
      <IconButton
        data-testid="audio-player-skip-next-button"
        size={ButtonSize.Medium}
        overrides={overrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipNextButton = withOwnTheme(
  ThemelessAudioPlayerSkipNextButton,
)({defaults});
