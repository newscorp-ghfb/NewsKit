import React, {useCallback, useRef, useState} from 'react';
import {IconButton} from '../../../icon-button';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {AudioPlayerPlaybackSpeedControlProps} from './types';
import {IconFilledSlowMotionVideo} from '../../../icons/filled/material/icon-filled-slow-motion-video';
import {useTheme} from '../../../theme';
import {useBreakpointKey} from '../../../utils/hooks';
import {shouldRenderInModal} from '../../../utils/should-render-in-modal';
import {Modal} from '../../../modal';
import {useAudioPlayerContext} from '../../context';
import {PlaybackSpeedList} from './playback-speed-list';
import {Popover} from '../../../popover';
import {iconButtonOverrides, popoverOverrides, modalOverrides} from './utils';
import {ButtonSize} from '../../../button';

const ThemelessAudioPlayerPlaybackSpeedControl: React.FC<AudioPlayerPlaybackSpeedControlProps> = React.memo(
  props => {
    const theme = useTheme();

    const {getPlaybackSpeedControlProps} = useAudioPlayerContext();
    const {
      overrides,
      onChange: setSpeed,
      useModal,
      playbackSpeed,
      buttonSize = ButtonSize.Small,
    } = getPlaybackSpeedControlProps!(props);

    const [isOpen, setIsOpen] = useState(false);

    const renderInModal = shouldRenderInModal(useModal, useBreakpointKey());
    const selectionListOptionRef = useRef<HTMLButtonElement>(null);
    const playbackSpeedList = (
      <PlaybackSpeedList
        selectionListOptionRef={selectionListOptionRef}
        playbackSpeed={playbackSpeed}
        updateSpeed={setSpeed}
        setIsOpen={setIsOpen}
        overrides={overrides}
        theme={theme}
      />
    );

    const dimissHandler = useCallback(() => {
      setIsOpen(false);
    }, []);

    return (
      <>
        <Popover
          open={isOpen && !renderInModal}
          content={playbackSpeedList}
          header={undefined}
          closePosition="none"
          onDismiss={dimissHandler}
          enableDismiss
          focusElementRef={selectionListOptionRef}
          overrides={popoverOverrides(theme, overrides)}
        >
          <IconButton
            aria-label="playback speed"
            data-testid="audio-player-playback-speed-control"
            overrides={iconButtonOverrides(theme, overrides)}
            onClick={() => setIsOpen(open => !open)}
            size={buttonSize}
          >
            <IconFilledSlowMotionVideo />
          </IconButton>
        </Popover>

        {renderInModal && isOpen && (
          <Modal
            open={isOpen}
            onDismiss={dimissHandler}
            overrides={modalOverrides(theme, overrides)}
          >
            {playbackSpeedList}
          </Modal>
        )}
      </>
    );
  },
);

export const AudioPlayerPlaybackSpeedControl = withOwnTheme(
  ThemelessAudioPlayerPlaybackSpeedControl,
)({defaults});
