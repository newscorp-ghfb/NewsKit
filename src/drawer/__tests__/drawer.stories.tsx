/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {Drawer, DrawerProps} from '..';
import {getColorCssFromTheme, styled} from '../../utils/style';
import {Button} from '../../button';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {useMediaQueryObject} from '../../utils/hooks';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {GridLayout} from '../../grid-layout';
import {TextBlock} from '../../text-block';
import {isVisualTest} from '../../test/test-utils';
import {IconFilledInfo} from '../../icons';
import {InlineMessage} from '../../inline-message';

const InlineDrawerContainer = styled.div`
  position: relative;
  border: 1px solid;
  ${getColorCssFromTheme('border-color', 'interfaceBrand010')}
  height: 70vh;
  overflow: hidden;
`;

const useActiveState = (
  initial = false,
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);
  const toggle = () => (isActive ? close() : open());

  return [isActive, open, close, toggle];
};

type Placement = NonNullable<DrawerProps['placement']>;

const DRAWER_HEADER = 'Drawer Title';
const DRAWER_CONTENT = (
  <div>
    <TextBlock stylePreset="inkBase">Content</TextBlock>
    <input placeholder="This input should be focused on open" />
  </div>
);

export const StoryDrawerDefault = () => {
  const [placement, setPlacement] = React.useState<Placement>('left');
  const [isActive, open, close] = useActiveState();

  const handleOnClick = (placementValue: Placement) => {
    setPlacement(placementValue);
    open();
  };

  return (
    <>
      <GridLayout
        columnGap="space030"
        autoColumns="auto"
        autoFlow="column"
        inline
      >
        <Button onClick={() => handleOnClick('top')}>Top</Button>
        <Button onClick={() => handleOnClick('bottom')}>Bottom</Button>
        <Button onClick={() => handleOnClick('left')}>Left</Button>
        <Button onClick={() => handleOnClick('right')}>Right</Button>
      </GridLayout>

      <Drawer
        open={isActive}
        onDismiss={close}
        placement={placement as 'top' | 'left' | 'right' | 'bottom'}
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerDefault.storyName = 'Default';
StoryDrawerDefault.parameters = {
  percy: {skip: true},
};

export const StoryInline = () => {
  const [isActive, open, close] = useActiveState(isVisualTest || false);
  const [placement, setPlacement] = React.useState<Placement>('left');

  const handleOnClick = (placementValue: Placement) => {
    setPlacement(placementValue);
    // add a timeout so the placement is updated before the animation starts
    setTimeout(open);
  };

  return (
    <>
      <GridLayout
        columnGap="space030"
        autoColumns="auto"
        autoFlow="column"
        inline
        overrides={{marginBlockEnd: 'space050'}}
      >
        <Button onClick={() => handleOnClick('top')}>Top</Button>
        <Button onClick={() => handleOnClick('bottom')}>Bottom</Button>
        <Button onClick={() => handleOnClick('left')}>Left</Button>
        <Button onClick={() => handleOnClick('right')}>Right</Button>
      </GridLayout>

      <InlineDrawerContainer>
        <Drawer
          open={isActive}
          onDismiss={close}
          inline
          disableFocusTrap
          hideOverlay
          placement={placement}
          header={DRAWER_HEADER}
          overrides={{
            panel: {minSize: '20vh', maxSize: '50%'},
          }}
        >
          {DRAWER_CONTENT}
        </Drawer>

        <TextBlock
          stylePreset="inkBase"
          paddingBlock="space030"
          paddingInline="space030"
        >
          Inline drawer opens here.
        </TextBlock>
      </InlineDrawerContainer>
    </>
  );
};
StoryInline.storyName = 'Inline';

export const StoryDrawerTopPlacement = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        placement="top"
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerTopPlacement.storyName = 'Top placement';

export const StoryDrawerBottomPlacement = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        placement="bottom"
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerBottomPlacement.storyName = 'Bottom placement';

export const StoryDrawerLeftPlacement = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        placement="left"
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerLeftPlacement.storyName = 'Left placement';

export const StoryDrawerRightPlacement = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        placement="right"
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerRightPlacement.storyName = 'Right placement';

export const StoryDrawerRightPlacementCloseOnLeft = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        placement="right"
        header={DRAWER_HEADER}
        closePosition="left"
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerRightPlacementCloseOnLeft.storyName =
  'Right placement with close position set to left';

export const StoryDrawerNoHeaderContent = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer open={isActive} onDismiss={close}>
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerNoHeaderContent.storyName = 'No header content';

export const StoryDrawerNoCloseButton = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        header={DRAWER_HEADER}
        closePosition="none"
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerNoCloseButton.storyName = 'No close button';

export const StoryDrawerNoHeader = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer open={isActive} onDismiss={close} closePosition="none">
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerNoHeader.storyName = 'No header';

export const StoryDrawerNoOverlay = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        hideOverlay
        header={DRAWER_HEADER}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerNoOverlay.storyName = 'No overlay';

export const StoryWithAriaAttributes = () => {
  const [isActive, open, close] = useActiveState();

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        ariaLabelledby="drawerHeader"
        ariaDescribedby="description purpose"
        header={<div id="drawerHeader">Overriden drawer header</div>}
      >
        <TextBlock stylePreset="inkBase" id="description">
          Overriden drawer components
        </TextBlock>
        <TextBlock
          stylePreset="inkBase"
          id="purpose"
          marginBlockStart="space040"
        >
          Showing different styles
        </TextBlock>
      </Drawer>
    </>
  );
};

StoryWithAriaAttributes.storyName = 'Aria attributes';
StoryWithAriaAttributes.parameters = {
  percy: {skip: true},
};

export const StoryWithRestoreFocusAndCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    const elementToRestoreFocusTo = document.getElementById('test-button') as
      | HTMLElement
      | undefined;

    return (
      <>
        <Button onClick={open}>Open drawer</Button>
        <br />
        <br />
        <Button id="test-button">Takes refocus</Button>

        <Drawer
          open={isActive}
          onDismiss={close}
          header={DRAWER_HEADER}
          restoreFocusTo={elementToRestoreFocusTo}
        >
          {DRAWER_CONTENT}
          <Button overrides={{marginBlock: 'space040'}}>
            First focusable element
          </Button>
          <Button data-autofocus>AutoFocus this one</Button>
        </Drawer>
      </>
    );
  });
