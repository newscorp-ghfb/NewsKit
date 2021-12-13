import React from 'react';
import {
  Block,
  InlineMessage,
  IconFilledInfo,
  Divider,
  newskitLightTheme,
  Grid,
  Cell,
} from 'newskit';
import {LayoutProps} from '../../components/layout';
import {ContentText} from '../../components/text-section';
import {Mono} from '../../components/flags';
import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {
  ComponentPageCell,
  ComponentPageCellCompact,
} from '../../components/layout-cells';
import {CodeFromFile} from '../../components/code';
import {MediaList} from '../../components/media-list';
import {Link} from '../../components/link';
import {
  getIllustrationComponent,
  Illustration,
} from '../../components/illustrations/illustration-loader';
import {
  CommonSection,
  CodeExamplesSection,
} from '../../templates/template-sections';
import {Table} from '../../components/table';
import {getTokenType} from '../../utils/get-token-type';

interface FontAttributesRow {
  tokenName: string;
  tokenValue: Record<string, string>;
}

const fontAttributes = (type: string) =>
  (getTokenType(newskitLightTheme.fonts, type) as FontAttributesRow[]).map(
    ({tokenName, tokenValue}) => ({
      [type]: tokenName,
      token: tokenName,
      value: tokenValue.toString(),
      fontFamily: tokenValue.fontFamily
        ?.split(',')[0]
        .replace('"', '')
        .replace('"', ''),
      classification: tokenValue.fontFamily?.split(',')[1],
    }),
  );

const additionalFontPropertiesRows = [
  {
    property: 'textAlign',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-align sets the horizontal position of text inside of a block',
  },
  {
    property: 'textDecoration',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-decoration sets the visual appearance of decorative lines on text',
  },
  {
    property: 'textOverflow',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-overflow sets how the user is informed of hidden overflow content',
  },
  {
    property: 'textTransform',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'text-transform specifies how elements of text are capitalised. e.g. uppercase, lowercase',
  },
  {
    property: 'whiteSpace',
    example: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'white-space sets how white space is collapsed and whether line are able to wrap at soft-wrap opportunities',
  },
  {
    property: 'wordBreak',
    example: (
      <Block spaceInline="space050">
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"
          target="_blank"
        >
          CSS
        </Link>
      </Block>
    ),
    description:
      'word-break sets whether line breaks appear when the text would otherwise overflow the containing box ',
  },
];

const icon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const featureCardOverrides = {
  title: {
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    typographyPreset: 'editorialParagraph020',
  },
};
const {title, description} = featureCardOverrides;

