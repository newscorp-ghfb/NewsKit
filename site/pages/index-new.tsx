import * as React from 'react';
import {GridLayout, GridLayoutItem, styled, TextBlock} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';
import {GridLayoutItemProps} from '../../src/grid-layout/types';
import {Hero} from '../components/homepage';

const Placeholder: React.FC = ({children}) => (
  <TextBlock
    as="span"
    stylePreset="inkContrast"
    typographyPreset="editorialLabel010"
  >
    {children}
  </TextBlock>
);

// Placeholder box
const GridBox = styled.div`
  padding: 10px;
  border: 1px solid orange;
`;

const fullGridColumns: GridLayoutItemProps = {
  column: {xs: `2 / span 10`},
};

const Index = (layoutProps: LayoutProps) => {
  const {themeMode} = layoutProps;
  return (
    <Layout {...layoutProps} newPage hideSidebar path="/index-new">
      <GridLayout
        columns={{xs: 'repeat(12, minmax(0,1fr))'}}
        rowGap={{xs: 'space070', md: 'space100'}}
        overrides={{marginBlockEnd: 'space080'}}
      >
        <Hero themeMode={themeMode} />
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Banner</Placeholder>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Explore</Placeholder>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Whats New</Placeholder>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Contribute</Placeholder>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Keep in touch</Placeholder>
          </GridBox>
        </GridLayoutItem>
        <GridLayoutItem {...fullGridColumns}>
          <GridBox>
            <Placeholder>Supported brands</Placeholder>
          </GridBox>
        </GridLayoutItem>
      </GridLayout>
    </Layout>
  );
};

export default Index;
