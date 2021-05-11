/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {Grid} from 'newskit';
import {HeaderImage} from '../../components/illustrations/components/header-image';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import Layout, {LayoutProps} from '../../components/layout';
import {SectionIntroduction} from '../../components/section-introduction';
import {Separator} from '../../components/separator';
import {MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index';
import {ComponentPageCell} from '../../components/layout-cells';
import routes from '../../routes.json';

const componentCategories: any =
  routes.find(r => r.title === 'Components')?.subNav || [];

export default (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeaderIndex title="Components" media={HeaderImage}>
      Components are key building blocks of the NewsKit design system.
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {componentCategories.map(({title, description, subNav}: any) => (
        <>
          <SectionIntroduction title={title} cellProps={{lg: 8}}>
            {description}
          </SectionIntroduction>
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
            parentCellProps={{lg: 10}}
            gridProps={{xsRowGutter: 'space050'}}
          />
          <ComponentPageCell>
            <Separator />
          </ComponentPageCell>
        </>
      ))}
    </Grid>
  </Layout>
);
