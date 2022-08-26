import React from 'react';
import {Headline, Stack, TextBlock} from 'newskit';
import {Link} from '../link';

const newskitRepoLink = `https://github.com/newscorp-ghfb/newskit/releases/tag/`;

export const Introduced: React.FC<{
  introduced?: string;
  introducedLink?: boolean;
}> = ({introduced, introducedLink}) =>
  introduced ? (
    <Stack flow="vertical-left" spaceInline="space050">
      <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
        Introduced
      </Headline>
      {introducedLink && introduced >= 'v5.0.0' ? (
        <Link
          target="_blank"
          href={`${newskitRepoLink}${introduced}`}
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
