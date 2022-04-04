/* eslint-disable react-hooks/rules-of-hooks */
import React, {MouseEvent} from 'react';
import {Drawer} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {Link} from '../../link';
import {TextInput} from '../../text-input';
import {Block} from '../../block';
import {Menu, MenuItem} from '../../menu';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {Stack} from '../../stack';
import {useMediaQueryObject} from '../../utils/hooks';

const Box = styled.div`
  width: 400px;
`;

const DrawerContainer = styled.div`
  margin-left: 10vw;
  margin-right: 10vw;
  margin-top: 10vw;
  margin-bottom: 10vw;
  background: #f9f9f9;

  position: relative;
  // border: 1px dotted gray;
  width: 20vw;
  height: 30vh;
  overflow: hidden;
`;

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra. Integer non velit vitae elit porta condimentum. Cras ultrices lectus eu porttitor volutpat. In hac habitasse platea dictumst. Integer maximus leo quis sapien aliquet finibus. Cras lobortis leo quis massa commodo ornare. Donec ac ligula sed mauris sodales pretium id eu nibh. Pellentesque et eros viverra, dignissim ante in, tincidunt eros. Curabitur mattis purus dolor, non aliquam sapien auctor quis. Morbi sit amet leo in urna dictum imperdiet vitae sed velit. In auctor nulla sed lectus ultricies dignissim. In mattis.';

const BoxWithContent = ({open}: {open?: () => void}) => (
  <>
    <p>SCROLL DOWN </p>
    <Box>
      {Array.from({length: 5}, (_, i) => (
        <>
          {open && i === 3 && (
            <Button onClick={open}>Another button to open the drawer</Button>
          )}
          <p key={i}>{content}</p>
        </>
      ))}
    </Box>
  </>
);

const DrawerContent = () => (
  <div>Content</div>
  // <>
  //   <p>
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet lorem
  //     massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus.
  //     Pellentesque eu odio <Link href="/">Test link 1</Link> sapien. Donec
  //     finibus pellentesque est porta dictum. Suspendisse venenatis vitae augue
  //     nec hendrerit. In ut quam tempus, feugiat risus quis, porta eros. Aliquam
  //     ultricies ac orci viverra gravida. Ut sodales odio tempor sodales viverra.
  //     In condimentum tincidunt fermentum. Nullam imperdiet est vel tincidunt
  //     suscipit. Vestibulum vel pulvinar nibh, at molestie lectus. Curabitur
  //     ultricies massa eu sem varius volutpat. Ut vitae purus et enim imperdiet
  //     finibus. Quisque posuere lacus a nunc tempor accumsan. Aliquam odio nunc,
  //     interdum.
  //   </p>
  //   <TextInput label="First name" />
  //   <TextInput label="Last name" />
  //   <TextInput label="Phone number" />
  //   <div>
  //     <Link href="/">For more information...</Link>{' '}
  //   </div>
  //   <p>
  //     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
  //     scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec
  //     vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
  //     Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac urna{' '}
  //     <Link href="/">Test link 2</Link> rutrum aliquet eu mattis ligula. Sed
  //     dapibus, enim sed tristique gravida, nisl dolor malesuada lacus, quis
  //     auctor dui mauris eu odio. Vivamus eu augue et enim varius viverra.
  //     Vivamus ut tellus iaculis, ullamcorper ligula sit amet, posuere ipsum.
  //   </p>
  //   <div>
  //     <Button>Remind me later</Button>
  //     <Button>Ok</Button>
  //   </div>
  // </>
);

export default {
  title: 'NewsKit Light/drawer',
  component: () => 'None',
};

const useActiveState = (
  initial = false,
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);
  const toggle = () => (isActive ? close() : open());

  return [isActive, open, close, toggle];
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

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement={placement as 'top' | 'left' | 'right' | 'bottom'}
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  });
StoryDefault.storyName = 'default';
StoryDefault.parameters = {eyes: {include: false}};

