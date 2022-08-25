import React from 'react';
import {Block, Cell, Image, toNewsKitIcon} from 'newskit';
import {KeyboardArrowLeft as FilledKeyboardArrowLeft} from '@emotion-icons/material/KeyboardArrowLeft';
import {ContentPrimary, ContentSection} from '../components/content-structure';
import Layout, {LayoutProps} from '../components/layout';
import {HeadNextSeo} from '../components/head-next-seo';
import {Link} from '../components/link';

const IconFilledKeyboardArrowLeft = toNewsKitIcon(FilledKeyboardArrowLeft);

const Custom404 = ({path, ...props}: LayoutProps) => (
  <Layout {...props} hideSidebar path={`${path}-new`}>
    <HeadNextSeo
      title="404 page"
      description="Have a question about our design system? 
        The NewsKit team is here to help you."
      image={{
        url: 'social/landing.png',
        alt: '404 page',
      }}
    />
    <Cell xs={12} md={10} mdOffset={1} lg={8} lgOffset={2} xl={6} xlOffset={3}>
      <Block spaceStack={{xs: 'space045', sm: 'space050', md: 'space070'}}>
        <Image
          loadingAspectRatio="16:9"
          alt="404page"
          src="static/placeholder-16x9.png"
        />
      </Block>
      <ContentSection sectionName="page not found">
        <ContentPrimary
          headline="Page not found"
          description={
            <>
              We can&apos;t seem to find what you&apos;re looking for If you
              typed in the website address, please check it and try again.
              <br />
              <br />
              <Link
                data-testid="back-link"
                href="/"
                aria-label="back"
                type="standalone"
              >
                <IconFilledKeyboardArrowLeft
                  overrides={{
                    size: 'iconSize020',
                  }}
                />
                Go back to the homepage
              </Link>
            </>
          }
        />
      </ContentSection>
    </Cell>
  </Layout>
);

export default Custom404;
