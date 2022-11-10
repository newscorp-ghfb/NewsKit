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
      introduction: `Design tokens are NewsKit’s design decisions. They maintain a scalable and consistent experience for users.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="literal-vs-contextual-tokens">
        <ContentPrimary
          headline="Overview"
          description={
            <>
              Design tokens are named entities that store visual and functional
              information. They take the place of hardcoded values, such as hex
              values for colour or pixel values for spacing.
            </>
          }
          showSeparator
        />

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
              Literal tokens add a layer of abstraction to hardcoded values.
              Rather than reference a colour directly (e.g.
              <InlineCode>#5E44E4</InlineCode>) you can ‘tokenise’ it to{' '}
              <InlineCode>purple050</InlineCode>.
              <br />
              <br />
              Now, if you need to change the shade of purple, rather than
              finding everywhere you’ve used the hex code, you can update it all
              in one place by changing the value of{' '}
              <InlineCode>purple050</InlineCode>.
            </>
          }
        />

        <ContentSecondary
          headline="Contextual tokens"
          description={
            <>
              Contextual tokens add a further layer of abstraction and assign
              the token a specific purpose. In the example above, you can give{' '}
              <InlineCode>purple050</InlineCode> token context - say, it should
              be used in typography as the brand colour - by assigning it the
              inkBrand token.
              <br />
              <br />
              Contextual tokens let you do things like customise the way
              components look product-wide. When deciding between a contextual
              or literal token, consider: would you want the value you’re using
              to change if you changed the theme? If yes, use a contextual
              token.
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
              Tokens follow a camelCase naming convention (e.g. lineHeight) to
              ensure they’re clear, flexible and extensible.
              <br />
              <br />
              Where the token maps to a numerical series, three digits (in
              increments of 10) are added as a suffix. Tokens follow the naming
              convention: <TextElement>{'{Property}'}</TextElement>
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
              When constructing components, you can group design tokens into{' '}
              <Link href="/theme/presets/style-presets">presets</Link>. This
              creates a simple way to customise particular aspects of a
              component.
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default DesignTokens;