const myCustomTheme = createTheme({
  name: 'my-custom-drawer-theme',
  overrides: {
    stylePresets: {
      overlayCustom: {
        base: {
          backgroundColor: '{{colors.purple050}}',
        },
      },
      drawerPanelCustom: {
        base: {
          // backgroundColor: '{{colors.purple030}}',
          boxShadow: '0px 0px 16px 14px rgba(169,183,172,0.9)',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'dotted',
          borderColor: '{{colors.purple070}}',
        },
      },
      drawerHeaderCustom: {
        base: {
          backgroundColor: '{{colors.purple030}}',
          // borderStyle: 'none none solid none',
          // borderWidth: '{{borders.borderWidth010}}',
          // borderColor: '{{colors.red060}}',
        },
      },
      drawerCloseButtonCustom: {
        base: {
          // borderWidth: '{{borders.borderWidth010}}',
          // borderStyle: 'solid',
          // borderColor: '{{colors.teal030}}',
          backgroundColor: '{{colors.purple030}}',
          // borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.purple070}}',
        },
        hover: {
          backgroundColor: '{{colors.purple030}}',
          iconColor: '{{colors.purple090}}',
        },
      },
    },
  },
});

export const StoryInline = () =>
  React.createElement(() => {
    const [isActive, open, close, toggle] = useActiveState();
    const [placement, setPlacement] = React.useState('left');

    const onChangeValue = (ev: React.ChangeEvent<HTMLDivElement>) =>
      setPlacement((ev.target as HTMLInputElement).value);

    return (
      <div data-testid="scrollable-drawer">
        <StorybookHeading>Inline drawer</StorybookHeading>
        <Button onClick={toggle} data-testid="drawer-open-button">
          Open Drawer
        </Button>
        <Block as="span" spaceInset="space030" onChange={onChangeValue}>
          <label htmlFor="drawer-inline_top">
            top:
            <input
              type="radio"
              value="top"
              id="drawer-inline_top"
              name="placement"
            />
          </label>
          <label htmlFor="drawer-inline_left">
            left:
            <input
              type="radio"
              value="left"
              id="drawer-inline_left"
              name="placement"
              defaultChecked
            />
          </label>
          <label htmlFor="drawer-inline_bottom">
            bottom:
            <input
              type="radio"
              value="bottom"
              id="drawer-inline_bottom"
              name="placement"
            />
          </label>
          <label htmlFor="drawer-inline_right">
            right:
            <input
              type="radio"
              value="right"
              id="drawer-inline_right"
              name="placement"
            />
          </label>
        </Block>

        <ThemeProvider theme={myCustomTheme}>
          <DrawerContainer>
            <Drawer
              aria-label="Drawer example"
              open={isActive}
              onDismiss={close}
              inline
              disableFocusTrap
              hideOverlay
              placement={placement as 'top' | 'left' | 'right' | 'bottom'}
              header="Drawer"
              overrides={{
                overlay: {
                  stylePreset: 'overlayCustom',
                },
                panel: {
                  stylePreset: 'drawerPanelCustom',
                  minSize: '20vh',
                  maxSize: '40%',
                },
                header: {
                  spaceInset: 'spaceInset000',
                  stylePreset: 'drawerHeaderCustom',
                },
                content: {
                  spaceInset: 'spaceInset000',
                },
                closeButton: {
                  stylePreset: 'drawerCloseButtonCustom',
                  spaceInset: 'spaceInset000',
                },
              }}
            >
              <DrawerContent />
            </Drawer>
          </DrawerContainer>
        </ThemeProvider>

        <BoxWithContent open={open} />
      </div>
    );
  });
StoryInline.storyName = 'inline';
StoryInline.parameters = {eyes: {include: false}};

// MENU + DRAWER EXAMPLE
const Header = styled.div<{fixed: boolean}>`
  width: 100%;
  top: 0;
  left: 0;
  ${props => props.fixed && {position: 'fixed'}}
`;

