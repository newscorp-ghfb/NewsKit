/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {
  createTheme,
  newskitDarkTheme,
  ThemeProvider,
  UncompiledTheme,
} from '../../theme';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {StorybookSubHeading} from '../../test/storybook-comps';

import {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
  IconOutlinedClose,
  Svg,
  NewsKitIconProps,
} from '..';
import * as customIcons from '../filled/custom';
import {customToNewsKitIcon} from '../custom-to-newskit-icon';

const Container = styled.div<{dark?: boolean}>`
  ${({dark}) => dark && 'background: #000;'}
`;

const Constrain = styled.div`
  width: 60px;
  display: inline-block;
`;

const getTheme = (baseTheme?: UncompiledTheme) =>
  createTheme({
    name: 'my-custom-icons-theme',
    baseTheme,
    overrides: {
      stylePresets: {
        iconCustom: {
          base: {
            iconColor: '{{colors.amber050}}',
          },
        },
      },
    },
  });

const getSocialIconStylePreset = (iconName: string) =>
  `iconSocial${iconName
    .split(/(?=[A-Z])/)
    .filter(x => !/Icon|Filled|Outlined /.test(x))
    .join('')}`;

// Removing IndeterminateProgressIndicator from storybook because it's visual test is failing on Applitools
const {IndeterminateProgressIndicator, ...remainingCustomIcons} = customIcons;

const materialIconsSample = {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
};

const socialIconList = [
  'IconFilledFacebook',
  'IconFilledGitHub',
  'IconFilledTwitter',
  'IconFilledWhatsApp',
  'IconFilledReddit',
  'IconFilledInstagram',
  'IconFilledYoutube',
];

const isSocialIcon = (iconName: string) => socialIconList.includes(iconName);

export default {
  name: 'icons',
  children: [
    {
      name: 'custom-icons',
      type: 'story',
      component: () => (
        <>
          {...Object.entries(remainingCustomIcons).map((entry: any) => {
            const [iconName, Icon] = entry as [
              string,
              React.ComponentType<NewsKitIconProps>,
            ];

            const stylePresetOverride = isSocialIcon(iconName)
              ? getSocialIconStylePreset(iconName)
              : 'iconCustom';

            return (
              <Stack
                flow="horizontal-bottom"
                wrap="wrap"
                spaceInline="sizing020"
                key={iconName}
              >
                <Container>
                  <Icon overrides={{size: 'iconSize020'}} />
                  <Icon overrides={{size: 'iconSize040'}} />
                  <Constrain>
                    <Icon />
                  </Constrain>
                </Container>
                <Container>
                  <ThemeProvider theme={getTheme()}>
                    <Icon
                      overrides={{
                        size: 'iconSize020',
                        stylePreset: stylePresetOverride,
                      }}
                    />
                    <Icon
                      overrides={{
                        size: 'iconSize030',
                        stylePreset: stylePresetOverride,
                      }}
                    />
                  </ThemeProvider>
                </Container>
                <Container dark>
                  <ThemeProvider theme={getTheme(newskitDarkTheme)}>
                    <Icon
                      overrides={{
                        size: 'iconSize020',
                        stylePreset: stylePresetOverride,
                      }}
                    />
                    <Icon
                      overrides={{
                        size: 'iconSize030',
                        stylePreset: stylePresetOverride,
                      }}
                    />
                  </ThemeProvider>
                </Container>
              </Stack>
            );
          })}
        </>
      ),
    },
    {
      name: 'material-icons',
      type: 'story',
      component: () => (
        <>
          {...Object.values(materialIconsSample).map(
            (Icon: React.ComponentType<NewsKitIconProps>) => (
              <div>
                <ThemeProvider theme={getTheme()}>
                  <Icon overrides={{size: 'iconSize020'}} />
                  <Icon overrides={{size: 'iconSize030'}} />
                  <Icon overrides={{size: 'iconSize040'}} />

                  <Icon
                    overrides={{
                      size: 'iconSize020',
                      stylePreset: 'iconCustom',
                    }}
                  />
                  <Icon
                    overrides={{
                      size: 'iconSize030',
                      stylePreset: 'iconCustom',
                    }}
                  />
                  <Icon
                    overrides={{
                      size: 'iconSize040',
                      stylePreset: 'iconCustom',
                    }}
                  />
                  <Constrain>
                    <Icon
                      overrides={{
                        stylePreset: 'iconCustom',
                      }}
                    />
                  </Constrain>
                </ThemeProvider>
              </div>
            ),
          )}
        </>
      ),
    },
    {
      name: 'overridden-icons',
      type: 'story',
      component: () => {
        const MyCustomIcon = customToNewsKitIcon('IconFilledStop', props => (
          <Svg {...props} viewBox="0 0 429 422">
            <g
              fill="none"
              fillRule="evenodd"
              transform="translate(-77.000000, -1738.000000) translate(77.000000, 1738.500000)"
            >
              <circle
                fill="#F0A4A4"
                cx="250.5"
                cy="242.5"
                r="178"
                style={{mixBlendMode: 'multiply'}}
              />
              <circle
                fill="#5166CE"
                cx="195"
                cy="195"
                r="195"
                style={{mixBlendMode: 'multiply'}}
              />
            </g>
          </Svg>
        ));
        const themeWithOverridenIcons = createTheme({
          name: 'my-custom-overridden-icons-theme',
          overrides: {
            icons: {
              IconOutlinedClose: MyCustomIcon,
              Another: MyCustomIcon,
            },
          },
        });

        return (
          <>
            <StorybookSubHeading>IconOutlinedClose default</StorybookSubHeading>
            <IconOutlinedClose
              overrides={{
                size: 'iconSize050',
                stylePreset: 'iconSocialFacebook',
              }}
            />
            <StorybookSubHeading>
              IconOutlinedClose overridden
            </StorybookSubHeading>
            <ThemeProvider theme={themeWithOverridenIcons}>
              <IconOutlinedClose
                overrides={{
                  size: 'iconSize050',
                  stylePreset: 'iconSocialFacebook',
                }}
              />
            </ThemeProvider>
          </>
        );
      },
    },
  ],
};
