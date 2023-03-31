import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {LinkInline as LI, LinkProps, LinkStandalone as LS} from '..';
import {CreateThemeArgs, StylePreset, ThemeProvider} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {IconOutlinedChevronRight, IconOutlinedStar} from '../../icons';
import {getColorCssFromTheme, styled} from '../../utils';
import {Paragraph} from '../../typography';

const LinkInline = (props: Omit<LinkProps, 'href'> & {href?: string}) => (
  // eslint-disable-next-line no-script-url
  <LI href="javascript:void(0);" {...props} />
);
const LinkStandalone = (props: Omit<LinkProps, 'href'> & {href?: string}) => (
  // eslint-disable-next-line no-script-url
  <LS href="javascript:void(0);" {...props} />
);

const linkCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-link-theme',
  overrides: {
    transitionPresets: {
      customIconChange: {
        base: {
          transitionProperty: 'fill',
          transitionDuration: '100ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
      customFontColorChange: {
        base: {
          transitionProperty: 'color',
          transitionDuration: '100ms',
          transitionTimingFunction: '{{motions.motionTimingEaseOut}}',
        },
      },
    },
    stylePresets: {
      linkCustom: {
        base: {
          color: '{{colors.teal070}}',
          iconColor: '{{colors.teal070}}',
          textDecoration: 'underline',
        },
      } as StylePreset,
      linkCustom2: {
        __extends: 'linkStandalone',
        base: {
          color: '{{colors.interactivePrimary030}}',
          iconColor: '{{colors.interactivePrimary030}}',
          textDecoration: 'none',
        },
        hover: {
          color: '{{colors.teal070}}',
          iconColor: '{{colors.teal070}}',
          textDecoration: 'underline',
        },
        active: {
          color: '{{colors.teal070}}',
          iconColor: '{{colors.teal070}}',
          textDecoration: 'underline',
        },
      } as StylePreset,
      linkCustom3: {
        __extends: 'linkInline',
        base: {
          color: '{{colors.interactivePrimary040}}',
          iconColor: '{{colors.interactivePrimary040}}',
          textDecoration: 'underline',
        },
      } as StylePreset,
    },
  },
};

export default {
  title: 'Components/Link',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Link',
      url: 'https://apple.comcomponents/link',
      description: 'A simple styled anchor element.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {globals: {backgrounds: {value: string}}; name: string},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          linkCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const StoryLinkDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <LinkInline>Link</LinkInline>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkDefault.storyName = 'Default';

export const StoryLinkInline = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <LinkInline>Inline link</LinkInline>
    </StorybookCase>
    <StorybookCase>
      <LinkInline href="mailto:###">Inline email link</LinkInline>
    </StorybookCase>
    <StorybookCase>
      <LinkInline href="tel:###">Inline telephone link</LinkInline>
    </StorybookCase>
    <StorybookCase>
      <LinkInline>
        <IconOutlinedStar overrides={{size: 'iconSize020'}} />
        Inline link with leading and trailing icons
        <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
      </LinkInline>
    </StorybookCase>
    <StorybookCase>
      <LinkInline
        overrides={{
          spaceInline: 'space050',
        }}
      >
        <IconOutlinedStar overrides={{size: 'iconSize020'}} />
        Inline link with leading and trailing icons and custom space
        <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
      </LinkInline>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkInline.storyName = 'Inline';

export const StoryLinkExternal = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <LinkInline href="https://apple.com">
        External link with external icon
      </LinkInline>
    </StorybookCase>
    <StorybookCase>
      <LinkInline
        href="https://apple.com"
        overrides={{
          externalIcon: {
            size: 'iconSize020',
          },
        }}
      >
        External link with custom size for external icon
      </LinkInline>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkExternal.storyName = 'External';

export const StoryLinkStandalone = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <LinkStandalone>Standalone link</LinkStandalone>
    </StorybookCase>
    <StorybookCase>
      <LinkStandalone href="mailto:###">Standalone email link</LinkStandalone>
    </StorybookCase>
    <StorybookCase>
      <LinkStandalone href="tel:###">Standalone telephone link</LinkStandalone>
    </StorybookCase>
    <StorybookCase>
      <LinkStandalone>
        <IconOutlinedStar overrides={{size: 'iconSize020'}} />
        Standalone link with leading and trailing icons
        <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
      </LinkStandalone>
    </StorybookCase>
    <StorybookCase>
      <LinkStandalone
        overrides={{
          spaceInline: 'space050',
        }}
      >
        <IconOutlinedStar overrides={{size: 'iconSize020'}} />
        Standalone link with leading and trailing icons and custom space
        <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
      </LinkStandalone>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkStandalone.storyName = 'Standalone';

const InverseContainer = styled.div`
  margin: -16px;
  ${getColorCssFromTheme('backgroundColor', 'inkContrast')};
  ${getColorCssFromTheme('color', 'inkInverse')};
`;

export const StoryLinkInverse = () => (
  <InverseContainer>
    <StorybookPage
      overrides={{
        paddingBlock: 'space070',
        marginInline: 'space020',
        paddingInline: 'space050',
      }}
    >
      <StorybookCase inverse>
        <LinkStandalone overrides={{stylePreset: 'linkStandaloneInverse'}}>
          Link
          <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
        </LinkStandalone>
      </StorybookCase>
    </StorybookPage>
  </InverseContainer>
);
StoryLinkInverse.storyName = 'Inverse';

export const StoryLinkInParagraph = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Inline link in paragraph">
      <Paragraph>
        NewsKit provides components, guidelines and standards to enable{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
          }}
        >
          digital product teams
        </LinkInline>{' '}
        to create high-quality, consistent products quickly. NewsKit is built on{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
          }}
        >
          modular design principles
        </LinkInline>{' '}
        and backed by best practice guidance for design and development.
      </Paragraph>
    </StorybookCase>
    <StorybookCase title="Inline link in paragraph with overrides">
      <Paragraph>
        NewsKit provides components, guidelines and standards to enable{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
            stylePreset: 'linkCustom',
          }}
        >
          digital product teams
        </LinkInline>{' '}
        to create high-quality, consistent products quickly. NewsKit is built on{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
            stylePreset: 'linkCustom',
          }}
        >
          modular design principles
        </LinkInline>{' '}
        and backed by best practice guidance for design and development.
      </Paragraph>
    </StorybookCase>
    <StorybookCase title="External link in paragraph">
      <Paragraph>
        NewsKit provides components, guidelines and standards to enable{' '}
        <LinkInline
          href="https://apple.com"
          overrides={{
            typographyPreset: 'editorialParagraph020',
          }}
        >
          digital product teams
        </LinkInline>{' '}
        to create high-quality, consistent products quickly. NewsKit is built on{' '}
        <LinkInline
          href="https://apple.com"
          overrides={{
            typographyPreset: 'editorialParagraph020',
          }}
        >
          modular design principles
        </LinkInline>{' '}
        and backed by best practice guidance for design and development.
      </Paragraph>
    </StorybookCase>
    <StorybookCase title="External link in paragraph with overrides">
      <Paragraph>
        NewsKit provides components, guidelines and standards to enable{' '}
        <LinkInline
          href="https://apple.com"
          overrides={{
            typographyPreset: 'editorialParagraph020',
            stylePreset: 'linkCustom',
          }}
        >
          digital product teams
        </LinkInline>{' '}
        to create high-quality, consistent products quickly. NewsKit is built on{' '}
        <LinkInline
          href="http://apple.com"
          overrides={{
            typographyPreset: 'editorialParagraph020',
            stylePreset: 'linkCustom',
          }}
        >
          modular design principles
        </LinkInline>{' '}
        and backed by best practice guidance for design and development.
      </Paragraph>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkInParagraph.storyName = 'Inline link in paragraph';

