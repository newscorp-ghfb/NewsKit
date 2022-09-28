import * as React from 'react';
import {createTheme, newskitLightTheme, ThemeProvider} from '../../theme';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {H6, H5, H4, H3, H2, H1} from '..';
import {TextBlock} from '../../text-block';
import {Grid, Cell} from '../../grid';
import {styled} from '../../utils/style';

const myCustomTheme = createTheme({
  name: 'my-custom-heading-theme',
  overrides: {
    stylePresets: {
      headingCustom: {
        base: {
          color: '{{colors.blue060}}',
        },
      },
    },
  },
});

const title = 'We tell the stories that matter.';

export default {
  title: 'NewsKit Light/typography/heading',
  component: () => 'None',
};

export const StoryHeadingDefault = () => (
  <>
    <StorybookHeading>Heading - default</StorybookHeading>
    <br />
    <H1>Default H1 - {title}</H1>
    <br />
    <H2>Default H2 - {title}</H2>
    <br />
    <H3>Default H3 - {title}</H3>
    <br />
    <H4>Default H4 - {title}</H4>
    <br />
    <H5>Default H5 - {title}</H5>
    <br />
    <H6>Default H6 - {title}</H6>
  </>
);
StoryHeadingDefault.storyName = 'heading-default';

export const StoryCropVsNoCrop = () => (
  <>
    <Grid>
      <Cell xs={6}>
        <StorybookSubHeading>cropped</StorybookSubHeading>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline010"
        >
          editorialHeadline010
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline020"
        >
          editorialHeadline020
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline030"
        >
          editorialHeadline030
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline040"
        >
          editorialHeadline040
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline050"
        >
          editorialHeadline050
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline060"
        >
          editorialHeadline060
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline070"
        >
          editorialHeadline070
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline080"
        >
          editorialHeadline080
        </TextBlock>
      </Cell>
      <Cell xs={6}>
        <StorybookSubHeading>not cropped</StorybookSubHeading>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline010"
          noCrop
        >
          editorialHeadline010
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline020"
          noCrop
        >
          editorialHeadline020
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline030"
          noCrop
        >
          editorialHeadline030
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline040"
          noCrop
        >
          editorialHeadline040
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline050"
          noCrop
        >
          editorialHeadline050
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline060"
          noCrop
        >
          editorialHeadline060
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline070"
          noCrop
        >
          editorialHeadline070
        </TextBlock>
        <TextBlock
          stylePreset="inkContrast"
          typographyPreset="editorialHeadline080"
          noCrop
        >
          editorialHeadline080
        </TextBlock>
      </Cell>
    </Grid>
  </>
);
StoryCropVsNoCrop.storyName = 'crop vs no crop';

export const StoryHeadingOverrides = () => (
  <>
    <StorybookHeading>Heading with overrides</StorybookHeading>
    <ThemeProvider theme={myCustomTheme}>
      <H1
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph010',
        }}
      >
        H1 with override
      </H1>
      <br />
      <H2
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph020',
        }}
      >
        H2 with override
      </H2>
      <br />
      <H3
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph030',
        }}
      >
        H3 with override
      </H3>
      <br />
      <H4
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph010',
        }}
      >
        H4 with override
      </H4>
      <br />
      <H5
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph020',
        }}
      >
        H5 with override
      </H5>
      <br />
      <H6
        overrides={{
          stylePreset: 'headingCustom',
          typographyPreset: 'editorialParagraph030',
        }}
      >
        H6 with override
      </H6>
    </ThemeProvider>
  </>
);
StoryHeadingOverrides.storyName = 'heading-overrides';

