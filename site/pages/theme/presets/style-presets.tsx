import React from 'react';
import {InlineMessage, styled, toNewsKitIcon} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {Table} from '../../../components/table';
import {InlineCode} from '../../../components/markdown-elements';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {ComponentPageCell} from '../../../components/layout-cells';
import {LayoutProps} from '../../../components/layout';
import {Illustration} from '../../../components/illustrations/illustration-loader';
import {Link} from '../../../components/link';
import {Code} from '../../../components/code';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
  ContentColSpan,
} from '../../../components/content-structure';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const CSS_PROPS = [
  {
    token: 'backgroundImage',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-image#values"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The background image of an element',
  },
  {
    token: 'backgroundRepeat',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-repeat"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The repeated background image',
  },
  {
    token: 'backgroundPosition',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/background-position"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The starting position of a background image',
  },
  {
    token: 'borderStyle',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/border-style"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The border style of an element',
  },
  {
    token: 'hyphens',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/hyphens"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'The hyphenation of words when text wraps across multiple lines',
  },
  {
    token: 'textAlign',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-align"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The text alignment properties of text elements',
  },
  {
    token: 'textDecoration',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-decoration"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The text decoration properties of text elements',
  },
  {
    token: 'textOverflow',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description:
      'The signaling of overflowed content that is not displayed to the user',
  },
  {
    token: 'textTransform',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-transform"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The capitalisation of text',
  },
  {
    token: 'whiteSpace',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/white-space"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The white space inside an element and how it is handled',
  },
  {
    token: 'wordbreak',
    acceptedValues: (
      <Link
        href="https://developer.mozilla.org/en-US/docs/Web/CSS/word-break"
        target="_blank"
      >
        CSS
      </Link>
    ),
    description: 'The line break and where it appears in text',
  },
  {
    token: 'borderRadius',
    acceptedValues: (
      <Link href="/theme/foundation/borders/">foundations borders</Link>
    ),
    description: 'The border radius (shape) of an element',
  },
  {
    token: 'borderWidth',
    acceptedValues: (
      <Link href="/theme/foundation/borders/">foundations borders</Link>
    ),
    description: 'The border width of an element',
  },
  {
    token: 'backgroundColor',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The background colour of an element',
  },
  {
    token: 'borderColor',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The colour of a border',
  },
  {
    token: 'caretColor',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The colour of a caret (cursor) in a text input',
  },
  {
    token: 'color',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The colour of text. For text, use ink colours',
  },
  {
    token: 'iconColor',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The colour of icons. For icons, use ink colours',
  },
  {
    token: 'placeholderColor',
    acceptedValues: (
      <Link href="/theme/foundation/colours/">foundations colors</Link>
    ),
    description: 'The colour of placeholder text',
  },
  {
    token: 'boxShadow',
    acceptedValues: (
      <Link href="/theme/foundation/shadows/">foundations shadows</Link>
    ),
    description: 'The box shadow to an element',
  },
  {
    token: 'backgroundColor',
    acceptedValues: (
      <Link href="/theme/foundation/overlays/">foundations overlays</Link>
    ),
    description: 'The overlay of an element',
  },
  {
    token: 'opacity',
    acceptedValues: (
      <Link href="/theme/foundation/opacity/">foundations opacity</Link>
    ),
    description: 'The opacity level of an element',
  },
  {
    token: 'linear-gradient',
    acceptedValues: (
      <Link href="/theme/foundation/gradients/">foundations gradient</Link>
    ),
    description: 'The transition between two or more specified colors',
  },
  {
    token: 'outlineColor',
    acceptedValues: <Link href="/theme/outline/">foundations outline</Link>,
    description: 'The colour property of the outline',
  },
  {
    token: 'outlineStyle',
    acceptedValues: (
      <Link href="/theme/foundation/outlines/">foundations outline</Link>
    ),
    description: 'The style property of the outline',
  },
  {
    token: 'outlineWidth',
    acceptedValues: (
      <Link href="/theme/foundation/outlines/">foundations outline</Link>
    ),
    description: 'The style property of the outline',
  },
  {
    token: 'outlineOffset',
    acceptedValues: (
      <Link href="/theme/foundation/outlines/">foundations outline</Link>
    ),
    description: 'The offset property of the outline',
  },
  {
    token: 'safariOutlineOffset',
    acceptedValues: (
      <Link href="/theme/foundation/outlines/">foundations outline</Link>
    ),
    description: 'The offset property of the outline for Safari',
  },
  {
    token: 'safariOutlineStyle',
    acceptedValues: (
      <Link href="/theme/foundation/outlines/">foundations outline</Link>
    ),
    description: 'The style property of the outline for Safari',
  },
];

