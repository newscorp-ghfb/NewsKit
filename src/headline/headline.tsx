import React from 'react';
import {
  styled,
  getSpacingInlineHorizontal,
  getStylePreset,
  css,
} from '../utils/style';
import {HeadlineProps, HeadlinePropsWithRenderAs} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {getLogicalPropsAndTypographyPreset} from '../utils/logical-properties';

const HeadlineContainer = styled.section<Pick<HeadlineProps, 'overrides'>>`
  ${getLogicalPropsAndTypographyPreset('headline')}
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

const ThemelessHeadline = React.forwardRef<HTMLElement, HeadlineProps>(
  (
    {
      children,
      kickerText,
      headingAs = 'h1',
      kickerAs = 'span',
      overrides = {},
      ...rest
    },
    ref,
  ) => (
    <HeadlineContainer overrides={overrides} ref={ref} {...rest}>
      {kickerText && (
        <Kicker
          className="nk-headline-kicker"
          as={kickerAs}
          overrides={overrides}
        >
          {kickerText}{' '}
        </Kicker>
      )}
      <Heading
        className="nk-headline-heading"
        as={headingAs}
        overrides={overrides}
      >
        {children}
      </Heading>
    </HeadlineContainer>
  ),
);

export const Headline = withOwnTheme(ThemelessHeadline)({defaults});

Headline.displayName = 'Headline';
