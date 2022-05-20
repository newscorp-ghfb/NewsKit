import React from 'react';
import {
  styled,
  getTypographyPreset,
  getSpacingInlineHorizontal,
  getStylePreset,
  css,
} from '../utils/style';
import {HeadlineProps, HeadlinePropsWithRenderAs} from './types';
import defaults from './defaults';
import {withOwnTheme} from '../utils/with-own-theme';
import {logicalPadding, logicalMargins} from '../utils/logical-properties';
import {deepMerge} from '../utils';

const HeadlineContainer = styled.section<Pick<HeadlineProps, 'overrides'>>`
  ${props => {
    const padding = logicalPadding(props, 'headline');
    const margins = logicalMargins(props, 'headline');
    const typographyPreset = getTypographyPreset('headline', '', {
      // Only apply the crop padding if there are no padding overrides.
      withCrop: !Object.keys(padding).length,
    })(props);
    return deepMerge(margins, padding, typographyPreset);
  }}
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

const ThemelessHeadline: React.FC<HeadlineProps> = ({
  children,
  kickerText,
  headingAs = 'h1',
  kickerAs = 'span',
  overrides = {},
}) => (
  <HeadlineContainer overrides={overrides}>
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
);

export const Headline = withOwnTheme(ThemelessHeadline)({defaults});

Headline.displayName = 'Headline';
