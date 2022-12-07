import React from 'react';
import {InlineMessage, toNewsKitIcon, Block} from 'newskit';
import {Info as FilledInfo} from '@emotion-icons/material/Info';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {MetaStatus} from '../../components/meta/types';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {InlineCode} from '../../components/markdown-elements';
import {ContentText} from '../../components/text-section';

const IconFilledInfo = toNewsKitIcon(FilledInfo);

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const commonPropsRows = [
  {
    name: 'name',
    type: 'string',
    description:
      'If provided, defines name of the input element, used when submitting an HTML form.',
  },
  {
    name: 'size',
    type: ['small', 'medium', 'large'],
    default: 'medium',
    description: 'Defines the size of the character count.',
  },
  {
    name: 'maxLength',
    type: 'text',
    description: (
      <>
        Defines the maximum number of characters the user can enter into the
        input field, that is represented with the character count.
        <br />
        <br />
        This must be an integer value 0 or higher, and must also be greater than
        or equal to the value of <InlineCode>minLength</InlineCode>.
        <br />
        <br />
        If no <InlineCode>maxLength</InlineCode> is specified, the input field
        with the character count has no maximum length set.
        <br />
        <br />
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation"
          target="_blank"
        >
          Refer to MDN for more information on constraint validation.
        </Link>
      </>
    ),
  },
  {
    name: 'minLength',
    type: 'text',
    description: (
      <>
        Defines the minimum number of characters the user can enter into the
        entry field, that is represented with the character count.
        <br />
        <br />
        This must be an non-negative integer value smaller than or equal to the
        value specified by <InlineCode>maxLength</InlineCode>.
        <br />
        <br />
        If no <InlineCode>minLength</InlineCode> is specified, the input field
        with the character count has no minimum length set.
        <br />
        <br />
        <Link
          href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Constraint_validation"
          target="_blank"
        >
          Refer to MDN for more information on constraint validation.
        </Link>
      </>
    ),
  },
  {
    name: 'format',
    type: 'function',
    description:
      'Function that returns a formatted string so that user can format the FormInput character count in different manner.',
  },
];
const commonOverridesRows = [
  {
    attribute: 'stylePreset',
    type: 'MQ<string>',
    description:
      'If provided, overrides the stylePreset of the character count.',
    default: 'characterCount',
  },
  {
    attribute: 'typographyPreset',
    type: 'MQ<string>',
    description:
      'If provided, this overrides the typography preset of the character count.',
    default: [
      'small = utilityBody010',
      'medium = utilityBody020',
      'large = utilityBody030',
    ],
  },
  {
    attribute: 'minHeight',
    type: 'MQ<string>',
    description:
      'If provided, this overrides the minHeight of the FormInput character count.',
    default: 'sizing030',
  },
  {
    attribute: 'marginBlockEnd',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical block end margin of the container. This space token can also be used on breakpoints.',
    default: ['small = space020', 'medium = space020', 'large = space020'],
  },
  {
    attribute: 'paddingInline',
    type: 'MQ<string>',
    description:
      'It can take one space token to specify the logical inline start and end padding of the container. This space token can also be used on breakpoints.',
    default: ['small = space020', 'medium = space020', 'large = space020'],
  },
];

const CharacterCountComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Character Count',
      description:
        'Character count lets users know how much text they can enter in an input container as they type.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Character Count',
      hero: {
        illustration: 'components/character-count/hero',
      },
      introduction:
        'Character count lets users know how much text they can enter in an input container as they type.',
    }}
    componentDefaultsKey="Character Count"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v6.3.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/character-count',
      storybookId: 'components-character-count--character-count-default',
    }}
    anatomy={{
      introduction: 'The character count contains one required element.',
      media: getIllustrationComponent('components/character-count/anatomy01'),
      rows: [
        {
          name: 'Character count',
          description:
            'Text label that counts down the number of characters set to an input.',
          component: ['Text Block'],
        },
      ],
    }}
    options={{
      introduction:
        'The character count has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Character limit',
          description: (
            <>
              The input and character count text counts down as a user types,
              and changes to an invalid state when the character limit is
              exceeded. Users can still input characters if they exceed the set
              character count. This allows them to edit down their input so it
              falls within the limit.
              <br />
              <br />
              The character limit is configurable and is set via native HTML max
              and min length value functionality.
              <br />
              <br />
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                For more information, please refer to the HTML input attribute
                types.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/character-count/option/character-limit',
          ),
        },
      ],
    }}
    states={{
      introduction: 'The character count has the following states:',
      layout: '3-span',
      cards: [
        {
          title: 'Base',
          description:
            'The character count has a base state. This is the base style of the input before the input has been interacted with by a user.',
          media: getIllustrationComponent(
            'components/character-count/states/base',
          ),
        },
        {
          title: 'Invalid',
          description: (
            <>
              The character count in an invalid state changes style when the
              inputted entry doesn’t conform to the limit set on the number of
              characters.
              <br />
              <br />
              The{' '}
              <Link
                href="https://www.newskit.co.uk/components/form/"
                target="_blank"
              >
                form
              </Link>{' '}
              component is used to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent(
            'components/character-count/states/invalid',
          ),
        },
        {
          title: 'Valid',
          description: (
            <>
              The character count in a valid state changes style when the
              inputted entry conforms to the limit set on the number of
              characters.
              <br />
              <br />
              The{' '}
              <Link
                href="https://www.newskit.co.uk/components/form/"
                target="_blank"
              >
                form
              </Link>{' '}
              component is used to define this validation behaviour.
            </>
          ),
          media: getIllustrationComponent(
            'components/character-count/states/valid',
          ),
        },
        {
          title: 'Disabled',
          description:
            'The character count in a disabled state shows that an input exists, but is not available to the user in that scenario. When a user’s cursor hovers over an input in a disabled state the cursor shows as not-allowed, and the character count state changes.',
          media: getIllustrationComponent(
            'components/character-count/states/disabled',
          ),
        },
      ],
    }}
    usage={{
      introduction:
        'The following guidance describes how and when to appropriately use the character count component.',
      layout: '2-span',
      cards: [
        {
          description:
            'If a user tries to submit a form with an exceeded character count, an error message should display prompting them to reduce the number of characters.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/character-count/usage/do-01',
          ),
        },
        {
          description: (
            <>
              Don’t restrict users from inputting characters or copying and
              pasting them even if they exceed the set character count. This
              allows for editing down their input so it falls within the set
              limit.
              <br />
              <br />
              By default, browsers prevent users from entering more, or fewer
              characters to an input field than allowed by the maxLength and
              minLength attributes.{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation"
                target="_blank"
              >
                Refer to MDN for more information on client-side validation.
              </Link>
            </>
          ),
          kind: UsageKind.DONT,
          media: getIllustrationComponent(
            'components/character-count/usage/dont-1',
          ),
        },
        {
          description:
            'In some cases, it may be more helpful to show a word count. For example, if your question requires a longer answer, you can set data-maxwords in the component markup. E.g.//data-maxwords="100"//.',
          kind: UsageKind.DO,
          media: getIllustrationComponent(
            'components/character-count/usage/do-2',
          ),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The character count has the following accessibility considerations:
          <br />
          <br />
          Use <InlineCode>aria-live=POLITENESS_SETTING</InlineCode> to set the
          priority with which the screen reader should treat updates to live
          regions, allowing for the voiceover to read out loud the remaining
          characters as the user types.
          <Block spaceStack="space100" />
          <ContentText title="Code example">
            This is read out on voiceover first before the user begins to type.
            Then as the user types, the remaining character count is read out.
            <br />
            <br />
            you have enter up to 200 chracters &rArr; hidden
          </ContentText>
        </>
      ),
      aria: {
        title: 'WAI-ARIA',
        tableRows: [
          {
            element: 'label',
            attribute: 'ariaLabel',
            value: 'polite',
            description:
              'Aria-label attribute is used to set the priority with which the screen reader should treat updates to live regions, allowing for the voiceover to read out loud the remaining characters as the user types.',
            userSupplied: true,
          },
        ],
      },
    }}
    componentAPI={{
      introduction: (
        <>
          The FormInput character count has a range of props that can be used to
          define an appropriate experience for different use cases. Use this
          component within{' '}
          <Link
            href="https://www.newskit.co.uk/components/form/"
            target="_blank"
          >
            the NewsKit form component.
          </Link>
        </>
      ),
      components: [
        {
          title: 'FormInput character count',
          propsRows: commonPropsRows,
          propsFooter: (
            <InlineMessage
              icon={infoIcon}
              role="region"
              aria-label="formInput character count"
            >
              The character limit is configurable and is set via{' '}
              <Link
                href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes"
                target="_blank"
              >
                native HTML max and min length value functionality.
              </Link>
            </InlineMessage>
          ),
          overridesRows: commonOverridesRows,
        },
        {
          title: 'Character count',
          summary:
            'The character count has a range of props that can be used to define an appropriate experience for different use cases. Use this component as a controlled component, for instance where you have a custom validation mechanism.',
          propsRows: [
            {
              name: 'name',
              type: 'string',
              description:
                'If provided, defines name of the input element, used when submitting an HTML form.',
            },
            ...commonPropsRows,
          ],
          overridesRows: commonOverridesRows,
        },
      ],
    }}
    related={{
      related: ['Flag', 'Progress Indicator', 'Tooltip'],
    }}
  />
);

export default CharacterCountComponent;
