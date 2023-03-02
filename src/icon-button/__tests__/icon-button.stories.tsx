import * as React from 'react';
import {Story as StoryType} from '@storybook/react';
import {IconButton} from '..';
import {styled, getColorCssFromTheme} from '../../utils/style';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {Tooltip, GridLayoutItem, TextBlock, GridLayout} from '../..';
import {IconFilledAddCircle, IconFilledLaunch} from '../../icons';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const DEFAULT_BUTTON_COLS = 'repeat(auto-fill, minmax(100px, 1fr))';

const InverseContainer = styled.div`
  margin: -16px;
  ${getColorCssFromTheme('backgroundColor', 'inkContrast')};
  ${getColorCssFromTheme('color', 'inkInverse')};
`;

export const StoryIconButtonDefault = () => (
  <StorybookPage>
    <StorybookCase>
      <IconButton aria-label="icon button">
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonDefault.storyName = 'Default';

export const StoryIconButtonSize = () => (
  <StorybookPage columns="1fr 1fr 1fr">
    <StorybookCase title="Small">
      <IconButton size="small" aria-label="small icon button">
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
    <StorybookCase title="Medium">
      <IconButton size="medium" aria-label="medium icon button">
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
    <StorybookCase title="Large">
      <IconButton size="large" aria-label="large icon button">
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonSize.storyName = 'Size';

export const StoryIconButtonPrimary = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Primary';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `iconButton${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody030"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <IconButton
                  overrides={{stylePreset}}
                  aria-label="default icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Focus">
                <IconButton
                  overrides={{stylePreset}}
                  autoFocus
                  aria-label="focus icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <IconButton
                  overrides={{stylePreset}}
                  disabled
                  aria-label="disabled icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Loading">
                <IconButton
                  aria-label="loading icon button"
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryIconButtonPrimary.storyName = 'Primary';

export const StoryIconButtonSecondary = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Secondary';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `iconButton${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody030"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <IconButton
                  overrides={{stylePreset}}
                  aria-label="default icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Focus">
                <IconButton
                  overrides={{stylePreset}}
                  autoFocus
                  aria-label="focus icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <IconButton
                  overrides={{stylePreset}}
                  disabled
                  aria-label="disabled icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Loading">
                <IconButton
                  aria-label="loading icon button"
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryIconButtonSecondary.storyName = 'Secondary';

export const StoryIconButtonNegative = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Negative';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `iconButton${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody030"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <IconButton
                  overrides={{stylePreset}}
                  aria-label="default icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Focus">
                <IconButton
                  overrides={{stylePreset}}
                  autoFocus
                  aria-label="focus icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <IconButton
                  overrides={{stylePreset}}
                  disabled
                  aria-label="disabled icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Loading">
                <IconButton
                  aria-label="loading icon button"
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryIconButtonNegative.storyName = 'Negative';

export const StoryIconButtonPositive = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Positive';
  return (
    <StorybookPage rowGap="space090">
      {appearances.map(appearance => {
        const stylePreset = `iconButton${appearance}${intent}`;
        return (
          <GridLayoutItem key={appearance + intent} column="1/-1">
            <TextBlock
              typographyPreset="utilityBody030"
              marginBlockEnd="space070"
            >
              {appearance}
            </TextBlock>
            <GridLayout
              rowGap="space080"
              columnGap="space080"
              columns={DEFAULT_BUTTON_COLS}
            >
              <StorybookCase title="Default">
                <IconButton
                  overrides={{stylePreset}}
                  aria-label="default icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Focus">
                <IconButton
                  overrides={{stylePreset}}
                  autoFocus
                  aria-label="focus icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Disabled">
                <IconButton
                  overrides={{stylePreset}}
                  disabled
                  aria-label="disabled icon button"
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
              <StorybookCase title="Loading">
                <IconButton
                  aria-label="loading icon button"
                  overrides={{
                    stylePreset,
                    loadingIndicator: {
                      stylePreset: `indeterminateProgressIndicator${intent}`,
                    },
                  }}
                  loading
                >
                  <IconFilledAddCircle />
                </IconButton>
              </StorybookCase>
            </GridLayout>
          </GridLayoutItem>
        );
      })}
    </StorybookPage>
  );
};
StoryIconButtonPositive.storyName = 'Positive';

export const StoryIconButtonInverse = () => {
  const appearances = ['Solid', 'Outlined', 'Minimal'];
  const intent = 'Inverse';
  return (
    <InverseContainer>
      <StorybookPage
        overrides={{
          paddingBlock: 'space070',
          marginInline: 'space020',
          paddingInline: 'space050',
        }}
        rowGap="space090"
      >
        {appearances.map(appearance => {
          const stylePreset = `iconButton${appearance}${intent}`;
          return (
            <GridLayoutItem key={appearance + intent} column="1/-1">
              <TextBlock
                typographyPreset="utilityBody030"
                marginBlockEnd="space070"
              >
                {appearance}
              </TextBlock>
              <GridLayout
                rowGap="space080"
                columnGap="space080"
                columns={DEFAULT_BUTTON_COLS}
              >
                <StorybookCase inverse title="Default">
                  <IconButton
                    overrides={{stylePreset}}
                    aria-label="default icon button"
                  >
                    <IconFilledAddCircle />
                  </IconButton>
                </StorybookCase>
                <StorybookCase inverse title="Focus">
                  <IconButton
                    overrides={{stylePreset}}
                    autoFocus
                    aria-label="focus icon button"
                  >
                    <IconFilledAddCircle />
                  </IconButton>
                </StorybookCase>
                <StorybookCase inverse title="Disabled">
                  <IconButton
                    overrides={{stylePreset}}
                    disabled
                    aria-label="disabled icon button"
                  >
                    <IconFilledAddCircle />
                  </IconButton>
                </StorybookCase>
                <StorybookCase inverse title="Loading">
                  <IconButton
                    aria-label="loading icon button"
                    overrides={{
                      stylePreset,
                      loadingIndicator: {
                        stylePreset: `indeterminateProgressIndicator${intent}`,
                      },
                    }}
                    loading
                  >
                    <IconFilledAddCircle />
                  </IconButton>
                </StorybookCase>
              </GridLayout>
            </GridLayoutItem>
          );
        })}
      </StorybookPage>
    </InverseContainer>
  );
};
StoryIconButtonInverse.storyName = 'Inverse';

export const StoryIconButtonTooltip = () => (
  <StorybookPage>
    <StorybookCase>
      <Tooltip
        content="External link"
        asLabel
        placement="right"
        trigger={['focus', 'hover']}
      >
        <IconButton aria-label="tooltip icon button">
          <IconFilledLaunch />
        </IconButton>
      </Tooltip>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonTooltip.storyName = 'Tooltip';

export const StoryIconButtonAsLink = () => (
  <StorybookPage>
    <StorybookCase>
      <IconButton
        aria-label="link icon button"
        target="_blank"
        href="https://www.newskit.co.uk/"
      >
        <IconFilledLaunch />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonAsLink.storyName = 'As a link';

export const StoryIconButtonStylingOverrides = () => (
  <StorybookPage>
    <StorybookCase>
      <IconButton
        overrides={{stylePreset: 'stylingOverrides'}}
        aria-label="styling overrides icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonStylingOverrides.storyName = 'Styling overrides';

export const StoryIconButtonOverrides = () => (
  <StorybookPage>
    <StorybookCase title="Logical props">
      <IconButton
        overrides={{
          stylePreset: 'customLogicalPropsStyle',
          paddingInline: 'space060',
          paddingBlock: 'space050',
        }}
        aria-label="logical props icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
    <StorybookCase title="Custom outline">
      <IconButton
        overrides={{stylePreset: 'customOutlineStyle'}}
        aria-label="custom outline icon button"
      >
        <IconFilledAddCircle />
      </IconButton>
    </StorybookCase>
  </StorybookPage>
);
StoryIconButtonOverrides.storyName = 'Overrides';

const iconButtonCustomThemeObject: CreateThemeArgs = {
  name: 'icon-button-custom-theme',
  overrides: {
    stylePresets: {
      customLogicalPropsStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusRounded050}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusRounded050}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '10px',
        },
      },
      stylingOverrides: {
        base: {
          backgroundColor: '{{colors.inkBrand010}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.interfaceInformative020}}',
        },
      },
    },
  },
};

export default {
  title: 'Components/Icon button',
  component: IconButton,
  parameters: {
    nkDocs: {
      title: 'Icon button',
      url: 'https://newskit.co.uk/components/button',
      description:
        'Icon buttons allow users to make choices, take actions, and help guide around an interface with a single tap.',
    },
  },
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          iconButtonCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
