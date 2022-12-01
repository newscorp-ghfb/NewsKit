import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Banner, BannerProps} from '..';
import {StorybookCase, StorybookPage} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {IconFilledInfo, IconFilledWarning, IconFilledError} from '../../icons';
import {Button, ButtonOrButtonLinkProps} from '../../button';
import {LinkInline} from '../../link';
import {Visible} from '../../grid';
import {GridLayout, GridLayoutItem, TextBlock} from '../..';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const BANNER_GRID_COLS = '1fr';
const DEFAULT_TITLE = 'Banner title';
const DEFAULT_CHILD = 'A short line describing the banner information.';

const bannerCustomThemeObject: CreateThemeArgs = {
  name: 'banner-custom-theme',
  overrides: {
    stylePresets: {
      bannerContainerSolidCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      bannerActionsCustom: {
        base: {
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        hover: {
          backgroundColor: '{{colors.neutral050}}',
        },
      },
    },
  },
};

const MarginOverridesWrapper = styled.div`
  border: 1px dashed;
  ${getColorCssFromTheme('borderColor', 'red060')}
`;

const CTABtn = ({
  children,
  overrides,
  ...restProps
}: ButtonOrButtonLinkProps) => (
  <Button
    overrides={{stylePreset: 'buttonSolidInverse', width: '100%', ...overrides}}
    {...restProps}
  >
    {children || 'CTA button'}
  </Button>
);

const StoryBanner: React.FC<BannerProps> = ({children, ...restProps}) => {
  const close = () => {
    // eslint-disable-next-line no-console
    console.log('Closed');
  };
  const action = () => {
    // eslint-disable-next-line no-console
    console.log('CTA Called');
  };

  return (
    <Banner
      actions={[
        () => (
          <>
            <Visible xs sm>
              <CTABtn onClick={action}>CTA button</CTABtn>
            </Visible>
            <Visible md lg xl>
              <CTABtn size="small" onClick={action}>
                CTA button
              </CTABtn>
            </Visible>
          </>
        ),
      ]}
      aria-label="Banner Info"
      icon={
        <IconFilledInfo
          overrides={{
            size: 'iconSize020',
            stylePreset: 'inkInverse',
          }}
        />
      }
      onClose={close}
      title={DEFAULT_TITLE}
      {...restProps}
    >
      {children || DEFAULT_CHILD}
    </Banner>
  );
};

export const StoryBannerDefault = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase>
      <StoryBanner aria-label="Banner default">{DEFAULT_CHILD}</StoryBanner>
    </StorybookCase>
  </StorybookPage>
);
StoryBannerDefault.storyName = 'Default';

export const StoryIntents = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase title="Notice">
      <StoryBanner
        aria-label="Banner notice"
        icon={<IconFilledWarning overrides={{size: 'iconSize020'}} />}
        overrides={{stylePreset: 'bannerNotice'}}
      >
        {DEFAULT_CHILD}
      </StoryBanner>
    </StorybookCase>
    <StorybookCase title="Negative">
      <StoryBanner
        aria-label="Banner negative"
        icon={<IconFilledError overrides={{size: 'iconSize020'}} />}
        overrides={{stylePreset: 'bannerNegative'}}
      >
        {DEFAULT_CHILD}
      </StoryBanner>
    </StorybookCase>
  </StorybookPage>
);
StoryIntents.storyName = 'Intents';

export const StoryVariations = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase title="With a link, without icon and actions">
      <StoryBanner
        icon={undefined}
        actions={[]}
        aria-label="Banner with link and without icon and actions"
      >
        A short line describing the banner information{' '}
        <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
          with a link
        </LinkInline>
        .
      </StoryBanner>
    </StorybookCase>
    <StorybookCase title="Without title and close button, two CTA buttons">
      <StoryBanner
        title={undefined}
        onClose={undefined}
        aria-label="Banner without title and close button, two CTA buttons"
        actions={[
          () => (
            <CTABtn onClick={() => console.log('CTA button 1')}>
              CTA button 1
            </CTABtn>
          ),
          () => (
            <CTABtn onClick={() => console.log('CTA button 2')}>
              CTA button 2
            </CTABtn>
          ),
        ]}
      >
        A longer line or two describing the banner information. A longer line or
        two describing the banner information. A longer line or two describing
        the banner information.
      </StoryBanner>
    </StorybookCase>
    <StorybookCase title="Title as icon">
      <StoryBanner
        title={<IconFilledInfo overrides={{size: 'iconSize020'}} />}
        icon={undefined}
        onClose={undefined}
        aria-label="Banner with title as icon"
      >
        {DEFAULT_CHILD}
      </StoryBanner>
    </StorybookCase>
    <StorybookCase title="Title as image">
      <StoryBanner
        title={
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src="/placeholder-1x1.png"
            alt="Example"
            width="400%"
            height="50px"
          />
        }
        icon={undefined}
        onClose={undefined}
        aria-label="Banner title as image"
      >
        {DEFAULT_CHILD}
      </StoryBanner>
    </StorybookCase>
  </StorybookPage>
);
StoryVariations.storyName = 'Variations';

