/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';

import {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
  SvgProps,
} from '..';
import * as customIcons from '../filled/custom';

const Constrain = styled.div`
  max-width: 100px;
  display: inline-block;
`;

const stylePresets = {
  iconPositive: {
    base: {
      iconColor: '{{colors.inkNegative}}',
    },
  },
  iconNegative: {
    base: {
      iconColor: '{{colors.inkPositive}}',
    },
  },
  iconInformative: {
    base: {
      iconColor: '{{colors.inkNotice}}',
    },
  },
  iconNotice: {
    base: {
      iconColor: '{{colors.inkInformative}}',
    },
  },
};

const myCustomTheme = createTheme({
  name: 'my-custom-icons-theme',
  overrides: {
    stylePresets,
  },
});

// Removing IndeterminateProgressIndicator from storybook because it's visual test is failing on Applitools
const {IndeterminateProgressIndicator, ...remainingCustomIcons} = customIcons;

const materialIconsSample = {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
};

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
              React.ComponentType<SvgProps>,
            ];
            return (
              <Stack flow="horizontal-bottom" wrap="wrap">
                <ThemeProvider theme={myCustomTheme}>
                  <Icon overrides={{size: 'iconSize030'}} />
                  <Icon overrides={{size: 'iconSize040'}} />
                  <Icon overrides={{size: 'iconSize050'}} />
                  {![
                    'IconFilledFacebook',
                    'IconFilledGitHub',
                    'IconFilledTwitter',
                    'IconFilledWhatsApp',
                  ].includes(iconName) && (
                    <>
                      {...Object.keys(stylePresets).map(stylePreset => (
                        <Icon
                          overrides={{
                            size: 'iconSize050',
                            stylePreset,
                          }}
                        />
                      ))}
                      {...Object.keys(stylePresets).map(stylePreset => (
                        <Constrain>
                          <Icon
                            overrides={{
                              stylePreset,
                            }}
                          />
                        </Constrain>
                      ))}
                    </>
                  )}
                </ThemeProvider>
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
            (Icon: React.ComponentType<SvgProps>) => (
              <div>
                <ThemeProvider theme={myCustomTheme}>
                  <Icon overrides={{size: 'iconSize030'}} />
                  <Icon overrides={{size: 'iconSize040'}} />
                  <Icon overrides={{size: 'iconSize050'}} />
                  <>
                    {...Object.keys(stylePresets).map(stylePreset => (
                      <Icon
                        overrides={{
                          size: 'iconSize050',
                          stylePreset,
                        }}
                      />
                    ))}
                    {...Object.keys(stylePresets).map(stylePreset => (
                      <Constrain>
                        <Icon
                          overrides={{
                            stylePreset,
                          }}
                        />
                      </Constrain>
                    ))}
                  </>
                </ThemeProvider>
              </div>
            ),
          )}
        </>
      ),
    },
  ],
};
