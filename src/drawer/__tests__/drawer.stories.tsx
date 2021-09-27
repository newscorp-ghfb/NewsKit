/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Drawer} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {Link} from '../../link';
import {TextInput} from '../../text-input';
import {Block} from '../../block';

const Box = styled.div`
  width: 400px;
`;

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra. Integer non velit vitae elit porta condimentum. Cras ultrices lectus eu porttitor volutpat. In hac habitasse platea dictumst. Integer maximus leo quis sapien aliquet finibus. Cras lobortis leo quis massa commodo ornare. Donec ac ligula sed mauris sodales pretium id eu nibh. Pellentesque et eros viverra, dignissim ante in, tincidunt eros. Curabitur mattis purus dolor, non aliquam sapien auctor quis. Morbi sit amet leo in urna dictum imperdiet vitae sed velit. In auctor nulla sed lectus ultricies dignissim. In mattis.';

export default {
  title: 'NewsKit Light/drawer',
  component: () => 'None',
};

export const StoryDefault = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);
    const [placement, setPlacement] = React.useState('left');

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    const onChangeValue = (ev: React.ChangeEvent<HTMLDivElement>) =>
      setPlacement((ev.target as HTMLInputElement).value);

    return (
      <div data-testid="scrollable-drawer">
        <StorybookHeading>Default drawer</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>
        <Block as="span" spaceInset="space030" onChange={onChangeValue}>
          <label htmlFor="drawer_top">
            top:
            <input type="radio" value="top" id="drawer_top" name="placement" />
          </label>
          <label htmlFor="drawer_left">
            left:
            <input
              type="radio"
              value="left"
              id="drawer_left"
              name="placement"
              defaultChecked
            />
          </label>
          <label htmlFor="drawer_bottom">
            bottom:
            <input
              type="radio"
              value="bottom"
              id="drawer_bottom"
              name="placement"
            />
          </label>
          <label htmlFor="drawer_right">
            right:
            <input
              type="radio"
              value="right"
              id="drawer_right"
              name="placement"
            />
          </label>
        </Block>

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
        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement={placement as 'top' | 'left' | 'right' | 'bottom'}
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
            lacus. Pellentesque eu odio <Link href="/">Test link 1</Link>{' '}
            sapien. Donec finibus pellentesque est porta dictum. Suspendisse
            venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat
            risus quis, porta eros. Aliquam ultricies ac orci viverra gravida.
            Ut sodales odio tempor sodales viverra. In condimentum tincidunt
            fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum
            vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu
            sem varius volutpat. Ut vitae purus et enim imperdiet finibus.
            Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc,
            interdum.
          </p>
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            scelerisque sapien. Praesent mollis vestibulum nunc at blandit.
            Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
            Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac
            urna <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
            ligula. Sed dapibus, enim sed tristique gravida, nisl dolor
            malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et
            enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula
            sit amet, posuere ipsum.
          </p>
          <div>
            <Button>Remind me later</Button>
            <Button>Ok</Button>
          </div>
        </Drawer>
      </div>
    );
  });
StoryDefault.storyName = 'default';
StoryDefault.parameters = {eyes: {include: false}};

export const StoryWithAriaAttributes = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    return (
      <>
        <StorybookHeading>Drawer with aria attributes</StorybookHeading>
        <Button onClick={open}>Open Drawer</Button>
        <Drawer
          open={isActive}
          onDismiss={close}
          ariaLabelledby="drawerHeader"
          ariaDescribedby="description purpose"
          header={<div id="drawerHeader">Overriden drawer header</div>}
        >
          <div id="description">Overriden drawer components</div>
          <div id="purpose">Showing different styles</div>
        </Drawer>
      </>
    );
  });
StoryWithAriaAttributes.storyName = 'with aria attributes';
StoryWithAriaAttributes.parameters = {eyes: {include: false}};

export const StoryWithRestoreFocusAndCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    const elementToRestoreFocusTo = document.getElementById('test-button') as
      | HTMLElement
      | undefined;

    return (
      <div>
        <StorybookHeading>Drawer with custom auto-focus</StorybookHeading>
        <p>Drawer with autofocus using data-autofocus attribute</p>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>
        <br />
        <br />
        <Button id="test-button">Takes refocus</Button>

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          header="Header"
          restoreFocusTo={elementToRestoreFocusTo}
        >
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>

          <div>
            <Button>Remind me later</Button>
            <Button data-autofocus>Ok</Button>
          </div>
        </Drawer>
      </div>
    );
  });
StoryWithRestoreFocusAndCustomAutofocus.storyName =
  'with restore focus and custom autofocus';
StoryWithRestoreFocusAndCustomAutofocus.parameters = {eyes: {include: false}};

