import React from 'react';
import {Button} from '../../button';
import {Drawer} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';

const Box = styled.div`
  width: 400px;
`;

const myCustomTheme = createTheme({
  name: 'my-custom-drawer-theme',
  overrides: {
    stylePresets: {
      overlayCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
        },
      },
      drawerPanelCustom: {
        base: {
          backgroundColor: '{{colors.green010}}',
          boxShadow: '{{shadows.shadow030}}',
        },
      },
    },
  },
});

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra. Integer non velit vitae elit porta condimentum. Cras ultrices lectus eu porttitor volutpat. In hac habitasse platea dictumst. Integer maximus leo quis sapien aliquet finibus. Cras lobortis leo quis massa commodo ornare. Donec ac ligula sed mauris sodales pretium id eu nibh. Pellentesque et eros viverra, dignissim ante in, tincidunt eros. Curabitur mattis purus dolor, non aliquam sapien auctor quis. Morbi sit amet leo in urna dictum imperdiet vitae sed velit. In auctor nulla sed lectus ultricies dignissim. In mattis.';

export default {
  name: 'drawer',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

          return (
            <>
              <StorybookHeading>Default drawer</StorybookHeading>
              <Button onClick={open}>Open Drawer</Button>
              <p>SCROLL DOWN </p>
              <Box>
                {Array.from({length: 5}, (_, i) => (
                  <>
                    {i === 3 && (
                      <Button onClick={open}>
                        Another button to open the drawer
                      </Button>
                    )}
                    <p key={i}>{content}</p>
                  </>
                ))}
              </Box>
              <Drawer open={isActive} onDismiss={close}>
                {Array.from({length: 5}, (_, i) => (
                  <p key={`${i}inner`}>{content}</p>
                ))}
              </Drawer>
            </>
          );
        }),
    },
    {
      name: 'left placement',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

          return (
            <>
              <StorybookHeading>
                Default positioned on the left
              </StorybookHeading>
              <Button onClick={open}>Open Drawer</Button>
              <Drawer placement="left" open={isActive} onDismiss={close} />
            </>
          );
        }),
    },
    {
      name: 'with overrides',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

          return (
            <>
              <StorybookHeading>Default with overrides</StorybookHeading>
              <ThemeProvider theme={myCustomTheme}>
                <Button onClick={open}>Open Drawer</Button>
                <Drawer
                  open={isActive}
                  onDismiss={close}
                  overrides={{
                    overlay: {
                      stylePreset: 'overlayCustom',
                    },
                    panel: {
                      stylePreset: 'drawerPanelCustom',
                      size: '50%',
                      maxSize: '40%',
                      minSize: '200px',
                    },
                  }}
                />
              </ThemeProvider>
            </>
          );
        }),
    },
  ],
};
