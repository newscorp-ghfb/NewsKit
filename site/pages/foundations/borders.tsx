import React from 'react';
import {
  InlineMessage,
  newskitLightTheme,
  compileTheme,
  H3,
  Block,
} from 'newskit';

import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {CommonSection} from '../../templates/template-sections/common-section';
import {LayoutProps} from '../../components/layout';
import {ComponentPageCellCompact} from '../../components/layout-cells';
import {Table} from '../../components/table';
import {getTokenType} from '../../utils/get-token-type';
import {Code} from '../../components/code';

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);
const borderRows = (type: string) =>
  getTokenType(compiledNewskitLightTheme.borders, type).map(
    ({tokenName, tokenValue}) => ({
      [type]: tokenName,
      token: tokenName,
      tokenValue: tokenValue as string,
    }),
  );

type CodeExampleType = {
  [key: string]: string;
};

const codeExamples: CodeExampleType = {
  borderRadius: `borderRadius: '{{borders.borderRadiusDefault}}'`,
  borderWidth: `borderWidth: '{{borders.borderWidth000}} {{borders.borderWidth000}} {{borders.borderWidth010}} {{borders.borderWidth000}}'`,
  borderColor: `borderColor: '{{colors.interactivePrimary030}}'`,
  borderStyle: `borderStyle: 'solid'`,
};

interface ExampleSectionProps {
  section: string;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({section}) => (
  <>
    <Block spaceStack={{xs: 'space050', md: 'space060'}}>
      <H3
        overrides={{
          stylePreset: 'inkContrast',
          typographyPreset: {
            xs: 'editorialHeadline020',
            md: 'editorialHeadline030',
          },
        }}
      >
        Code example
      </H3>
    </Block>
    <Code>{codeExamples[section]}</Code>
  </>
);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CellWrapper = ({children}: {children: any}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
);

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Borders | Newskit design system',
      description:
        'Borders direct attention, identify components, communicate state, and express a brand.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Borders',
      hero: {
        illustration: 'foundations/hero-borders-illustration',
      },
      introduction: `Borders direct attention, identify components, communicate state, and express a brand.`,
    }}
    featureCard={{
      title: 'Iconography',
      description:
        'Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.',
      href: '/foundations/iconography',
    }}
  >
    <CommonSection
      title="Border Radius"
      introduction="Applying a Border Radius to an element rounds its corners. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
      id="border-radius"
      toc="Border Radius"
    >
      <CellWrapper>
        <Table
          columns={['Border radius', 'Token', 'Token value']}
          rows={borderRows('borderRadius')}
        />
        <Block spaceStack="space060" />
        <ExampleSection section="borderRadius" />
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Border Width"
      introduction="Applying a Border Width to an element defines the width of the element’s border. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
      id="border-width"
      toc="Border Width"
    >
      <CellWrapper>
        <Table
          columns={['Border width', 'Token', 'Token value']}
          rows={borderRows('borderWidth')}
        />
        <Block spaceStack="space080" />
        <ExampleSection section="borderWidth" />
        <Block spaceStack="space080" />
        <InlineMessage title="Note">
          In addition to the Border Radius and Border Width foundations, Border
          Colour and Border Style can be applied to a UI element using the
          borderColor and borderStyle attribute on a Style Preset.
        </InlineMessage>
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Border Colour"
      introduction="Applying a Border Colour to an element defines the colour of the element's border. Border colour utilises Interface and Interactive colour tokens."
      id="border-colour"
      toc="Border Colour"
    >
      <CellWrapper>
        <ExampleSection section="borderColor" />
      </CellWrapper>
    </CommonSection>

    <CommonSection
      title="Border Style"
      introduction="Applying a Border Style to an element defines the style of the element’s border. Border Style utilises the standard CSS Border Style values."
      id="border-style"
      toc="Border Style"
    >
      <CellWrapper>
        <ExampleSection section="borderStyle" />
      </CellWrapper>
    </CommonSection>
  </FoundationPageTemplate>
);
