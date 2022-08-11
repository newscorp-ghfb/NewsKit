import * as React from 'react';
import {GridLayout, styled, TextBlock} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';
import {Hero} from '../components/homepage';
import {StyledGridLayoutItem} from '../components/homepage/hero/styled';

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

const Index = (layoutProps: LayoutProps) => {
  const {themeMode} = layoutProps;
  return (
    <Layout {...layoutProps} newPage hideSidebar path="/index-new">
      <GridLayout
        rowGap={{xs: 'space070', md: 'space100'}}
        overrides={{marginBlockEnd: 'space080'}}
      >
        <Hero themeMode={themeMode} />
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Banner</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Explore</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Whats New</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Contribute</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Keep in touch</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
        <StyledGridLayoutItem>
          <GridBox>
            <Placeholder>Supported brands</Placeholder>
          </GridBox>
        </StyledGridLayoutItem>
      </GridLayout>
    </Layout>
  );
};

export default Index;
