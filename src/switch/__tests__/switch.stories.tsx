import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Switch} from '..';
import {styled} from '../../utils';
import {
  Cell,
  Fieldset,
  Grid,
  IconFilledCheck,
  IconFilledClose,
  IconFilledError,
} from '../..';
import {icons, labels, sizeOverrides, sizes, states} from './helpers';

export default {
  title: 'NewsKit Light/switch',
  component: () => 'None',
  disabledRules: [],
};

const Container = styled.div`
  margin: 20px;
  display: flex;
`;

export const StorySwitchDefault = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} sm={4}>
        <StorybookSubHeading>States</StorybookSubHeading>

        {states.map(([id, {checked, ...props}]) => (
          <Container key={id}>
            <Switch {...props} defaultChecked={checked} label={id} />
          </Container>
        ))}
      </Cell>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Sizes</StorybookSubHeading>

        {sizes.map(size => (
          <React.Fragment key={size}>
            <Container>
              <Switch size={size} label={size} />
            </Container>
            <Container>
              <Switch size={size} label={`${size}-checked`} defaultChecked />
            </Container>
          </React.Fragment>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchDefault.storyName = 'switch-default';

export const StorySwitchIcons = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Icons</StorybookSubHeading>

        {icons.map(([id, {icon, onIcon, offIcon, ...props}]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={id}
              overrides={{
                icon,
                onIcon,
                offIcon,
              }}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchIcons.storyName = 'switch-icons';

export const StorySwitchOverrides = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Size / spacing overrides</StorybookSubHeading>

        {sizeOverrides.map(([id, o, ...props]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={id}
              overrides={{
                ...o,
                icon: IconFilledError,
                onIcon: IconFilledCheck,
                offIcon: IconFilledClose,
              }}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchOverrides.storyName = 'switch-overrides';

export const StorySwitchLabels = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Labels</StorybookSubHeading>

        {labels.map(([id, {label, labelPosition}, ...props]) => (
          <Container key={id}>
            <Switch
              defaultChecked
              label={label}
              labelPosition={labelPosition}
              {...props}
            />
          </Container>
        ))}
      </Cell>
    </Grid>
  </>
);

StorySwitchLabels.storyName = 'switch-labels';

export const StorySwitchFieldset = () => (
  <>
    <StorybookHeading>Switch</StorybookHeading>
    <Grid>
      <Cell xs={8} md={4}>
        <StorybookSubHeading>Fieldset</StorybookSubHeading>

        <Container>
          <Fieldset legend="Accessibility Preferences">
            <Switch
              label="Reduced motion"
              defaultChecked
              overrides={{
                icon: IconFilledError,
                onIcon: IconFilledCheck,
                offIcon: IconFilledClose,
              }}
            />
          </Fieldset>
        </Container>
      </Cell>
    </Grid>
  </>
);

StorySwitchFieldset.storyName = 'switch-fieldset';
