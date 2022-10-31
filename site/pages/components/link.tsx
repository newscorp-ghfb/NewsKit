import React from 'react';
import {InlineMessage, toNewsKitIcon, UnorderedList} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {InlineCode} from '../../components/markdown-elements';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {LayoutProps} from '../../components/layout';
import {MetaStatus} from '../../components/meta/types';
import {UsageKind} from '../../components/usage-card';
import {LinkInline} from '../../../src/link';
import {Link} from '../../components/link';
import {IconFilledCircle} from '../../components/icons';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const LinkComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Link',
      description:
        'Links allow users to navigate to a new location or to additional information.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Navigation',
      name: 'Link',
      hero: {
        illustration: 'components/url-illustration',
      },
      introduction:
        'Links allow users to navigate to a new location or to additional information.',
    }}
    componentDefaultsKey="link"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl: 'https://github.com/newscorp-ghfb/newskit/tree/main/src/link',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=324%3A4',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the inline and standalone links, its thier variations, and configuration options.',
      playground: {
        componentName: 'link',
        component: state => <Link href={' '} {...state} />,
        knobs: [
          {
            name: 'content',
            propName: 'children',
            value: 'Some Link',
          },
          {
            name: 'href',
            propName: 'href',
            value: 'http://example.com',
          },
          {
            name: 'eventContext',
            propName: 'eventContext',
            options: [
              {
                label: 'Unset',
                value: undefined,
                isDefault: true,
              },
              {
                label: 'other event data',
                value: 'other event data',
              },
            ],
          },
          {
            name: 'external',
            propName: 'external',
            options: [
              {
                label: 'Unset',
                value: undefined,
                isdefault: true,
              },
              {
                label: 'true',
                value: true,
              },
              {
                label: 'false',
                value: false,
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The link contains one required element and two optional elements.',
      rows: [
        {
          name: 'Link content',
          description: 'The text attributed to the link that provides context',
        },
        {
          name: 'Trailing icon',
          description: 'Icon that can be positioned after (trailing) the link',
          component: ['Icon'],
          optional: true,
        },
        {
          name: 'Leading icon',
          description: 'Icon that can be positioned before (leading) the link',
          component: ['Icon'],
          optional: true,
        },
      ],
      media: getIllustrationComponent('components/link/anatomy'),
    }}
    options={{
      introduction:
        'The link has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Size',
          description:
            'There are three sizes of link: small, medium, and large. The link content, and leading and trailing icons change size.',
          media: getIllustrationComponent(
            'components/link/options/options-size',
          ),
        },
        {
          title: 'Inline and standalone links',
          description: (
            <>
              Links can be either inline (within a paragraph or body text) or
              standalone.
              <br />
              <br />
              The inline link doesn’t have any text cropping applied. It is
              recommended to crop the whole paragraph, where the inline link
              appears.
              <br />
              <br />
              The standalone link has text cropping applied by default.
            </>
          ),
          media: getIllustrationComponent(
            'components/link/options/inline-and-standalone-links',
          ),
        },
        {
          title: 'External link',
          description: (
            <>
              Navigates the user to an external site. Can be inline or
              standalone, indicated with a trailing icon.
              <br />
              <br />
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="External link"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                If the //external// prop is enabled, it automatically checks if
                the passed href is external or internal to the website where the
                link is used. If the href is external, an icon indicating this
                will be rendered after (trailing) the label.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/link/options/external-link',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The link has the following states:',
      layout: '2-span',
      cards: [
        {
          title: 'Base',
          description:
            'The base style of the link before the user has interacted with it.',
          media: getIllustrationComponent('components/link/states/base'),
        },
        {
          title: 'Hover',
          description:
            'The style of the link changes to let the user know the link is interactive.',
          media: getIllustrationComponent('components/link/states/hover'),
        },
        {
          title: 'Focus',
          description:
            'Communicates that the user has highlighted a link, using an input method such as a keyboard or voice.',
          media: getIllustrationComponent('components/link/states/focus'),
        },
        {
          title: 'Active',
          description:
            'The link has an active state. The style of the link changes to visually communicate and provide feedback to the user that the link has been interacted with.',
          media: getIllustrationComponent('components/link/states/active'),
        },
        {
          title: 'Visited',
          description:
            'The style of the link changes to let the user know the link has previously been visited.',
          media: getIllustrationComponent('components/link/states/visited'),
        },
        {
          title: 'Visited hover',
          description:
            'The style of the link changes to let the user know the link has been previously visited and is currently being hovered.',
          media: getIllustrationComponent(
            'components/link/states/visited-hover',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the link component.',
      layout: '2-span',
      cards: [
        {
          description:
            'Use inline links within paragraphs or sentences to link to content on the same page or other pages.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/link/usage/do-01'),
        },
        {
          description:
            'Use standalone links outside of body content, for example within navigational components such as menus, headers, and footers.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/link/usage/do-02'),
        },
        {
          description:
            'Use a trailing icon to indicate the link takes the user to an external site.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/link/usage/do-03'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The link has the following accessibility considerations:
          <br />
          <br />
          <UnorderedList
            markerAlign="start"
            listItemMarker={IconFilledCircle}
            overrides={{
              content: {
                typographyPreset: 'editorialParagraph030',
              },
              marginBlockStart: 'space050',
              marginBlockEnd: 'space090',
            }}
          >
            <>
              Avoid opening links in a new tab or window, as it can be
              disorienting for users and can{' '}
              <Link
                overrides={{
                  marginBlockEnd: 'space050',
                }}
                target="_blank"
                href="https://www.w3.org/TR/WCAG20-TECHS/G200.html"
              >
                cause problems for users who are unable to visually perceive
                that the new tab has opened.
              </Link>
            </>
            <>
              If there is a need for a link to open in a new tab, include the
              words &#39;opens in new tab&#39; within the link text.
            </>
          </UnorderedList>
        </>
      ),
      focusOrder: {
        title: 'Focus Order',
        tableRows: [
          {
            order: 1,
            element: 'Link content',
            role: 'Focusses to the link content',
          },
        ],
      },
      interaction: {
        title: 'Keyboard Interactions',
        tableRows: [
          {
            command: ['Enter'],
            description: 'Activates the link',
          },
        ],
      },
      aria: {
        title: 'WAI-ARIA',
        description: (
          <>
            By default, there is no aria-label set in the link component. The
            text inside the anchor will be read by the screen reader, so it is
            important that links are descriptive. This is so that there is a
            clear expectation about where the link will take the user. If the
            text is not descriptive enough, an{' '}
            <InlineCode>aria-label</InlineCode> will be necessary to understand
            where the link is taking the user to.
          </>
        ),
        tableRows: [
          {
            element: 'label',
            attribute: 'Ctrl',
            value: 'Ctrl',
            description: 'Description',
            userSupplied: true,
          },
        ],
      },
      infoNoticeAria: (
        <>
          <Link href="https://webaim.org/techniques/hypertext/link_text#underlining">
            WCAG 2.0
          </Link>{' '}
          has additional requirements for body text links that are not
          underlined by default.
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Link',
          summary:
            'The link has a range of props that can be used to define an appropriate experience for different use cases.',
          propsRows: [
            {
              name: 'children',
              type: 'string',
              description:
                'The content of the link is passed as the child of the component.',
              required: true,
            },
            {
              name: 'href',
              type: 'string',
              description: (
                <>
                  If provided, the undefined tag component turns into an anchor
                  element. The provided URL or fragment identifier will be
                  loaded when the link is clicked.
                  <br />
                  <br />
                  Note - a link requires a href property to be passed in.
                </>
              ),
              required: true,
            },
            {
              name: 'size',
              type: ['small', 'medium', 'large'],
              default: 'medium',
              description: 'Defines the size of the link.',
            },
            {
              name: 'visited',
              type: 'boolean',
              default: 'false',
              description:
                'If true, renders the undefined link in a visited state.',
            },
            {
              name: 'eventContext',
              type: 'object',
              description:
                "Allows users to add extra event data to a link's click events.",
            },
            {
              name: 'eventOriginator',
              type: 'string',
              default: 'link',
              description:
                "Allows users to add event originator custom name e.g. 'newskit-link'.",
            },
            {
              name: 'external',
              type: 'boolean',
              description: (
                <>
                  If true, renders the &#39;external&#39; icon next to the link
                  body content.
                  <br />
                  <br />
                  Note - when a link renders, it automatically checks if the
                  passed href is external or internal to the website where the
                  link is used. If the href is external, an icon indicating this
                  will be rendered after (trailing) the label.
                </>
              ),
            },
          ],
          overridesRows: [
            {
              attribute: 'inlineLink.stylePreset',
              type: 'MQ<string>',
              default: 'linkInline',
              description:
                'If provided, overrides the stylePresets of the inlineLink.',
            },
            {
              attribute: 'inlineLink.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel020',
              description:
                'If provided, overrides the typographyPreset of the inlineLink.',
            },
            {
              attribute: 'inlineLink.transitionPreset',
              type: 'MQ<string>',
              default: ['fontColorChange', 'iconColorChange'],
              description:
                'If provided, overrides the transitionPresets of the inlineLink.',
            },
            {
              attribute: 'inlineLink.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'If provided overrides the gap between each element in the inlineLink. e.g. icon and text.',
            },
            {
              attribute: 'inlineLink.leadingIcon.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, overrides the size of the inlineLink leading icon.',
            },
            {
              attribute: 'inlineLink.trailingIcon.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, overrides the size of the inlineLink trailing icon.',
            },
            {
              attribute: 'inlineLink.externalIcon.size',
              type: 'MQ<string>',
              default: 'iconSize010',
              description: (
                <>
                  If provided, overrides the size of the external icon, that
                  appears after (trailing) the label of the inlineLink..
                  <br />
                  <br />
                  Note - it is also possible to set the icon size by passing it
                  directly as a <InlineCode>size</InlineCode> prop to the icon.
                  However, by doing this you will override the{' '}
                  <InlineCode>iconSize</InlineCode> passed from overrides.
                </>
              ),
            },
            {
              attribute: 'inlineLink.logicalProps',
              type: 'MQ<string>',
              description: (
                <>
                  Logical props can define either padding or margins, depending
                  on the element &#39;s writing mode, directionality, or text
                  orientation.,
                </>
              ),
            },
            {
              attribute: 'standaloneLink.stylePreset',
              type: 'MQ<string>',
              default: 'linkInline',
              description:
                'If provided, overrides the stylePresets of the standaloneLink.',
            },
            {
              attribute: 'standaloneLink.typographyPreset',
              type: 'MQ<string>',
              default: 'utilityLabel020',
              description:
                'If provided, overrides the typographyPreset of the standaloneLink.',
            },
            {
              attribute: 'standaloneLink.transitionPreset',
              type: 'MQ<string>',
              default: ['fontColorChange', 'iconColorChange'],
              description:
                'If provided, overrides the transitionPresets of the standaloneLink.',
            },
            {
              attribute: 'standaloneLink.spaceInline',
              type: 'MQ<string>',
              default: 'space010',
              description:
                'If provided overrides the gap between each element in the standaloneLink. e.g. icon and text.',
            },
            {
              attribute: 'standaloneLink.leadingIcon.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, overrides the size of the standaloneLink leading icon.',
            },
            {
              attribute: 'standaloneLink.trailing.size',
              type: 'MQ<string>',
              default: 'iconSize020',
              description:
                'If provided, overrides the size of the standaloneLink trailing icon.',
            },
            {
              attribute: 'standaloneLink.externalIcon.size',
              type: 'MQ<string>',
              default: 'iconSize010',
              description: (
                <>
                  If provided, overrides the size of the external icon, that
                  appears after (trailing) the label of the standaloneLink.
                  <br />
                  <br />
                  Note - it is also possible to set the icon size by passing it
                  directly as a <InlineCode>size</InlineCode> prop to the icon.
                  However, by doing this you will override the{' '}
                  <InlineCode>iconSize</InlineCode> passed from overrides.
                </>
              ),
            },
            {
              attribute: 'standaloneLink.logicalProps',
              type: 'MQ<string>',
              description: (
                <>
                  Logical props can define either padding or margins, depending
                  on the element &#39;s writing mode, directionality, or text
                  orientation.
                </>
              ),
            },
          ],
          propsFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="props link info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                Any prop valid on an{' '}
                <LinkInline href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
                  anchor HTML element
                </LinkInline>{' '}
                ,is also valid on the link component.
              </InlineMessage>
            </>
          ),
          overridesFooter: (
            <>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="ovverides link info"
                overrides={{
                  marginBlockStart: 'space030',
                }}
              >
                linkStandalone is a seperately exported component, which does
                not include the underline by default.
              </InlineMessage>
            </>
          ),
        },
      ],
    }}
    related={{
      related: ['Tag', 'Menu', 'Tabs'],
    }}
  />
);

export default LinkComponent;
