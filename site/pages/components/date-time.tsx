import React from 'react';
import {DateTime} from 'newskit';
import {InlineCode} from '../../components/markdown-elements';
import {Link} from '../../components/link';
import {UsageKind} from '../../components/usage-card';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';
import {
  logicalMarginOverrideProps,
  logicalPaddingOverrideProps,
} from '../../components/component-api/common-logical-props';

const DateTimeComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate<typeof DateTime>
    headTags={{
      title: 'Date Time',
      description:
        'The date time component is a styled, HTML5 time element for displaying date and time.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Text',
      name: 'Date Time',
      hero: {
        illustration: 'components/date-time-illustration',
      },
      introduction:
        'The date time component is a styled, HTML5 time element for displaying date and time.',
    }}
    componentDefaultsKey="dateTime"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.18.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/main/src/date-time',
      storybookId: 'components-date-time--story-date-time',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=2057%3A5&t=iP77Jd8O6cCJYM4p-1',
    }}
    interactiveDemo={{
      introduction:
        'This demo lets you preview the date time component, its variations, and configuration options.',
      playground: {
        componentName: 'DateTime',
        component: props => <DateTime {...props} />,
        knobs: [
          {
            name: 'Date',
            propName: 'date',
            value: '2017-07-01T14:32:00.000Z',
          },
          {
            name: 'Date format',
            propName: 'dateFormat',
            value: "MMMM d yyyy, h:mmaaaaa'm'",
          },
          {
            name: 'Date Time Prefix',
            propName: 'prefix',
            value: 'Updated: ',
          },
          {
            name: 'Suffix',
            propName: 'suffix',
            value: 'The Times',
          },
          {
            name: 'Date Time StylePreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  stylePreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'inkBrand010',
                value: {
                  stylePreset: 'inkBrand010',
                },
              },
              {
                label: 'inkPositive',
                value: {
                  stylePreset: 'inkPositive',
                },
              },
            ],
          },
          {
            name: 'Date Time TypographyPreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  typographyPreset: undefined,
                },
                isDefault: true,
              },
              {
                label: 'utilityMeta010',
                value: {
                  typographyPreset: 'utilityMeta010',
                },
              },
            ],
          },
          {
            name: 'Prefix StylePreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  prefix: {
                    stylePreset: undefined,
                  },
                },
                isDefault: true,
              },
              {
                label: 'inkBrand010',
                value: {
                  prefix: {
                    stylePreset: 'inkBrand010',
                  },
                },
              },
              {
                label: 'inkPositive',
                value: {
                  prefix: {
                    stylePreset: 'inkPositive',
                  },
                },
              },
            ],
          },
          {
            name: 'Prefix TypographyPreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  prefix: {
                    typographyPreset: undefined,
                  },
                },
                isDefault: true,
              },
              {
                label: 'utilityMeta010',
                value: {
                  prefix: {
                    typographyPreset: 'utilityMeta010',
                  },
                },
              },
            ],
          },
          {
            name: 'Suffix StylePreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  suffix: {
                    stylePreset: undefined,
                  },
                },
                isDefault: true,
              },
              {
                label: 'inkBrand010',
                value: {
                  suffix: {
                    stylePreset: 'inkBrand010',
                  },
                },
              },
              {
                label: 'inkPositive',
                value: {
                  suffix: {
                    stylePreset: 'inkPositive',
                  },
                },
              },
            ],
          },
          {
            name: 'Suffix TypographyPreset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                value: {
                  suffix: {
                    typographyPreset: undefined,
                  },
                },
                isDefault: true,
              },
              {
                label: 'utilityMeta010',
                value: {
                  suffix: {
                    typographyPreset: 'utilityMeta010',
                  },
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction: 'Date time contains one required element.',
      rows: [
        {
          name: 'Date Time',
          description:
            'The date and time, with optional prefix and suffix text',
          component: 'Text Block',
        },
      ],
      media: getIllustrationComponent('components/date-time/anatomy'),
    }}
    options={{
      introduction: 'The date time has options for different use cases:',
      cards: [
        {
          title: 'Prefix',
          description:
            'Text placed in front of the date and time, separated by a space.',
          media: getIllustrationComponent(
            'components/date-time/options/prefix',
          ),
        },
        {
          title: 'Suffix',
          description:
            'Text placed after the date and time, separated by a comma and a space.',
          media: getIllustrationComponent(
            'components/date-time/options/suffix',
          ),
        },
        {
          title: 'Date and time format',
          description: (
            <>
              Specify a format for displaying the date and time. See{' '}
              <Link
                href="https://date-fns.org/v2.6.0/docs/format"
                target="_blank"
              >
                date-fns docs
              </Link>
              for the available settings.
            </>
          ),
          media: getIllustrationComponent(
            'components/date-time/options/date-and-time-format',
          ),
        },
      ],
    }}
    usage={{
      introduction: 'Here’s how and when to use the date time component:',
      cards: [
        {
          title: 'Do consider the appropriate format for your users',
          description:
            'In British English, the month follows the day. In American English, the month precedes the day.',
          kind: UsageKind.DO,
          media: getIllustrationComponent('components/date-time/usage/do-01'),
        },
      ],
    }}
    accessibility={{
      introduction: (
        <>
          The Date Time component is wrapped in an{' '}
          <Link
            href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/time"
            target="_blank"
          >
            HTML5 time
          </Link>{' '}
          element. The date prop provided is passed into its{' '}
          <InlineCode>datetime</InlineCode> attribute to make the date displayed
          fully accessible.
        </>
      ),
    }}
    componentAPI={{
      components: [
        {
          title: 'Date Time',
          propsSummary:
            'Date time has a range of props that can be used to define an appropriate experience for different use cases.',
          overridesSummary:
            'Date Time has a range of predefined elements and attributes that can be overridden to define its appearance.',
          propsRows: [
            {
              name: 'date',
              type: 'string | number',
              description: (
                <>
                  Timestamp string of the date to be displayed. Provide this in
                  the ISO8601 format that is understood by the native{' '}
                  <Link
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date"
                    target="_blank"
                  >
                    date object
                  </Link>
                </>
              ),
              required: true,
            },
            {
              name: 'dateFormat',
              type: 'string',
              description: (
                <>
                  Sets the date and time formatting. Refer to{' '}
                  <Link
                    href="https://date-fns.org/v2.6.0/docs/format"
                    target="_blank"
                  >
                    date-fns docs
                  </Link>{' '}
                  for the available settings
                </>
              ),
            },
            {
              name: 'prefix',
              type: 'string',
              description: 'Adds the provided string before the date and time',
            },
            {
              name: 'suffix',
              type: 'string',
              description: 'Adds the provided string after the date and time',
            },
          ],
          overridesRows: [
            {
              attribute: 'stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description:
                'If provided, this overrides the style preset of the Date Time',
            },
            {
              attribute: 'typographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta020',
              description:
                'If provided, this overrides the typography preset of the Date Time',
            },
            {
              attribute: 'prefix.stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description:
                'If provided, this overrides the style preset applied to the prefix',
            },
            {
              attribute: 'prefix.stypographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta020',
              description:
                'If provided, this overrides the typography preset of the prefix',
            },
            {
              attribute: 'suffix.stylePreset',
              type: 'MQ<string>',
              default: 'inkSubtle',
              description:
                'If provided, this overrides the style preset applied to the suffix',
            },
            {
              attribute: 'suffix.stypographyPreset',
              type: 'MQ<string>',
              default: 'utilityMeta020',
              description:
                'If provided, this overrides the typography preset of the suffix',
            },
            ...logicalMarginOverrideProps,
            ...logicalPaddingOverrideProps,
          ],
        },
      ],
    }}
    related={{
      related: ['Text Block'],
    }}
  />
);

export default DateTimeComponent;