export const StoryLinkTransitions = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <LinkStandalone
        overrides={{
          stylePreset: 'linkCustom2',
          transitionPreset: ['customFontColorChange', 'customIconChange'],
        }}
      >
        Standalone link with transition preset overrides
      </LinkStandalone>
    </StorybookCase>
    <StorybookCase>
      <LinkStandalone
        href="http://apple.com"
        overrides={{
          stylePreset: 'linkCustom2',
          transitionPreset: {
            extend: 'customFontColorChange',
            base: {
              transitionDuration: '{{motions.motionDuration050}}',
            },
          },
        }}
      >
        Standalone link with overrides using extend on transitionDuration
      </LinkStandalone>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkTransitions.storyName = 'Transitions';

const OutlineContainer = styled.div`
  border: 1px dotted red;
`;

export const StoryLinkLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <OutlineContainer>
        <LinkInline overrides={{paddingBlock: 'space020'}}>
          Inline link with logical padding
        </LinkInline>
      </OutlineContainer>
    </StorybookCase>
    <StorybookCase>
      <OutlineContainer>
        <LinkInline overrides={{marginBlock: 'space020'}}>
          Inline link with logical margin
        </LinkInline>
      </OutlineContainer>
    </StorybookCase>
    <StorybookCase>
      <OutlineContainer>
        <LinkStandalone overrides={{paddingBlock: 'space020'}}>
          Standalone link with logical padding
          <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
        </LinkStandalone>
      </OutlineContainer>
    </StorybookCase>
    <StorybookCase>
      <OutlineContainer>
        <LinkStandalone overrides={{marginBlock: 'space020'}}>
          Standalone link with logical margin
          <IconOutlinedChevronRight overrides={{size: 'iconSize020'}} />
        </LinkStandalone>
      </OutlineContainer>
    </StorybookCase>
    <StorybookCase title="Inline link with logical margin and padding in a paragraph">
      <Paragraph>
        NewsKit provides components, guidelines and standards to enable{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingInline: 'space040',
          }}
        >
          digital product teams
        </LinkInline>{' '}
        to create high-quality, consistent products quickly. NewsKit is built on{' '}
        <LinkInline
          overrides={{
            typographyPreset: 'editorialParagraph020',
            paddingInline: 'space040',
          }}
        >
          modular design principles
        </LinkInline>{' '}
        and backed by best practice guidance for design and development.
      </Paragraph>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkLogicalProps.storyName = 'Logical Props';

export const StoryLinkStylingOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <LinkInline overrides={{stylePreset: 'linkCustom3'}}>
        Inline link
      </LinkInline>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkStylingOverrides.storyName = 'Styling overrides';

const Width = styled.div`
  max-width: 50px;
`;

export const StoryLinkOverrides = () => (
  <StorybookPage columns="1fr">
    <StorybookCase title="Custom style">
      <LinkInline overrides={{stylePreset: 'linkCustom3'}}>
        Inline link
      </LinkInline>
    </StorybookCase>
    <StorybookCase title="Custom width">
      <Width>
        <LinkInline>Inline link</LinkInline>
      </Width>
    </StorybookCase>
    <StorybookCase title="Custom offset">
      <LinkInline overrides={{marginInlineStart: 'space050'}}>
        Inline link
      </LinkInline>
    </StorybookCase>
  </StorybookPage>
);
StoryLinkOverrides.storyName = 'Overrides';
