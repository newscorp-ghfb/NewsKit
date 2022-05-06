import React from 'react';
import {Headline, Stack, Flow, TextBlock} from 'newskit';
import {Link} from '../link';

const ncuNewskitRepoLink = `https://github.com/newscorp-ghfb/ncu-newskit/releases/tag/`;
const newskitRepoLink = `https://github.com/newscorp-ghfb/newskit/releases/tag/`;

export const Introduced: React.FC<{
  introduced?: string;
  introducedLink?: boolean;
}> = ({introduced, introducedLink}) =>
  introduced ? (
    <Stack flow={Flow.VerticalLeft} spaceInline="space050">
      <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
        Introduced
      </Headline>
      {introducedLink ? (
        <Link
          target="_blank"
          href={`${
            introduced >= 'v5.0.0' ? newskitRepoLink : ncuNewskitRepoLink
          }${introduced}`}
          overrides={{typographyPreset: 'utilityButton030'}}
        >
          {introduced}
        </Link>
      ) : (
        <TextBlock
          typographyPreset="utilityButton030"
          stylePreset="inkBrand010"
        >
          {introduced}
        </TextBlock>
      )}
    </Stack>
  ) : null;
