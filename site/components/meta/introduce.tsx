import React from 'react';
import {Headline, Stack, Flow} from 'newskit';
import {Link} from '../link';

const introductionLink = `https://github.com/newscorp-ghfb/ncu-newskit/releases/tag/`;

export const Introduced: React.FC<{
  introduced?: string;
}> = ({introduced}) =>
  introduced ? (
    <Stack flow={Flow.VerticalLeft} spaceInline="space050">
      <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
        Introduced
      </Headline>
      <Link
        target="_blank"
        href={introductionLink + introduced}
        overrides={{typographyPreset: 'utilityButton030'}}
      >
        {introduced}
      </Link>
    </Stack>
  ) : null;
