/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {Modal} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {Link} from '../../link';
import {Stack} from '../../stack';
import {H1, P} from '../../typography';
import {useHasMounted} from '../../utils/hooks';

const Box = styled.div`
  width: 400px;
`;

const scrollContent =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra. Integer non velit vitae elit porta condimentum. Cras ultrices lectus eu porttitor volutpat. In hac habitasse platea dictumst. Integer maximus leo quis sapien aliquet finibus. Cras lobortis leo quis massa commodo ornare. Donec ac ligula sed mauris sodales pretium id eu nibh. Pellentesque et eros viverra, dignissim ante in, tincidunt eros. Curabitur mattis purus dolor, non aliquam sapien auctor quis. Morbi sit amet leo in urna dictum imperdiet vitae sed velit. In auctor nulla sed lectus ultricies dignissim. In mattis.';

const modalContent = (
  <Stack
    flow="vertical-center"
    stackDistribution="center"
    spaceInline="space020"
  >
    <H1>You need an account</H1>
    <p contentEditable>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. (Double click for more text :) )
    </p>
    <Button>Register for a free account</Button>
    <P>Already have an account?</P>
    <Link href="/">Sign in here</Link>
  </Stack>
);

const useActiveState = (initial = false): [boolean, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);

  return [isActive, open, close];
};

export default {
  title: 'NewsKit Light/modal',
  component: () => 'None',
  disabledRules: ['tabindex', 'color-contrast'], // Because of scenario 'open on page load'
};

export const StoryDefault = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Default Modal</StorybookHeading>
        <Button onClick={open} data-testid="modal-open-button">
          Open Modal
        </Button>
        <p>SCROLL DOWN </p>
        <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <p key={i}>{scrollContent}</p>
            </>
          ))}
        </Box>
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryDefault.storyName = 'default';
StoryDefault.parameters = {eyes: {include: false}};

export const StoryOpenOnPageLoad = () =>
  React.createElement(() => {
    const hasMounted = useHasMounted();
    const [isActive, open, close] = useActiveState();

    useEffect(() => {
      open();
    }, [hasMounted, open]);

    return (
      <>
        <StorybookHeading>Open modal on page load</StorybookHeading>
        <p>Refresh the page to open the modal</p>
        <Modal
          open={isActive}
          onDismiss={close}
          aria-label="Open modal on page load"
          header="Modal header"
        >
          <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <p contentEditable>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </p>
            <Button>Register for a free account</Button>
            <P>Already have an account?</P>
            <Link href="/">Sign in here</Link>
          </Stack>
        </Modal>
      </>
    );
  });
StoryOpenOnPageLoad.storyName = 'open on page load';
StoryOpenOnPageLoad.parameters = {eyes: {include: false}};

export const StoryWithAriaAttributes = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <>
        <StorybookHeading>Modal with aria attributes</StorybookHeading>
        <Button onClick={open}>Open Modal</Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          header={<div id="modalHeader">Overriden modal header</div>}
        >
          {modalContent}
        </Modal>
      </>
    );
  });
StoryWithAriaAttributes.storyName = 'with aria attributes';
StoryWithAriaAttributes.parameters = {eyes: {include: false}};

export const StoryWithCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with custom auto-focus</StorybookHeading>
        <p>Modal with autofocus using data-autofocus attribute</p>
        <Button onClick={open} data-testid="modal-open-button">
          Open modal
        </Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          header={<div id="modalHeader">Overriden modal header</div>}
        >
          <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <p contentEditable>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </p>
            <Button>Register for a free account</Button>
            <Button data-autofocus>Middle Button with focus</Button>
            <Button>Something else</Button>
          </Stack>
        </Modal>
      </div>
    );
  });
StoryWithCustomAutofocus.storyName = 'with custom autofocus';
StoryWithCustomAutofocus.parameters = {eyes: {include: false}};

export const StoryWithCustomRestoreFocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();
    const elementToRestoreFocusTo = document.getElementById('test-button') as
      | HTMLElement
      | undefined;

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with custom auto-focus</StorybookHeading>
        <p>Modal with autofocus using data-autofocus attribute</p>
        <Button onClick={open} data-testid="modal-open-button">
          Open modal
        </Button>
        <Button id="test-button">Button to restore focus to</Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          header={<div id="modalHeader">Overriden modal header</div>}
          restoreFocusTo={elementToRestoreFocusTo}
        >
          <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <p contentEditable>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </p>
            <Button>Register for a free account</Button>
          </Stack>
        </Modal>
      </div>
    );
  });
