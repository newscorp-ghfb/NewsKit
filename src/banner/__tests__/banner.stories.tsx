import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Banner, BannerProps} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled} from '../../utils/style';
import {
  IconFilledInfo,
  IconFilledWarning,
  IconFilledError,
  IconFilledFacebook,
  IconFilledInstagram,
} from '../../icons';
import {Button, ButtonOrButtonLinkProps} from '../../button';
import {LinkInline} from '../../link';
import {Cell, Grid, Visible} from '../../grid';
import {GridLayout, GridLayoutItem, TextBlock} from '../..';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const bannerCustomThemeObject: CreateThemeArgs = {
  name: 'banner-custom-theme',
  overrides: {
    stylePresets: {
      bannerContainerSolidCustom: {
        base: {
          backgroundColor: '{{colors.interfaceSkeleton020}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      bannerMessageCustom: {
        base: {
          color: '{{colors.inkContrast}}',
        },
      },
      bannerActionsCustom: {
        base: {
          color: '{{colors.inkContrast}}',
          backgroundColor: '{{colors.white}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
        hover: {
          backgroundColor: '{{colors.neutral050}}',
        },
      },
      bannerCloseCustomHorizontal: {
        base: {
          color: '{{colors.inkContrast}}',
          iconColor: '{{colors.inkContrast}}',
          backgroundColor: '{{colors.transparent}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
          borderColor: '{{colors.transparent}}',
        },
        hover: {
          backgroundColor: '{{colors.neutral050}}',
        },
      },
      bannerCloseCustomVertical: {
        base: {
          color: '{{colors.inkContrast}}',
          iconColor: '{{colors.inkContrast}}',
          backgroundColor: '{{colors.transparent}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
          borderStyle: 'solid',
          borderWidth: '1px',
          borderColor: '{{colors.inkContrast}}',
        },
        hover: {
          backgroundColor: '{{colors.neutral050}}',
        },
      },
    },
  },
};

const BannerWrapper = styled.div`
  margin-bottom: 24px;
`;

const StyledFullWidthVisible = styled(Visible)`
  width: 100%;
`;

const StyledDiv = styled.div`
  border: 1px red dotted;
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
    {children || 'CTA Button'}
  </Button>
);

const BannerWithState: React.FC<BannerProps> = ({children, ...restProps}) => {
  const [isActive, setIsActive] = React.useState(true);

  const close = () => setIsActive(false);
  const action = () => {
    // eslint-disable-next-line no-console
    console.log('CTA Called!');
  };
  return (
    <>
      {isActive && (
        <>
          <Banner
            actions={[
              () => (
                <>
                  <StyledFullWidthVisible xs sm>
                    <CTABtn
                      onClick={() => {
                        action();
                      }}
                    >
                      CTA button
                    </CTABtn>
                  </StyledFullWidthVisible>
                  <StyledFullWidthVisible md lg xl>
                    <CTABtn
                      size="small"
                      onClick={() => {
                        action();
                      }}
                    >
                      CTA button
                    </CTABtn>
                  </StyledFullWidthVisible>
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
            title="Some banner title"
            {...restProps}
          >
            {children ||
              `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
          </Banner>
        </>
      )}
    </>
  );
};

const BannerIntentNotice: React.FC<BannerProps> = ({
  children,
  ...restProps
}) => (
  <BannerWithState
    icon={<IconFilledWarning overrides={{size: 'iconSize020'}} />}
    overrides={{
      stylePreset: 'bannerNotice',
    }}
    {...restProps}
  >
    {children}
  </BannerWithState>
);

const BannerIntentNegative: React.FC<BannerProps> = ({
  children,
  ...restProps
}) => (
  <BannerWithState
    icon={
      <IconFilledError
        overrides={{
          size: 'iconSize020',
        }}
      />
    }
    overrides={{
      stylePreset: 'bannerNegative',
    }}
    {...restProps}
  >
    {children}
  </BannerWithState>
);

const bannerLink = (
  <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
    with link
  </LinkInline>
);

export const StoryBannerDefault = () => (
  <>
    <StorybookHeading>Banner</StorybookHeading>
    <StorybookSubHeading>default (Informative intent)</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState aria-label="Banner default">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>
      with bigger content and two CTA buttons
    </StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        aria-label="Banner with bigger content"
        actions={[() => <CTABtn />, () => <CTABtn>CTA Button 2</CTABtn>]}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </BannerWithState>
    </BannerWrapper>
  </>
);
StoryBannerDefault.storyName = 'banner-default';

