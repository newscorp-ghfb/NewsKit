import React from 'react';
import {
  LiveFlag,
  ProgrammeTime,
  ProgrammeTitle,
  ProgrammeDescription,
  ProgrammeTags,
  ImageContainer,
} from './styled';
import {Grid, Cell} from '../../grid';
import {Block} from '../../block';
import {Image} from '../../image';

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
    <Grid mdColumnGutter="sizing050">
      <Cell xs={5}>
        <ImageContainer>
          <Image
            src={imgSrc}
            alt={imgAlt}
            aspectHeight="1"
            aspectWidth="1"
            $stylePreset="maskRound010"
          />
        </ImageContainer>
      </Cell>
      <Cell xs={7}>
        {(live || time) && (
          <Block $margin="spaceStack050">
            {live && <LiveTag>Live</LiveTag>}
            {time && <ProgrammeTime>{time}</ProgrammeTime>}
          </Block>
        )}
        {title && (
          <Block $margin="spaceStack040">
            <ProgrammeTitle>{title}</ProgrammeTitle>
          </Block>
        )}
        {description && (
          <Block $margin="spaceStack050">
            <ProgrammeDescription>{description}</ProgrammeDescription>
          </Block>
        )}
        {tags && tags.length > 0 && (
          <ProgrammeTags>
            {tags.map((tag, i) => `${tag}${i <= tags.length - 2 ? ' | ' : ''}`)}
          </ProgrammeTags>
        )}
      </Cell>
    </Grid>
  ),
);