const ImageWrapper = styled.div`
  width: 100px;
  height: 100px;
`;

const getImage = (url: string) => (
  <ImageWrapper>
    <Illustration viewBox="0 0 1000 1001" path={url} />
  </ImageWrapper>
);

const STYLE_PRESET_STATES = [
  {
    example: getImage('theme/style-presets/base'),
    state: 'base',
    description:
      'The base style and behaviour (baseline CSS) of an element before it has been interacted with by a user',
  },
  {
    example: getImage('theme/style-presets/hover'),
    state: 'hover',
    description:
      'The style and behaviour when a user’s cursor hovers over an interactive element. The cursor shows as a “pointer” and style of an element changes to visually communicate and provide feedback to a user that an element is interactive',
  },
  {
    example: getImage('theme/style-presets/focus'),
    state: 'focus',
    description:
      'Highlights an element to a user that has received focus, by using an input method such as a keyboard or voice',
  },
  {
    example: getImage('theme/style-presets/active'),
    state: 'active',
    description: `When using a mouse, "activation" typically starts when a user presses down a primary mouse button. Sometimes referred to as ‘pressed’`,
  },
  {
    example: getImage('theme/style-presets/hover-active'),
    state: 'hover:active',
    description:
      'The style and behaviour when a user’s cursor hovers over an interactive element and a user presses down a primary mouse button',
  },
  {
    example: getImage('theme/style-presets/valid-hover-active'),
    state: 'valid:hover:active',
    description:
      'The style and behaviour when a user’s cursor hovers over an interactive element in a valid state, and a user presses down a primary mouse button',
  },
  {
    example: getImage('theme/style-presets/invalid-hover-active'),
    state: 'invalid:hover:active',
    description:
      'The style and behaviour when a user’s cursor hovers over an interactive element in an invalid state, and a user presses down a primary mouse button',
  },
  {
    example: getImage('theme/style-presets/visited'),
    state: 'visited',
    description:
      'Visually represents text links a user has already visited, distinguishing them from links that have not been visited',
  },
  {
    example: getImage('theme/style-presets/disabled'),
    state: 'disabled',
    description: `Communicates that an element exists, but is not available to a user in that scenario. It is used to maintain layout consistency and communicate to a user that an element may become available if another condition has been met. When a user hovers over an element in a disabled state, the cursor shows as “not-allowed”`,
  },
  {
    example: getImage('theme/style-presets/checked'),
    state: 'checked',
    description: `The style of a component changes to visually communicate and provide feedback to a user that a component has been checked (e.g. a “checked” checkbox)`,
  },
  {
    example: getImage('theme/style-presets/invalid'),
    state: 'invalid',
    description:
      'Components in an invalid state change style and can display an invalid icon (e.g. when the input information in a form validates unsuccessfully)',
  },
  {
    example: getImage('theme/style-presets/valid'),
    state: 'valid',
    description:
      'Components in an valid state change style and can display an valid icon (e.g. when the input information in a form validates successfully)',
  },
  {
    example: getImage('theme/style-presets/loading'),
    state: 'loading',
    description: `When a component can’t be displayed because it is in a transitional "loading" state (e.g. images that haven't loaded yet)`,
  },
  {
    example: getImage('theme/style-presets/selected'),
    state: 'selected',
    description: `The style of a component changes to visually communicate and provide feedback to a user that a component has been selected (e.g. in a Tab menu, "selected" would be the selected Tab)`,
  },
  {
    example: getImage('theme/style-presets/selected-hover'),
    state: 'selected:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to a user that a component has been selected, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/selected-focus'),
    state: 'selected:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to a user that a component has been selected, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/selected-disabled'),
    state: 'selected:disabled',
    description: `Communicates that an element exists and selected, but is not available to the user in that scenario. It is used to maintain layout consistency and communicate to the user that an element may become available if another condition has been met. When the user hovers over an element in a disabled state, the cursor shows as “not-allowed”`,
  },
  {
    example: getImage('theme/style-presets/selected-valid'),
    state: 'selected:valid',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, and in a selected state',
  },
  {
    example: getImage('theme/style-presets/selected-valid-focus'),
    state: 'selected:valid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, selected, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/selected-invalid'),
    state: 'selected:invalid',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, and in a selected state',
  },
  {
    example: getImage('theme/style-presets/selected-invalid-focus'),
    state: 'selected:invalid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, selected, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/selected-valid-hover'),
    state: 'selected:valid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, selected, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/selected-invalid-hover'),
    state: 'selected:invalid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, selected, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/checked-hover'),
    state: 'checked:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to a user that a component has been checked, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/checked-focus'),
    state: 'checked:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to a user that a component has been checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/checked-disabled'),
    state: 'checked:disabled',
    description: `Communicates that an element exists and checked, but is not available to the user in that scenario. It is used to maintain layout consistency and communicate to the user that an element may become available if another condition has been met. When the user hovers over an element in a disabled state, the cursor shows as “not-allowed”`,
  },
  {
    example: getImage('theme/style-presets/checked-valid'),
    state: 'checked:valid',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, and in a checked state',
  },
  {
    example: getImage('theme/style-presets/checked-valid-hover'),
    state: 'checked:valid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, checked, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/checked-valid-focus'),
    state: 'checked:valid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/checked-invalid'),
    state: 'checked:invalid',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, and in a checked state',
  },
  {
    example: getImage('theme/style-presets/checked-invalid-hover'),
    state: 'checked:invalid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, checked, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/checked-invalid-focus'),
    state: 'checked:invalid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/valid-hover'),
    state: 'valid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/valid-focus'),
    state: 'valid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/invalid-hover'),
    state: 'invalid:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/invalid-focus'),
    state: 'invalid:focus',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/visited-hover'),
    state: 'visited:hover',
    description:
      'Visually represents text links a user has already visited, and in a hover state',
  },
  {
    example: getImage('theme/style-presets/visited-focus'),
    state: 'visited:focus',
    description:
      'Visually represents text links a user has already visited, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/focus'),
    state: 'focus-visible',
    description:
      'Highlights an element to a user that has received focus, by using an input method such as a keyboard or voice. User agent determins if focus should be given to element.',
  },
  {
    example: getImage('theme/style-presets/valid-focus'),
    state: 'valid:focus-visible',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/invalid-focus'),
    state: 'invalid:focus-visible',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/focus-visible-hover'),
    state: 'focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component has focus state and hover state',
  },
  {
    example: getImage('theme/style-presets/valid-focus-visible-hover'),
    state: 'valid:focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid has focus state and hover state',
  },
  {
    example: getImage('theme/style-presets/invalid-focus-visible-hover'),
    state: 'invalid:focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid has focus state and hover state',
  },
  {
    example: getImage('theme/style-presets/checked-focus'),
    state: 'checked:focus-visible',
    description:
      'The style of a component changes to visually communicate and provide feedback to a user that a component has been checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/checked-focus-visible-hover'),
    state: 'checked:focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is checked, focused and in a hover state',
  },
  {
    example: getImage('theme/style-presets/checked-valid-focus'),
    state: 'checked:valid:focus-visible',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is valid, checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/checked-invalid-focus'),
    state: 'checked:invalid:focus-visible',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is invalid, checked, and in a focus state',
  },
  {
    example: getImage('theme/style-presets/checked-valid-focus-visible-hover'),
    state: 'checked:valid:focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is checked, valid, focused and in a hover state',
  },
  {
    example: getImage(
      'theme/style-presets/checked-invalid-focus-visible-hover',
    ),
    state: 'checked:invalid:focus-visible:hover',
    description:
      'The style of a component changes to visually communicate and provide feedback to the user that a component is checked, invalid, focused and in a hover state',
  },
];

