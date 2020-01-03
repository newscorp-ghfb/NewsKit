import React from 'react';
import {Button, ButtonSize, ButtonProps} from '../button';
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

interface AudioPlayerState {
  playing: boolean;
  canPlay: boolean;
  volume: number;
}

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

export class AudioPlayer extends React.Component<
  AudioPlayerProps,
  AudioPlayerState
> {
  private playerRef: React.RefObject<HTMLAudioElement>;

  constructor(props: AudioPlayerProps) {
    super(props);
    this.state = {
      playing: false,
      canPlay: true,
      volume: 1,
    };
    this.playerRef = React.createRef<HTMLAudioElement>();
  }

  componentDidMount() {
    const playerNode = this.playerRef.current;

    if (playerNode) {
      playerNode.addEventListener('canPlay', this.playable);
      playerNode.addEventListener('play', this.playing);
      playerNode.addEventListener('pause', this.paused);
    }
  }

  get buttonProps(): ButtonProps {
    const {canPlay, playing} = this.state;

    const playState = playing ? 'pause' : 'play';

    const props = {
      type: 'button',
      'data-testid': 'audio-player-play-button',
      $size: ButtonSize.Large,
      disabled: !canPlay && !playing,
      icon: () => <Play $size="sizing060" $color="buttonFill" />,
      onClick: () => this.setPlayState(playState),
      'aria-pressed': false,
    };

    if (playing) {
      props.icon = () => <Pause $size="sizing060" $color="buttonFill" />;
      props['aria-pressed'] = true;
    }

    return props;
  }

  playable = () => {
    this.setState({canPlay: true});
  };

  playing = () => {
    this.setState({playing: true});
  };

  paused = () => {
    this.setState({playing: false});
  };

  setPlayState = (state: 'play' | 'pause') => {
    const playerNode = this.playerRef.current;
    const {canPlay} = this.state;

    if (playerNode && canPlay) {
      playerNode[state]();
    }
  };

  togglePlay = () => {
    const {playing} = this.state;
    const playState = playing ? 'pause' : 'play';
    this.setPlayState(playState);
  };

  render() {
    const {
      imgSrc,
      imgAlt,
      live = false,
      time,
      title,
      description,
      tags = [],
      ...rest
    } = this.props;
    const {volume} = this.state;
    const playerNode = this.playerRef.current;

    if (playerNode) {
      playerNode.volume = volume;
    }

    return (
      <PlayerContainer>
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio ref={this.playerRef} data-testid="audio-player" {...rest} />
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
        <PlayerButton {...this.buttonProps} />
      </PlayerContainer>
    );
  }
}
