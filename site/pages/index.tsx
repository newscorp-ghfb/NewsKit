import * as React from 'react';
import {
  styled,
  H1,
  H2,
  H3,
  Paragraph,
  Grid,
  Cell,
  Image,
  getSizingFromTheme,
  getTypographyPresetFromTheme,
  getColorFromTheme,
} from 'newskit';
import PageTitle from '../components/page-title';
import Layout from '../components/layout';

const MainContent = styled.div`
  margin-bottom: ${getSizingFromTheme('sizing090')};
`;
const StyledH1 = styled(H1)`
  ${getTypographyPresetFromTheme('heading080')}
  color: ${getColorFromTheme('inkContrast')};
  margin-bottom: 8px;
`;
const StyledH2 = styled(H2)`
  color: ${getColorFromTheme('inkContrast')};
  margin-bottom: 16px;
`;
const StyledH3 = styled(H3)`
  ${getTypographyPresetFromTheme('heading010')}
  color: ${getColorFromTheme('inkBase')};
  margin: 20px 0 16px;
`;

const StyledParagraph = styled(Paragraph)`
  color: ${getColorFromTheme('inkSubtle')};
`;

const StyledSmallParagraph = styled(StyledParagraph)`
  ${getTypographyPresetFromTheme('body020')}
`;

const Index: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({toggleTheme, themeMode}) => (
  <React.Fragment>
    <PageTitle title="Homepage" />
    <Layout toggleTheme={toggleTheme} themeMode={themeMode} path="/">
      <Grid xsRowGutter="sizing000" xsMargin="sizing000">
        <Cell xs={12}>
          <MainContent>
            <StyledH1>NewsKit,</StyledH1>
            <StyledH2>News Corp&apos;s design system</StyledH2>
            <StyledParagraph>
              The NewsKit Design provides interactive building blocks and
              guiding principles for creating digital products. There are three
              categories within the NewsKit design system: Foundations,
              Components and Templates.
            </StyledParagraph>
          </MainContent>
        </Cell>
        <Cell xs={12} md={4}>
          <Image
            src="/static/foundations.png"
            alt="foundations image"
            loadingAspectRatio="7:4"
          />
          <StyledH3>Foundations</StyledH3>
          <StyledSmallParagraph>
            Foundations includes a range of styles, variables and code that form
            the core of how the Design System works, including colour,
            typography and spacing.
          </StyledSmallParagraph>
        </Cell>
        <Cell xs={12} md={4}>
          <Image
            src="/static/components.png"
            alt="components image"
            loadingAspectRatio="7:4"
          />
          <StyledH3>Components</StyledH3>
          <StyledSmallParagraph>
            The library of components are the building blocks of our products.
            They are reusable interface patterns from simple buttons to complex
            data tables.
          </StyledSmallParagraph>
        </Cell>
        <Cell xs={12} md={4}>
          <Image
            src="/static/templates.png"
            alt="templates image"
            loadingAspectRatio="7:4"
          />
          <StyledH3>Templates</StyledH3>
          <StyledSmallParagraph>
            Templates document the layout and structure of a section or entire
            page of an interface and how these are arranged and adapt across
            screen sizes or platforms.
          </StyledSmallParagraph>
        </Cell>
      </Grid>
    </Layout>
  </React.Fragment>
);

export default Index;
