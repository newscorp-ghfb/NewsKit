import React from 'react';
import {Link, Headline, Stack, Flow} from 'newskit';

export const Introduced: React.FC<{introduced?: string}> = ({introduced}) =>
  introduced ? (
    <Stack flow={Flow.VerticalLeft} spaceInline="space045">
      <Headline overrides={{typographyPreset: 'utilityLabel010'}}>
        Introduced
      </Headline>
      <Link href="/" overrides={{typographyPreset: 'utilityButton030'}}>
        {introduced}
      </Link>
    </Stack>
  ) : null;