export const StoryBannerIntents = () => (
  <>
    <StorybookHeading>Banner Intent</StorybookHeading>
    <StorybookSubHeading>Notice</StorybookSubHeading>
    <BannerWrapper>
      <BannerIntentNotice aria-label="Notice">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </BannerIntentNotice>
    </BannerWrapper>
    <StorybookSubHeading>Negative</StorybookSubHeading>
    <BannerWrapper>
      <BannerIntentNegative aria-label="Error">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </BannerIntentNegative>
    </BannerWrapper>
  </>
);
StoryBannerIntents.storyName = 'banner-intents';

export const StoryBannerVariations = () => (
  <>
    <StorybookHeading>Banner variations</StorybookHeading>
    <StorybookSubHeading>
      with link and without icon and actions
    </StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        icon={undefined}
        actions={[]}
        aria-label="Banner with link and without icon and actions"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt {bannerLink} ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>without title and close button</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        title={undefined}
        onClose={undefined}
        aria-label="Banner without title and close button"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt {bannerLink} ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>with title as icon</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        title={
          <>
            <IconFilledFacebook overrides={{size: 'iconSize020'}} />
            <IconFilledInstagram overrides={{size: 'iconSize020'}} />
          </>
        }
        onClose={undefined}
        aria-label="Banner with icon in title"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt {bannerLink} ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>with title as image</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        title={
          <img
            src="/placeholder-1x1.png"
            alt="Example"
            width="800px"
            height="50px"
          />
        }
        onClose={undefined}
        aria-label="Banner with image in title"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt {bannerLink} ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
  </>
);
StoryBannerVariations.storyName = 'banner-variations';