const HeaderMenu = styled.div<{fixed: boolean}>`
  position: relative;
  z-index: 9999;
  background: #fdf6e9;
`;

const HeaderDrawer = styled.div`
  position: relative;
`;

const menuDrawerTheme = compileTheme(
  createTheme({
    name: 'my-custom-drawer-theme',
    overrides: {
      transitionPresets: {
        scaleUp: {
          base: {
            transform: 'scaleY(0)',
            transformOrigin: 'top center',
          },
          appear: {},
          appearActive: {},
          appearDone: {},
          enter: {
            transform: 'scaleY(0)',
          },
          enterActive: {
            transform: 'scaleY(1)',
            transitionProperty: 'transform',
            transitionDuration: '{{motions.motionDuration020}}',
            transitionTimingFunction: '{{motions.motionTimingEaseIn}}',
          },
          enterDone: {
            transform: 'scaleY(1)',
          },
          exit: {
            transform: 'scaleY(1)',
          },
          exitActive: {
            transform: 'scaleY(0)',
            transitionProperty: 'transform',
            transitionDuration: '{{motions.motionDuration020}}',
            transitionTimingFunction: '{{motions.motionTimingLinear}}',
          },
          exitDone: {
            transform: 'scaleY(0)',
          },
        },
      },
    },
  }),
);

export const StoryMenuAndInline = () =>
  React.createElement(() => {
    const [selectedDrawer, setDrawer] = React.useState<number | null>(null);
    const [isFixed, setFixed] = React.useState(false);

    const openDrawer = (index: number) => setDrawer(index);
    const closeDrawer = () => setDrawer(null);

    return (
      <ThemeProvider theme={menuDrawerTheme}>
        <Header fixed={isFixed}>
          <HeaderMenu fixed={isFixed}>
            <Menu aria-label="Menu">
              {Array.from({length: 5}).map((_, index) => (
                <MenuItem
                  href="/"
                  onClick={(e: MouseEvent<HTMLElement>) => {
                    e.preventDefault();
                    openDrawer(index);
                  }}
                >
                  Menu item {index}
                </MenuItem>
              ))}
            </Menu>
          </HeaderMenu>
          <HeaderDrawer>
            <Drawer
              open={selectedDrawer !== null}
              onDismiss={closeDrawer}
              placement="top"
              inline
              disableFocusTrap
              hideOverlay={!isFixed}
              header={`Sub menu ${selectedDrawer}`}
            >
              {selectedDrawer !== null &&
                Array.from({length: selectedDrawer + 1}).map(() => (
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    aliquet lorem massa, et lacinia ipsum tristique id.
                    Phasellus sed posuere lacus. Pellentesque eu odio{' '}
                    <Link href="/">Test link 1</Link> sapien. Donec finibus
                    pellentesque est porta dictum. Suspendisse venenatis vitae
                    augue nec hendrerit. In ut quam tempus, feugiat risus quis,
                    porta eros. Aliquam ultricies ac orci viverra gravida. Ut
                    sodales odio tempor sodales viverra. In condimentum
                    tincidunt fermentum. Nullam imperdiet est vel tincidunt
                    suscipit. Vestibulum vel pulvinar nibh, at molestie lectus.
                    Curabitur ultricies massa eu sem varius volutpat. Ut vitae
                    purus et enim imperdiet finibus. Quisque posuere lacus a
                    nunc tempor accumsan. Aliquam odio nunc, interdum.
                  </p>
                ))}
            </Drawer>
          </HeaderDrawer>
        </Header>
        <div style={{marginTop: isFixed ? 50 : 0}}>
          <Button onClick={() => setFixed(!isFixed)}>
            Toggle Menu fixed: ( current {isFixed.toString()})
          </Button>
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
          lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
          lacus. Pellentesque eu odio sapien. Donec finibus pellentesque est
          porta dictum. Suspendisse venenatis vitae augue nec hendrerit. In ut
          quam tempus, feugiat risus quis, porta eros. Aliquam ultricies ac orci
          viverra gravida. Ut sodales odio tempor sodales viverra. In
          condimentum tincidunt fermentum. Nullam imperdiet est vel tincidunt
          suscipit. Vestibulum vel pulvinar nibh, at molestie lectus. Curabitur
          ultricies massa eu sem varius volutpat. Ut vitae purus et enim
          imperdiet finibus. Quisque posuere lacus a nunc tempor accumsan.
          Aliquam odio nunc, interdum.
        </p>

        <BoxWithContent />
      </ThemeProvider>
    );
  });
