/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import {
  Block,
  Cell,
  Grid,
  StructuredList,
  StructuredListCell,
  StructuredListItem,
  TextBlock,
} from 'newskit';
import {ComponentPageCell} from '../../components/layout-cells';
import {Separator} from '../../components/separator';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import Layout, {LayoutProps} from '../../components/layout';
import {SectionIntroduction} from '../../components/section-introduction';
import {MediaList} from '../../components/media-list';
import {HeaderIndex} from '../../components/header-index';
import {routes} from '../../routes';
import {HeadNextSeo} from '../../components/head-next-seo';

const HeaderImage = () => (
  <Illustration path="components/header-image" viewBox="0 0 1572 997" />
);

const componentsSubNav: any[] | undefined = routes.find(
  r => r.title === 'Components',
)?.subNav;
const componentCategories =
  componentsSubNav
    ?.slice(1)
    .filter(e => e.id !== '/utils' && e.id !== '/deprecated') || [];

const utilities = componentsSubNav?.find(e => e.id === '/utils');
const deprecated = componentsSubNav?.find(e => e.id === '/deprecated');

const pageDescription = `Components are key building blocks of the NewsKit design system.`;

const OverviewComponent = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage>
    <HeadNextSeo
      title="Components overview"
      description={pageDescription}
      image={{
        url: 'social/components.png',
        alt: 'Components overview',
      }}
    />
    <HeaderIndex title="Components" media={HeaderImage}>
      {pageDescription}
    </HeaderIndex>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      {componentCategories.map(
        ({title, description, subNav}: any, i: number) => (
          <React.Fragment key={title}>
            {i === 0 ? (
              <Cell xs={12}>
                <SectionIntroduction
                  title={title}
                  cellProps={{lg: 8, mdOffset: i === 0 ? 1 : undefined}}
                  subHeadingSpaceStack="space000"
                >
                  <TextBlock
                    typographyPreset={{
                      xs: 'editorialParagraph020',
                      md: 'editorialParagraph030',
                    }}
                    stylePreset="inkBase"
                  >
                    {description}
                  </TextBlock>
                </SectionIntroduction>
              </Cell>
            ) : (
              <Cell xs={12}>
                <SectionIntroduction
                  subHeadingSpaceStack="space080"
                  title={title}
                  cellProps={{lg: 8}}
                >
                  <TextBlock
                    typographyPreset={{
                      xs: 'editorialParagraph020',
                      md: 'editorialParagraph030',
                    }}
                    stylePreset="inkBase"
                  >
                    {description}
                  </TextBlock>
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
            <ComponentPageCell>
              <Separator />
            </ComponentPageCell>
          </React.Fragment>
        ),
      )}
      <Cell xs={12}>
        <SectionIntroduction
          subHeadingSpaceStack="space080"
          title={utilities.title}
          cellProps={{lg: 8}}
        >
          <TextBlock
            typographyPreset={{
              xs: 'editorialParagraph020',
              md: 'editorialParagraph030',
            }}
            stylePreset="inkBase"
          >
            {utilities.description}
          </TextBlock>
        </SectionIntroduction>
        <ComponentPageCell>
          <Block stylePreset="componentsUtilitiesStructuredList">
            <StructuredList divider>
              {utilities?.subNav?.map(
                (util: {
                  title: string;
                  page: boolean;
                  id: string;
                  description: string;
                }) => (
                  <StructuredListItem
                    key={util.id}
                    href={util.id}
                    ariaLabel={util.title}
                  >
                    <StructuredListCell>
                      <TextBlock
                        stylePreset="inkContrast"
                        typographyPreset="utilityHeading010"
                      >
                        {util.title}
                      </TextBlock>
                      <TextBlock
                        marginBlockStart="space030"
                        stylePreset="inkContrast"
                        typographyPreset="utilityBody020"
                      >
                        {util.description}
                      </TextBlock>
                    </StructuredListCell>
                  </StructuredListItem>
                ),
              )}
            </StructuredList>
          </Block>
        </ComponentPageCell>
      </Cell>
      <ComponentPageCell>
        <Separator />
      </ComponentPageCell>
      <React.Fragment key={deprecated.title}>
        <Cell xs={12}>
          <SectionIntroduction
            subHeadingSpaceStack="space080"
            title={deprecated.title}
            cellProps={{lg: 8}}
          >
            <TextBlock
              typographyPreset={{
                xs: 'editorialParagraph020',
                md: 'editorialParagraph030',
              }}
              stylePreset="inkBase"
            >
              {deprecated.description}
            </TextBlock>
          </SectionIntroduction>
        </Cell>
        <ComponentPageCell>
          <MediaList
            cards={deprecated?.subNav?.map((comp: any) => ({
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
      </React.Fragment>
    </Grid>

    <Block spaceStack="space070" />
  </Layout>
);

export default OverviewComponent;
