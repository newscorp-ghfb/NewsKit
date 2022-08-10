import * as React from 'react';
import {
  GridLayoutItem,
  TextBlock,
  GridLayout,
  Flow,
  Stack,
  Visible,
} from 'newskit';
import LinkNext from 'next/link';
import HeroGrid from '../../illustrations/landing-page/hero-grid';
import {HeroProps} from './types';
import {
  HeroGridContainer,
  LargeScreenButton,
  SmallScreenButton,
} from './styled';

const DESIGN_BUTTON_PROPS = {
  href: '/getting-started/design/design-overview',
  overrides: {stylePreset: 'buttonSolidPrimary'},
};
const DEVELOPING_BUTTON_PROPS = {
  href: '/getting-started/code/engineering-quickstart',
  overrides: {
    stylePreset: 'buttonOutlinedPrimary',
  },
};

export const Hero = ({themeMode}: HeroProps) => (
  <HeroGridContainer
    paddingBlock={{xs: 'space020', lg: 'space100'}}
    themeMode={themeMode}
    column={{xs: `1 / span 12`}}
  >
    <GridLayout
      columns={{xs: 'repeat(12, minmax(0,1fr))'}}
      overrides={{marginBlock: {xs: 'space070', lg: 'space000'}}}
      alignItems="center"
    >
      <GridLayoutItem
        paddingBlock={{
          xs: 'space000',
          md: 'space100',
          xl: '180px',
        }}
        column={{
          xs: `2 / span 10`,
          sm: `2 / span 8`,
          md: `2 / span 6`,
          xl: `2 / span 4`,
        }}
      >
        <TextBlock
          as="h1"
          stylePreset="inkBase"
          paddingInlineEnd={{
            xs: 'space120',
            sm: 'space100',
          }}
          typographyPreset={{
            xs: 'editorialHeadline070',
            md: 'editorialHeadline080',
            lg: 'editorialDisplay020',
          }}
        >
          Say hello to NewsKit
        </TextBlock>
        <TextBlock
          marginBlockStart={{xs: 'space060', lg: 'space080'}}
          stylePreset="inkBase"
          typographyPreset="editorialSubheadline020"
          paddingInlineEnd={{
            xs: 'space090',
            md: 'space080',
            lg: 'space100',
            xl: 'space080',
          }}
        >
          An open source design system built by News UK, for everyone
        </TextBlock>
        <Stack
          marginBlockStart="space090"
          flow={Flow.HorizontalTop}
          spaceInline="space040"
          height="unset"
        >
          <LinkNext href="/getting-started/design/design-overview" passHref>
            <>
              <SmallScreenButton {...DESIGN_BUTTON_PROPS}>
                Designing
              </SmallScreenButton>
              <LargeScreenButton {...DESIGN_BUTTON_PROPS}>
                Start designing
              </LargeScreenButton>
            </>
          </LinkNext>
          <LinkNext
            href="/getting-started/code/engineering-quickstart"
            passHref
          >
            <>
              <SmallScreenButton {...DEVELOPING_BUTTON_PROPS}>
                Developing
              </SmallScreenButton>
              <LargeScreenButton {...DEVELOPING_BUTTON_PROPS}>
                Start developing
              </LargeScreenButton>
            </>
          </LinkNext>
        </Stack>
      </GridLayoutItem>
      <GridLayoutItem column={{lg: `span 4 / 12`, xl: `span 5 / 12`}}>
        <Visible xl lg>
          <HeroGrid />
        </Visible>
      </GridLayoutItem>
    </GridLayout>
  </HeroGridContainer>
);
