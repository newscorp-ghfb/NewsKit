import React from 'react';
import {UnorderedList} from 'newskit*';
import {LayoutProps} from '../../../components/layout';
import {ComponentPageCell} from '../../../components/layout-cells';
import {
  ContentColSpan,
  ContentPrimary,
  ContentSecondary,
  ContentSection,
} from '../../../components/content-structure';
import {FoundationPageTemplate} from '../../../templates/foundation-page-template';
import {Table} from '../../../components/table';
import {IconFilledCircle} from '../../../../src/icons';
import {Code, CodeFromFile} from '../../../components/code';
import {InlineCode} from '../../../components/markdown-elements';
import {Link} from '../../../components/link';
import TextCropCalculator from '../../../components/text-crop-calculator/text-crop-calculator';

const functionProps = [
  {
    name: 'name',
    type: 'string',
    description: 'This is the optional name of your theme.',
  },
  {
    name: 'baseTheme',
    type: 'UncompiledTheme',
    default: 'NewsKit light theme',
    description:
      'This is the theme which your new theme will inherit from - by default this is the NewsKit light theme. You can use the baseTheme functionality to create sub-themes. More information on this can be found below.',
  },
  {
    name: 'overrides',
    type: 'Partial<UncompiledTheme>',
    default: '{}',
    description:
      'This is where you put all your custom theme values to create your theme, e.g. colours, font config, style presets, e.t.c. The overrides object structure matches the theme, think of this as being deep merged over the baseTheme.',
  },
  {
    name: 'checkOverrides',
    type: 'boolean',
    default: 'false',
    description:
      'If true, the theme creator will check your provided overrides against your base theme (or the NewsKit Light default, if not set) for unecessary overriding. For example, if red070 is set to #d20600 in the base theme, and you override red070 to the same #d20600 value, this will trigger a console warning. You can change this logging behaviour using the property below. To maximise performance, it is recommended you do not set this to true in production.',
  },
  {
    name: 'warningLogger',
    type: '(message: string) => void',
    default: 'console.warn',
    description:
      'This logger is only used when checkOverrides is true. When using checkOverrides you can set your own logging behaviour by passing a suitable function. This can be useful if you wish to unit test your theme by passing an error throwing function or mock, for example. There is an example of this below.',
  },
];