export const StoryBannerWithOverrides = () => (
  <>
    <StorybookHeading>Banner</StorybookHeading>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        aria-label="Banner with overrides"
        icon={
          <IconFilledError
            overrides={{
              size: 'iconSize020',
              stylePreset: 'inkContrast',
            }}
          />
        }
        actions={[
          () => <CTABtn overrides={{stylePreset: 'bannerActionsCustom'}} />,
        ]}
        layout={{
          xs: 'vertical',
          sm: 'horizontal',
          md: 'vertical',
        }}
        overrides={{
          stylePreset: 'bannerContainerSolidCustom',
          spaceInset: 'spaceInset060',
          minHeight: 'sizing100',
          grid: {
            props: {
              xsMargin: 'space030',
              mdMargin: 'space040',
              lgMargin: 'space050',
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
            spaceInline: 'space060',
          },
          content: {
            spaceInline: 'space050',
            title: {
              stylePreset: 'inkContrast',
              typographyPreset: 'utilityHeading030',
              spaceStack: 'space050',
            },
            message: {
              stylePreset: 'inkContrast',
              typographyPreset: 'utilityBody030',
            },
          },
          actions: {
            closeButton: {
              stylePreset: {
                xs: 'bannerCloseCustomVertical',
                sm: 'bannerCloseCustomHorizontal',
                md: 'bannerCloseCustomVertical',
              },
            },
          },
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>
      with spaceInset overrides on each breakpoint
    </StorybookSubHeading>

    <Banner
      title="Banner title"
      aria-label="Banner with breakpoint overrides"
      overrides={{
        spaceInset: {
          xs: 'space050 space045 space045 space050',
          md: 'space040 space070 space070 space050',
          lg: 'space040',
        },
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
  </>
);
StoryBannerWithOverrides.storyName = 'banner-with-overrides';

export const StoryBannerWithGridAlignment = () => (
  <>
    <StorybookSubHeading>Align to Grid component</StorybookSubHeading>
    <Grid>
      <Cell xs="full-width">
        <TextBlock stylePreset="inkContrast">
          Content above the banner
        </TextBlock>
      </Cell>
    </Grid>
    <Banner
      title="Banner title"
      aria-label="Banner with content above"
      overrides={{
        spaceInset: 'space045 space000 space045 space000',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
    <Grid>
      <Cell xs="full-width">
        <TextBlock stylePreset="inkContrast">
          Content below the banner
        </TextBlock>
      </Cell>
    </Grid>
    <StorybookSubHeading>
      align to grid with offset & with spaceInset overrides
    </StorybookSubHeading>
    <Grid>
      <Cell xs={8} xsOffset={2}>
        <TextBlock stylePreset="inkContrast">
          Content above the banner
        </TextBlock>
      </Cell>
    </Grid>
    <Banner
      title="Banner title"
      aria-label="Banner with content below"
      overrides={{
        cell: {props: {xs: 8, xsOffset: 2}},
        spaceInset: 'space045 space000 space045 space000',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
    <Grid>
      <Cell xs={8} xsOffset={2}>
        <TextBlock stylePreset="inkContrast">
          Content above the banner
        </TextBlock>
      </Cell>
    </Grid>
  </>
);

StoryBannerWithGridAlignment.storyName = 'banner-with-grid-alignment';

export const StoryBannerWithGridLayoutAlignment = () => (
  <>
    <StorybookSubHeading>Align to GridLayout component</StorybookSubHeading>
    <GridLayout>
      <GridLayoutItem>
        <TextBlock stylePreset="inkContrast">
          Content above the banner
        </TextBlock>
      </GridLayoutItem>
    </GridLayout>
    <Banner
      title="Banner align to GridLayout component"
      aria-label="Banner align to GridLayout component"
      overrides={{
        spaceInset: 'space045 space000 space045 space000',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
    <GridLayout>
      <GridLayoutItem>
        <TextBlock stylePreset="inkContrast">
          Content below the banner
        </TextBlock>
      </GridLayoutItem>
    </GridLayout>
    <StorybookSubHeading>
      align to grid with offset & with spaceInset overrides
    </StorybookSubHeading>
    <GridLayout columns="repeat(12, 1fr)" columnGap="space040">
      <GridLayoutItem column="3 / span 8">
        <TextBlock stylePreset="inkContrast">
          Content above the banner
        </TextBlock>
      </GridLayoutItem>
    </GridLayout>
    <Banner
      title="Banner align to GridLayout component and offset"
      aria-label="Banner align to GridLayout component and offset"
      overrides={{
        grid: {props: {xsMargin: 'space000'}},
        cell: {props: {xs: 8, xsOffset: 2}},
        spaceInset: 'space045 space000 space045 space000',
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
    <GridLayout columns="repeat(12, 1fr)" columnGap="space040">
      <GridLayoutItem column="3 / span 8">
        <TextBlock stylePreset="inkContrast">
          Content below the banner
        </TextBlock>
      </GridLayoutItem>
    </GridLayout>
  </>
);

StoryBannerWithGridLayoutAlignment.storyName =
  'banner-with-grid-layout-alignment';

export const StoryBannerWithLogicalOverrides = () => (
  <>
    <StorybookHeading>Banner</StorybookHeading>
    <StorybookSubHeading>with logical padding overrides</StorybookSubHeading>
    <BannerWrapper>
      <BannerWithState
        aria-label="Banner with logical padding overrides"
        overrides={{
          paddingBlock: 'spaceInset060',
          paddingInline: 'spaceInset060',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BannerWithState>
    </BannerWrapper>
    <StorybookSubHeading>
      with logical padding overrides on each breakpoint
    </StorybookSubHeading>
    <Banner
      title="Banner title"
      aria-label="Banner with breakpoint and logical padding overrides"
      overrides={{
        paddingBlock: {
          xs: 'space050',
          lg: 'space040',
        },
        paddingInline: {
          xs: 'space045',
          md: 'space070',
          lg: 'space040',
        },
        paddingBlockStart: {
          md: 'space040',
          lg: 'space030',
        },
        paddingBlockEnd: {
          md: 'space050',
          lg: 'space030',
        },
      }}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing eli
    </Banner>
    <StorybookSubHeading>with logical margin overrides</StorybookSubHeading>
    <StyledDiv>
      <BannerWithState
        aria-label="Banner with logical margin overrides"
        overrides={{
          marginBlock: 'space050',
          marginInline: 'space050',
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </BannerWithState>
    </StyledDiv>
  </>
);
StoryBannerWithLogicalOverrides.storyName = 'banner-with-logical-overrides';

export default {
  title: 'NewsKit Light/banner',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          bannerCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
