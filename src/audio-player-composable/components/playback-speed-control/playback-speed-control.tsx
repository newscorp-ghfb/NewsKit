import React, {useCallback, useRef, useState} from 'react';
import {IconButton} from '../../../icon-button';
import defaults from './defaults';
import {withOwnTheme} from '../../../utils/with-own-theme';
import {AudioPlayerPlaybackSpeedControlProps} from './types';
import {IconFilledSlowMotionVideo} from '../../../icons/filled/material/icon-filled-slow-motion-video';
import {useTheme} from '../../../theme';
import {useBreakpointKey} from '../../../utils/hooks';
import {checkBreakpointProp} from '../../../utils/check-breakpoint-prop';
import {Modal} from '../../../modal';
import {useAudioPlayerContext} from '../../context';
import {PlaybackSpeedList} from './playback-speed-list';
import {Popover} from '../../../popover';
import {iconButtonOverrides, popoverOverrides, modalOverrides} from './utils';
import {ButtonSize} from '../../../button';

const ThemelessAudioPlayerPlaybackSpeedControl = React.forwardRef<
  HTMLHeadingElement,
  AudioPlayerPlaybackSpeedControlProps
>((props, ref) => {
  const theme = useTheme();

  const {getPlaybackSpeedControlProps} = useAudioPlayerContext();
  const {
    overrides,
    onChange: setSpeed,
    useModal,
    playbackSpeed,
    buttonSize = ButtonSize.Medium,
  } = getPlaybackSpeedControlProps!(props);

  const [isOpen, setIsOpen] = useState(false);

  const renderInModal = checkBreakpointProp(useModal, useBreakpointKey());
  const selectedOptionRef = useRef<HTMLButtonElement>(null);

  const playbackSpeedList = (
    <PlaybackSpeedList
      isInsideModal={renderInModal}
      selectedOptionRef={selectedOptionRef}
      playbackSpeed={playbackSpeed}
      updateSpeed={setSpeed}
      setIsOpen={setIsOpen}
      overrides={overrides}
      theme={theme}
    />
  );

  const dismissHandler = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      <Popover
        ref={ref}
        open={isOpen && !renderInModal}
        content={playbackSpeedList}
        header={undefined}
        closePosition="none"
        onDismiss={dismissHandler}
        enableDismiss
        focusElementRef={selectedOptionRef}
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

      {renderInModal && (
        <Modal
          open={isOpen}
          onDismiss={dismissHandler}
          overrides={modalOverrides(theme, overrides)}
        >
          {playbackSpeedList}
        </Modal>
      )}
    </>
  );
});

export const AudioPlayerPlaybackSpeedControl = withOwnTheme(
  ThemelessAudioPlayerPlaybackSpeedControl,
)({defaults});