const CreatingATheme = (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Creating a theme',
      description:
        'Create your own theme, or use one of the two NewsKit defaults.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Creating and using themes',
      name: 'Creating a theme',
      hero: {
        illustration: 'components/hero-component-defaults-illustration',
      },
      introduction:
        'Create your own theme, or use one of the two NewsKit defaults.',
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
              Themes represent the brand&apos;s identity, controlling the
              appearance of all NewsKit components. They are Javascript objects
              that contain the foundations, presets, and component defaults.
              NewsKit&apos;s theme creator provides sensible defaults so the
              consumer can override as much or as little as they wish. Currently
              the NewsKit component library houses 2 themes:
              <br />
              <br />
              <UnorderedList
                markerAlign="start"
                listItemMarker={IconFilledCircle}
                overrides={{
                  spaceStack: 'space050',
                  content: {
                    typographyPreset: {
                      xs: 'editorialParagraph020',
                      md: 'editorialParagraph030',
                    },
                  },
                }}
              >
                <>NewsKit Light - the default which all themes inherit from.</>
                <>NewsKit Dark - an inverse of the light theme.</>
              </UnorderedList>
              You can switch between these two themes on this documentation site
              by clicking the button in the top right. Details on how to use a
              theme in your project can be found{' '}
              <Link href="/theme/theming/using-a-theme/">here</Link>.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
          showSeparator
        />
      </ContentSection>

      <ContentSection sectionName="create-theme-function">
        <ContentPrimary
          id="create-theme-function"
          toc="createTheme function"
          headline="createTheme Function"
          description={
            <>
              To create a theme you use the <InlineCode>createTheme</InlineCode>{' '}
              function exported from NewsKit.
              <br />
              <br />
              The createTheme function returns an{' '}
              <InlineCode>UncompiledTheme</InlineCode> object which can be
              passed to the <InlineCode>NewsKitProvider</InlineCode> or{' '}
              <InlineCode>ThemeProvider</InlineCode> component. When the
              provider is passed an uncompiled theme object, it will compile it
              automatically. If you wish to pre-compile your theme, you can do
              this by passing your theme to the{' '}
              <InlineCode>compileTheme</InlineCode> function exported from
              NewsKit. It is recommended you let the provider compile your theme
              automatically - you should not need to compile your theme
              yourself. More information on theme compilation is below.
              <br />
              <br />
              <InlineCode>createTheme</InlineCode> takes one argument - an
              object - with the following properties:
              <br />
              <br />
              <Table
                columns={['Name', 'Type', 'Default', 'Description']}
                rows={functionProps}
              />
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="sub-themes">
        <ContentPrimary
          id="sub-themes"
          toc="Sub-themes"
          headline="Sub-themes"
          description={
            <>
              Sub-themes can be used to style sub-brands or sections on a
              website. For example, your website might contain a sports section
              which uses the same theme, except the brand and interface colours
              change from blue to green. Creating sub-themes is simple. You use
              the <InlineCode>createTheme</InlineCode> function as you would
              normally except you also pass a base theme. Your base theme would
              be your main theme (e.g. the one with blue interface colours), and
              the overrides you provide would then change the elements where
              appropriate (e.g. changing those interface colours to green). This
              allows you to take advantage of the existing main theme - keeping
              things consistent - while still maintaining the ability to tweak
              elements for specific branding identities. You can use a sub-theme
              the same as any other regular theme. Sub-themes can even be used
              as base themes if desired - there is no limit to the depth of
              nesting themes and sub-themes.
              <br />
              <br />
              Note that base themes passed to the theme creation function must
              be uncompiled. Passing a compiled theme will result in an error.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="theme-compiling">
        <ContentPrimary
          id="theme-compiling"
          toc="Theme compiling"
          headline="Theme compiling"
          description={
            <>
              Theme compilation is something performed automatically by the
              ThemeProvider. You can optionally compile a theme yourself and
              pass it to the ThemeProvider, but there are limited reasons you
              may want to do this. We recommend letting the ThemeProvider
              automatically compile the theme for you.
              <br />
              <br />
              Theme compilation is an essential part of the theme process as it
              allows the theoretical design level &quot;layers&quot;, e.g.
              colour palettes to foundations to style presets, to be overridden
              and customised as desired. For example, when passing overrides to
              the theme creator to override some colours, you could override a
              palette colour - say <InlineCode>red070</InlineCode> to a new hex
              value. This would change all uses of the{' '}
              <InlineCode>red070</InlineCode> token to your new value, whether
              used by an existing token in NewsKit light, or your own base
              theme. It does not matter in what theme or where it is used in a
              theme, the change would be reflected in all references to that
              token. This is why your overrides should reference tokens using a
              double curly bracket syntax, similar to Mustache templates, like
              so: <InlineCode>{'{{ colors.red070 }}'}</InlineCode>. All tokens
              inside those brackets are looked up at compile time and replaced
              with the final value, in this case a hex colour.
              <br />
              <br />
              Tokens can also be used as object keys as well as values. As well
              as this, multiple tokens can be specified in a single field, this
              is how the spacing presets are created for example -
              <InlineCode>
                {
                  "spaceInsetSquish030: '{{ sizing.sizing030 }} {{ sizing.sizing040 }}'"
                }
              </InlineCode>
              .
              <br />
              <br />
              To make this system as flexible as reasonably possible the
              compilation lookup process is recursive. This is utilised in
              NewsKit for example by a button style preset
              <InlineCode>buttonOutlinedNegative</InlineCode> using{' '}
              <InlineCode>{'{{ colors.inkNegative }}'}</InlineCode> which in
              turn uses <InlineCode>{'{{ colors.red070 }}'}</InlineCode> which
              evaluates to a hex code colour. A recursion depth limit of 5 is in
              place to avoid recursive loops, if a loop should occur an error
              will be logged to console and the values will be set to empty
              strings.
              <br />
              <br />
              As well as recursion protection the compiler will also log
              warnings when you reference tokens which it cannot find. This
              logging behaviour is overridable by passing your own logger
              function to the <InlineCode>errorLogger</InlineCode> property
              inside the options (2nd) argument. One useful reason to do this is
              to unit test your theme. By replacing the logger with an error
              throwing function or mock, you can ensure your theme is valid as
              part of your development lifecycle. There is an example of this
              below.
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="keywords">
        <ContentPrimary
          id="keywords"
          toc="Keywords"
          headline="Keywords"
          description={
            <>
              To allow you to build your theme more effectively, there are a few
              special &quot;keywords&quot; which can be used as keys or values.
              Note that they begin with double (2) underscore characters. The
              functionality of most of these keywords can be written yourself
              using functions if desired, however by using these keywords, you
              are able to perform the functionality while in JSON.
              <br />
              <br />
              Note that the keywords will be removed from the object as they are
              interpreted. You should not expect to see the keywords in a
              compiled theme, for example.
              <br />
              <br />
              Please note as of NewsKit V5, stylePresets are no longer global,
              instead they are under each component. You will need to import the
              component to use the style presets.
              <br />
              <br />
              <Code>{`import { Button } from "newskit"`}</Code>
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />

        <ContentSecondary
          headline="__extends"
          description={
            <>
              This keyword is used as an object key, where the value is set to
              an object path in the theme. This will act like a shallow merge
              and put the values of the object in the token path into the object
              which <InlineCode>__extends</InlineCode> is specified. For
              example, to duplicate the buttonSolidPrimary style preset and
              replace the hover state:
              <br />
              <br />
              <CodeFromFile path="examples/theming/__extends_1.tsx" />
              <br />
              Alternatively, you can also do this:
              <br />
              <br />
              <CodeFromFile path="examples/theming/__extends_1.tsx" />
              <br />
              As well as a single token string, the{' '}
              <InlineCode>__extends</InlineCode> also supports an array of token
              strings. This can be used to merge multiple objects together. The
              order of the array is respected and is the merge order of the
              objects.
            </>
          }
        />

        <ContentSecondary
          headline="__deepExtends"
          description={
            <>
              This keyword is similar to the above{' '}
              <InlineCode>__extends</InlineCode> keyword except it performs a
              deep merge. This is useful when you wish to merge multiple deep
              objects together, for example you might need to combine multiple
              style presets.
              <br />
              <br />
              <Code>
                {JSON.stringify(
                  {
                    __deepExtends: [
                      '{{stylePresets.buttonSolidPrimary}}',
                      '{{stylePresets.inkContrast}}',
                    ],
                  },
                  null,
                  2,
                )}
              </Code>
              <br />
              Note that only the items specified under the{' '}
              <InlineCode>__deepExtends</InlineCode> keyword will be deeply
              merged. In the example above, if you were to specify a `base`
              state with some extra properties, those would overrwrite the
              merged base states of the two style presets specified. Remember to
              specify another extends keyword inside any deep objects you wish
              to change, like below.
              <br />
              <br />
              <Code>
                {JSON.stringify(
                  {
                    __deepExtends: [
                      '{{stylePresets.buttonSolidPrimary}}',
                      '{{stylePresets.inkContrast}}',
                    ],
                    base: {
                      __deepExtends: [
                        '{{stylePresets.buttonSolidPrimary.base}}',
                        '{{stylePresets.inkContrast.base}}',
                      ],
                      borderRadius: '{{borders.borderRadiusRounded010}}',
                    },
                  },
                  null,
                  2,
                )}
              </Code>
            </>
          }
        />

        <ContentSecondary
          headline="__delete"
          description={
            <>
              This keyword is slightly different to the above and is used as a
              value, not a key. When the compiler encounters this value the key
              will be deleted from the object. This can be useful when you wish
              to simply remove a key rather than override it. It can delete
              simple string tokens, e.g. a color in a style preset, as well as
              whole objects such as the cropAdjustments in a typography preset
              or the hover state in a style preset.
              <br />
              <br />
              <Code>
                {JSON.stringify(
                  {
                    __extends: '{{stylePresets.buttonSolidPrimary}}',
                    base: {
                      __extends: '{{stylePresets.buttonSolidPrimary.base}}',
                      borderRadius: '__delete',
                    },
                    hover: '__delete',
                  },
                  null,
                  2,
                )}
              </Code>
            </>
          }
        />

        <ContentSecondary
          headline="__shallow"
          description={
            <>
              This keyword is used as an object key with a value of{' '}
              <InlineCode>true</InlineCode>. When used, it dictates that the
              object it is a key of should be shallow merged rather than deep
              merged. This is useful if you wish to override an entire object
              without having to specify all the keys you wish to delete. For
              example, for a state inside an existing style preset:
              <br />
              <br />
              <Code>
                {JSON.stringify(
                  {
                    tagPrimary: {
                      base: {
                        __shallow: true,
                        backgroundColor: '{{colors.interactivePrimary010}}',
                        color: '{{colors.inkBase}}',
                      },
                    },
                  },
                  null,
                  2,
                )}
              </Code>
              <br />
              This would be equivalent to the following (where the keys using
              the <InlineCode>__delete</InlineCode> keyword exist in the base
              theme):
              <br />
              <br />
              <Code>
                {JSON.stringify(
                  {
                    tagPrimary: {
                      base: {
                        backgroundColor: '{{colors.interactivePrimary010}}',
                        color: '{{colors.inkBase}}',
                        borderStyle: '__delete',
                        borderColor: '__delete',
                        borderWidth: '__delete',
                        iconColor: '__delete',
                        borderRadius: '__delete',
                      },
                    },
                  },
                  null,
                  2,
                )}
              </Code>
              <br />
              The benefit of using the <InlineCode>__shallow</InlineCode>{' '}
              keyword is that should any new keys be added to the base object,
              you do not need to update your theme to delete them. This{' '}
              <InlineCode>__shallow</InlineCode> keyword is unique compared to
              the others as it is functionality of the underlying{' '}
              <InlineCode>deepMerge</InlineCode> function used as part of the
              theme creator. You can use this utility by importing `deepMerge`
              from NewsKit.
            </>
          }
        />
      </ContentSection>

      <ContentSection sectionName="functions-as-theme-values">
        <ContentPrimary
          id="functions-as-theme-values"
          toc="Functions as theme values"
          headline="Functions as theme values"
          description={
            <>
              In certain use cases you may find the need to create a theme value
              by utilising other parts of the theme. This can be done by setting
              the value of a key to a function. This function will be called
              with the uncompiled theme object when it is encountered. Please
              note that the compiler will call the functions as they are found
              and execution order is not guaranteed. The uncompiled theme will
              still contain any other functions or token references (e.g.{' '}
              <InlineCode>{'{{ colors.red070 }}'}</InlineCode> not{' '}
              <InlineCode>#ff0000</InlineCode>).
            </>
          }
          childrenColSpan={ContentColSpan.TEXT}
        />
      </ContentSection>

      <ContentSection sectionName="examples">
        <ContentPrimary
          id="examples"
          toc="Examples"
          headline="Examples"
          description=""
          childrenColSpan={ContentColSpan.TEXT}
        />

        <ContentSecondary
          headline="Changing the blue colour palette"
          description={
            <>
              Shifting all the blue colours used by NewsKit could be done like
              so:
              <br />
              <br />
              <CodeFromFile path="examples/theming/blue-shift.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Adding and updating a colour"
          description={
            <>
              Adding a new red palette colour and updating a reference to it
              could be done like so:
              <br />
              <br />
              <CodeFromFile path="examples/theming/ink-negative-change.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Changing the default border radius"
          description={
            <>
              Changing the default border radius of NewsKit elements, such as
              buttons, to sharp corners could be done like so:
              <br />
              <br />
              <CodeFromFile path="examples/theming/border-radius-change.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Setting custom font cropping config"
          description={
            <>
              For cropping your font you can use Font Metrics, which are the
              measurements of characters in a particular font. This approach is
              precise, easy to implement, and takes into account the fontWeight
              and fontSize of your font.
              <br />
              <br />
              You can calculate font metrics for a font by following these steps
              (based on the{' '}
              <Link href="https://seek-oss.github.io/capsize/" target="_blank">
                Capsize docs
              </Link>
              ):
              <br />
              <br />
              <TextCropCalculator />
              Generally, adding the fontMetrics in your theme for a weight of
              400 is enough for the majority of our users. However, if in your
              case you see the need to use more precise metrics for different
              font weights you can specify them; 400 will be always the
              fallback.
            </>
          }
        />

        <ContentSecondary
          headline="Using a function as a value"
          description={
            <>
              <CodeFromFile path="examples/theming/function-as-a-value.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Adding a style preset"
          description={
            <>
              <CodeFromFile path="examples/theming/adding-style-preset.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Adding a typography preset"
          description={
            <>
              <CodeFromFile path="examples/theming/adding-typography-preset.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Unit testing your theme"
          description={
            <>
              <CodeFromFile path="examples/theming/unit-testing-your-theme.tsx" />
            </>
          }
        />

        <ContentSecondary
          headline="Overriding an icon"
          description={
            <>
              NewsKit comes with{' '}
              <Link href="https://material.io/resources/icons/?style=baseline">
                Material Design&apos;s Icon
              </Link>{' '}
              filled and outline sets included. In some cases, it might be
              desirable to replace the default icon with a user defined one, for
              instance if we want to use our own close icon across the system.
              <br />
              <br />
              Check out the <Link href="/components/icons">Icons page</Link> for
              detailed explanation on how to create custom NewsKit icon.
              <br />
              <br />
              <CodeFromFile path="examples/theming/override-icons.tsx" />
            </>
          }
        />

        <ContentSecondary headline="" description={<></>} />
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);

export default CreatingATheme;
