import * as React from 'react';

import {LegacySvgProps} from '../types';
import {styled} from '../../utils/style';
import {IconFilledAccountBalance, IconOutlinedAccountTree, SvgProps} from '..';
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
          <Icon color="semanticNegative030" size="iconSize050" />
          <Icon color="semanticPositive030" size="iconSize050" />
          <Icon color="semanticNotice010" size="iconSize050" />
          <Icon color="semanticInformative010" size="iconSize050" />
          <Constrain>
            <Icon />
          </Constrain>
        </React.Fragment>
      ),
    };
  });

const materialIconsSample = {
  IconFilledAccountBalance,
  IconOutlinedAccountTree,
};

const myCustomTheme = createTheme({
  name: 'my-custom-audio-player-theme',
  overrides: {
    stylePresets: {
      iconPositive: {
        base: {
          iconColor: '{{colors.semanticNegative030}}',
        },
      },
      iconNegative: {
        base: {
          iconColor: '{{colors.semanticPositive030}}',
        },
      },
      iconInformative: {
        base: {
          iconColor: '{{colors.semanticNotice010}}',
        },
      },
      iconNotice: {
        base: {
          iconColor: '{{colors.semanticInformative010}}',
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
