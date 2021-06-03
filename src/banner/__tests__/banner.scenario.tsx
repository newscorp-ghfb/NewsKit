import * as React from 'react';
import {Banner, BannerProps} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {
  IconFilledInfo,
  IconFilledWarning,
  IconFilledError,
  IconFilledClose,
} from '../../icons';
import {Button, ButtonOrButtonLinkProps} from '../../button';
import {Link} from '../../link';
import {Visible} from '../../grid';

const myCustomTheme = createTheme({
  name: 'banner-intents-theme',
  overrides: {
    stylePresets: {
      bannerContainerSolidNotice: {
        base: {
          backgroundColor: '{{colors.interfaceNotice010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      bannerContainerSolidNegative: {
        base: {
          backgroundColor: '{{colors.interfaceNegative010}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
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
    },
  },
});

const BannerWrapper = styled.div`
  margin-bottom: 24px;
`;

const StyledFullWidthVisible = styled(Visible)`
  width: 100%;
`;

export const BannerWithState: React.FC<BannerProps> = ({
  children,
  ...restProps
}) => {
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
                      size="small"
                      onClick={() => {
                        action();
                      }}
                    >
                      CTA button
                    </CTABtn>
                  </StyledFullWidthVisible>
                  <StyledFullWidthVisible md lg xl>
                    <CTABtn
                      size="medium"
                      onClick={() => {
                        action();
                      }}
                    >
                      CTA button
                    </CTABtn>
                  </StyledFullWidthVisible>
                </>
              ),
              () => (
                <>
                  <StyledFullWidthVisible xs sm>
                    <CloseBtn size="small" onClick={close}>
                      Close
                    </CloseBtn>
                  </StyledFullWidthVisible>
                  <StyledFullWidthVisible md lg xl>
                    <CloseBtn size="medium" onClick={close}>
                      <IconFilledClose />
                    </CloseBtn>
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

export const BannerIntentNegative: React.FC<BannerProps> = ({
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
      stylePreset: 'bannerContainerSolidNegative',
      content: {
        message: {
          stylePreset: 'inkInverse',
        },
      },
    }}
    {...restProps}
  >
    {children}
  </BannerWithState>
);

export const BannerIntentNotice: React.FC<BannerProps> = ({
  children,
  ...restProps
}) => (
  <BannerWithState
    icon={<IconFilledWarning overrides={{size: 'iconSize020'}} />}
    overrides={{
      stylePreset: 'bannerContainerSolidNotice',
      content: {
        message: {
          stylePreset: 'inkInverse',
        },
      },
    }}
    {...restProps}
  >
    {children}
  </BannerWithState>
);

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
const CloseBtn = ({children, ...restProps}: ButtonOrButtonLinkProps) => (
  <Button
    overrides={{
      stylePreset: 'buttonOutlinedInverse',
      width: '100%',
    }}
    {...restProps}
  >
    {children || 'Close'}
  </Button>
);

export default {
  title: 'banner',
  children: [
    {
      storyName: 'banner-default',
      storyFn: () => (
        <>
          <StorybookHeading>Banner</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <BannerWrapper>
            <BannerWithState
              icon={
                <IconFilledInfo
                  overrides={{
                    size: 'iconSize020',
                    stylePreset: 'inkInverse',
                  }}
                />
              }
              actions={[() => <CTABtn />]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BannerWithState>
          </BannerWrapper>
          <StorybookSubHeading>
            with bigger content and two CTA buttons
          </StorybookSubHeading>
          <BannerWrapper>
            <BannerWithState
              icon={
                <IconFilledInfo
                  overrides={{
                    size: 'iconSize020',
                    stylePreset: 'inkInverse',
                  }}
                />
              }
              actions={[() => <CTABtn />, () => <CTABtn>CTA Button 2</CTABtn>]}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </BannerWithState>
          </BannerWrapper>
        </>
      ),
    },
    {
      storyName: 'banner-intents',
      storyFn: () => (
        <>
          <StorybookHeading>Banner Intent</StorybookHeading>
          <StorybookSubHeading>Informative (default)</StorybookSubHeading>
          <BannerWrapper>
            <BannerWithState
              icon={<IconFilledInfo overrides={{size: 'iconSize020'}} />}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </BannerWithState>
          </BannerWrapper>
          <ThemeProvider theme={myCustomTheme}>
            <StorybookSubHeading>Notice</StorybookSubHeading>
            <BannerWrapper>
              <BannerIntentNotice>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BannerIntentNotice>
            </BannerWrapper>
            <StorybookSubHeading>Negative</StorybookSubHeading>
            <BannerWrapper>
              <BannerIntentNegative>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BannerIntentNegative>
            </BannerWrapper>
          </ThemeProvider>
        </>
      ),
    },
    {
      storyName: 'banner-variations',
      storyFn: () => (
        <>
          <StorybookHeading>Banner</StorybookHeading>
          <StorybookSubHeading>with overrides</StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <BannerWrapper>
              <BannerWithState
                icon={
                  <IconFilledError
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'inkContrast',
                    }}
                  />
                }
                actions={[() => <CTABtn />]}
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
                    message: {
                      stylePreset: 'inkContrast',
                      typographyPreset: 'utilityBody030',
                    },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </BannerWithState>
            </BannerWrapper>
            <StorybookSubHeading>with link</StorybookSubHeading>
            <BannerWrapper>
              <BannerWithState
                icon={
                  <IconFilledError
                    overrides={{
                      size: 'iconSize020',
                    }}
                  />
                }
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt <Link href="/">NewsKit Link</Link> ut
                labore et dolore magna aliqua.
              </BannerWithState>
            </BannerWrapper>
          </ThemeProvider>
        </>
      ),
    },
  ],
};