export const StoryHeadingLogicalProps = () => {
  const logicalPropsOverrides = {
    marginBlock: 'space030',
    marginInline: 'space050',
    paddingBlock: 'space030',
    paddingInline: 'space050',
  };
  return (
    <>
      <StorybookHeading>Heading with logical props</StorybookHeading>

      <H1 overrides={logicalPropsOverrides}>H1 with logical props</H1>
      <br />
      <H2 overrides={logicalPropsOverrides}>H2 with logical props</H2>
      <br />
      <H3 overrides={logicalPropsOverrides}>H3 with logical props</H3>
      <br />
      <H4 overrides={logicalPropsOverrides}>H4 with logical props</H4>
      <br />
      <H5 overrides={logicalPropsOverrides}>H5 with logical props</H5>
      <br />
      <H6 overrides={logicalPropsOverrides}>H6 with logical props</H6>
    </>
  );
};
StoryHeadingLogicalProps.storyName = 'heading-logical-props';

const FontIconElement = styled(TextBlock)`
  &:before {
    display: inline-block;
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
  }
`;

const FontIcon = ({
  name,
  typographyPreset = 'icon040',
}: {
  name: string;
  typographyPreset?: string;
}) => (
  <FontIconElement
    className={`fa fa-${name}`}
    typographyPreset={typographyPreset}
    as="span"
  />
);

export const StoryHeadingNoCropTheme = () => {
  const overrides = {
    fonts: {
      fontSize010: '0.75rem',
      fontSize020: '0.875rem',
      fontSize030: '1rem',
      fontSize040: '1.125rem',
      fontSize050: '1.25rem',
      fontSize060: '1.375rem',
      fontSize070: '1.5rem',
      fontSize080: '1.75rem',
      fontSize090: '2rem',
      fontSize100: '2.25rem',
      fontSize110: '2.5rem',
      fontSize120: '2.75rem',
      fontSize130: '3rem',
      fontSize140: '3.5rem',
      fontSize150: '4rem',
      fontSize160: '5rem',
      fontFamily010: {
        fontFamily: '"DM Sans", sans-serif',
        fontMetrics: undefined,
      },
      fontFamily020: {
        fontFamily: '"Bitter", serif',
        fontMetrics: undefined,
      },
      fontFamily030: {
        fontFamily: '"Poppins", sans-serif',
        fontMetrics: undefined,
      },
      fontFamilyIcon: {
        fontFamily: '"Font Awesome 5 Free"',
        fontMetrics: undefined,
      },
    },
    typographyPresets: {
      icon010: {
        fontFamily: '{{fonts.fontFamilyIcon.fontFamily}}',
        fontSize: '{{fonts.fontSize010}}',
      },
      icon020: {
        fontFamily: '{{fonts.fontFamilyIcon.fontFamily}}',
        fontSize: '{{fonts.fontSize020}}',
      },
      icon030: {
        fontFamily: '{{fonts.fontFamilyIcon.fontFamily}}',
        fontSize: '{{fonts.fontSize030}}',
      },
      icon040: {
        fontFamily: '{{fonts.fontFamilyIcon.fontFamily}}',
        fontSize: '{{fonts.fontSize040}}',
      },
    },
  };

  const theme = createTheme({
    baseTheme: newskitLightTheme,
    name: 'my-light',
    overrides,
  });

  return (
    <ThemeProvider theme={theme}>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.7.2/css/all.min.css"
      />

      <StorybookHeading>Heading - No Crop Theme</StorybookHeading>
      <br />
      <H1>Default H1 - {title}</H1>
      <br />
      <H2>Default H2 - {title}</H2>
      <br />
      <H3>Default H3 - {title}</H3>
      <br />
      <H4>Default H4 - {title}</H4>
      <br />
      <H5>Default H5 - {title}</H5>
      <br />
      <H6>Default H6 - {title}</H6>

      <hr />

      <FontIcon name="user" />
      <FontIcon name="image" />
      <hr />
      <FontIcon name="balance-scale" typographyPreset="icon040" />
      <FontIcon name="balance-scale" typographyPreset="icon030" />
      <FontIcon name="balance-scale" typographyPreset="icon020" />
      <FontIcon name="balance-scale" typographyPreset="icon010" />
    </ThemeProvider>
  );
};
StoryHeadingNoCropTheme.storyName = 'no-crop-theme';
