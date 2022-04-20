import React from 'react';
import {Block, InlineMessage, IconFilledInfo} from 'newskit';
import {Link} from '../../components/link';
import {MetaStatus} from '../../components/meta/types';
import {LayoutProps} from '../../components/layout';
import {ComponentPageTemplate} from '../../templates/component-page-template';
import {getIllustrationComponent} from '../../components/illustrations/illustration-loader';

const infoIcon = (
  <IconFilledInfo
    overrides={{
      size: 'iconSize020',
    }}
  />
);

const ButtonComponent = (layoutProps: LayoutProps) => (
  <ComponentPageTemplate
    headTags={{
      title: 'Button',
      description:
        'Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Actions & Inputs',
      name: 'Button',
      hero: {
        illustration: 'components/button/hero',
      },
      introduction: `Buttons allow users to make choices, take actions, and help guide around an interface with a single tap.`,
    }}
    componentDefaultsKey="textField"
    meta={{
      status: MetaStatus.Supported,
      introduced: 'v0.2.0',
      codeUrl:
        'https://github.com/newscorp-ghfb/newskit/tree/develop/src/button',
      figmaUrl:
        'https://www.figma.com/file/FSbCQa6SzVR3K48ZWLeD77/%F0%9F%9F%A2-NK-Web-Components?node-id=1817%3A8822',
    }}
    anatomy={{
      introduction:
        'The Button contains two required elements and one optional element.',
      rows: [
        {
          name: 'Container',
          description: 'The Button container, HTML Button element',
          optional: undefined,
        },
        {
          name: 'Icon',
          description:
            'Icon that can be positioned either before (leading) or after (trailing) the Label',
          component: 'Icon',
          optional: true,
        },
        {
          name: 'Label',
          description: (
            <>
              The Label is the text attributed to the Button that provides
              context
              <br />
              <br />
              Note - only if the children type supplied is a string or number it
              will be rendered inside a Text Block
            </>
          ),
          component: 'Text Block',
          optional: undefined,
        },
      ],
      media: getIllustrationComponent('components/button/anatomy-button'),
    }}
    options={{
      introduction:
        'The Button has options that can be used to provide an appropriate experience for different use cases.',
      cards: [
        {
          title: 'Appearance',
          description: (
            <>
              <Block spaceStack="space030">
                By default, there are three styles of Button; solid, outlined,
                and minimal.
              </Block>
              <InlineMessage
                icon={infoIcon}
                role="region"
                aria-label="Inverse Buttons"
                title="Note"
              >
                Inverse Buttons are intended for use on darker backgrounds.
              </InlineMessage>
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/appearence',
          ),
        },
        {
          title: 'Intent',
          description:
            'The Button has four different intents: primary, secondary, positive, and negative. Each intent is used to communicate a specific semantic tone of the Button to the user.',
          media: getIllustrationComponent('components/button/options/intent'),
        },
        {
          title: 'Size',
          description:
            'There are three sizes of Button: small, medium (default), and large.',
          media: getIllustrationComponent('components/button/options/size'),
        },
        {
          title: 'Border radius and width',
          description: (
            <>
              The Border Radius and Border Width applied to the Button can be
              overridden and applied to the theme. <br />
              <br />
              <Link href="/theme/borders/">
                For more information, refer to the Borders foundations.
              </Link>
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/border-radius-and-width',
          ),
        },
        {
          title: 'Icons (leading & trailing)',
          description:
            'Icons can be displayed in a Button and can be positioned either before (leading) or after (trailing) the Label in the Button.',
          media: getIllustrationComponent(
            'components/button/options/icons-leading-trailing',
          ),
        },
        {
          title: 'Label',
          description:
            'Labels can be displayed in a Button. A Label can give more context to what the intended action the Button indicates.',
          media: getIllustrationComponent('components/button/options/label'),
        },
        {
          title: 'Icon Button',
          description:
            'The Icon Button component has the same options, behaviours, and properties as the Button component, but with a single icon positioned in the centre of the container.',
          media: getIllustrationComponent('components/button/options/icons'),
        },
        {
          title: 'Button as a link',
          description: (
            <>
              Buttons have the ability to render as{' '}
              <Link href="/components/link/">Links.</Link> In this case, the
              styling of the link looks like a Button but with the behaviour of
              a link.
            </>
          ),
          media: getIllustrationComponent(
            'components/button/options/button-link',
          ),
        },
      ],
    }}
  />
);

export default ButtonComponent;