export const StoryGridLayoutAlignment = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase title="Align to GridLayout component">
      <GridLayout>
        <GridLayoutItem>
          <TextBlock stylePreset="inkBase" typographyPreset="utilityBody010">
            Content above the banner
          </TextBlock>
        </GridLayoutItem>
      </GridLayout>

      <Banner
        title={DEFAULT_TITLE}
        aria-label="Banner align to GridLayout component"
        overrides={{paddingInline: 'space000', marginBlock: 'space020'}}
      >
        {DEFAULT_CHILD}
      </Banner>

      <GridLayout>
        <GridLayoutItem>
          <TextBlock stylePreset="inkBase" typographyPreset="utilityBody010">
            Content below the banner
          </TextBlock>
        </GridLayoutItem>
      </GridLayout>
    </StorybookCase>
    <StorybookCase title="Align to GridLayout with offset and logical props overrides">
      <GridLayout columns="repeat(12, 1fr)" columnGap="space040">
        <GridLayoutItem column="3 / span 8">
          <TextBlock stylePreset="inkBase" typographyPreset="utilityBody010">
            Content above the banner
          </TextBlock>
        </GridLayoutItem>
      </GridLayout>

      <Banner
        title={DEFAULT_TITLE}
        aria-label="Banner align to GridLayout component and offset"
        overrides={{
          grid: {props: {xsMargin: 'space000'}},
          cell: {props: {xs: 8, xsOffset: 2}},
          paddingInline: 'space000',
          marginBlock: 'space020',
        }}
      >
        {DEFAULT_CHILD}
      </Banner>

      <GridLayout columns="repeat(12, 1fr)" columnGap="space040">
        <GridLayoutItem column="3 / span 8">
          <TextBlock stylePreset="inkBase" typographyPreset="utilityBody010">
            Content below the banner
          </TextBlock>
        </GridLayoutItem>
      </GridLayout>
    </StorybookCase>
  </StorybookPage>
);

StoryGridLayoutAlignment.storyName = 'Grid Layout alignment';

export const StoryLogicalProps = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase title="Logical padding overrides">
      <StoryBanner
        aria-label="Banner with logical padding overrides"
        overrides={{
          paddingBlock: 'space060',
          paddingInline: 'space060',
        }}
      >
        {DEFAULT_CHILD}
      </StoryBanner>
    </StorybookCase>
    <StorybookCase title="Logical padding overrides on each breakpoint">
      <Banner
        aria-label="Banner with logical padding overrides on each breakpoint"
        title={DEFAULT_TITLE}
        overrides={{
          paddingBlock: {
            xs: 'space050',
            lg: 'space040',
          },
          paddingInline: {
            xs: 'space045',
            md: 'space070',
            lg: 'space010',
          },
        }}
      >
        {DEFAULT_CHILD}
      </Banner>
    </StorybookCase>
    <StorybookCase title="Logical margin overrides">
      <MarginOverridesWrapper>
        <StoryBanner
          aria-label="Banner with logical margin overrides"
          overrides={{
            marginBlock: 'space020',
            marginInline: 'space020',
          }}
        >
          {DEFAULT_CHILD}
        </StoryBanner>
      </MarginOverridesWrapper>
    </StorybookCase>
  </StorybookPage>
);
StoryLogicalProps.storyName = 'Logical props';

export const StoryStylingOverrides = () => (
  <StorybookPage columns={BANNER_GRID_COLS}>
    <StorybookCase title="Style">
      <div style={{maxWidth: 400}}>
        <StoryBanner
          aria-label="Banner with overrides"
          icon={<IconFilledInfo overrides={{size: 'iconSize020'}} />}
          actions={[() => <CTABtn />]}
          layout={{
            xs: 'vertical',
            sm: 'horizontal',
            md: 'vertical',
          }}
          overrides={{
            stylePreset: 'bannerContainerSolidCustom',
            paddingBlock: 'space060',
            paddingInline: {xs: 'space050', md: 'space000'},
            minHeight: 'sizing100',
            grid: {
              props: {
                xsMargin: 'space000',
                mdMargin: 'space000',
                lgMargin: 'space000',
              },
            },
            cell: {
              props: {
                xs: 12,
                md: 10,
                mdOffset: 1,
              },
            },
            icon: {
              paddingBlock: 'space060',
            },
            content: {
              paddingBlock: 'space050',
              title: {
                stylePreset: 'inkInverse',
                typographyPreset: 'utilityHeading030',
                spaceStack: 'space050',
              },
              message: {
                stylePreset: 'inkInverse',
                typographyPreset: 'utilityBody030',
              },
            },
            actions: {
              closeButton: {
                stylePreset: 'buttonOutlinedInverse',
              },
            },
          }}
        >
          {DEFAULT_CHILD}
        </StoryBanner>
      </div>
    </StorybookCase>
  </StorybookPage>
);
StoryStylingOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Banner',
  component: Banner,
  parameters: {
    nkDocs: {
      title: 'Banner',
      url: 'https://newskit.co.uk/components/banner',
      description:
        'A Banner communicates essential information without blocking an experience. They are positioned at the top of the screen, so they are noticeable. They require user action to disappear.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          bannerCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
