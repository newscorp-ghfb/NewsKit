import React from 'react';
import {
  styled,
  getColorCssFromTheme,
  getTypographyPresetFromTheme,
} from 'newskit';
import {InlineCode} from '../../../components/markdown-elements';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {Link} from '../../../components/link';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../../components/content-structure';

interface TextElementProps {
  colorPreset?: string;
}

const TextElement = styled.span<TextElementProps>`
  ${({colorPreset}) =>
    getColorCssFromTheme('color', colorPreset || 'purple050')}

  ${getTypographyPresetFromTheme({
    xs: 'editorialParagraph020',
    md: 'editorialParagraph030',
  })}
`;

TextElement.displayName = 'ColoredTextElement';

const tokenData = [
  {property: 'body', series: '010'},
  {property: 'body', series: '020'},
  {property: 'fontWeight', series: '010'},
  {property: 'fontWeight', series: '020'},
  {property: 'header', series: '010'},
  {property: 'header', series: '020'},
  {property: 'inkBrand', series: '010'},
  {property: 'inkBrand', series: '020'},
];
const TokenStyle: React.FC<TextElementProps> = () => {
  const tokens = [];
  for (let i = 0; i < tokenData.length; i++) {
    const item = tokenData[i];
    tokens.push(
      <React.Fragment key={item.property + item.series}>
        <TextElement>{item.property}</TextElement>
        <TextElement colorPreset="teal050">{item.series}</TextElement>, <br />
      </React.Fragment>,
    );
  }
  return <TextElement>{tokens}</TextElement>;
};

const DesignTokens = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Design tokens',
      description: 'Design tokens',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundation',
      name: 'Design tokens',
      hero: {
        illustration: 'theme/design-tokens/hero',
      },
      introduction: `Design tokens are the design decisions of the design system — specifically, they are named entities that store visual and functional attributes. They are used in place of hardcoded values (such as hex values for colour or pixel values for spacing) to maintain a scalable and consistent system for UI.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="literal-vs-contextual-tokens">
        <ContentPrimary
          id="literal-vs-contextual-tokens"
          toc="Literal vs contextual tokens"
          headline="Literal vs contextual tokens"
        >
          <Illustration
            viewBox="0 0 4911 2192"
            path="theme/design-tokens/design-tokens"
          />
        </ContentPrimary>

        <ContentSecondary
          headline="Literal tokens"
          description={
            <>
              These add a layer of abstraction to hardcoded values. Rather than
              referencing a colour e.g.
              <InlineCode>#5E44E4</InlineCode>, it is ‘tokenised’ to{' '}
              <InlineCode>purple050</InlineCode>. Now, if the hex code needs to
              be changed to a different shade of{' '}
              <InlineCode>purple050</InlineCode>, for whatever reason, rather
              than finding everywhere the hex code is used in the code, it can
              be updated in one place.
            </>
          }
        />

        <ContentSecondary
          headline="Contextual tokens"
          description={
            <>
              These add a further layer of abstraction and assign the token to a
              specific purpose. In the example above, the{' '}
              <InlineCode>purple050</InlineCode> token is given context - it
              should be used in typography as the brand colour - and is assigned
              the inkBrand token.
              <br />
              <br />
              Using contextual design tokens allows us to do things like
              customising the way our components look app-wide. When considering
              whether to use a contextual or literal token, consider: would you
              want the value you’re using to change if you changed the theme? If
              yes, use a contextual token.
            </>
          }
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="naming-convention">
        <ContentPrimary
          id="naming-convention"
          toc="Naming convention"
          headline="Naming convention"
          description={
            <>
              To ensure that the tokens are clear to read, flexible and
              extensible NewsKit tokens have a clearly defined naming
              convention.
              <br />
              <br />
              All tokens are written using the camelCase convention
              e.g.lineHeight.
              <br />
              <br />
              Where the token maps to a numerical series we suffix numerically
              with three digits and in increments of 10. Tokens follow the
              naming convention: <TextElement>{'{Property}'}</TextElement>
              <TextElement colorPreset="teal050">{'{Series}'}</TextElement>
            </>
          }
        />

        <ContentSecondary headline="For example:" showSeparator>
          <TokenStyle />
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="presets">
        <ContentPrimary
          id="presets"
          toc="Presets"
          headline="Presets"
          description={
            <>
              Design tokens are grouped into Presets when constructing
              components. This creates a simple way to customise particular
              aspects of a component.{' '}
              <Link href="/theme/presets/style-presets">
                Read more about Presets
              </Link>
              .
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default DesignTokens;
