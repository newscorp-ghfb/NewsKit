import * as React from 'react';
import {GridLayoutItem, TextBlock, GridLayout, Visible, Button} from 'newskit';
import LinkNext from 'next/link';
import HeroGrid from '../../illustrations/landing-page/hero-grid';
import {HeroProps} from './types';
import {HeroContainer} from './styled';
import HeroInteractiveElements from './hero-interactive-elements';

const DESIGN_BUTTON_PROPS = {
  href: '/getting-started/design/design-overview',
  overrides: {stylePreset: 'buttonSolidPrimary'},
};
const DEVELOPING_BUTTON_PROPS = {
  href: '/getting-started/code/engineering-quickstart',
  overrides: {stylePreset: 'buttonOutlinedPrimary'},
};

export const Hero = ({
  themeMode,
  toggleTheme,
  contentContainerOverrides,
}: HeroProps) => (
  <HeroContainer
    paddingBlock={{xs: 'space020', lg: 'space100'}}
    marginBlockStart="-12px"
  >
    <GridLayout overrides={contentContainerOverrides}>
      <GridLayout
        columns="1fr minmax(min-content, 530px)"
        overrides={{marginBlock: {xs: 'space070', lg: 'space000'}}}
        alignItems="center"
      >
        <GridLayoutItem
          paddingBlock={{
            xs: 'space000',
            md: 'space110',
          }}
          column={{
            xs: `1 / span 2`,
            lg: `1 / span 1`,
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
          <GridLayout
            justifyContent="start"
            columns="repeat(2, auto)"
            columnGap="space030"
            overrides={{
              marginBlockStart: 'space090',
            }}
          >
            <GridLayoutItem>
              <LinkNext href="/getting-started/design/design-overview" passHref>
                <>
                  <Visible xs sm>
                    <Button {...DESIGN_BUTTON_PROPS}>Designing</Button>
                  </Visible>
                  <Visible md lg xl>
                    <Button {...DESIGN_BUTTON_PROPS}>Start designing</Button>
                  </Visible>
                </>
              </LinkNext>
            </GridLayoutItem>
            <GridLayoutItem>
              <LinkNext
                href="/getting-started/code/engineering-quickstart"
                passHref
              >
                <>
                  <Visible xs sm>
                    <Button {...DEVELOPING_BUTTON_PROPS}>Developing</Button>
                  </Visible>
                  <Visible md lg xl>
                    <Button {...DEVELOPING_BUTTON_PROPS}>
                      Start developing
                    </Button>
                  </Visible>
                </>
              </LinkNext>
            </GridLayoutItem>
          </GridLayout>
        </GridLayoutItem>
        <GridLayoutItem>
          <Visible xl lg>
            <HeroInteractiveElements
              themeMode={themeMode}
              toggleTheme={toggleTheme}
            />
            <HeroGrid />
          </Visible>
        </GridLayoutItem>
      </GridLayout>
    </GridLayout>
  </HeroContainer>
);
