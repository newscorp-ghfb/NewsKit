import React, {useCallback, useEffect, useRef, useState} from 'react';
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
    buttonSize = 'medium',
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

  const toggleOpen = useCallback(() => {
    setIsOpen(open => !open);
  }, []);

  return (
    <div>
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
        {props.children ? (
          // If there are children, trigger the open state
          // on click and pass the original onClick handler
          React.cloneElement(props.children, {
            onClick: () => {
              toggleOpen();
              /* istanbul ignore next */
              if (props.children?.props?.onClick) {
                props.children.props.onClick();
              }
            },
          })
        ) : (
          <IconButton
            aria-label="playback speed"
            data-testid="audio-player-playback-speed-control"
            overrides={iconButtonOverrides(theme, overrides)}
            onClick={toggleOpen}
            size={buttonSize}
          >
            <IconFilledSlowMotionVideo />
          </IconButton>
        )}
      </Popover>

      {/* If we don't render modal regardless we get a hydration error in Next */}
      <Modal
        open={renderInModal && isOpen}
        onDismiss={dismissHandler}
        overrides={modalOverrides(theme, overrides)}
      >
        {playbackSpeedList}
      </Modal>
    </div>
  );
});

export const AudioPlayerPlaybackSpeedControl = withOwnTheme(
  ThemelessAudioPlayerPlaybackSpeedControl,
)({defaults});
