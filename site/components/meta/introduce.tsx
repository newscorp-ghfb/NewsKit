import React from 'react';
import {Headline, Stack, Flow} from 'newskit';
import {Link} from '../link';

export const Introduced: React.FC<{
  introduced?: string;
  introducedLink?: string;
}> = ({introduced, introducedLink}) =>
  introduced ? (
    <Stack flow={Flow.VerticalLeft} spaceInline="space050">
      <Headline overrides={{typographyPreset: 'utilityLabel020'}}>
        Introduced
      </Headline>
      <Link
        target="_blank"
        href={introducedLink || '/'}
        overrides={{typographyPreset: 'utilityButton030'}}
      >
        {introduced}
      </Link>
    </Stack>
  ) : null;
