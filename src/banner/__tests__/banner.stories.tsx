import * as React from 'react';
import {Banner, BannerProps} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {IconFilledInfo, IconFilledWarning, IconFilledError} from '../../icons';
import {Button, ButtonOrButtonLinkProps} from '../../button';
import {Link} from '../../link';
import {Visible} from '../../grid';

const myCustomTheme = createTheme({
  name: 'banner-intents-theme',
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
});

const BannerWrapper = styled.div`
  margin-bottom: 24px;
`;

const StyledFullWidthVisible = styled(Visible)`
  width: 100%;
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
  <Link href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
    with link
  </Link>
);

export default {
  title: 'NewsKit Light/banner',
  component: () => 'None',
  disabledRules: ['color-contrast'],
};

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
  </>
);
StoryBannerVariations.storyName = 'banner-variations';

export const StoryBannerWithOverrides = () => (
  <>
    <StorybookHeading>Banner</StorybookHeading>
    <StorybookSubHeading>with overrides</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
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
            maxWidth: {
              xs: '420px',
              sm: '480px',
              md: '768px',
              lg: '1024px',
              xl: '1440px',
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </BannerWithState>
      </BannerWrapper>
    </ThemeProvider>
  </>
);
StoryBannerWithOverrides.storyName = 'banner-with-overrides';
