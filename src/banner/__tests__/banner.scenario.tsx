import * as React from 'react';
import {Banner} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {IconFilledInfo, IconFilledWarning, IconFilledError} from '../../icons';
import {Button} from '../../button';
import {ScreenReaderOnly} from '../../screen-reader-only';
import {Link} from '../../link';

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
            <Banner>Short text</Banner>
          </BannerWrapper>
          <StorybookSubHeading>with bigger content</StorybookSubHeading>
          <BannerWrapper>
            <Banner>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Banner>
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
            <Banner icon={<IconFilledInfo overrides={{size: 'iconSize020'}} />}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Banner>
          </BannerWrapper>
          <ThemeProvider theme={myCustomTheme}>
            <StorybookSubHeading>Notice</StorybookSubHeading>
            <BannerWrapper>
              <Banner
                icon={<IconFilledWarning overrides={{size: 'iconSize020'}} />}
                overrides={{
                  stylePreset: 'bannerContainerSolidNotice',
                  innerContainer: {
                    content: {
                      message: {
                        stylePreset: 'inkInverse',
                      },
                    },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Banner>
            </BannerWrapper>
            <StorybookSubHeading>Negative</StorybookSubHeading>
            <BannerWrapper>
              <Banner
                icon={
                  <IconFilledError
                    overrides={{
                      size: 'iconSize020',
                    }}
                  />
                }
                overrides={{
                  stylePreset: 'bannerContainerSolidNegative',
                  innerContainer: {
                    content: {
                      message: {
                        stylePreset: 'inkInverse',
                      },
                    },
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Banner>
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
              <Banner
                icon={
                  <IconFilledError
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'inkContrast',
                    }}
                  />
                }
                overrides={{
                  stylePreset: 'bannerContainerSolidCustom',
                  spaceInset: 'spaceInset060',
                  minHeight: 'sizing100',
                  innerContainer: {
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
                  },
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Banner>
            </BannerWrapper>
            <StorybookSubHeading>with link</StorybookSubHeading>
            <BannerWrapper>
              <Banner
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
              </Banner>
            </BannerWrapper>
          </ThemeProvider>
        </>
      ),
    },
    {
      storyName: 'banner-screen-reader-demo',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);
          const [counter, setCounter] = React.useState(0);

          const open = () => {
            setIsActive(true);
            setCounter(counter + 1);
          };
          const close = () => setIsActive(false);
          return (
            <>
              <StorybookHeading>Banner</StorybookHeading>
              <StorybookSubHeading>
                Displays based on conditional rendering
              </StorybookSubHeading>

              <Button onClick={isActive ? close : open}>
                {isActive ? 'Close' : 'Open'} Banner
              </Button>
              <BannerWrapper>
                {isActive && (
                  <Banner
                    aria-label="Banner Info"
                    icon={
                      <IconFilledInfo
                        overrides={{
                          size: 'iconSize020',
                          stylePreset: 'inkInverse',
                        }}
                      />
                    }
                  >
                    <ScreenReaderOnly>Important Information:</ScreenReaderOnly>
                    Test banner {counter} content opened: {counter} times
                  </Banner>
                )}
              </BannerWrapper>
              <hr />
            </>
          );
        }),
    },
    {
      storyName: 'banner-screen-reader-demo-2',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);
          const [counter, setCounter] = React.useState(0);

          const open = () => {
            setIsActive(true);
            setCounter(counter + 1);
          };

          const StyledWrapper = styled.div<{isActive?: boolean}>`
            visibility: ${!isActive && 'hidden'};
          `;
          const close = () => setIsActive(false);
          return (
            <>
              <StorybookHeading>Banner</StorybookHeading>
              <StorybookSubHeading>
                Displays by using visibility: hidden
              </StorybookSubHeading>
              <Button onClick={isActive ? close : open}>
                {isActive ? 'Close' : 'Open'} Banner
              </Button>
              <BannerWrapper>
                <StyledWrapper isActive>
                  <Banner
                    icon={
                      <IconFilledInfo
                        overrides={{
                          size: 'iconSize020',
                          stylePreset: 'inkInverse',
                        }}
                      />
                    }
                  >
                    <ScreenReaderOnly>Important Information:</ScreenReaderOnly>
                    Test banner {counter} content opened: {counter} times
                  </Banner>
                </StyledWrapper>
              </BannerWrapper>
              <hr />
            </>
          );
        }),
    },
  ],
};
