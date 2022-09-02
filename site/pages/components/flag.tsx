import React from 'react';
import {styled, Flag, FlagProps} from 'newskit';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const PlaygroundContainer = styled.div`
  display: flex;
  width: 100%;
  height: 200px;
  align-items: center;
  justify-content: center;
`;

const FlagComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Flag',
      description:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Feedback & Status',
      name: 'Flag',
      hero: {
        illustration: 'components/flag-illustration',
      },
      introduction:
        'A flag is a non-interactive visual indicator used to communicate status.',
    }}
    componentDefaultsKey="flag"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.8.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/ncu-newskit/blob/develop/src/flag/flag.tsx',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1952%3A2650',
    }}
    interactiveDemo={{
      introduction:
        'This demo allows you to preview the Flag component, its variations, and configuration options.',
      playground: {
        componentName: 'Flag',
        component: (props: FlagProps) => (
          <PlaygroundContainer>
            <Flag {...props} />
          </PlaygroundContainer>
        ),
        knobs: [
          {
            name: 'Content',
            propName: 'children',
            value: 'Flag Content',
          },
          {
            name: 'Flag Size',
            propName: 'size',
            options: [
              {
                label: 'Default (Small)',
                value: 'small',
                isDefault: true,
              },
              {
                label: 'Medium',
                value: 'medium',
              },
              {
                label: 'Large',
                value: 'large',
              },
            ],
          },
          {
            name: 'Spacing Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'spaceInsetSquish000',
                value: {
                  spaceInset: 'spaceInsetSquish000',
                },
              },
            ],
          },
          {
            name: 'Style Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'flagSolid',
                value: {
                  stylePreset: 'flagSolid',
                },
              },
              {
                label: 'flagMinimal',
                value: {
                  stylePreset: 'flagMinimal',
                },
              },
            ],
          },
          {
            name: 'Typography Preset',
            propName: 'overrides',
            options: [
              {
                label: 'Default',
                isDefault: true,
              },
              {
                label: 'utilityLabel010',
                value: {
                  typographyPreset: 'utilityLabel010',
                },
              },
              {
                label: 'label020',
                value: {
                  typographyPreset: 'label020',
                },
              },
            ],
          },
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ] as any,
      },
    }}
    anatomy={{
      introduction:
        'The flag contains one required element and two optional elements.',
      rows: [
        {
          name: 'Container',
          description: 'The flag container',
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the label.',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The label is the text attributed to the flag that provides
              context.
              <br />
              <br />
              Note - only if the children type supplied is a string or number it
              will be rendered inside a text block.
            </>
          ),
          component: 'Text Block',
        },
      ],
      media: getIllustrationComponent('components/flag/anatomy'),
    }}
    options={{
      introduction:
        'The flag has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Appearance',
          description:
            'By default, there are two styles of flag; solid and minimal, with colours set in the theme to communicate status to the user, eg. negative (red for high priority), or positive (green for active).',
          media: getIllustrationComponent('components/flag/options/appearance'),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of flag; small, medium, and large.',
          media: getIllustrationComponent('components/flag/options/size'),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in a flag and can be positioned either before (leading) or after (trailing) the label in the flag.',
          media: getIllustrationComponent('components/flag/options/icons'),
        },
      ],
    }}
  />
);

export default FlagComponent;
