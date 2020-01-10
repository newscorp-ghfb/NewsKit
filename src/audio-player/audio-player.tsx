import React, {useEffect, useRef} from 'react';
import {Button, ButtonSize} from '../button';
import {
  styled,
  getColorFromTheme,
  getSizingFromTheme,
  getTypePresetFromTheme,
  getFontsFromTheme,
} from '../utils/style';
import {Image, ImageShape} from '../image';
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
}

const PlayerContainer = styled.div`
  width: 100%;
  max-width: 920px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: ${getSizingFromTheme('sizing040')};
  box-shadow: 0px 1px ${getSizingFromTheme('sizing010')} 0px
    rgba(96, 97, 112, 0.5);
  padding: ${getSizingFromTheme('spacingSize060')};
`;

const MetaArea = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const InfoArea = styled.div`
  margin-left: ${getSizingFromTheme('spacingSize050')};
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
  background-color: ${getColorFromTheme('semanticNegative')};
  color: ${getColorFromTheme('inkInverse')};
  text-transform: uppercase;
  margin-right: ${getSizingFromTheme('spacingSize040')};
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
  margin-top: ${getSizingFromTheme('spacingSize040')};
  margin-bottom: ${getSizingFromTheme('spacingSize020')};
`;

const ProgrammeDescription = styled(Label)`
  ${getTypePresetFromTheme('subhead010')};
  margin-bottom: ${getSizingFromTheme('spacingSize040')};
`;

const ProgrammeTags = styled(Label)`
  font-size: ${getFontsFromTheme('fontSize020')};
`;

const PlayerButton = styled(Button)`
  margin: ${getSizingFromTheme('spacingSize040')} auto 0;
`;

const ImageContainer = styled.div`
  width: 208px;
`;

export const AudioPlayer: React.FC<AudioPlayerProps> = props => {
  {
    const playerRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = React.useState(false);
    const [volume] = React.useState(1);

    const playing = () => {
      setIsPlaying(true);
    };

    const paused = () => {
      setIsPlaying(false);
    };

    useEffect(() => {
      const playerNode = playerRef.current;
      if (playerNode) {
        playerNode.addEventListener('play', playing);
        playerNode.addEventListener('pause', paused);
      }
    });

    const setPlayState = (state: 'play' | 'pause') => {
      const playerNode = playerRef.current;
      if (!playerNode) {
        return;
      }

      if (state !== 'play') {
        playerNode.pause();
        return;
      }

      // TODO: should go into a loading state here https://nidigitalsolutions.jira.com/browse/PPDSC-649
      const playPromise = playerNode.play();
      if (playPromise) {
        playPromise
          .then(() => {
            playing();
          })
          .catch(() => {
            // TODO: Display error to user https://nidigitalsolutions.jira.com/browse/PPDSC-554 consider autoplay error states https://developer.mozilla.org/en-US/docs/Web/Media/Autoplay_guide
          });
      }
    };

    const togglePlay = () => {
      const playState = isPlaying ? 'pause' : 'play';
      setPlayState(playState);
    };

    const buttonProps = {
      'data-testid': 'audio-player-play-button',
      $size: ButtonSize.Large,
      icon: isPlaying
        ? () => <Pause $size="iconSize030" $color="buttonFill" />
        : () => <Play $size="iconSize030" $color="buttonFill" />,
      onClick: () => togglePlay(),
      'aria-pressed': isPlaying,
    };

    const {
      imgSrc,
      imgAlt,
      live = false,
      time,
      title,
      description,
      tags = [],
      ...rest
    } = props;
    const playerNode = playerRef.current;

    if (playerNode) {
      playerNode.volume = volume;
    }

    return (
      <PlayerContainer>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={playerRef} data-testid="audio-player" {...rest} />
        <MetaArea>
          <ImageContainer>
            <Image
              shape={ImageShape.Rounded}
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
  }
};