export const StoryWithHiddenOverlay = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    return (
      <div>
        <StorybookHeading>Drawer with hidden overlay</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>
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
        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement="right"
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
            lacus. Pellentesque eu odio <Link href="/">Test link 1</Link>{' '}
            sapien. Donec finibus pellentesque est porta dictum. Suspendisse
            venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat
            risus quis, porta eros. Aliquam ultricies ac orci viverra gravida.
            Ut sodales odio tempor sodales viverra. In condimentum tincidunt
            fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum
            vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu
            sem varius volutpat. Ut vitae purus et enim imperdiet finibus.
            Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc,
            interdum.
          </p>
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            scelerisque sapien. Praesent mollis vestibulum nunc at blandit.
            Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
            Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac
            urna <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
            ligula. Sed dapibus, enim sed tristique gravida, nisl dolor
            malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et
            enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula
            sit amet, posuere ipsum.
          </p>
          <div>
            <Button>Remind me later</Button>
            <Button>Ok</Button>
          </div>
        </Drawer>
      </div>
    );
  });
StoryWithHiddenOverlay.storyName = 'hidden overlay';
StoryWithHiddenOverlay.parameters = {eyes: {include: false}};

export const StoryWithDisabledFocusTrap = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    return (
      <div>
        <StorybookHeading>Drawer with disabled focus trap</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>

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
        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement="right"
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          disableFocusTrap
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
            lacus. Pellentesque eu odio <Link href="/">Test link 1</Link>{' '}
            sapien. Donec finibus pellentesque est porta dictum. Suspendisse
            venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat
            risus quis, porta eros. Aliquam ultricies ac orci viverra gravida.
            Ut sodales odio tempor sodales viverra. In condimentum tincidunt
            fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum
            vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu
            sem varius volutpat. Ut vitae purus et enim imperdiet finibus.
            Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc,
            interdum.
          </p>
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            scelerisque sapien. Praesent mollis vestibulum nunc at blandit.
            Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
            Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac
            urna <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
            ligula. Sed dapibus, enim sed tristique gravida, nisl dolor
            malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et
            enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula
            sit amet, posuere ipsum.
          </p>
          <div>
            <Button>Remind me later</Button>
            <Button>Ok</Button>
          </div>
        </Drawer>
      </div>
    );
  });
StoryWithDisabledFocusTrap.storyName = 'disabled focus trap';
StoryWithDisabledFocusTrap.parameters = {eyes: {include: false}};

export const StoryModelessDrawer = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    return (
      <div>
        <StorybookHeading>Modeless Drawer</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement="right"
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          disableFocusTrap
          hideOverlay
        >
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
            lacus. Pellentesque eu odio <Link href="/">Test link 1</Link>{' '}
            sapien. Donec finibus pellentesque est porta dictum. Suspendisse
            venenatis vitae augue nec hendrerit. In ut quam tempus, feugiat
            risus quis, porta eros. Aliquam ultricies ac orci viverra gravida.
            Ut sodales odio tempor sodales viverra. In condimentum tincidunt
            fermentum. Nullam imperdiet est vel tincidunt suscipit. Vestibulum
            vel pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu
            sem varius volutpat. Ut vitae purus et enim imperdiet finibus.
            Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc,
            interdum.
          </p>
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
            scelerisque sapien. Praesent mollis vestibulum nunc at blandit.
            Donec vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
            Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac
            urna <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
            ligula. Sed dapibus, enim sed tristique gravida, nisl dolor
            malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu augue et
            enim varius viverra. Vivamus ut tellus iaculis, ullamcorper ligula
            sit amet, posuere ipsum.
          </p>
          <div>
            <Button>Remind me later</Button>
            <Button>Ok</Button>
          </div>
        </Drawer>

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
      </div>
    );
  });
StoryModelessDrawer.storyName = 'modelss';
StoryModelessDrawer.parameters = {eyes: {include: false}};

export const StoryModelessWithRestoreFocusAndCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, setIsActive] = React.useState(false);

    const open = () => setIsActive(true);
    const close = () => setIsActive(false);

    const elementToRestoreFocusTo = document.getElementById(
      'modeless-test-button',
    ) as HTMLElement | undefined;

    return (
      <div>
        <StorybookHeading>Drawer with custom auto-focus</StorybookHeading>
        <p>Drawer with autofocus using data-autofocus attribute</p>
        <Button onClick={open} data-testid="modeless-drawer-open-button">
          Open Drawer
        </Button>
        <br />
        <br />
        <Button id="modeless-test-button">Takes refocus</Button>

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          header="Header"
          restoreFocusTo={elementToRestoreFocusTo}
          disableFocusTrap
        >
          <TextInput label="First name" />
          <TextInput label="Last name" />
          <TextInput label="Phone number" />
          <div>
            <Link href="/">For more information...</Link>{' '}
          </div>

          <div>
            <Button>Remind me later</Button>
            <Button data-autofocus>Ok</Button>
          </div>
        </Drawer>
      </div>
    );
  });
StoryModelessWithRestoreFocusAndCustomAutofocus.storyName =
  'modeless with restore focus and custom autofocus';
StoryModelessWithRestoreFocusAndCustomAutofocus.parameters = {
  eyes: {include: false},
};
