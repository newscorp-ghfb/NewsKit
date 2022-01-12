import React from 'react';
import {Block, P, H3, styled, getColorCssFromTheme} from 'newskit';
import {InlineCode} from '../../components/markdown-elements';
import {LegacyBlock} from '../../components/legacy-block';
import {Illustration} from '../../components/illustrations/illustration-loader';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {CommonSection} from '../../templates/template-sections';
import {Link} from '../../components/link';
import {ComponentPageCellCompact} from '../../components/layout-cells';
import {LayoutProps} from '../../components/layout';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CellWrapper = ({children}: {children: any}) => (
  <ComponentPageCellCompact>{children}</ComponentPageCellCompact>
);

interface TextElementProps {
  colorPreset?: string;
}

const TextElement = styled.span<TextElementProps>`
  ${({colorPreset}) =>
    getColorCssFromTheme('color', colorPreset || 'purple050')}
`;

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
      <>
        <TextElement colorPreset="teal050">{item.property}</TextElement>
        <TextElement>{item.series}</TextElement>, <br />
      </>,
    );
  }
  return <TextElement>{tokens}</TextElement>;
};
export default (layoutProps: LayoutProps) => (
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
        illustration: 'foundations/design-tokens/hero',
      },
      introduction: `Design tokens are the design decisions of the design system — specifically, they are named entities that store visual and functional attributes. They are used in place of hardcoded values (such as hex values for colour or pixel values for spacing) to maintain a scalable and consistent system for UI.`,
    }}
    featureCard={{
      title: 'Iconography',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      href: '/foundations/iconography',
    }}
  >
    <CommonSection
      title="Literal vs contextual tokens"
      id="literal-vs-contextual-tokens"
      toc="Literal vs contextual tokens"
      introduction=""
    >
      <CellWrapper>
        <Block stylePreset="imageRoundedMedium" spaceStack="space080">
          <Illustration path="foundations/design-tokens/design-tokens" />
        </Block>
        <Block spaceStack="space060">
          <H3 overrides={{typographyPreset: 'editorialHeadline030'}}>
            Literal tokens
          </H3>
        </Block>
        <Block spaceStack="space060">
          <P>
            These add a layer of abstraction to hardcoded values. Rather than
            referencing a colour e.g.
            <InlineCode>#5E44E4</InlineCode>, it is ‘tokenised’ to{' '}
            <InlineCode>purple050</InlineCode>. Now, if the hex code needs to be
            changed to a different shade of <InlineCode>purple050</InlineCode>,
            for whatever reason, rather than finding everywhere the hex code is
            used in the code, it can be updated in one place.
          </P>
        </Block>
        <Block spaceStack="space060">
          <H3 overrides={{typographyPreset: 'editorialHeadline030'}}>
            Contextual tokens
          </H3>
        </Block>
        <Block spaceStack="space060">
          <P>
            These add a further layer of abstraction and assign the token to a
            specific purpose. In the example above, the{' '}
            <InlineCode>purple050</InlineCode> token is given context - it
            should be used in typography as the brand colour - and is assigned
            the inkBrand token.
          </P>
        </Block>
        <Block>
          <P>
            Using contextual design tokens allows us to do things like
            customising the way our components look app-wide. When considering
            whether to use a contextual or literal token, consider: would you
            want the value you’re using to change if you changed the theme? If
            yes, use a contextual token.
          </P>
        </Block>
      </CellWrapper>
    </CommonSection>
    <CommonSection
      title="Naming convention"
      id="naming-convention"
      toc="Naming convention"
      introduction=""
    >
      <CellWrapper>
        <Block spaceStack="space060">
          <P>
            To ensure that the tokens are clear to read, flexible and extensible
            NewsKit tokens have a clearly defined naming convention.
          </P>
        </Block>
        <Block spaceStack="space060">
          <P>
            All tokens are written using the camelCase convention
            e.g.lineHeight.
          </P>
        </Block>
        <Block spaceStack="space060">
          <P>
            Where the token maps to a numerical series we suffix numerically
            with three digits and in increments of 10. Tokens follow the naming
            convention: <TextElement>{'{Property}'}</TextElement>
            <TextElement colorPreset="teal050">{'{Series}'}</TextElement>
          </P>
        </Block>
        <Block>
          <P>
            For example: <br />
            <LegacyBlock
              display="flex"
              flexDirection="column"
              height="100%"
              width="100%"
            >
              <InlineCode>
                <TokenStyle />
              </InlineCode>
            </LegacyBlock>
          </P>
        </Block>
      </CellWrapper>
    </CommonSection>
    <CommonSection title="Presets" id="presets" toc="Presets" introduction="">
      <CellWrapper>
        <Block>
          <P>
            Design tokens are grouped into Presets when constructing components.
            This creates a simple way to customise particular aspects of a
            component.{' '}
            <Link href="/foundations/presets/style-presets">
              Read more about Presets
            </Link>
            .
          </P>
        </Block>
      </CellWrapper>
    </CommonSection>
  </FoundationPageTemplate>
);
