import * as React from 'react';
import {IconButton} from '..';
import {styled, getColorCssFromTheme} from '../../utils/style';
import {StorybookSubHeading, StorybookH3} from '../../test/storybook-comps';
import {Block, Cell, Grid, Stack, ButtonOverrides} from '../..';
import {IconFilledEmail, IconFilledLink, IconFilledPause} from '../../icons';
import {ThemeProvider, createTheme} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-text-input-theme',
  overrides: {
    stylePresets: {
      customOutlineColor: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: '{{outlines.outlineStyleDefault}}',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineStyle: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineWidth: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '{{outlines.outlineOffsetDefault}}',
        },
      },
      customOutlineOffset: {
        base: {
          backgroundColor: '{{colors.interactivePrimary030}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          color: '{{colors.inkInverse}}',
          iconColor: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '5px',
          outlineOffset: '5px',
        },
      },
    },
  },
});

const Container = styled.div`
  margin: 24px;
`;

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

interface IntentKindStylePreset {
  kind: string;
  stylePreset: string;
}

const Label = styled.div<{hasBackground?: boolean}>`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({hasBackground}) =>
    getColorCssFromTheme('color', hasBackground ? 'inkInverse' : 'inkBase')};
`;

const Background = styled.div<{hasBackground?: boolean}>`
  margin-top: 24px;
  ${({hasBackground}) =>
    hasBackground && getColorCssFromTheme('background', 'inkBase')};
`;

const IconButtonIntentKindsScenario: React.FC<{
  hasBackground?: boolean;
  name: string;
  buttonKinds: IntentKindStylePreset[];
  overrides: ButtonOverrides;
}> = ({hasBackground = false, name, buttonKinds, overrides}) => (
  <Background hasBackground={hasBackground}>
    <StorybookSubHeading stylePreset={hasBackground ? 'inkInverse' : undefined}>
      {name}
    </StorybookSubHeading>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <StorybookH3 stylePreset={hasBackground ? 'inkInverse' : undefined}>
            State
          </StorybookH3>
          {states.map(state => (
            <Label hasBackground={hasBackground}>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {buttonKinds.map(({kind, stylePreset}) => {
        const kindOverrides = {...overrides, stylePreset};
        return (
          <Cell xs={4} sm={3}>
            <Stack spaceInline="space020" stackDistribution="space-evenly">
              <StorybookH3
                stylePreset={hasBackground ? 'inkInverse' : undefined}
              >
                {kind}
              </StorybookH3>
              <Block data-state="Default">
                <IconButton
                  aria-label="Pause icon"
                  overrides={kindOverrides}
                  size="medium"
                >
                  <IconFilledPause />
                </IconButton>
              </Block>

              <Block data-state="Focused">
                <IconButton
                  aria-label="Link icon"
                  autoFocus
                  overrides={kindOverrides}
                  size="medium"
                >
                  <IconFilledLink />
                </IconButton>
              </Block>

              <Block data-state="Disabled">
                <IconButton
                  aria-label="Email icon"
                  disabled
                  overrides={kindOverrides}
                  size="medium"
                >
                  <IconFilledEmail />
                </IconButton>
              </Block>

              <Block data-state="Loading">
                <IconButton
                  aria-label="Loading indicator"
                  overrides={kindOverrides}
                  size="medium"
                  loading
                />
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </Background>
);

export default {
  title: 'Components/icon-button',
  component: () => 'None',
};

export const StoryIconButtonSizes = () => (
  <>
    <StorybookSubHeading>Icon Button Size</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceStack="space070"
        spaceInline="space070"
        wrap="wrap"
      >
        <IconButton aria-label="Email icon" size="small">
          <IconFilledEmail />
        </IconButton>
        <IconButton aria-label="Email icon" size="medium">
          <IconFilledEmail />
        </IconButton>
        <IconButton aria-label="Email icon" size="large">
          <IconFilledEmail />
        </IconButton>
      </Stack>
    </Container>
  </>
);
StoryIconButtonSizes.storyName = 'icon-button-sizes';

export const StoryIconButtonIntentPrimary = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Primary"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidPrimary'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedPrimary'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalPrimary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    }}
  />
);
StoryIconButtonIntentPrimary.storyName = 'icon-button-intent-primary';

export const StoryIconButtonIntentSecondary = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Secondary"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidSecondary'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedSecondary'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalSecondary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorSecondary',
      },
    }}
  />
);
StoryIconButtonIntentSecondary.storyName = 'icon-button-intent-secondary';

export const StoryIconButtonIntentNegative = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Negative"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidNegative'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedNegative'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalNegative'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorNegative',
      },
    }}
  />
);
StoryIconButtonIntentNegative.storyName = 'icon-button-intent-negative';

