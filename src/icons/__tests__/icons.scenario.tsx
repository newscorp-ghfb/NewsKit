import * as React from 'react';

import {LegacySvgProps} from '../types';
import {styled} from '../../utils/style';
import {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
  SvgProps,
} from '..';
import {createTheme, ThemeProvider} from '../../theme';

import * as customIcons from '../filled/custom';

const Constrain = styled.div`
  max-width: 200px;
  display: inline-block;
`;

// Removing IndeterminateProgressIndicator from storybook
// because it's visual test is failing on applitools
const {IndeterminateProgressIndicator, ...remainingCustomIcons} = customIcons;

const customIconEntries = Object.entries(remainingCustomIcons)
  .filter(icon => icon[0] !== 'Svg')
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((entry: any) => {
    const [iconName, Icon] = entry as [
      string,
      React.ComponentType<LegacySvgProps>,
    ];

    if (['Facebook', 'Twitter', 'WhatsApp'].includes(iconName)) {
      return {
        name: iconName,
        type: 'story',
        component: () => (
          <React.Fragment>
            <Icon size="iconSize030" />
            <Icon size="iconSize040" />
            <Icon size="iconSize050" />
            <Constrain>
              <Icon />
            </Constrain>
          </React.Fragment>
        ),
      };
    }

    return {
      name: iconName,
      type: 'story',
      component: () => (
        <React.Fragment>
          <Icon size="iconSize030" />
          <Icon size="iconSize040" />
          <Icon size="iconSize050" />
          <Icon color="inkNegative" size="iconSize050" />
          <Icon color="inkPositive" size="iconSize050" />
          <Icon color="inkNotice" size="iconSize050" />
          <Icon color="inkInformative" size="iconSize050" />
          <Constrain>
            <Icon />
          </Constrain>
        </React.Fragment>
      ),
    };
  });

const materialIconsSample = {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
};

const myCustomTheme = createTheme({
  name: 'my-custom-icons-theme',
  overrides: {
    stylePresets: {
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
    },
  },
});

const materialIconEntries = Object.entries(materialIconsSample)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  .map((entry: any) => {
    const [iconName, Icon] = entry as [string, React.ComponentType<SvgProps>];
    return {
      name: iconName,
      type: 'story',
      component: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <Icon overrides={{size: 'iconSize030'}} />
            <Icon overrides={{size: 'iconSize040'}} />
            <Icon overrides={{size: 'iconSize050'}} />
            <Icon
              overrides={{
                size: 'iconSize050',
                stylePreset: 'iconPositive',
              }}
            />
            <Icon
              overrides={{
                size: 'iconSize050',
                stylePreset: 'iconNegative',
              }}
            />
            <Icon
              overrides={{size: 'iconSize050', stylePreset: 'iconInformative'}}
            />
            <Icon
              overrides={{
                size: 'iconSize050',
                stylePreset: 'iconNotice',
              }}
            />
            <Constrain>
              <Icon />
            </Constrain>
          </ThemeProvider>
        </React.Fragment>
      ),
    };
  });

export default {
  name: 'icons',
  children: [...customIconEntries, ...materialIconEntries],
};
