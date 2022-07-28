import * as React from 'react';
import {GridLayout, GridLayoutItem, styled, TextBlock, Visible} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';

const StorybookSpan: React.FC = ({children}) => (
  <TextBlock
    as="span"
    stylePreset="inkContrast"
    typographyPreset="editorialLabel010"
  >
    {children}
  </TextBlock>
);

const GridBox = styled.div`
  padding: 10px;
  border: 1px solid orange;
`;

const Index = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <GridLayout
      columns={{xs: 'repeat(12, 1fr)'}}
      rowGap={{xs: 'space070', md: 'space100'}}
      overrides={{marginBlockEnd: 'space080'}}
    >
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridLayout
          overrides={{marginBlockStart: {xs: 'space070', xl: 'space000'}}}
        >
          <GridLayoutItem column={{xs: `1 / 13`, xl: `1 / 6`}}>
            <GridBox>
              <StorybookSpan>Hero Text</StorybookSpan>
            </GridBox>
          </GridLayoutItem>
          <GridLayoutItem column={{xl: `6 / 13`}}>
            <Visible xl>
              <GridBox>
                <StorybookSpan>Hero Image</StorybookSpan>
              </GridBox>
            </Visible>
          </GridLayoutItem>
        </GridLayout>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Banner</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Explore</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Whats New</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Contribute</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Keep in touch</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
      <GridLayoutItem column={{xs: `2 / 12`}}>
        <GridBox>
          <StorybookSpan>Supported brands</StorybookSpan>
        </GridBox>
      </GridLayoutItem>
    </GridLayout>
  </Layout>
);

export default Index;
