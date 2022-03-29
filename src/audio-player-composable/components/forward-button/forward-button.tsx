import React from 'react';
import {ButtonOverrides, ButtonSize} from '../../../button/types';
import {IconButton} from '../../../icon-button';
import {useTheme} from '../../../theme';
import {filterOutFalsyProperties} from '../../../utils/filter-object';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {useAudioPlayerContext} from '../../context';
import {AudioPlayerIconButtonWithShortcuts} from '../../types';
import {useKeyboardShortcutsOnButton} from '../../utils';
import defaults from './defaults';

const defaultKeyboardShortcuts = ['l'];

const ThemelessAudioPlayerForwardButton: React.FC<
  AudioPlayerIconButtonWithShortcuts & {
    seconds?: number;
  }
> = React.memo(({overrides, ...props}) => {
  const {getForwardButtonProps} = useAudioPlayerContext();

  const theme = useTheme();

  const audioPlayerForwardOverrides: ButtonOverrides = {
    ...theme.componentDefaults.audioPlayerForwardButton,
    ...filterOutFalsyProperties(overrides),
  };

  const propsFromContext =
    getForwardButtonProps! && getForwardButtonProps(props);

  useKeyboardShortcutsOnButton({
    props: propsFromContext as AudioPlayerIconButtonWithShortcuts,
    defaults: defaultKeyboardShortcuts,
  });

  return (
    <IconButton
      data-testid="audio-player-forward-button"
      size={ButtonSize.Medium}
      overrides={audioPlayerForwardOverrides}
      {...propsFromContext}
    />
  );
});

export const AudioPlayerForwardButton = withOwnTheme(
  ThemelessAudioPlayerForwardButton,
)({
  defaults,
});
