/* eslint-disable @typescript-eslint/no-explicit-any */
import * as React from 'react';
import {createTheme, ThemeProvider, UncompiledTheme} from '../../theme';
import {styled} from '../../utils/style';
import {Stack} from '../../stack';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {themeObject} from '../../test/theme-select-object';

import {
  IconFilledAccountBalance,
  IconOutlinedAccountBalance,
  IconFilledAccountTree,
  IconOutlinedAccountTree,
  IconOutlinedClose,
  Svg,
  NewsKitIcon,
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

const getCustomTheme = (baseTheme?: UncompiledTheme) =>
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
        iconCustomWithTransitions: {
          base: {
            iconColor: '{{colors.amber050}}',
          },
          hover: {
            iconColor: '{{colors.green050}}',
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
  title: 'NewsKit Light/icons',
  component: () => 'None',
  decorators: [
    (Story, context) => (
      <ThemeProvider
        theme={getCustomTheme(
          themeObject[context?.globals?.backgrounds?.value || '#ffffff'],
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

export const StoryCustomIcons = () => (
  <>
    {Object.entries(remainingCustomIcons).map((entry: any) => {
      const [iconName, Icon] = entry as [string, NewsKitIcon];

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
            <Constrain>
              <Icon />
            </Constrain>
            <Icon overrides={{size: 'iconSize020'}} />
            <Icon
              overrides={{
                size: {
                  xs: 'iconSize010',
                  sm: 'iconSize020',
                  md: 'iconSize030',
                  lg: 'iconSize040',
                  xl: 'iconSize050',
                },
              }}
            />
          </Container>
          <Container>
            <Constrain>
              <Icon
                overrides={{
                  stylePreset: stylePresetOverride,
                }}
              />
            </Constrain>
            <Icon
              overrides={{
                size: 'iconSize020',
                stylePreset: stylePresetOverride,
              }}
            />
            {/* </ThemeProvider> */}
          </Container>
          <Container dark>
            {/* <ThemeProvider theme={getTheme(newskitDarkTheme)}> */}
            <Constrain>
              <Icon
                overrides={{
                  stylePreset: stylePresetOverride,
                }}
              />
            </Constrain>
            <Icon
              overrides={{
                size: 'iconSize020',
                stylePreset: stylePresetOverride,
              }}
            />
          </Container>
        </Stack>
      );
    })}
  </>
);
StoryCustomIcons.storyName = 'custom-icons';

export const StoryMaterialIcons = () => (
  <>
    {Object.values(materialIconsSample).map((Icon: NewsKitIcon) => (
      <div>
        <Constrain>
          <Icon />
        </Constrain>
        <Icon overrides={{size: 'iconSize030'}} />
        <Icon
          overrides={{
            size: {
              xs: 'iconSize010',
              sm: 'iconSize020',
              md: 'iconSize030',
              lg: 'iconSize040',
              xl: 'iconSize050',
            },
          }}
        />

        <Constrain>
          <Icon
            overrides={{
              stylePreset: 'iconCustom',
            }}
          />
        </Constrain>
        <Icon
          overrides={{
            size: 'iconSize020',
            stylePreset: 'iconCustom',
          }}
        />
      </div>
    ))}
  </>
);
StoryMaterialIcons.storyName = 'material-icons';

export const StoryOverriddenIcons = () => {
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
      <StorybookSubHeading>IconOutlinedClose overridden</StorybookSubHeading>
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
};
StoryOverriddenIcons.storyName = 'overridden-icons';

export const StoryIconsTransition = () => (
  <>
    {Object.values([IconFilledAccountBalance]).map((Icon: NewsKitIcon) => (
      <Constrain>
        <StorybookSubHeading>Icon with transition</StorybookSubHeading>
        <Icon
          overrides={{
            stylePreset: 'iconCustomWithTransitions',
          }}
        />
      </Constrain>
    ))}
  </>
);
StoryIconsTransition.storyName = 'icons-transition-overrides';

export const StoryIconsLogicalProps = () => (
  <Constrain>
    <StorybookSubHeading>Icon with logical props</StorybookSubHeading>
    <IconFilledAccountBalance
      overrides={{
        marginBlock: '20px',
      }}
    />
  </Constrain>
);
StoryIconsLogicalProps.storyName = 'icons-logical-props';
