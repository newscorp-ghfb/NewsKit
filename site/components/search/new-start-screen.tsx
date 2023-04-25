import React from 'react';
import {Cell, Grid, TextBlock, Stack, toNewsKitIcon} from 'newskit';

import {ChevronRight as FilledChevronRight} from '@emotion-icons/material/ChevronRight';
import {Link} from '../link';

const IconFilledChevronRight = toNewsKitIcon(FilledChevronRight);

const startScreenOptions = [
  {
    category: {
      name: 'Getting started',
    },
    items: [
      {
        name: 'Design overview',
        href: '/getting-started/design/design-overview/',
      },
      {
        name: 'Engineering overview',
        href: '/getting-started/code/engineering-overview/',
      },
      {
        name: 'Instrumentation setup',
        href: '/getting-started/code/instrumentation/',
      },
    ],
  },
  {
    category: {
      name: 'Popular searches',
    },
    items: [
      {name: 'Components', href: '/components/overview/'},
      {name: 'Theme', href: '/theme/overview/'},
      {name: 'Button', href: '/components/button/'},
    ],
  },
  {
    category: {
      name: 'Presets',
    },
    items: [
      {
        name: 'Style presets',
        href: '/theme/presets/style-presets/',
      },
      {name: 'Transition presets', href: '/theme/presets/transition-presets/'},
      {
        name: 'Typography presets',
        href: '/theme/presets/typography-presets/',
      },
    ],
  },
  {
    category: {
      name: 'Foundations',
    },
    items: [
      {name: 'Design tokens', href: '/theme/foundation/design-tokens/'},
      {name: 'Colours', href: '/theme/foundation/colours/'},
      {name: 'Fonts', href: '/theme/foundation/fonts/'},
    ],
  },
];

export const NewStartScreen = () => (
  <div className="DocSearch-NewStartScreen">
    <Grid
      xsMargin="space030"
      smMargin="space030"
      mdMargin="space030"
      lgMargin="space030"
      xlMargin="space030"
    >
      {startScreenOptions.map(({category, items}) => (
        <Cell key={category.name} xs={6}>
          <TextBlock
            marginBlockStart="space010"
            marginBlockEnd="space050"
            stylePreset="inkContrast"
            typographyPreset="utilityHeading010"
          >
            {category.name}
          </TextBlock>
          <Stack
            spaceInline="space045"
            marginBlockStart="space010"
            marginBlockEnd="space080"
          >
            {items.map(({name, href}) => (
              <Link
                type="standalone"
                href={href}
                key={name}
                overrides={{typographyPreset: 'utilityLabel020'}}
              >
                {name}
                <IconFilledChevronRight overrides={{size: 'iconSize010'}} />
              </Link>
            ))}
          </Stack>
        </Cell>
      ))}
    </Grid>
  </div>
);
