import React from 'react';
import {
  Cell,
  getColorCssFromTheme,
  getMediaQueryFromTheme,
  getSizingCssFromTheme,
  Grid,
  styled,
} from 'newskit';
import {SectionIntroduction} from '../components/section-introduction';
import {FeatureCard} from '../components/feature-card';
import Layout, {LayoutProps} from '../components/layout';

const FindOutMoreSectionContainer = styled.section`
  ${getColorCssFromTheme('background-color', 'interface020')}
  ${getMediaQueryFromTheme('md')} {
    background-image: url(/static/landing/landing-waves.svg);
    background-repeat: no-repeat;
    background-position: left 60%;
  }

  ${getSizingCssFromTheme('padding-top', {xs: 'sizing090', lg: `sizing100`})};
  ${getSizingCssFromTheme('padding-bottom', {
    xs: 'sizing050',
    md: 'sizing080',
    lg: `sizing100`,
    xl: `sizing090`,
  })};
`;

const FindOutMoreLandingSection = (layoutProps: LayoutProps) => (
  <Layout {...layoutProps} newPage path="index-new-3">
    <FindOutMoreSectionContainer>
      <Grid>
        <SectionIntroduction
          title="Find out more"
          cellProps={{mdOffset: 0, md: 12, lg: 12, xl: 10, xlOffset: 1}}
        >
          Subheading about the explore section to go here
        </SectionIntroduction>
        <Cell xs={12} xl={10} xlOffset={1}>
          <FeatureCard
            title="What's new?"
            description="The latest additions to the Newskit system"
            stylePrefix="whatsnewCard"
            layout="horizontal"
            buttonLabel="Read more"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5} xlOffset={1}>
          <FeatureCard
            title="Roadmap"
            description="Take a look at the team's focus over the coming months. This is updated regularly as our priorities change over time."
            stylePrefix="roadmapCard"
            layout="vertical"
            buttonLabel="Read more"
          />
        </Cell>
        <Cell xs={12} md={6} xl={5}>
          <FeatureCard
            title="Contribute"
            description="Lorem ipsum dolor sit amet, consectetur"
            stylePrefix="contributeCard"
            layout="vertical"
            buttonLabel="Read more"
          />
        </Cell>
      </Grid>
    </FindOutMoreSectionContainer>
  </Layout>
);

export default FindOutMoreLandingSection;
