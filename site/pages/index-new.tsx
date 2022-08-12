import * as React from 'react';
import {GridLayout, styled, TextBlock} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';
import {Hero} from '../components/homepage';
import {GridLayoutProps} from '../../src/grid-layout/types';

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

const GRID_SECTION_OVERRIDES: GridLayoutProps['overrides'] = {
  maxWidth: '1150px',
  marginInline: 'auto',
  width: '100%',
  paddingInline: {
    xs: 'space050',
    sm: 'space070',
    md: 'space100',
    lg: 'space080',
  },
};

const Index = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage hideSidebar path="/index-new">
    <GridLayout
      rowGap={{xs: 'space070', md: 'space100'}}
      overrides={{marginBlockEnd: 'space080'}}
    >
      <Hero contentContainerOverrides={GRID_SECTION_OVERRIDES} />
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Banner</Placeholder>
        </GridBox>
      </GridLayout>
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Explore</Placeholder>
        </GridBox>
      </GridLayout>
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Whats New</Placeholder>
        </GridBox>
      </GridLayout>
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Contribute</Placeholder>
        </GridBox>
      </GridLayout>
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Keep in touch</Placeholder>
        </GridBox>
      </GridLayout>
      <GridLayout overrides={GRID_SECTION_OVERRIDES}>
        <GridBox>
          <Placeholder>Supported brands</Placeholder>
        </GridBox>
      </GridLayout>
    </GridLayout>
  </Layout>
);

export default Index;
