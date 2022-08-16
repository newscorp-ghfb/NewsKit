import * as React from 'react';
import {GridLayout, styled, TextBlock} from 'newskit';
import Layout, {LayoutProps} from '../components/layout';
import {
  Hero,
  KeepInTouch,
  SupportedBrands,
  Explore,
} from '../components/homepage';
import {GridLayoutProps} from '../../src/grid-layout/types';
import {FeatureCard} from '../components/feature-card';

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

const Index = (layoutProps: LayoutProps) => {
  // The World Design Systems Week 2022 banner should hide automatically after the event which is on 19-23 September 2022
  const eventDateEnd = new Date('2022-09-24');
  const showEventBanner = new Date() < eventDateEnd;

  return (
    <Layout {...layoutProps} newPage hideSidebar path="/index-new">
      <GridLayout
        rowGap={{xs: 'space070', md: 'space100'}}
        overrides={{marginBlockEnd: 'space080'}}
      >
        <Hero contentContainerOverrides={GRID_SECTION_OVERRIDES} />
        {showEventBanner && (
          <GridLayout overrides={GRID_SECTION_OVERRIDES}>
            <FeatureCard
              title="World Design Systems Week 2022"
              description="19-23 September 2022"
              stylePrefix="worlddesignsystemsweekCard"
              href="https://www.designsystemsweek.com/"
              layout="horizontal"
              buttonLabel="Read more"
              buttonHref="https://www.designsystemsweek.com/"
              buttonLogicalProps={{paddingInline: 'space000'}}
            />
          </GridLayout>
        )}
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <Explore />
        </GridLayout>
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <GridBox>
            <Placeholder>Whats New</Placeholder>
          </GridBox>
        </GridLayout>
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <FeatureCard
            title="Contribute"
            description="Join the community and help grow NewsKit for everyone."
            stylePrefix="contributeCard"
            href="/about/contribute"
            layout="horizontal"
            buttonLabel="Start contributing"
            buttonHref="/about/contribute"
            buttonLogicalProps={{paddingInline: 'space000'}}
          />
        </GridLayout>
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <KeepInTouch />
        </GridLayout>
        <GridLayout overrides={GRID_SECTION_OVERRIDES}>
          <SupportedBrands />
        </GridLayout>
      </GridLayout>
    </Layout>
  );
};

export default Index;
