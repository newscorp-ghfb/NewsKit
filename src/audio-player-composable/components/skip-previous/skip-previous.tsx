import React from 'react';
import {IconButton} from '../../../icon-button';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {get} from '../../../utils/get';
import {useKeyboardShortcutsOnButton} from '../../utils';

const defaultKeyboardShortcuts = ['s', 'shift + p'];

const ThemelessAudioPlayerSkipPreviousButton: React.FC<AudioPlayerIconButtonWithShortcuts> = React.memo(
  ({overrides, ...props}) => {
    const {getSkipPreviousButtonProps} = useAudioPlayerContext();

    const theme = useTheme();
    const buttonOverrides: ButtonOverrides = {
      ...get(theme, 'componentDefaults.audioPlayerSkipPreviousButton'),
      ...filterOutFalsyProperties(overrides),
    };

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
        overrides={buttonOverrides}
        {...propsFromContext}
      />
    );
  },
);

export const AudioPlayerSkipPreviousButton = withOwnTheme(
  ThemelessAudioPlayerSkipPreviousButton,
)({defaults});
