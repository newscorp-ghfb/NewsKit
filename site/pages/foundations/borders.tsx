import React from 'react';
import {
  InlineMessage,
  newskitLightTheme,
  compileTheme,
  Block,
  Divider,
} from 'newskit';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {LayoutProps} from '../../components/layout';
import {Table} from '../../components/table';
import {getTokenType} from '../../utils/get-token-type';
import {Code} from '../../components/code';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {ComponentPageCell} from '../../components/layout-cells';

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
  <ContentSecondary headline=" Code example">
    <Code>{codeExamples[section]}</Code>
  </ContentSecondary>
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
      href: 'foundations/iconography',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="border-radius">
        <ContentPrimary
          id="border-radius"
          toc="Border Radius"
          headline="Border Radius"
          description="Applying a Border Radius to an element rounds its corners. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
          showSeparator
        >
          <Table
            columns={['Border radius', 'Token', 'Token value']}
            rows={borderRows('borderRadius')}
          />
          <Divider />
          <Block spaceStack="space100" />
          <ExampleSection section="borderRadius" />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="border-width">
        <ContentPrimary
          id="border-width"
          toc="Border Width"
          headline="Border Width"
          description="Applying a Border Width to an element defines the width of the element’s border. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
          showSeparator
        >
          <Table
            columns={['Border width', 'Token', 'Token value']}
            rows={borderRows('borderWidth')}
          />
          <Divider />
          <Block spaceStack="space100" />
          <ExampleSection section="borderWidth" />
          <InlineMessage title="Note">
            In addition to the Border Radius and Border Width foundations,
            Border Colour and Border Style can be applied to a UI element using
            the borderColor and borderStyle attribute on a Style Preset.
          </InlineMessage>
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="border-colour">
        <ContentPrimary
          id="border-colour"
          toc="Border Colour"
          headline="Border Colour"
          description="Applying a Border Colour to an element defines the colour of the element's border. Border colour utilises Interface and Interactive colour tokens."
          showSeparator
        >
          <ExampleSection section="borderColor" />
        </ContentPrimary>
      </ContentSection>
      <ContentSection sectionName="border-style">
        <ContentPrimary
          id="border-style"
          toc="Border Style"
          headline="Border Style"
          description="Applying a Border Style to an element defines the style of the element’s border. Border Style utilises the standard CSS Border Style values."
          showSeparator
        >
          <ExampleSection section="borderStyle" />
        </ContentPrimary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);
