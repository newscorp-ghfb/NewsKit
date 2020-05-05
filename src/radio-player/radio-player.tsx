import React from 'react';
import {AudioPlayer, AudioPlayerProps} from '../audio-player';
import {
  ProgrammeTime,
  ProgrammeTitle,
  ProgrammeDescription,
  ProgrammeTags,
  ImageContainer,
} from './styled';
import {InstrumentationProvider} from '../instrumentation/instrumentation-provider';
import {DescriptionMetaProps, CenterProp, PlayerImageProps} from './types';
import {Grid, Cell} from '../grid';
import {Image} from '../image';
import {Stack, Flow, StackDistribution} from '../stack';
import {Block} from '../block';
import {Flag} from '../flag';

const renderFlag = (CustomFlag: React.ComponentType | string) =>
  typeof CustomFlag === 'string' ? (
    <Flag stylePreset="flagSolidLive">{CustomFlag}</Flag>
  ) : (
    <CustomFlag />
  );

const DescriptionsMeta: React.FC<DescriptionMetaProps & CenterProp> = ({
  center = false,
  time,
  flag,
  title,
  description,
  tags,
}) => (
  <Stack
    flow={center ? Flow.VerticalCenter : Flow.VerticalLeft}
    stackDistribution={StackDistribution.Start}
  >
    {(flag || time) && (
      <Block margin="spaceStack050">
        <Stack
          flow={center ? Flow.VerticalCenter : Flow.HorizontalCenter}
          stackDistribution={
            center ? StackDistribution.SpaceBetween : StackDistribution.Start
          }
          space={center ? 'sizing020' : 'sizing040'}
        >
          {flag && renderFlag(flag)}
          {time && <ProgrammeTime>{time}</ProgrammeTime>}
        </Stack>
      </Block>
    )}
    {title && (
      <Block margin="spaceStack040">
        <ProgrammeTitle center={center}>{title}</ProgrammeTitle>
      </Block>
    )}
    {description && (
      <ProgrammeDescription center={center}>{description}</ProgrammeDescription>
    )}
    {tags && tags.length > 0 && (
      <ProgrammeTags>
        {tags.map((tag, i) => `${tag}${i <= tags.length - 2 ? ' | ' : ''}`)}
      </ProgrammeTags>
    )}
  </Stack>
);

const PlayerImage: React.FC<PlayerImageProps> = ({imgSrc, imgAlt}) => (
  <ImageContainer>
    <Image
      src={imgSrc}
      alt={imgAlt}
      loadingAspectRatio="1:1"
      stylePreset="maskRound010"
    />
  </ImageContainer>
);

const PlayerMeta: React.FC<
  PlayerImageProps & DescriptionMetaProps
> = React.memo(({imgSrc, imgAlt, ...props}) => (
  <Grid>
    <Cell md={5} xsHidden smHidden>
      <Stack
        flow={Flow.HorizontalTop}
        stackDistribution={StackDistribution.End}
      >
        <PlayerImage imgSrc={imgSrc} imgAlt={imgAlt} />
      </Stack>
    </Cell>
    <Cell md={7} xsHidden smHidden>
      <DescriptionsMeta {...props} />
    </Cell>
    <Cell mdHidden lgHidden xs={12}>
      <Stack
        flow={Flow.HorizontalCenter}
        stackDistribution={StackDistribution.Center}
      >
        <PlayerImage imgSrc={imgSrc} imgAlt={imgAlt} />
      </Stack>
    </Cell>
    <Cell mdHidden lgHidden xs={12}>
      <DescriptionsMeta {...props} center />
    </Cell>
  </Grid>
));

export type RadioPlayerProps = PlayerImageProps &
  DescriptionMetaProps &
  AudioPlayerProps;

export const RadioPlayer: React.FC<RadioPlayerProps> = props => {
  const {time, live, title, flag, description, tags, imgSrc, imgAlt} = props;

  const contextObject = {
    media_name: title,
  };

  return (
    <InstrumentationProvider context={contextObject}>
      <AudioPlayer {...props}>
        <Block margin="spaceStack050">
          <PlayerMeta
            time={time}
            live={live}
            flag={flag}
            description={description}
            tags={tags}
            imgSrc={imgSrc}
            imgAlt={imgAlt}
            title={title}
          />
        </Block>
      </AudioPlayer>
    </InstrumentationProvider>
  );
};
