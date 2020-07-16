import React from 'react';
import {styled, getTypePreset, MQ, getSpacingInline} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {TypePresetKeys} from '../themes/mappers/type-presets';
import {SpacingPresetKeys} from '../themes/mappers/spacing';
import {StylePresetKeys} from '../themes/mappers/style-preset';

export interface Headline {
  kickerText?: string;
  headingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  kickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    kicker?: {
      stylePreset?: MQ<StylePresetKeys>;
      typePreset?: MQ<TypePresetKeys>;
      spaceInline?: MQ<SpacingPresetKeys>;
    };
    heading?: {
      stylePreset?: MQ<StylePresetKeys>;
      typePreset?: MQ<TypePresetKeys>;
    };
  };
}

interface HeadingProps {
  as?: React.ElementType;
}

const HeadlineContainer = styled.section`
  display: block;
`;

const Heading = styled.h1<HeadingProps & Headline>`
  display: inline-block;
  margin: 0;
  ${getTypePreset('headline.heading', 'heading', {
    withCrop: true,
  })}
  ${getStylePreset('headline.heading', 'heading')}
`;

const Kicker = styled(Heading)<Headline>`
  display: inline-block;
  ${getTypePreset('headline.kicker', 'kicker', {
    withCrop: true,
  })}
  ${getStylePreset('headline.kicker', 'kicker')}
  ${getSpacingInline('headline.kicker', 'kicker')};
  text-transform: uppercase;
`;

export const Headline: React.FC<Headline> = ({
  children,
  kickerText,
  headingAs = 'h1',
  kickerAs = 'span',
  overrides = {},
}) =>
  kickerText ? (
    <HeadlineContainer>
      <Kicker as={kickerAs} overrides={overrides}>
        {kickerText}{' '}
      </Kicker>
      <Heading as={headingAs} overrides={overrides}>
        {children}
      </Heading>
    </HeadlineContainer>
  ) : (
    <Heading as={headingAs}>{children}</Heading>
  );
