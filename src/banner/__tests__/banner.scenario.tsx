import * as React from 'react';
import {Banner} from '..';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {IconFilledInfo, IconFilledWarning, IconFilledError} from '../../icons';

const myCustomTheme = createTheme({
  name: 'banner-intents-theme',
  overrides: {
    stylePresets: {
      bannerContainerSolidNotice: {
        base: {
          backgroundColor: '{{colors.interfaceNotice010}}',
          color: '{{colors.inkInverse}}',
        },
      },
      bannerContainerSolidNegative: {
        base: {
          backgroundColor: '{{colors.interfaceNegative010}}',
          color: '{{colors.inkInverse}}',
        },
      },
    },
  },
});

const BannerWrapper = styled.div`
  margin-bottom: 24px;
`;

export default {
  name: 'banner',
  children: [
    {
      name: 'banner-default',
      type: 'story',
      component: () => (
        <React.Fragment>
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
        </React.Fragment>
      ),
    },
    {
      name: 'banner-intents',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Banner Intent</StorybookHeading>
          <StorybookSubHeading>Informative (default)</StorybookSubHeading>
          <BannerWrapper>
            <Banner
              icon={
                <IconFilledInfo
                  overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
                />
              }
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Banner>
          </BannerWrapper>
          <ThemeProvider theme={myCustomTheme}>
            <StorybookSubHeading>Notice</StorybookSubHeading>
            <BannerWrapper>
              <Banner
                icon={
                  <IconFilledWarning
                    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
                  />
                }
                overrides={{
                  stylePreset: 'bannerContainerSolidNotice',
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
                    overrides={{size: 'iconSize020', stylePreset: 'inkInverse'}}
                  />
                }
                overrides={{
                  stylePreset: 'bannerContainerSolidNegative',
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Banner>
            </BannerWrapper>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
