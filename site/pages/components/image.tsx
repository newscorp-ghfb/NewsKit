import React from 'react';
import {InlineMessage, toNewsKitIcon, UnorderedList, Image} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {ComponentPageTemplate} from '../../templates/component-page-template/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {IconFilledCircle} from '../../components/icons';
import {InlineCode} from '../../components/markdown-elements';
import {ContentText} from '../../components/text-section/content-text';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const ImageComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof Image>
    headTags={{
      title: 'Image',
      description:
        'Images are a type of visual media. They can appear at fixed sizes, percentages, and aspect ratios.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Media',
      name: 'Image',
      hero: {
        illustration: 'components/image-illustration',
      },
      introduction:
        'Images are a type of visual media. They can appear at fixed sizes, percentages, and aspect ratios.',
    }}
    componentDefaultsKey="Image"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.19.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/image',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/(v4)-NK-Web-Components?node-id=4341%3A145047&t=NntLsFMIL5G5rK8U-0',
      storybookId: 'components-image--story-image-fixed-width-and-height-px',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the image component, its variations, and configuration options.',
      playground: {
        componentName: 'Image',
        component: props => <Image {...props} />,
        knobs: [
          {
            name: 'src',
            propName: 'src',
            value: 'static/placeholder-3x2.png',
          },
          {
            name: 'alt',
            propName: 'alt',
            value: 'Example',
          },
          {
            name: 'width',
            propName: 'width',
            value: '300',
          },
          {
            name: 'height',
            propName: 'height',
            value: '200',
          },
          {
            name: 'Loading Aspect Ratio',
            propName: 'loadingAspectRatio',
            value: '3:2',
          },
          {
            name: 'Placeholder icon',
            propName: 'placeholderIcon',
            options: [
              {
                label: 'Unset',
                value: false,
                isDefault: true,
              },
              {
                label: 'true',
                value: true,
              },
            ],
          },
          {
            name: 'Image Style Preset',
            propName: 'overrides',
            options: [
              {
                label: 'imageSharp',
                value: {
                  stylePreset: 'imageSharp',
                },
                isDefault: true,
              },
              {
                label: 'imageRoundedMedium',
                value: {
                  stylePreset: 'imageRoundedMedium',
                },
              },
              {
                label: 'imageCircle',
                value: {
                  stylePreset: 'imageCircle',
                },
              },
            ],
          },
        ],
      },
    }}
    anatomy={{
      introduction:
        'The image component contains two required elements and two optional elements.',
      rows: [
        {
          name: 'Picture element',
          description: 'HTML <picture> element that contains the image element',
        },
        {
          name: 'Image element',
          description: 'HTML <img> element that embeds an image',
        },
        {
          name: 'Loading container',
          description:
            'Container where the aspect ratio of the image is set when in a loading state',
          optional: true,
        },
        {
          name: 'Icon container',
          description:
            'Placeholder icon container that includes a background and icon',
          component: ['Icons'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/image/anatomy'),
    }}
    options={{
      introduction: 'The image has options for different use cases:',
      cards: [
        {
          title: 'Image dimensions',
          description:
            'The width and height dimensions of an image can be set to fixed sizes or percentages.',
          media: getIllustrationComponent(
            'components/image/options/imagedimensions',
          ),
        },
        {
          title: 'Placeholder icon',
          description:
            'The image has a placeholder icon that can be used to display a custom icon e.g. brand logo.',
          media: getIllustrationComponent(
            'components/image/options/placeholdericon',
          ),
        },
        {
          title: 'Caption',
          description: (
            <>
              A <Link href="/components/caption/">caption</Link> component can
              be added to an image with an optional credit to the image source.
            </>
          ),
          media: getIllustrationComponent('components/image/options/caption'),
        },
      ],
    }}
    states={{
      introduction: 'The image has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description: 'The default style of the image when loaded.',
          media: getIllustrationComponent('components/image/states/base'),
        },
        {
          title: 'Loading',
          description: (
            <>
              Communicates that an image will be shown available when loading is
              complete, indicated with a placeholder icon. This state can be
              skipped when the renderOnServer prop is set to &#39;true&#39;.{' '}
            </>
          ),
          media: getIllustrationComponent('components/image/states/loading'),
        },
      ],
    }}
    behaviors={{
      introduction: 'Here’s how the image behaves:',
      cards: [
        {
          title: 'Loading',
          description:
            "When in a loading state, the loading container of the image can determine the height or width of the image if only one dimension is provided. Image loading can be set to 'lazy' which will wait  until the browser estimates it will be needed. Or 'eager' which will load the image as soon as possible.",
          media: getIllustrationComponent(
            'components/image/behaviours/loading',
          ),
        },
      ],
    }}
    usage={{
      introduction: "Here's how and when to use the image:",
      cards: [
        {
          title: 'Don’t use text in images',
          description:
            'Avoid including text in images, as screen readers will not be able to read the words.',
          kind: UsageKind.DONT,
          media: getIllustrationComponent('components/image/usage/dont-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          <ContentText title="Image alt text" />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
              marginBlockEnd: 'space090',
              spaceStack: 'space060',
            }}
          >
            <>
              Always provide an{' '}
              <Link
                target="_blank"
                href="https://www.w3.org/WAI/tutorials/images/"
              >
                alternative text description
              </Link>{' '}
              that describes the information or function the image represents
              via the alt prop. This will allow screen readers and any other
              assistive technology to understand the image.
            </>
            <>
              This{' '}
              <Link
                href="https://www.w3.org/WAI/tutorials/images/decision-tree/"
                target="_blank"
              >
                alt-decision
              </Link>{' '}
              tree is helpful for determining whether and how to provide
              alternative text.
            </>
            <>
              Alt-text is not usually visible but is read out by screen readers
              or displayed if an image does not load or if images have been
              switched off.
            </>
          </UnorderedList>
        </>
      ),
    }}
    seo={{
      title: 'SEO',
      introduction: 'Ensure placeholder icons have alt text applied.',
    }}
    componentAPI={{
      components: [
        {
          title: 'Image',
          summary:
            'The image has a range of props to define the experience in different use cases.',
          propsRows: [
            {
              name: 'src',
              type: 'string',
              description: (
                <>
                  Image file path that is used directly in the{' '}
                  <InlineCode>src</InlineCode> attribute of the internal HTML
                  img element.
                </>
              ),
            },
            {
              name: 'alt',
              type: 'string',
              description: (
                <>
                  Image description that is used directly in the{' '}
                  <InlineCode>alt</InlineCode> attribute of the internal HTML
                  img element.
                </>
              ),
            },
            {
              name: 'loadingAspectRatio',
              type: 'MQ<string>',
              description: (
                <>
                  This is a string interpolation of the aspect ratio of the
                  loading container of the image.
                  <br />
                  <br />
                  This is also used to determine the height or width of the
                  image if only one dimension is provided.
                </>
              ),
            },
            {
              name: 'placeholderIcon',
              type: 'boolean',
              default: 'false',
              description:
                'If true, displays the placeholder icon whilst the image is in a loading state.',
            },
            {
              name: 'renderOnServer',
              type: 'boolean',
              description:
                'If true, the image component is rendered on the server without client-side javascript, and the loading state can be skipped.',
            },
            {
              name: 'sources',
              type: 'ImageSource[]',
              description: (
                <>
                  Utilises underlying HTML picture element and generates source
                  elements from the provided array of{' '}
                  <InlineCode>ImageSource</InlineCode>.
                  <br />
                  <br />
                  It is also possible to use breakpoint key{' '}
                  <InlineCode>xs | sm | md | lg | xl</InlineCode> as{' '}
                  <InlineCode>media</InlineCode> instead of passing media query.
                  <br />
                  <br />
                  For more detailed information how it works refer to the{' '}
                  <Link
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/picture"
                  >
                    picture element documentation from MDN.
                  </Link>
                </>
              ),
            },
            {
              name: 'loading',
              type: "'lazy' | 'eager'[]",
              description: (
                <>
                  Specifies how the browser loads the image.
                  <br />
                  <br />
                  <InlineCode>eager</InlineCode> will load the imageas soon as
                  possible.
                  <br />
                  <br />
                  <InlineCode>lazy</InlineCode> will wait until the browser
                  estimates it will be needed.
                  <br />
                  <br />
                  For more detailed information on this property refer to the{' '}
                  <Link
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/loading"
                  >
                    HTMLImageElement documentation from MDN.
                  </Link>
                </>
              ),
            },
            {
              name: 'fit',
              type: 'ObjectFitProperty',
              description: (
                <>
                  Specifies how the image will be resized to fit the container.
                  <br />
                  <br />
                  For more detailed information on this property refer to the{' '}
                  <Link
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit"
                  >
                    object-fit documentation from MDN.
                  </Link>
                </>
              ),
            },
            {
              name: 'position',
              type: 'ObjectPositionProperty',
              description: (
                <>
                  Specifies the position of the image within its container.
                  <br />
                  <br />
                  For more detailed information on this property refer to the{' '}
                  <Link
                    target="_blank"
                    href="https://developer.mozilla.org/en-US/docs/Web/CSS/object-position"
                  >
                    object-position documentation from MDN.
                  </Link>
                </>
              ),
            },
          ],
          overridesSummary:
            'The image has a range of predefined elements and attributes that can be overridden to define its appearance.',
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              description: (
                <>
                  If provided, this overrides the style preset applied to the
                  image.
                </>
              ),
            },
            {
              attribute: 'width',
              type: 'MQ<string>',
              default: '100%',
              description: (
                <>
                  Used in combination with <InlineCode>height</InlineCode> to
                  calculate the aspect ratio for the image.
                  <br />
                  <br />
                  Generally supply the width px value if known, if not supply
                  horizontal aspect ratio.
                </>
              ),
            },
            {
              attribute: 'height',
              type: 'MQ<string>',
              default: 'auto',
              description: (
                <>
                  Used in combination with <InlineCode>width</InlineCode> to
                  calculate the aspect ratio for the image.
                  <br />
                  <br />
                  Generally supply the height px value if known, if not supply
                  vertical aspect ratio.
                </>
              ),
            },
            {
              attribute: 'maxWidth',
              type: 'MQ<string>',
              description:
                'This property sets the maximum width of the image. It prevents the used value of the width property from becoming larger than the value specified by maxWidth.',
            },
            {
              attribute: 'maxHeight',
              type: 'MQ<string>',
              description:
                'This property sets the maximum height of the image. It prevents the used value of the height property from becoming larger than the value specified for maxHeight.',
            },
            {
              attribute: 'placeholderIcon',
              type: 'Override<NewsKitIcon>',
              description:
                'If provided, this overrides the default placeholder icon.',
            },
            ...logicalPaddingOverrideProps,
            ...logicalMarginOverrideProps,
          ],
          overridesFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Image"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                It is not recommended to have both height and width values
                expressed as percentages. Both width and aspectRatio should be
                supplied in a consistent manner.
              </InlineMessage>
            </>
          ),
        },
      ],
    }}
    related={{
      related: ['Icons'],
    }}
  />
);

export default ImageComponent;
