import React from 'react';
import {H1} from '../typography';
import {
  styled,
  getDefaultTypePreset,
  getDefaultMarginPreset,
  MQ,
} from '../utils/style';
import {getDefaultStylePreset} from '../utils/style-preset';
import {TypePresetKeys} from '../themes/mappers/type-presets';
import {MarginPresetKeys} from '../themes/mappers/spacing';
import {StylePresetKeys} from '../themes/mappers/style-preset';

export interface ArticleHeadline {
  kickerText?: string;
  renderHeadingAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  renderKickerAs?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';
  kickerStylePreset?: MQ<StylePresetKeys>;
  headingStylePreset?: MQ<StylePresetKeys>;
  kickerMqTypePreset?: MQ<TypePresetKeys>;
  headingMqTypePreset?: MQ<TypePresetKeys>;
  kickerMqInlineMarginPreset?: MQ<MarginPresetKeys>;
}

interface HeadingProps {
  headingStylePreset?: MQ<StylePresetKeys>;
  headingMqTypePreset?: MQ<TypePresetKeys>;
  as?: React.ElementType;
}

interface KickerProps {
  kickerStylePreset?: MQ<StylePresetKeys>;
  kickerMqTypePreset?: MQ<TypePresetKeys>;
  kickerMqInlineMarginPreset?: MQ<MarginPresetKeys>;
}

const Headline = styled.section`
  display: block;
`;

const Heading = styled(H1)<HeadingProps>`
  display: inline-block;
  ${getDefaultTypePreset('articleHeadline.heading', 'headingMqTypePreset', {
    withCrop: true,
  })}
  ${getDefaultStylePreset('articleHeadline.heading', 'headingStylePreset')}
`;

const Kicker = styled(Heading)<KickerProps>`
  display: inline-block;
  ${getDefaultTypePreset('articleHeadline.kicker', 'kickerMqTypePreset', {
    withCrop: true,
  })}
  ${getDefaultStylePreset('articleHeadline.kicker', 'kickerStylePreset')}
  ${getDefaultMarginPreset(
    'articleHeadline.kicker',
    'kickerMqInlineMarginPreset',
  )}
  text-transform: uppercase;
`;

export const ArticleHeadline: React.FC<ArticleHeadline> = ({
  children,
  kickerText,
  renderHeadingAs = 'h1',
  renderKickerAs = 'span',
  headingStylePreset,
  kickerStylePreset,
  kickerMqTypePreset,
  headingMqTypePreset,
  kickerMqInlineMarginPreset,
}) =>
  kickerText ? (
    <Headline>
      <Kicker
        as={renderKickerAs}
        kickerStylePreset={kickerStylePreset}
        kickerMqTypePreset={kickerMqTypePreset}
        kickerMqInlineMarginPreset={kickerMqInlineMarginPreset}
      >
        {kickerText}{' '}
      </Kicker>
      <Heading
        as={renderHeadingAs}
        headingStylePreset={headingStylePreset}
        headingMqTypePreset={headingMqTypePreset}
      >
        {children}
      </Heading>
    </Headline>
  ) : (
    <Heading as={renderHeadingAs}>{children}</Heading>
  );
