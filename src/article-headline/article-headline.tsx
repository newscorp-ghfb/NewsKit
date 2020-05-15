import React from 'react';
import {H1} from '../typography';
import {styled, getTypePreset, getMarginPreset, MQ} from '../utils/style';
import {getStylePreset} from '../utils/style-preset';
import {TypePresetKeys} from '../themes/mappers/type-presets';
import {MarginPresetKeys} from '../themes/mappers/spacing';
import {StylePresetKeys} from '../themes/mappers/style-preset';

export interface ArticleHeadline {
  kickerText?: string;
  renderHeadingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  renderKickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  overrides?: {
    kicker?: {
      stylePreset?: MQ<StylePresetKeys>;
      typePreset?: MQ<TypePresetKeys>;
      marginPreset?: MQ<MarginPresetKeys>;
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

const Headline = styled.section`
  display: block;
`;

const Heading = styled(H1)<HeadingProps & ArticleHeadline>`
  display: inline-block;
  ${getTypePreset('articleHeadline.heading', 'heading', {
    withCrop: true,
  })}
  ${getStylePreset('articleHeadline.heading', 'heading')}
`;

const Kicker = styled(Heading)<ArticleHeadline>`
  display: inline-block;
  ${getTypePreset('articleHeadline.kicker', 'kicker', {
    withCrop: true,
  })}
  ${getStylePreset('articleHeadline.kicker', 'kicker')}
  ${getMarginPreset('articleHeadline.kicker', 'kicker')}
  text-transform: uppercase;
`;

export const ArticleHeadline: React.FC<ArticleHeadline> = ({
  children,
  kickerText,
  renderHeadingAs = 'h1',
  renderKickerAs = 'span',
  overrides = {},
}) =>
  kickerText ? (
    <Headline>
      <Kicker as={renderKickerAs} overrides={overrides}>
        {kickerText}{' '}
      </Kicker>
      <Heading as={renderHeadingAs} overrides={overrides}>
        {children}
      </Heading>
    </Headline>
  ) : (
    <Heading as={renderHeadingAs}>{children}</Heading>
  );
