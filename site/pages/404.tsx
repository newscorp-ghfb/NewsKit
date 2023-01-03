import React from 'react';
import {
  Button,
  GridLayout,
  GridLayoutItem,
  Hidden,
  TextBlock,
  toNewsKitIcon,
} from 'newskit';
import {KeyboardArrowLeft as FilledKeyboardArrowLeft} from '@emotion-icons/material/KeyboardArrowLeft';
import Layout, {LayoutProps} from '../components/layout';
import {HeadNextSeo} from '../components/head-next-seo';
import {HeroContainer} from '../components/homepage/hero/styled';
import {Illustration} from '../components/illustrations/illustration-loader';

const IconFilledKeyboardArrowLeft = toNewsKitIcon(FilledKeyboardArrowLeft);

const Custom404 = ({path, ...layoutProps}: LayoutProps) => (
  <Layout {...layoutProps} newPage hideFooter hideSidebar path={`${path}-new`}>
    <HeadNextSeo
      title="404 page"
      description="Have a question about our design system?
        The NewsKit team is here to help you."
      image={{
        url: 'social/landing.png',
        alt: '404 page',
      }}
    />

    <HeroContainer>
      <GridLayout
        overrides={{
          maxWidth: '1150px',
          marginInline: 'auto',
          width: '100%',
          paddingInline: {
            xs: 'space050',
            sm: 'space070',
            md: 'space100',
            lg: 'space080',
          },
        }}
      >
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
                xs: 'space100',
              }}
              typographyPreset={{
                xs: 'editorialHeadline070',
                md: 'editorialHeadline080',
                lg: 'editorialDisplay020',
              }}
            >
              Page not found
            </TextBlock>
            <TextBlock
              marginBlockStart={{xs: 'space060', lg: 'space080'}}
              stylePreset="inkBase"
              typographyPreset="editorialSubheadline020"
              marginInlineEnd={{
                xs: 'space020',
                md: 'space120',
                lg: 'space000',
              }}
              paddingInlineEnd={{
                xs: 'space090',
                md: 'space100',
                lg: 'space100',
              }}
            >
              We can&apos;t seem to find what you&apos;re looking for. If you
              typed in the website address, please check it and try again.
            </TextBlock>
            <Button
              overrides={{marginBlockStart: 'space080'}}
              href="/"
              data-testid="back-link"
            >
              <IconFilledKeyboardArrowLeft /> Back to the homepage
            </Button>
          </GridLayoutItem>
          <Hidden xs sm md>
            <GridLayoutItem>
              <Illustration viewBox="0 0 590 879" path="404-hero" />
            </GridLayoutItem>
          </Hidden>
        </GridLayout>
      </GridLayout>
    </HeroContainer>
  </Layout>
);

export default Custom404;
