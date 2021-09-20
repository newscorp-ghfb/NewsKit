import * as React from 'react';
import {Button} from '..';
import {getColorFromTheme, styled} from '../../utils/style';
import {ButtonOverrides, ButtonSize} from '../types';
import {IconFilledEmail} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {ThemeProvider, createTheme} from '../../theme';

const Container = styled.div`
  margin: 24px;
`;

const Border = styled.div`
  border: solid 1px red;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('xs')} {
    &::before {
      content: none;
    }
  }
`;

const Label = styled.div`
  height: 20px;
  padding: 8px 12px;
  margin: 12px 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

const Background = styled.div<{hasBackground?: boolean}>`
  margin-top: 24px;
  ${({hasBackground, theme}) =>
    hasBackground && {
      background: getColorFromTheme('black')({theme}),
      color: getColorFromTheme('white')({theme}),
    }}
`;

const myCustomTheme = createTheme({
  name: 'my-custom-text-input-theme',
  overrides: {
    stylePresets: {
      myButton: {
        base: {
          borderColor: '#0a68c1',
          borderWidth: '1px',
          borderStyle: 'solid',
          borderRadius: '3px',
          color: '#0a68c1',
          backgroundColor: 'transparent',
        },
      },
    },
  },
});

interface IntentKindStylePreset {
  kind: string;
  intentStylePreset: string;
}

const buttonSizes: Array<{
  buttonSize: ButtonSize;
  iconSize: string;
}> = [
  {buttonSize: ButtonSize.Small, iconSize: 'iconSize040'},
  {buttonSize: ButtonSize.Medium, iconSize: 'iconSize050'},
  {buttonSize: ButtonSize.Large, iconSize: 'iconSize050'},
];

const states = ['Default', 'Focused', 'Disabled', 'Loading'];

const ButtonIntentKindsScenario: React.FC<{
  hasBackground?: boolean;
  name: string;
  buttonIntents: IntentKindStylePreset[];
  overrides: ButtonOverrides;
}> = ({hasBackground = false, name, buttonIntents: buttonKinds, overrides}) => (
  <Background hasBackground={hasBackground}>
    <StorybookSubHeading>{name}</StorybookSubHeading>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {buttonKinds.map(({kind, intentStylePreset: stylePreset}) => {
        const kindOverrides = {...overrides, stylePreset};
        return (
          <Cell xs={4} sm={3}>
            <Stack
              spaceInline="space020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{kind}</h3>
              <Block data-state="Default">
                <Button overrides={kindOverrides}>Button</Button>
              </Block>
              <Block data-state="Focused">
                <Button autoFocus overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Disabled">
                <Button disabled overrides={kindOverrides}>
                  Button
                </Button>
              </Block>
              <Block data-state="Loading">
                <Button aria-label="Loading" overrides={kindOverrides} loading>
                  Button
                </Button>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </Background>
);

export default {
  title: 'NewsKit Light/button',
  component: () => 'None',
};

export const StoryButtonSize = () => (
  <>
    <StorybookSubHeading>Button Size</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        spaceInline="space070"
        spaceStack="space070"
        wrap="wrap"
      >
        <Button size={ButtonSize.Small}>Small button</Button>
        <Button size={ButtonSize.Medium}>Medium button</Button>
        <Button size={ButtonSize.Large}>Large button</Button>
      </Stack>
    </Container>
  </>
);
StoryButtonSize.storyName = 'button-size';

export const StoryFullAndFixedWidthButton = () => (
  <>
    <StorybookSubHeading>Full-Width Button</StorybookSubHeading>
    <Container>
      <Border>
        <Spacer>
          <Button size={ButtonSize.Small} overrides={{width: '100%'}}>
            Small full-width button
          </Button>
        </Spacer>
        <Spacer>
          <Button size={ButtonSize.Medium} overrides={{width: '100%'}}>
            Medium full-width button
          </Button>
        </Spacer>
        <Button size={ButtonSize.Large} overrides={{width: '100%'}}>
          Large full-width button
        </Button>
      </Border>
    </Container>
    <StorybookSubHeading>Fixed-Width Button</StorybookSubHeading>
    <Container>
      <Border>
        <Spacer>
          <Button size={ButtonSize.Small} overrides={{width: 'sizing120'}}>
            Small fixed-width button
          </Button>
        </Spacer>
        <Spacer>
          <Button size={ButtonSize.Medium} overrides={{width: 'sizing120'}}>
            Medium fixed-width button
          </Button>
        </Spacer>
        <Button size={ButtonSize.Large} overrides={{width: 'sizing120'}}>
          Large fixed-width button
        </Button>
      </Border>
    </Container>
    <StorybookSubHeading>Fixed-Width and overflow</StorybookSubHeading>
    <Container>
      <ThemeProvider theme={myCustomTheme}>
        <Border>
          <Spacer>
            <Button
              size={ButtonSize.Small}
              overrides={{
                width: 'sizing120',
                height: 'sizing070',
                stylePreset: 'myButton',
              }}
            >
              Small fixed-width button and overflow with long long text
            </Button>
          </Spacer>
        </Border>
      </ThemeProvider>
    </Container>
  </>
);
StoryFullAndFixedWidthButton.storyName = 'full-and-fixed-width-button';

export const StoryButtonIntentPrimary = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Primary"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidPrimary'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPrimary'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalPrimary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPrimary',
      },
    }}
  />
);
StoryButtonIntentPrimary.storyName = 'button-intent-primary';

export const StoryButtonIntentSecondary = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Secondary"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidSecondary'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedSecondary'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalSecondary'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorSecondary',
      },
    }}
  />
);
StoryButtonIntentSecondary.storyName = 'button-intent-secondary';

export const StoryButtonIntentNegative = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Negative"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidNegative'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedNegative'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalNegative'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorNegative',
      },
    }}
  />
);
StoryButtonIntentNegative.storyName = 'button-intent-negative';

export const StoryButtonIntentPositive = () => (
  <ButtonIntentKindsScenario
    name="Button Intent Positive"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidPositive'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedPositive'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalPositive'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorPositive',
      },
    }}
  />
);
StoryButtonIntentPositive.storyName = 'button-intent-positive';

export const StoryButtonInverse = () => (
  <ButtonIntentKindsScenario
    hasBackground
    name="Button Inverse"
    buttonIntents={[
      {kind: 'Solid', intentStylePreset: 'buttonSolidInverse'},
      {kind: 'Outlined', intentStylePreset: 'buttonOutlinedInverse'},
      {kind: 'Minimal', intentStylePreset: 'buttonMinimalInverse'},
    ]}
    overrides={{
      loadingIndicator: {
        stylePreset: 'indeterminateProgressIndicatorInverse',
      },
    }}
  />
);
StoryButtonInverse.storyName = 'button-inverse';

export const StoryButtonWithIcons = () => (
  <>
    <StorybookSubHeading>Button with leading icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            <IconFilledEmail />
            Button
          </Button>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>Button with trailing icon</StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            Button
            <IconFilledEmail />
          </Button>
        ))}
      </Stack>
    </Container>
    <StorybookSubHeading>
      Button with leading and trailing icon
    </StorybookSubHeading>
    <Container>
      <Stack
        flow="horizontal-center"
        wrap="wrap"
        spaceInline="space040"
        spaceStack="space020"
      >
        {buttonSizes.map(button => (
          <Button size={button.buttonSize}>
            <IconFilledEmail />
            Button
            <IconFilledEmail />
          </Button>
        ))}
      </Stack>
    </Container>
  </>
);
StoryButtonWithIcons.storyName = 'button-with-icons';

export const StoryButtonWithIconSizeOverrides = () => (
  <>
    <StorybookSubHeading>
      Button with icon and inline overridden size
    </StorybookSubHeading>
    <Container>
      <Stack flow="horizontal-center" spaceInline="space060">
        <Button size={buttonSizes[0].buttonSize}>
          <IconFilledEmail />
          Button
          <IconFilledEmail overrides={{size: buttonSizes[0].iconSize}} />
        </Button>
      </Stack>
    </Container>
    <StorybookSubHeading>
      Button with icon and inline overridden size from overrides
    </StorybookSubHeading>
    <Container>
      <Stack flow="horizontal-center" spaceInline="space060">
        <Button
          size={buttonSizes[0].buttonSize}
          overrides={{iconSize: 'iconSize030'}}
        >
          <IconFilledEmail />
          Button
          <IconFilledEmail overrides={{size: buttonSizes[0].iconSize}} />
        </Button>
      </Stack>
    </Container>
  </>
);
StoryButtonWithIconSizeOverrides.storyName = 'button-with-icon-size-overrides';

export const StoryButtonStyleAtBreakpoints = () => (
  <>
    <StorybookSubHeading>Button style at breakpoints</StorybookSubHeading>
    <Container>
      <Button
        overrides={{
          stylePreset: {
            xs: 'buttonOutlinedNegative',
            md: 'buttonSolidPositive',
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
          } as any,
        }}
      >
        Negative XS - Positive MD
      </Button>
    </Container>
  </>
);
StoryButtonStyleAtBreakpoints.storyName = 'button-style-at-breakpoints';

export const StoryButtonLink = () => (
  <React.Fragment>
    <StorybookSubHeading>Button link</StorybookSubHeading>
    <Container>
      <Button href="https://www.newskit.co.uk/">Visit newskit.co.uk</Button>
    </Container>
    <StorybookSubHeading>Button link with overrides</StorybookSubHeading>
    <Container>
      <Button
        href="https://www.newskit.co.uk/"
        overrides={{stylePreset: 'buttonOutlinedPrimary'}}
      >
        Another link to newskit.co.uk
      </Button>
    </Container>
    <StorybookSubHeading>Button link disabled</StorybookSubHeading>
    <Container>
      <Button href="https://www.newskit.co.uk/" disabled>
        Another link to newskit.co.uk
      </Button>
    </Container>
  </React.Fragment>
);
StoryButtonLink.storyName = 'button-link';
