import * as React from 'react';
import {GridLayoutItem, TextBlock, GridLayout, Visible, Button} from 'newskit';
import NextLink from 'next/link';
import {Illustration} from '../../illustrations/illustration-loader';
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
              <>
                <Visible xs sm>
                  <NextLink
                    legacyBehavior
                    href={DESIGN_BUTTON_PROPS.href}
                    passHref
                  >
                    <Button {...DESIGN_BUTTON_PROPS}>Designing</Button>
                  </NextLink>
                </Visible>
                <Visible md lg xl>
                  <NextLink
                    legacyBehavior
                    href={DESIGN_BUTTON_PROPS.href}
                    passHref
                  >
                    <Button {...DESIGN_BUTTON_PROPS}>Start designing</Button>
                  </NextLink>
                </Visible>
              </>
            </GridLayoutItem>
            <GridLayoutItem>
              <>
                <Visible xs sm>
                  <NextLink
                    legacyBehavior
                    href={DEVELOPING_BUTTON_PROPS.href}
                    passHref
                  >
                    <Button {...DEVELOPING_BUTTON_PROPS}>Developing</Button>
                  </NextLink>
                </Visible>
                <Visible md lg xl>
                  <NextLink
                    legacyBehavior
                    href={DEVELOPING_BUTTON_PROPS.href}
                    passHref
                  >
                    <Button {...DEVELOPING_BUTTON_PROPS}>
                      Start developing
                    </Button>
                  </NextLink>
                </Visible>
              </>
            </GridLayoutItem>
          </GridLayout>
        </GridLayoutItem>
        <GridLayoutItem>
          <Visible xl lg>
            <HeroInteractiveElements
              themeMode={themeMode}
              toggleTheme={toggleTheme}
            />
            <Illustration viewBox="0 0 686 670" path="landing-page/hero-grid" />
          </Visible>
        </GridLayoutItem>
      </GridLayout>
    </GridLayout>
  </HeroContainer>
);
