import React from 'react';
import {
  styled,
  getTypographyPreset,
  getSpacingInlineHorizontal,
  getStylePreset,
  css,
} from '../utils/style';
import {HeadlineProps, HeadlinePropsWithRenderAs} from './types';

const HeadlineContainer = styled.section<Pick<HeadlineProps, 'overrides'>>`
  ${getTypographyPreset('headline', '', {
    withCrop: true,
  })}
  /* Necessary for a proper section cropping */
  padding: 1px 0px;
`;

const cssReset = css`
  display: inline;
  font: inherit;
  margin: 0;
`;

const Heading = styled.h1<HeadlinePropsWithRenderAs>`
  ${cssReset}
  ${getStylePreset('headline.heading', 'heading')}
`;

const Kicker = styled.span<HeadlinePropsWithRenderAs>`
  ${({as}) => (as !== 'span' ? cssReset : null)}
  ${getStylePreset('headline.kicker', 'kicker')}
  ${getSpacingInlineHorizontal('headline.kicker', 'kicker')};
`;

export const Headline: React.FC<HeadlineProps> = ({
  children,
  kickerText,
  headingAs = 'h1',
  kickerAs = 'span',
  overrides = {},
}) => (
  <HeadlineContainer overrides={overrides}>
    {kickerText && (
      <Kicker as={kickerAs} overrides={overrides}>
        {kickerText}{' '}
      </Kicker>
    )}
    <Heading as={headingAs} overrides={overrides}>
      {children}
    </Heading>
  </HeadlineContainer>
);
