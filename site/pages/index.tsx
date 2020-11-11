import * as React from 'react';
import {H1, H2, H3, Paragraph, Grid, Cell, Image, Block} from 'newskit';
import PageTitle from '../components/page-title';
import Layout from '../components/layout';

const Index: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({toggleTheme, themeMode}) => (
  <React.Fragment>
    <PageTitle title="Homepage" />
    <Layout toggleTheme={toggleTheme} themeMode={themeMode} path="/">
      <Grid xsRowGutter="sizing000" xsMargin="sizing000">
        <Cell xs={12}>
          <Block spaceStack="space070">
            <Block spaceStack="space040">
              <H1 overrides={{typographyPreset: 'utilityHeading050'}}>
                NewsKit,
              </H1>
            </Block>
            <Block spaceStack="space060">
              <H2 overrides={{typographyPreset: 'utilitySubheading040'}}>
                News Corp&apos;s design system
              </H2>
            </Block>
            <Paragraph
              overrides={{
                stylePreset: 'inkSubtle',
                typographyPreset: 'utilityBody020',
              }}
            >
              The NewsKit Design provides interactive building blocks and
              guiding principles for creating digital products. There are three
              categories within the NewsKit design system: Foundations,
              Components and Templates.
            </Paragraph>
          </Block>
        </Cell>
        <Cell xs={12} md={4}>
          <Block spaceStack="space045">
            <Image
              src="/static/foundations.png"
              alt="foundations image"
              loadingAspectRatio="7:4"
            />
          </Block>
          <Block spaceStack="space040">
            <H3
              overrides={{
                stylePreset: 'inkBase',
                typographyPreset: 'utilitySubheading020',
              }}
            >
              Foundations
            </H3>
          </Block>
          <Paragraph
            overrides={{
              stylePreset: 'inkSubtle',
              typographyPreset: 'utilityBody020',
            }}
          >
            Foundations includes a range of styles, variables and code that form
            the core of how the Design System works, including colour,
            typography and spacing.
          </Paragraph>
        </Cell>
        <Cell xs={12} md={4}>
          <Block spaceStack="space045">
            <Image
              src="/static/components.png"
              alt="components image"
              loadingAspectRatio="7:4"
            />
          </Block>
          <Block spaceStack="space040">
            <H3
              overrides={{
                stylePreset: 'inkBase',
                typographyPreset: 'utilitySubheading020',
              }}
            >
              Components
            </H3>
          </Block>
          <Paragraph
            overrides={{
              stylePreset: 'inkSubtle',
              typographyPreset: 'utilityBody020',
            }}
          >
            The library of components are the building blocks of our products.
            They are reusable interface patterns from simple buttons to complex
            data tables.
          </Paragraph>
        </Cell>
        <Cell xs={12} md={4}>
          <Block spaceStack="space045">
            <Image
              src="/static/templates.png"
              alt="templates image"
              loadingAspectRatio="7:4"
            />
          </Block>
          <Block spaceStack="space040">
            <H3
              overrides={{
                stylePreset: 'inkBase',
                typographyPreset: 'utilitySubheading020',
              }}
            >
              Templates
            </H3>
          </Block>
          <Paragraph
            overrides={{
              stylePreset: 'inkSubtle',
              typographyPreset: 'utilityBody020',
            }}
          >
            Templates document the layout and structure of a section or entire
            page of an interface and how these are arranged and adapt across
            screen sizes or platforms.
          </Paragraph>
        </Cell>
      </Grid>
    </Layout>
  </React.Fragment>
);

export default Index;
