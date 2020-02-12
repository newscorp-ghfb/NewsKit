import * as React from 'react';

import {Button} from '..';
import {styled} from '../../utils/style';
import {ButtonSize} from '../types';
import {Pause, Email, CopyLink} from '../../icons';
import {Stack, StackDistribution} from '../../stack';
import {Grid, Cell} from '../../grid';
import {getMediaQueryFromTheme} from '../../utils/responsive-helpers';
import {newskitLightTheme} from '../../themes';

export const name = 'button';

const Container = styled.div`
  margin: 24px;
`;

const Block = styled.div`
  display: flex;
  align-items: center;
  &::before {
    content: attr(data-state);
    margin-right: 48px;
  }

  ${getMediaQueryFromTheme('sm')} {
    &::before {
      content: none;
    }
  }
`;

const Label = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
`;

const Spacer = styled.div`
  margin-bottom: 20px;
`;

enum ButtonStyle {
  Solid = 'interactive010',
  Outlined = 'interactive050',
  Minimal = 'interactive060',
}

const states = ['Default', 'Focused', 'Disabled'];

export const component = () => (
  <React.Fragment>
    <h1>Buttons</h1>
    <h2>Size</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
        <Button>Small button</Button>
        <Button $size={ButtonSize.Medium}>Medium button</Button>
        <Button $size={ButtonSize.Large}>Large button</Button>
      </Stack>
    </Container>

    <h2>States</h2>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {Object.keys(ButtonStyle).map(style => {
        const stylePreset = ButtonStyle[style as keyof typeof ButtonStyle];

        return (
          <Cell xs={12} sm={3}>
            <Stack
              space="sizing020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{style}</h3>
              <Block theme={newskitLightTheme} data-state="Default">
                <Button $stylePreset={stylePreset}>Button</Button>
              </Block>

              <Block theme={newskitLightTheme} data-state="Focused">
                <Button autoFocus $stylePreset={stylePreset}>
                  Button
                </Button>
              </Block>

              <Block theme={newskitLightTheme} data-state="Disabled">
                <Button disabled $stylePreset={stylePreset}>
                  Button
                </Button>
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>

    <h1>Icon Buttons</h1>
    <h2>Size</h2>
    <Container>
      <Stack flow="horizontal-center" space="sizing070" wrap="wrap">
        <Button icon={Pause} $size={ButtonSize.Small} />
        <Button icon={Pause} $size={ButtonSize.Medium} />
        <Button icon={Pause} $size={ButtonSize.Large} />
      </Stack>
    </Container>

    <h2>Icon with text</h2>
    <Container>
      {[Pause, Email, CopyLink].map(IconType => (
        <Spacer>
          <Stack flow="horizontal-center" space="sizing060">
            {[
              {buttonSize: ButtonSize.Small, iconSize: 'iconSize010'},
              {buttonSize: ButtonSize.Medium, iconSize: 'iconSize020'},
              {buttonSize: ButtonSize.Large, iconSize: 'iconSize020'},
            ].map(button => (
              <Button $size={button.buttonSize} icon={IconType}>
                Button
              </Button>
            ))}
          </Stack>
        </Spacer>
      ))}
    </Container>

    <h2>States</h2>
    <Grid>
      <Cell xsHidden sm={3}>
        <Stack>
          <h3>State</h3>
          {states.map(state => (
            <Label>{state}</Label>
          ))}
        </Stack>
      </Cell>
      {Object.keys(ButtonStyle).map(style => {
        const stylePreset = ButtonStyle[style as keyof typeof ButtonStyle];

        return (
          <Cell xs={12} sm={3}>
            <Stack
              space="sizing020"
              stackDistribution={StackDistribution.SpaceEvenly}
            >
              <h3>{style}</h3>
              <Block theme={newskitLightTheme} data-state="Default">
                <Button icon={Pause} $stylePreset={stylePreset} />
              </Block>

              <Block theme={newskitLightTheme} data-state="Focused">
                <Button icon={CopyLink} autoFocus $stylePreset={stylePreset} />
              </Block>

              <Block theme={newskitLightTheme} data-state="Disabled">
                <Button icon={Email} disabled $stylePreset={stylePreset} />
              </Block>
            </Stack>
          </Cell>
        );
      })}
    </Grid>
  </React.Fragment>
);