export const StoryIconButtonIntentPositive = () => (
  <IconButtonIntentKindsScenario
    name="Icon Button Intent Positive"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidPositive'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedPositive'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalPositive'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPositive',
      },
    }}
  />
);
StoryIconButtonIntentPositive.storyName = 'icon-button-intent-positive';

export const StoryIconButtonInverse = () => (
  <IconButtonIntentKindsScenario
    hasBackground
    name="Icon Button Inverse"
    buttonKinds={[
      {kind: 'Solid', stylePreset: 'iconButtonSolidInverse'},
      {kind: 'Outlined', stylePreset: 'iconButtonOutlinedInverse'},
      {kind: 'Minimal', stylePreset: 'iconButtonMinimalInverse'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorInverse',
      },
    }}
  />
);
StoryIconButtonInverse.storyName = 'icon-button-inverse';

export const StoryIconButtonLink = () => (
  <>
    <StorybookSubHeading>Icon button link</StorybookSubHeading>
    <Container>
      <IconButton aria-label="Link icon" href="https://www.newskit.co.uk/">
        <IconFilledLink />
      </IconButton>
    </Container>
    <StorybookSubHeading>Icon button link with overrides</StorybookSubHeading>
    <Container>
      <IconButton
        aria-label="Link icon"
        href="https://www.newskit.co.uk/"
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        <IconFilledLink />
      </IconButton>
    </Container>
  </>
);
StoryIconButtonLink.storyName = 'icon-button-link';

export const StoryIconButtonOverrides = () => (
  <>
    <StorybookSubHeading>Icon button overrides</StorybookSubHeading>
    <Container>
      <IconButton
        aria-label="Email icon"
        overrides={{
          paddingInline: '50px',
          paddingBlock: '30px',
          marginInline: '50px',
          marginBlock: '30px',
        }}
      >
        <IconFilledEmail />
      </IconButton>
    </Container>
  </>
);
StoryIconButtonOverrides.storyName = 'icon-button-overrides';

export const StoryIconButtonWithOutlineOverride = () => (
  <>
    <StorybookSubHeading>Icon Button with custom outline</StorybookSubHeading>
    <ThemeProvider theme={myCustomTheme}>
      <StorybookSubHeading>Custom Color</StorybookSubHeading>
      <Container>
        <IconButton
          aria-label="Link icon"
          href="https://www.newskit.co.uk/"
          overrides={{stylePreset: 'customOutlineColor'}}
        >
          <IconFilledLink />
        </IconButton>
      </Container>
      <StorybookSubHeading>Custom Style</StorybookSubHeading>
      <Container>
        <IconButton
          aria-label="Link icon"
          href="https://www.newskit.co.uk/"
          overrides={{stylePreset: 'customOutlineStyle'}}
        >
          <IconFilledLink />
        </IconButton>
      </Container>
      <StorybookSubHeading>Custom Width</StorybookSubHeading>
      <Container>
        <IconButton
          aria-label="Link icon"
          href="https://www.newskit.co.uk/"
          overrides={{stylePreset: 'customOutlineWidth'}}
        >
          <IconFilledLink />
        </IconButton>
      </Container>
      <StorybookSubHeading>Custom Offset</StorybookSubHeading>
      <Container>
        <IconButton
          aria-label="Link icon"
          href="https://www.newskit.co.uk/"
          overrides={{stylePreset: 'customOutlineOffset'}}
        >
          <IconFilledLink />
        </IconButton>
      </Container>
    </ThemeProvider>
  </>
);
StoryIconButtonWithOutlineOverride.storyName =
  'icon-button-with-outline-overrides';