StoryWithCustomRestoreFocus.storyName = 'with custom restore focus';
StoryWithCustomRestoreFocus.parameters = {eyes: {include: false}};

export const StoryWithHiddenOverlay = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with hidden overlay</StorybookHeading>
        <Button onClick={open} data-testid="modal-open-button">
          Open Modal
        </Button>
        <p>SCROLL DOWN </p>
        <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <p key={i}>{scrollContent}</p>
            </>
          ))}
        </Box>
        <Modal
          open={isActive}
          onDismiss={close}
          header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryWithHiddenOverlay.storyName = 'hidden overlay';
StoryWithHiddenOverlay.parameters = {eyes: {include: false}};

export const StoryWithDisabledFocusTrap = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with disabled focus trap</StorybookHeading>
        <Button onClick={open} data-testid="modal-open-button">
          Open Modal
        </Button>
        <p>SCROLL DOWN </p>
        <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <p key={i}>{scrollContent}</p>
            </>
          ))}
        </Box>
        <Modal
          open={isActive}
          onDismiss={close}
          header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryWithDisabledFocusTrap.storyName = 'disabled focus trap';
StoryWithDisabledFocusTrap.parameters = {eyes: {include: false}};

export const StoryModelessModal = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modeless Modal</StorybookHeading>
        <Button onClick={open} data-testid="modal-open-button">
          Open Modal
        </Button>
        <p>SCROLL DOWN </p>
        <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <p key={i}>{scrollContent}</p>
            </>
          ))}
        </Box>
        <Modal
          open={isActive}
          onDismiss={close}
          header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryModelessModal.storyName = 'modelss';
StoryModelessModal.parameters = {eyes: {include: false}};

const ModalWrapper = styled.div`
  margin: 20px 0 20px 350px;
  position: relative;
  border: 1px solid orange;
  background: lightgray;
`;

export const StoryModelessInlineModal = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modeless Inline Modal</StorybookHeading>
        <ModalWrapper>
          <Button onClick={open} data-testid="modal-open-button">
            Open Modal
          </Button>
          <p>SCROLL DOWN </p>

          <Box>
            {Array.from({length: 5}, (_, i) => (
              <>
                {i === 3 && (
                  <Button onClick={open}>
                    Another button to open the modal
                  </Button>
                )}
                <p key={i}>{scrollContent}</p>
              </>
            ))}
          </Box>

          <Modal
            open={isActive}
            onDismiss={close}
            header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
            hideOverlay
            disableFocusTrap
            inline
          >
            {modalContent}
          </Modal>
        </ModalWrapper>
      </div>
    );
  });
StoryModelessInlineModal.storyName = 'modelss-inline';
StoryModelessInlineModal.parameters = {eyes: {include: false}};

export const StoryOptionalHeaderClose = () =>
  React.createElement(() => {
    const [isActiveBoth, openBoth, closeBoth] = useActiveState();
    const [isActiveHeader, openHeader, closeHeader] = useActiveState();
    const [isActiveButton, openButton, closeButton] = useActiveState();

    return (
      <div>
        <StorybookHeading>
          Modal with optional header & close button
        </StorybookHeading>
        <Stack spaceInline="space030" flow="horizontal-center">
          <Button onClick={openBoth}>
            Open without header and close button
          </Button>
          <Button onClick={openHeader}>Open without header</Button>
          <Button onClick={openButton}>Open without close button</Button>
        </Stack>

        <Modal open={isActiveBoth} onDismiss={closeBoth} closePosition="none">
          {modalContent}
        </Modal>
        <Modal
          open={isActiveHeader}
          onDismiss={closeHeader}
          closePosition="right"
        >
          {modalContent}
        </Modal>
        <Modal
          open={isActiveButton}
          onDismiss={closeButton}
          header="This is a modal header. Content is passed as string. Should be a long one"
          closePosition="none"
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryOptionalHeaderClose.storyName = 'optional header & close';
StoryOptionalHeaderClose.parameters = {eyes: {include: false}};