const PRINCIPLE_CARDS = [
  {
    media: {
      src: 'static/theming/foundations/purposeful-fonts.svg',
      alt: '',
    },
    title: 'Purposeful',
    description:
      'The choice of font families are appropriate for their use e.g. decorative or functional, bold or subtle.',
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/legible.svg',
      alt: '',
    },
    title: 'Legible',
    description: `Font families are legible for screen use across multiple sizes.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
  {
    media: {
      src: 'static/theming/foundations/balanced.svg',
      alt: '',
    },
    title: 'Balanced',
    description: `When using multiple font families, ensure they complement each other.`,
    stylePrefix: 'featureCard',
    overrides: {
      title,
      description,
    },
  },
];

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Fonts | Newskit design system',
      description:
        'Fonts form an important part of the interface, establishing styles for content such as headlines, sub-headlines or paragraphs, as well as more functional styles for items such as labels, tags and messaging.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Fonts',
      hero: {
        illustration: 'foundations/fonts/hero',
      },
      introduction: `Fonts form an important part of the interface, establishing styles for content such as headlines, sub-headlines or paragraphs, as well as more functional styles for items such as labels, tags and messaging.`,
    }}
    featureCard={{
      title: 'Need Help?',
      description: 'Cant find what you are looking for?',
      href: '/about/contact-us/',
    }}
  >
    <CommonSection
      title="Principles"
      id="principles"
      toc="Principles"
      introduction=""
    >
      <MediaList
        layout="3-span"
        cardType="feature"
        cards={PRINCIPLE_CARDS}
        parentCellProps={{md: 10, lg: 10, xl: 8, mdOffset: 1}}
      />
    </CommonSection>
    <CommonSection
      title="Overview"
      id="overview"
      toc="Overview"
      introduction={
        <>
          The NewsKit design system allows brands to define bespoke typography.
          Key characteristics such as font-family, font-weight, letter-spacing,
          line-height and font style are applied in a systematic way when
          creating a theme in Figma and{' '}
          <Link href="/foundations/theming/creating-a-theme/">
            creating a theme in code
          </Link>
          . A combination of the key characteristics are grouped to form{' '}
          <Link href="/foundations/presets/typography-presets">
            typography presets
          </Link>{' '}
          that are applied to text interface elements.
        </>
      }
    >
      <ComponentPageCellCompact>
        <Illustration path="foundations/fonts/overview" />
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Font attributes"
      id="fontattributes"
      toc="Font attributes"
    >
      <ComponentPageCellCompact>
        <ContentText title="Font family">
          Font family defines a set of characters of the same design. These
          characters include letters, numbers, punctuation marks, and symbols in
          various weights. Font families are mapped to design tokens. Font
          family can be applied to any text element using the{' '}
          <Mono>fontFamily</Mono> attribute on a{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Preset.
          </Link>
          <Block spaceStack="space050" />
          <Table
            columns={['Token', 'Font Family', 'Classification']}
            rows={fontAttributes('fontFamily')}
          />
          <Divider />
        </ContentText>
        <Block spaceStack="space050" />
        <InlineMessage
          overrides={{stylePreset: 'inlineMessageInformative'}}
          icon={icon}
          role="region"
          aria-label="fallback-font"
        >
          It is also important to consider a fallback font (web safe font) when
          defining a font family.{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face"
            target="_blank"
          >
            Learn more about web safe fonts.
          </Link>
        </InlineMessage>
        <Block spaceStack="space100" />

        <ContentText title="Font size">
          Font size defines how large the characters are displayed. Font sizes
          are mapped to a scale of design tokens. Font size can be applied to
          any text element using the <Mono>fontSize</Mono> attribute on a{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Preset.
          </Link>
          <Block spaceStack="space050" />
          <Table
            columns={['Font size', 'Token', 'Value']}
            rows={fontAttributes('fontSize')}
          />
          <Divider />
        </ContentText>
        <Block spaceStack="space100" />

        <ContentText title="Font weight">
          Font weight defines the thickness of the character stroke. Font
          weights are mapped to a scale of design tokens. Font weight can be
          applied to any text element using the <Mono>fontWeight</Mono>{' '}
          attribute on a{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Preset.
          </Link>
          <Block spaceStack="space050" />
          <Table
            columns={['Font weight', 'Token', 'Value']}
            rows={fontAttributes('fontWeight')}
          />
          <Divider />
        </ContentText>
        <Block spaceStack="space100" />

        <ContentText title="Font line-height">
          Font line-height defines the vertical space between lines of text and
          are mapped to a scale of design tokens. Font line-height can be
          applied to any text element using the <Mono>fontLineHeight</Mono>{' '}
          attribute on a{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Preset.
          </Link>
          <Block spaceStack="space050" />
          <Table
            columns={['Font line height', 'Token', 'Value']}
            rows={fontAttributes('fontLineHeight')}
          />
          <Divider />
        </ContentText>
        <Block spaceStack="space100" />

        <ContentText title="Font letter-spacing">
          Font letter-spacing defines the horizontal space between each
          character and are mapped to a scale of design tokens. Font
          letter-spacing can be applied to any text element using the{' '}
          <Mono>fontLetterSpacing</Mono> attribute on a{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Preset.
          </Link>
          <Block spaceStack="space050" />
          <Table
            columns={['Font letter spacing', 'Token', 'Value']}
            rows={fontAttributes('fontLetterSpacing')}
          />
          <Divider />
        </ContentText>
        <Block spaceStack="space100" />

        <ContentText title="Additional font properties">
          The following properties can be applied to typography. These can be
          defined as part of the{' '}
          <Link href="/foundations/presets/style-presets/">Style Presets.</Link>{' '}
          Having these properties on Style Presets promotes greater reuse of
          tokens.
        </ContentText>
        <Block spaceStack="space050" />
        <Table
          columns={['Property', 'Example', 'Description']}
          rows={additionalFontPropertiesRows}
        />
        <Divider />
        <Block spaceStack="space070" />
        <CodeFromFile path="examples/fonts/font-properties.tsx" />
        <Block spaceStack="space070" />
        <InlineMessage
          title="Font smooth"
          overrides={{stylePreset: 'inlineMessageInformative'}}
          icon={icon}
          role="region"
          aria-label="typography"
        >
          To ensure typography in components are rendered smooth and crisp
          (rounded to nearest pixel as opposed to the subpixel), apply{' '}
          <Mono>-webkit-font-smoothing: antialiased</Mono>. Emotion’s global
          style component can be used to set this as a default across your
          website.
        </InlineMessage>
      </ComponentPageCellCompact>
    </CommonSection>

    <CommonSection
      title="Accessibility Considerations"
      id="accessibilityconsiderations"
      toc="Accessibility"
      introduction={
        <>
          For accessibility considerations related to typography, please refer
          to the{' '}
          <Link href="/foundations/presets/typography-presets">
            Typography Presets
          </Link>
          .
        </>
      }
    />
    <CommonSection
      title="Text crop"
      id="textcrop"
      toc="Text crop"
      introduction="To reduce ‘pixel-pushing' and to keep consistent and predictable spacing across multiple font families, text-cropping is applied to remove additional space (leading) around text. This utility also helps to maintain a 4px baseline; keeping interfaces ‘pixel-perfect’. "
      hideSeparator
    >
      <ComponentPageCellCompact>
        <ContentText title="The benefits of text cropping">
          Text cropping (sometimes referred to as leading trim) is an important
          aspect when creating accurate layouts, allowing for a true
          representation of spacing and alignment when using{' '}
          <Link href="/components/text-block/">text blocks</Link>.
        </ContentText>
        <Block spaceStack="space090" />
        <ContentText title="Text crop methods">
          Text-cropping works by cropping the bounding box of the text block
          component. The are several methods to crop both &apos;top&apos; and
          &apos;bottom&apos;, by default NewsKit uses a paring of &apos;Cap
          Height&apos; for the &apos;Top&apos; and &apos;Baseline&apos; for
          &apos;Bottom&apos;. This is achieved by configuring negative margins.
        </ContentText>
      </ComponentPageCellCompact>
      <MediaList
        layout="1-span"
        cardsLayout="horizontal"
        cards={[
          {
            title: 'Cap height',
            description:
              'This crops to the top of an uppercase letter in the typeface. An example would be the top of an uppercase T.',
            media: getIllustrationComponent('foundations/fonts/cap-height'),
          },
          {
            title: 'Baseline',
            description:
              'This crops to the baseline of all the lowercase letters in the typeface',
            media: getIllustrationComponent('foundations/fonts/baseline'),
          },
        ]}
      />
    </CommonSection>
    <ComponentPageCell>
      <Block spaceStack="space100" />
    </ComponentPageCell>

    <CodeExamplesSection
      title="Configuring Text-cropping"
      toc="Configuring"
      introduction="Text-cropping can be configured in both the code base and Figma."
      hideSeparator
      example={[
        {
          sections: [
            {
              title: 'Code',
              description: (
                <>
                  Text cropping is set up using font metrics, which allows for
                  the easy generation of the code needed and takes into account
                  the various nuances of each font used.
                  <br />
                  <br />
                  You can generate the code needed using{' '}
                  <Link
                    href="https://seek-oss.github.io/capsize/"
                    target="_blank"
                  >
                    Capsize
                  </Link>{' '}
                  following the 3 easy steps.
                </>
              ),
              codeUrl: 'examples/fonts/configuring-text-cropping.tsx',
            },
          ],
        },
      ]}
    >
      <Block spaceStack="space090" />
      <ContentText title="Design">
        When using a <Link href="/components/text-block/">Text Block</Link> in
        Figma, Text-crop is applied using the Text-crop plugin to crop the
        selected text-block or all text-block components on the page. Learn more
        about{' '}
        <Link
          href="https://www.figma.com/community/plugin/951930713294228024/Text-Crop"
          target="_blank"
        >
          Text-crop
        </Link>{' '}
        Figma plugin.
      </ContentText>
    </CodeExamplesSection>
    <ComponentPageCell>
      <Block spaceStack="space070" />
    </ComponentPageCell>

    <CodeExamplesSection
      title="Applying Text-crop"
      toc="Applying"
      introduction="Text-cropping can be configured in both the code base and Figma."
      hideSeparator
      example={[
        {
          sections: [
            {
              title: 'Code',
              description: (
                <>
                  When using a{' '}
                  <Link href="/components/text-block/">Text Block</Link>{' '}
                  component in code, Text-crop is applied by default and can be
                  removed by supplying a <Mono>noCrop</Mono>
                </>
              ),
              code: `import React from 'react';
import { TextBlock } from 'newskit';

export default () => (
  <TextBlock noCrop>TextBlock Content</TextBlock>
);`,
            },
          ],
        },
        {
          sections: [
            {
              title: 'Design',
              description: (
                <>
                  When using a{' '}
                  <Link href="/components/text-block/">Text Block</Link> in
                  Figma, Text-crop is applied using the Text-crop plugin to crop
                  the selected text-block or all text-block components on the
                  page. Learn more about{' '}
                  <Link href="/components/text-block/">Text-crop</Link> Figma
                </>
              ),
            },
          ],
        },
      ]}
    />
    <ComponentPageCell>
      <Block spaceStack="space070" />
    </ComponentPageCell>

    <CommonSection
      title="Examples"
      id="examples"
      toc="Examples"
      introduction="Below are some examples of using Text-crop:"
    >
      <ComponentPageCellCompact>
        <Grid xsMargin="space000">
          <Cell xs={12} md={6} xl={6}>
            <Block spaceStack="space050">
              <Illustration path="foundations/fonts/buttonnocrop" />
            </Block>
            <ContentText title="Button - before Text-crop">
              Without the ability to crop text, the button text would be
              misaligned when changing font family or font size.
            </ContentText>
          </Cell>
          <Cell xs={12} md={6} xl={6}>
            <Block spaceStack="space050">
              <Illustration path="foundations/fonts/buttoncropped" />
            </Block>
            <ContentText title="Button - after Text-crop">
              With text-cropping applied the button label is consistently
              positioned correctly when changing the font family or font size.
            </ContentText>
          </Cell>
        </Grid>
        <Block spaceStack="space050" />
        <Grid xsMargin="space000">
          <Cell xs={12} md={6} xl={6}>
            <Block spaceStack="space050">
              <Illustration path="foundations/fonts/cardnocrop" />
            </Block>
            <ContentText title="Card - before Text-crop">
              Without the ability to crop text, the layout of the card is
              unnecessarily elongated due to the misaligned spacing around the
              text blocks.
            </ContentText>
          </Cell>
          <Cell xs={12} md={6} xl={6}>
            <Block spaceStack="space050">
              <Illustration path="foundations/fonts/cardcropped" />
            </Block>
            <ContentText title="Card - after Text-crop">
              With text cropping applied, the spacing in the card is aligned
              correctly to the text blocks and the overall size of the card is
              exactly as defined.
            </ContentText>
          </Cell>
        </Grid>
      </ComponentPageCellCompact>
    </CommonSection>
  </FoundationPageTemplate>
);
