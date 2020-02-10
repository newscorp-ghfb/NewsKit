import React from 'react';
import {Stack, Flow, StackDistribution} from '../../stack';
import {Image, ImageShape} from '../../image';
import {
  LiveFlag,
  ProgrammeTime,
  ProgrammeTitle,
  ProgrammeDescription,
  ProgrammeTags,
  ImageContainer,
} from '../styled';

export interface PlayerMetaProps {
  imgSrc: string;
  imgAlt: string;
  title?: string;
  time?: string;
  description?: string;
  live?: boolean;
  tags?: string[];
}

export const PlayerMeta: React.FC<PlayerMetaProps> = React.memo(
  ({imgSrc, imgAlt, time, live, title, description, tags}) => (
    <Stack
      flow={Flow.HorizontalCenter}
      stackDistribution={StackDistribution.Center}
    >
      <ImageContainer>
        <Image
          src={imgSrc}
          alt={imgAlt}
          aspectHeight="1"
          aspectWidth="1"
          $stylePreset="maskRound010"
        />
      </ImageContainer>
      <Stack
        flow={Flow.VerticalCenter}
        stackDistribution={StackDistribution.Center}
      >
        <div>
          {live && <LiveFlag>Live</LiveFlag>}
          {time && <ProgrammeTime>{time}</ProgrammeTime>}
        </div>
        {title && <ProgrammeTitle>{title}</ProgrammeTitle>}
        {description && (
          <ProgrammeDescription>{description}</ProgrammeDescription>
        )}
        {tags && tags.length > 0 && (
          <ProgrammeTags>
            {tags.map((tag, i) => `${tag}${i <= tags.length - 2 ? ' | ' : ''}`)}
          </ProgrammeTags>
        )}
      </Stack>
    </Stack>
  ),
);
