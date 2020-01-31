import React, {
  useRef,
  useState,
  useEffect,
  ChangeEvent,
  useCallback,
} from 'react';
import {PlayerContainer, MetaArea as ControlPanel} from './styled';
import {Slider} from '../slider';
import {PlayerButton, ForwardButton, ReplayButton} from './controls';
import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getFontsFromTheme,
} from '../utils/style';
import {Image} from '../image';
import {H1} from '../typography';
import {Tag} from '../tag';
import {Play, Pause} from '../icons';

export interface AudioPlayerProps
  extends React.AudioHTMLAttributes<HTMLAudioElement> {
  imgSrc: string;
  imgAlt: string;
  title: string;
  time?: string;
  description?: string;
  live?: boolean;
  tags?: string[];
  captionSrc?: string;
}

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 920px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${getSizingFromTheme('sizing040')};
  box-shadow: 0px 1px ${getSizingFromTheme('sizing010')} 0px
    rgba(96, 97, 112, 0.5);
  padding: ${getSizingFromTheme('sizing060')};
`;

const MetaArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoArea = styled.div`
  margin-left: ${getSizingFromTheme('sizing050')};
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const LiveTag = styled(Tag)`
  width: ${getSizingFromTheme('sizing080')};
  height: ${getSizingFromTheme('sizing050')};
  padding: 0;
  text-align: center;
  line-height: 1.6;
  border: none;
  background-color: ${getColorFromTheme('semanticNegativeBase')};
  color: ${getColorFromTheme('inkInverse')};
  text-transform: uppercase;
  margin-right: ${getSizingFromTheme('sizing040')};
`;

const Label = styled.span`
  ${getTypePresetFromTheme('meta010')};
  color: ${getColorFromTheme('inkSubtle')};
  font-weight: ${getFontsFromTheme('fontWeight010')};
`;

const ProgrammeTime = styled(Label)`
  height: ${getSizingFromTheme('sizing050')};
  display: inline-block;
`;

const ProgrammeTitle = styled(H1)`
  ${getTypePresetFromTheme('heading040')};
  margin-top: ${getSizingFromTheme('sizing040')};
  margin-bottom: ${getSizingFromTheme('sizing020')};
`;

const ProgrammeDescription = styled(Label)`
  ${getTypePresetFromTheme('subhead010')};
  margin-bottom: ${getSizingFromTheme('sizing040')};
`;

const ProgrammeTags = styled(Label)`
  font-size: ${getFontsFromTheme('fontSize020')};
`;

const PlayerButton = styled(Button)`
  margin: ${getSizingFromTheme('sizing040')} auto 0;
`;

const ImageContainer = styled.div`
  width: 208px;
`;

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  const playerRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [volume] = React.useState(1);

  const togglePlay = useCallback(() => {
    const playerNode = playerRef.current;
    if (playerNode) {
      setIsPlaying(playerNode.togglePlay(isPlaying));
    }
  }, [isPlaying, playerRef, setIsPlaying]);

  /**
   * audio time management callbacks
   *
   * this is to prevent recreation of all the event handlers on every audio time update
   * see https://reactjs.org/docs/hooks-faq.html#how-to-read-an-often-changing-value-from-usecallback
   */
  const timeRef = useRef(0);
  useEffect(() => {
    timeRef.current = currentTime;
  });
  const onChangeAudioTime = useCallback(
    (newTime: number) => {
      const playerNode = playerRef.current;
      if (playerNode) {
        setCurrentTime([playerNode.setCurrentTime(newTime)]);
      }
    },
    [playerRef, setCurrentTime],
  );
  const onChangeSlider = useCallback(
    ([value]: number[]) => onChangeAudioTime(value),
    [onChangeAudioTime],
  );
  const onClickReplay = useCallback(
    () => onChangeAudioTime(timeRef.current - 10),
    [onChangeAudioTime, timeRef],
  );
  const onClickForward = useCallback(
    () => onChangeAudioTime(timeRef.current + 10),
    [onChangeAudioTime, timeRef],
  );

  return (
    <PlayerContainer>
      {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
      <audio ref={playerRef} data-testid="audio-player" {...rest}>
        {captionSrc && <track kind="captions" src={captionSrc} />}
      </audio>
      <MetaArea>
        <ImageContainer>
          <Image
            borderRadius="sizing120"
            stylePreset="maskRound010"
            src={imgSrc}
            alt={imgAlt}
            aspectHeight="1"
            aspectWidth="1"
          />
        </ImageContainer>
        <InfoArea>
          <div>
            {live && <LiveTag>Live</LiveTag>}
            <ProgrammeTime>{time}</ProgrammeTime>
          </div>
          <ProgrammeTitle>{title}</ProgrammeTitle>
          <ProgrammeDescription>{description}</ProgrammeDescription>
          {tags.length > 0 && (
            <ProgrammeTags>
              {tags.map(
                (tag, i) => `${tag}${i <= tags.length - 2 ? ' | ' : ''}`,
              )}
            </ProgrammeTags>
          )}
        </InfoArea>
      </MetaArea>
      <PlayerButton {...buttonProps} />
    </PlayerContainer>
  );
};
