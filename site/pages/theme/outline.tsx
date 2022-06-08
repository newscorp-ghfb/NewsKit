import React from 'react';
import {newskitLightTheme, compileTheme, InlineMessage} from 'newskit';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {Table} from '../../components/table';
import {ComponentPageCell} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';
import {getTokenType} from '../../utils/get-token-type';
import {Link} from '../../components/link';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../components/content-structure';
import {Code} from '../../components/code';

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);
const outlineRows = (type: string) =>
  getTokenType(compiledNewskitLightTheme.outline, type).map(
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
  outlineColor: `outlineColor: '{{outline.outlineColorDefault}}'`,
  outlineStyle: `outlineStyle: '{{outline.outlineStyleDefault}}'`,
  outlineWidth: `outlineWidth: '{{outline.outlineWidthDefault}}'`,
  outlineOffset: `outlineOffset: '{{outline.outlineOffsetDefault}}'`,
  safariOutlineStyle: `safariOutlineStyle: '{{outline.safariOutlineStyleDefault}}'`,
  safariOutlineOffset: `safariOutlineOffset: '-7px'`,
};

interface ExampleSectionProps {
  section: string;
  showSeparator?: boolean;
}

const ExampleSection: React.FC<ExampleSectionProps> = ({
  section,
  showSeparator,
}) => (
  <ContentSecondary headline="Code example" showSeparator={showSeparator}>
    <Code>{codeExamples[section]}</Code>
  </ContentSecondary>
);

const Outline = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Outline',
      description:
        'Outlines provide visual cues about the focus or active states of elements.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Outline',
      hero: {
        illustration: 'theme/hero-borders-illustration',
      },
      introduction: `Outlines provide visual cues about the focus or active states of elements.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description="The NewsKit design system provides a consistent default outline on elements using the following properties."
        />
      </ContentSection>

      <ContentSection sectionName="outline-color">
        <ContentPrimary
          id="outline-color"
          toc="Outline Colour"
          headline="Outline Colour"
          description="Applying a Outline Colour to an element defines the colour of the element's outline. Outline colour utilises Interface and Interactive colour tokens."
        />
        <ExampleSection section="outlineColor" showSeparator />
      </ContentSection>

      <ContentSection sectionName="outline-style">
        <ContentPrimary
          id="outline-style"
          toc="Outline Style"
          headline="Outline Style"
          description="Applying a Outline Style to an element defines the style of the element’s outline. Outline Style utilises the standard CSS outline Style values."
        >
          <Table
            columns={['Outline Style', 'Token', 'Token value']}
            rows={outlineRows('outlineStyle')}
          />
        </ContentPrimary>

        <ExampleSection section="outlineStyle" />

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT} showSeparator>
          <InlineMessage title="Note">
            Safari&apos;s implemetation of outline CSS is signifacatly different
            to other main browsers. The solid style with not have rounded
            corners, while using auto will without control over its colour. See
            Safari Outline Style.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="outline-width">
        <ContentPrimary
          id="outline-width"
          toc="Outline Width"
          headline="Outline Width"
          description="Applying a Outline Width to an element defines the width of the element’s outline. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
        >
          <Table
            columns={['Outline Width', 'Token', 'Token value']}
            rows={outlineRows('outlineWidth')}
          />
        </ContentPrimary>

        <ExampleSection section="outlineWidth" />

        <ContentSecondary
          description={
            <>
              If you wish to move away from the default provided, we recommend
              using <Link href="/theme/borders/">border</Link> tokens
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="outline-offset">
        <ContentPrimary
          id="outline-offset"
          toc="Outline Offset"
          headline="Outline Offset"
          description="Applying a Outline Offset to an element defines the offset of the element’s outline. NewsKit uses a simple set of design token to ensure consistency throughout the UI."
        >
          <Table
            columns={['Outline Offset', 'Token', 'Token value']}
            rows={outlineRows('outlineOffset')}
          />
        </ContentPrimary>

        <ExampleSection section="outlineOffset" />

        <ContentSecondary
          description={
            <>
              If you wish to move away from the default provided, we recommend
              using <Link href="/theme/borders/">border</Link> tokens
            </>
          }
        />

        <ContentSecondary childrenColSpan={ContentColSpan.TEXT} showSeparator>
          <InlineMessage title="Note">
            Safari&apos;s implemetation of outline CSS is signifacatly different
            to other main browsers. You may find your offset is not the same on
            Safari. See Safari Outline Style.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="safari-outline-style">
        <ContentPrimary
          id="safari-outline-style"
          toc="Safari Outline Style"
          headline="Safari Outline Style"
          description="Add a different Outline Style for Safari"
        >
          <Table
            columns={['Safari Outline Style', 'Token', 'Token value']}
            rows={outlineRows('safariOutlineStyle')}
          />
        </ContentPrimary>

        <ExampleSection section="safariOutlineStyle" showSeparator />
      </ContentSection>

      <ContentSection sectionName="safari-outline-offset">
        <ContentPrimary
          id="safari-outline-offset"
          toc="Safari Outline Offset"
          headline="Safari Outline Offset"
          description="Add a different Outline Offset for Safari"
        >
          <Table
            columns={['Safari Outline Offset', 'Token', 'Token value']}
            rows={outlineRows('safariOutlineOffset')}
          />
        </ContentPrimary>

        <ExampleSection section="safariOutlineOffset" showSeparator />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default Outline;