const StylePresets = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Style Presets',
      description:
        'A collection of foundational design tokens combined into a preset to define reusable styles for interface elements and their interactive states.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Presets',
      name: 'Style Presets',
      hero: {
        illustration: 'theme/style-presets/hero',
      },
      introduction: `A collection of foundational design tokens combined into a preset to define reusable styles for interface elements and their interactive states.`,
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description={
            <>
              Style Presets define properties such as colour, border-radius and
              text-decoration, across multiple states. For example, one style
              preset can contain the style for all states of a button.
              <br />
              <br />
              In combination with{' '}
              <Link href="/theme/presets/typography-presets/">
                Typography Presets
              </Link>
              , <Link href="/theme/foundation/sizing/">Sizing</Link>, and{' '}
              <Link href="/theme/foundation/spacing/">Spacing</Link>, Style
              Presets provide the visual attributes of a component.
            </>
          }
          showSeparator
        >
          <Illustration
            viewBox="0 0 4911 2888"
            path="theme/style-presets/overview"
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="styleproperties">
        <ContentPrimary
          id="styleproperties"
          toc="Style Properties"
          headline="Style Preset style properties"
          description="Style Presets use a combination of the following styles:"
        >
          <Table
            columns={['Token', 'Accepted Values', 'Description']}
            rows={CSS_PROPS}
          />
        </ContentPrimary>

        <ContentSecondary showSeparator childrenColSpan={ContentColSpan.TEXT}>
          <InlineMessage
            icon={
              <IconFilledInfo
                overrides={{
                  size: 'iconSize020',
                }}
              />
            }
          >
            Careful consideration should be given when choosing CSS values due
            to the impact on the theming system.
          </InlineMessage>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="states">
        <ContentPrimary
          id="states"
          toc="States"
          headline="Style Preset states"
          description="The following states can be applied to Style Presets styles:"
          showSeparator
        >
          <Table
            columns={['Example', 'State', 'Description']}
            rows={STYLE_PRESET_STATES}
          />
        </ContentPrimary>
      </ContentSection>

      <ContentSection sectionName="using">
        <ContentPrimary
          id="using"
          toc="Using"
          headline="Using Style Presets"
          description={
            <>
              Style Presets can be applied to NewsKit components in a number of
              ways,{' '}
              <Link href="/theme/theming/using-a-theme/">
                learn more about using a theme in code
              </Link>{' '}
              to better understand the trade-offs associated with each approach.
              For more advanced use cases, Style Presets can be accessed from
              the theme by calling{' '}
              <Link href="/components/utils/get-defaults/">getStylePreset</Link>{' '}
              or Emotion’s{' '}
              <Link href="/components/utils/emotion/">useTheme hook</Link>.
            </>
          }
        />

        <ContentSecondary
          headline="Code example"
          description={
            <>
              This example demonstrates declaring style presets for the Button
              component. It can be passed to the{' '}
              <InlineCode>createTheme</InlineCode> function:
            </>
          }
          showSeparator
        >
          <Code>
            {`const buttonSolidPrimary: StylePresetStates = {
    base: {
        backgroundColor: '{{colors.interactivePrimary030}}',
        borderRadius: '{{borders.borderRadiusCircle}}',
        color: '{{colors.inkInverse}}',
        iconColor: '{{colors.inkInverse}}',
    },
    hover: {
        backgroundColor: '{{colors.interactivePrimary040}}',
    },
    active: {
        backgroundColor: '{{colors.interactivePrimary050}}',
    },
    disabled: {
        backgroundColor: '{{colors.interactiveDisabled010}}',
        color: '{{colors.inkNonEssential}}',
        iconColor: '{{colors.inkNonEssential}}',
    },
    loading: {
        backgroundColor: '{{colors.interactivePrimary020}}',
        color: '{{colors.inkBrand010}}',
        iconColor: '{{colors.inkBrand010}}',
    },
};`}
          </Code>
        </ContentSecondary>
      </ContentSection>

      <ContentSection sectionName="custom">
        <ContentPrimary
          id="custom"
          toc="Custom"
          headline="Adding custom Style Presets to the theme"
          description={
            <>
              Custom Style Presets can be added to the theme. See the{' '}
              <Link href="/theme/theming/creating-a-theme/">
                Creating Themes
              </Link>{' '}
              guide for more details.
            </>
          }
          showSeparator
        />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default StylePresets;