StoryMenuAndInline.storyName = 'menu+inline';
StoryMenuAndInline.parameters = {eyes: {include: false}};

export const StoryWithAriaAttributes = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

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
    const [isActive, open, close] = useActiveState();

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
    const [isActive, open, close] = useActiveState();

    return (
      <div>
        <StorybookHeading>Drawer with hidden overlay</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>
        <BoxWithContent open={open} />
        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement="right"
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  });
StoryWithHiddenOverlay.storyName = 'hidden overlay';
StoryWithHiddenOverlay.parameters = {eyes: {include: false}};

export const StoryWithDisabledFocusTrap = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div>
        <StorybookHeading>Drawer with disabled focus trap</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>

        <BoxWithContent open={open} />
        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement="right"
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          disableFocusTrap
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  });
StoryWithDisabledFocusTrap.storyName = 'disabled focus trap';
StoryWithDisabledFocusTrap.parameters = {eyes: {include: false}};

export const StoryModelessDrawer = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

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
          <DrawerContent />
        </Drawer>

        <BoxWithContent open={open} />
      </div>
    );
  });
StoryModelessDrawer.storyName = 'modelss';
StoryModelessDrawer.parameters = {eyes: {include: false}};

export const StoryModelessWithRestoreFocusAndCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

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

export const StoryOptionalHeaderClose = () =>
  React.createElement(() => {
    const [isActiveBoth, openBoth, closeBoth] = useActiveState();
    const [isActiveHeader, openHeader, closeHeader] = useActiveState();
    const [isActiveButton, openButton, closeButton] = useActiveState();

    return (
      <div>
        <StorybookHeading>
          Drawer with optional header & close button
        </StorybookHeading>

        <Stack spaceInline="space030" flow="horizontal-center">
          <Button onClick={openBoth}>
            Open without header and close button
          </Button>
          <Button onClick={openHeader}>Open without header</Button>
          <Button onClick={openButton}>Open without close button</Button>
        </Stack>

        <Drawer
          open={isActiveBoth}
          onDismiss={closeBoth}
          placement="right"
          closePosition="none"
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          open={isActiveHeader}
          onDismiss={closeHeader}
          placement="right"
          closePosition="right"
        >
          <DrawerContent />
        </Drawer>
        <Drawer
          open={isActiveButton}
          onDismiss={closeButton}
          placement="right"
          header="This is a drawer header. Content is passed as string."
          closePosition="none"
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  });
StoryOptionalHeaderClose.storyName = 'optional header & close';
StoryOptionalHeaderClose.parameters = {eyes: {include: false}};

export const StoryDreawerTest = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    const mqPlacement = {
      xs: 'left',
      md: 'right',
    };
    const placement = useMediaQueryObject(mqPlacement);

    return (
      <div data-testid="scrollable-drawer">
        <StorybookHeading>Left/right drawer</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer from the {placement}
        </Button>

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          placement={placement as 'left' | 'right' | 'top' | 'bottom'}
          header="This is a drawer header."
          overrides={{
            panel: {
              transitionPreset: {
                xs: 'slideLeft',
                md: 'slideRight',
              },
            },
          }}
        >
          <DrawerContent />
        </Drawer>
      </div>
    );
  });
StoryDreawerTest.storyName = 'drawer-transitions-mq';
StoryDreawerTest.parameters = {eyes: {include: false}};