StoryWithRestoreFocusAndCustomAutofocus.storyName =
  'Custom autofocus and restore focus';
StoryWithRestoreFocusAndCustomAutofocus.parameters = {
  percy: {skip: true},
};

export const StoryWithDisabledFocusTrap = () => {
  const [isActive, open, close] = useActiveState();

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        header={DRAWER_HEADER}
        disableFocusTrap
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryWithDisabledFocusTrap.storyName = 'Focus trap disabled';
StoryWithDisabledFocusTrap.parameters = {
  percy: {skip: true},
};

export const StoryModelessDrawer = () => {
  const [isActive, open, close] = useActiveState();

  return (
    <>
      <Button onClick={open}>Open drawer</Button>

      <Drawer
        open={isActive}
        onDismiss={close}
        header={DRAWER_HEADER}
        disableFocusTrap
        hideOverlay
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryModelessDrawer.storyName = 'Modeless';
StoryModelessDrawer.parameters = {
  percy: {skip: true},
};

export const StoryModelessWithRestoreFocusAndCustomAutofocus = () => {
  const [isActive, open, close] = useActiveState();

  const elementToRestoreFocusTo = document.getElementById(
    'modeless-test-button',
  ) as HTMLElement | undefined;

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <br />
      <br />
      <Button id="modeless-test-button">Takes refocus</Button>

      <Drawer
        aria-label="Drawer example"
        open={isActive}
        onDismiss={close}
        header={DRAWER_HEADER}
        restoreFocusTo={elementToRestoreFocusTo}
        disableFocusTrap
      >
        {DRAWER_CONTENT}
        <Button overrides={{marginBlock: 'space040'}}>
          First focusable element
        </Button>
        <Button data-autofocus>AutoFocus this one</Button>
      </Drawer>
    </>
  );
};
StoryModelessWithRestoreFocusAndCustomAutofocus.storyName =
  'Modeless drawer with custom autofocus';
StoryModelessWithRestoreFocusAndCustomAutofocus.parameters = {
  percy: {skip: true},
};

export const StoryDrawerBrekpoints = () => {
  const [isActive, open, close] = useActiveState();

  const mqPlacement = {
    xs: 'left',
    md: 'right',
  };
  const placement = useMediaQueryObject(mqPlacement);

  return (
    <>
      <InlineMessage
        icon={
          <IconFilledInfo
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        overrides={{marginBlockEnd: 'space050'}}
      >
        Resize the browser window to change drawer positon
      </InlineMessage>

      <Button onClick={open}>Open drawer from the {placement}</Button>

      <Drawer
        open={isActive}
        onDismiss={close}
        placement={placement as Placement}
        header={DRAWER_HEADER}
        overrides={{
          panel: {
            transitionPreset: {
              xs: 'slideLeft',
              md: 'slideRight',
            },
          },
        }}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerBrekpoints.storyName = 'Breakpoints';
StoryDrawerBrekpoints.parameters = {
  percy: {skip: true},
};

export const StoryDrawerLogicalProps = () => {
  const [placement, setPlacement] = React.useState<Placement>('left');
  const [isActive, open, close] = useActiveState(isVisualTest);

  const handleOnClick = (placementValue: Placement) => {
    setPlacement(placementValue);
    open();
  };

  return (
    <>
      <GridLayout
        columnGap="space030"
        autoColumns="auto"
        autoFlow="column"
        inline
      >
        <Button onClick={() => handleOnClick('top')}>Top</Button>
        <Button onClick={() => handleOnClick('bottom')}>Bottom</Button>
        <Button onClick={() => handleOnClick('left')}>Left</Button>
        <Button onClick={() => handleOnClick('right')}>Right</Button>
      </GridLayout>

      <Drawer
        open={isActive}
        onDismiss={close}
        placement={placement}
        header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        overrides={{
          panel: {paddingBlock: 'space010', paddingInline: 'space010'},
          header: {
            paddingBlock: 'space030',
            paddingInline: 'space030',
          },
          content: {
            paddingBlock: 'space030',
            paddingInline: 'space030',
          },
        }}
      >
        {DRAWER_CONTENT}
      </Drawer>
    </>
  );
};
StoryDrawerLogicalProps.storyName = 'Logical props drawer';

export const StoryInlineDrawerLogicalProps = () => {
  const [placement, setPlacement] = React.useState<Placement>('left');
  const [isActive, open, close] = useActiveState(isVisualTest);

  const handleOnClick = (placementValue: Placement) => {
    setPlacement(placementValue);
    open();
  };

  return (
    <>
      <GridLayout
        columnGap="space030"
        autoColumns="auto"
        autoFlow="column"
        inline
        overrides={{marginBlockEnd: 'space050'}}
      >
        <Button onClick={() => handleOnClick('top')}>Top</Button>
        <Button onClick={() => handleOnClick('bottom')}>Bottom</Button>
        <Button onClick={() => handleOnClick('left')}>Left</Button>
        <Button onClick={() => handleOnClick('right')}>Right</Button>
      </GridLayout>

      <InlineDrawerContainer>
        <Drawer
          open={isActive}
          onDismiss={close}
          placement={placement}
          header="This is a drawer header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          inline
          disableFocusTrap
          hideOverlay
          overrides={{
            panel: {paddingBlock: 'space010', paddingInline: 'space010'},
            header: {
              paddingBlock: 'space030',
              paddingInline: 'space030',
            },
            content: {
              paddingBlock: 'space030',
              paddingInline: 'space030',
            },
          }}
        >
          {DRAWER_CONTENT}
        </Drawer>
      </InlineDrawerContainer>
    </>
  );
};
StoryInlineDrawerLogicalProps.storyName = 'Logical props inline drawer';

export const StoryDrawerStyleOverrides = () => {
  const [isActive, open, close] = useActiveState(isVisualTest);

  return (
    <>
      <Button onClick={open}>Open drawer</Button>
      <Drawer
        open={isActive}
        onDismiss={close}
        header={DRAWER_HEADER}
        overrides={{
          panel: {
            stylePreset: 'drawerPanelCustom',
          },
          header: {
            stylePreset: 'drawerHeaderCustom',
          },
          closeButton: {
            stylePreset: 'drawerCloseButton',
          },
        }}
      >
        <TextBlock stylePreset="inkBrand010">Content</TextBlock>
      </Drawer>
    </>
  );
};
StoryDrawerStyleOverrides.storyName = 'Styling overrides';

const drawerCustomThemeObject: CreateThemeArgs = {
  name: 'drawer-theme',
  overrides: {
    stylePresets: {
      drawerPanelCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
          boxShadow: '{{shadows.shadow060}}',
        },
      },
      drawerHeaderCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
          borderWidth: '0 0 {{borders.borderWidth010}} 0',
          borderColor: '{{colors.inkBrand010}}',
          borderStyle: 'solid',
        },
      },
      drawerCloseButton: {
        base: {
          iconColor: '{{colors.inkBrand010}}',
          backgroundColor: '{{colors.transparent}}',
        },
        hover: {
          iconColor: '{{colors.inkBrand020}}',
        },
      },
    },
  },
};

export default {
  title: 'Components/Drawer',
  component: () => 'None',
  parameters: {
    previewTabs: {
      'storybook/canvas/panel': {index: -1},
      'storybook/docs/panel': {hidden: true},
    },
    viewMode: 'story',
    docs: {
      page: null,
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
          drawerCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
