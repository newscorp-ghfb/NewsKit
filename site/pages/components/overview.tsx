/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Block, Cell, Grid} from 'newskit';
import {ComponentPageCell} from '../../components/layout-cells';
import {Separator} from '../../components/separator';
import {HeaderImage} from '../../components/illustrations/components/header-image';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import Layout, {LayoutProps} from '../../components/layout';
import {SectionIntroduction} from '../../components/section-introduction';
import {MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index';
import routes from '../../routes';
import {HeadNextSeo} from '../../components/head-next-seo';

const componentCategories: any =
  routes.find(r => r.title === 'Components')?.subNav?.slice(1) || [];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="Components overview"
      description="Components are key building blocks of the NewsKit design system."
      image={{
        url: 'social/components.png',
        alt: 'Components overview',
      }}
    />
    <HeaderIndex title="Components" media={HeaderImage}>
      Components are key building blocks of the NewsKit design system.
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {componentCategories.map(
        ({title, description, subNav}: any, i: number) => (
          <>
            {i === 0 ? (
              <Cell xs={12}>
                <SectionIntroduction
                  title={title}
                  cellProps={{lg: 8, mdOffset: i === 0 ? 1 : undefined}}
                  subHeadingSpaceStack="space000"
                >
                  {description}
                </SectionIntroduction>
              </Cell>
            ) : (
              <Cell xs={12}>
                <SectionIntroduction
                  subHeadingSpaceStack="space080"
                  title={title}
                  cellProps={{lg: 8}}
                >
                  {description}
                </SectionIntroduction>
              </Cell>
            )}
            <ComponentPageCell>
              <MediaList
                cards={subNav.map((comp: any) => ({
                  media: comp.illustration
                    ? getIllustrationComponent(comp.illustration)
                    : {
                        src: comp.media,
                        alt: '',
                      },
                  title: comp.title,
                  href: comp.id,
                  description: comp.description,
                }))}
                gridProps={{xsRowGutter: 'space050'}}
              />
            </ComponentPageCell>
            {i !== componentCategories.length - 1 && (
              <ComponentPageCell>
                <Separator />
              </ComponentPageCell>
            )}
          </>
        ),
      )}
    </Grid>

    <Block spaceStack="space070" />
  </Layout>
);
