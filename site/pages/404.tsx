import React from 'react';
import {Block, IconFilledKeyboardArrowLeft, Image} from 'newskit';
import {ContentPrimary, ContentSection} from '../components/content-structure';
import {ComponentPageCell} from '../components/layout-cells';
import Layout, {LayoutProps} from '../components/layout';
import {HeadNextSeo} from '../components/head-next-seo';
import {Link} from '../components/link';

const Custom404 = ({path, ...props}: LayoutProps) => (
  <Layout {...props} path={`${path}-new`}>
    <HeadNextSeo
      title="404 page"
      description="Have a question about our design system? 
        The NewsKit team is here to help you."
      image={{
        url: 'social/landing.png',
        alt: '404 page',
      }}
    />
    <ComponentPageCell>
      <Block
        stylePreset="blockRoundedMedium"
        spaceStack={{xs: 'space040', sm: 'space050', md: 'space070'}}
      >
        <Image
          loadingAspectRatio="16:9"
          alt="404page"
          src="static/placeholder-16x9.png"
        />
      </Block>
      <ContentSection sectionName="page not found">
        <ContentPrimary
          headline="Page not found"
          description=" We can't seem to find what you're looking for. If you typed in the website address, please check it and try again."
        />
        <Link
          data-test-id="back-link"
          href="/"
          aria-label="back"
          type="standalone"
        >
          <IconFilledKeyboardArrowLeft
            overrides={{
              size: 'iconSize020',
            }}
          />
          Back to ...
        </Link>
      </ContentSection>
    </ComponentPageCell>
  </Layout>
);

export default Custom404;
