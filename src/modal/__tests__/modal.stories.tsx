/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {Modal} from '..';
import {styled} from '../../utils/style';
import {
  StorybookHeading,
  StorybookParah,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {Button} from '../../button';
import {LinkStandalone} from '../../link';
import {Stack} from '../../stack';
import {useHasMounted} from '../../utils/hooks';
import {Select, SelectOption} from '../../select';
import {createTheme, ThemeProvider} from '../../theme';

// const Box = styled.div`
//   width: 400px;
// `;

const modalContent = (
  <Stack
    flow="vertical-center"
    stackDistribution="center"
    spaceInline="space020"
  >
    {/* <H1>You need an account</H1>
    <StorybookParah>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. (Double click for more text :) )
    </StorybookParah>
    <Button>Register for a free account</Button>
    <P>Already have an account?</P>
    <LinkInline href="/">Sign in here</LinkInline> */}
  </Stack>
);

const myCustomTheme = createTheme({
  name: 'my-custom-modal-theme',
  overrides: {
    stylePresets: {
      overlayCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
        },
      },
      modalPanelCustom: {
        base: {
          backgroundColor: '{{colors.green010}}',
          boxShadow: '0px 0px 16px 14px rgba(169,183,172,0.9)',
        },
      },
      modalHeaderCustom: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.red060}}',
        },
      },
      modalCloseButtonCustom: {
        base: {
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.teal030}}',
          backgroundColor: '{{colors.transparent}}',
          borderRadius: '{{borders.borderRadiusCircle}}',
          iconColor: '{{colors.teal070}}',
        },
        hover: {
          backgroundColor: '{{colors.teal050}}',
        },
      },
    },
  },
});

const useActiveState = (initial = false): [boolean, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);

  return [isActive, open, close];
};

export default {
  title: 'Components/Modal',
  component: () => 'None',
  disabledRules: ['tabindex'], // Because of scenario 'open on page load'
};

// export const StoryDefault = () =>
//   React.createElement(() => (
//     <>
//       <StorybookHeading>Default modal</StorybookHeading>
//       <Modal
//         aria-label="Default modal"
//         open
//         onDismiss={() => {}}
//         header={
//           <LinkStandalone href="www.test.com">Link button</LinkStandalone>
//         }
//       >
//         {modalContent}
//       </Modal>
//     </>
//   ));
// StoryDefault.storyName = 'Default';

export const StoryModalDefault = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        {/* <StorybookHeading>Default Modal</StorybookHeading> */}
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        {/* <StorybookSubHeading>SCROLL DOWN </StorybookSubHeading> */}
        {/* <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <StorybookParah key={i}>{scrollContent}</StorybookParah>
            </>
          ))}
        </Box> */}
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryModalDefault.storyName = 'Default';
StoryModalDefault.parameters = {
  percy: {skip: true},
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};
export const StoryOpenOnPageLoad = () =>
  React.createElement(() => {
    const hasMounted = useHasMounted();
    const [isActive, open, close] = useActiveState();

    useEffect(() => {
      open();
    }, [hasMounted, open]);

    return (
      <>
        {/* <StorybookHeading>Open modal on page load</StorybookHeading>
        <StorybookParah>Refresh the page to open the modal</StorybookParah> */}
        <Modal
          open={isActive}
          onDismiss={close}
          aria-label="Open modal on page load"
          // header="Modal header"
        >
          {/* <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <StorybookParah>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </StorybookParah>
            <Button>Register for a free account</Button>
            <P>Already have an account?</P>
            <LinkInline href="/">Sign in here</LinkInline>
          </Stack> */}
        </Modal>
      </>
    );
  });
StoryOpenOnPageLoad.storyName = 'Open on page load';
StoryOpenOnPageLoad.parameters = StoryModalDefault.parameters;

export const StoryWithCloseButtonOnTheLeft = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>
        Modal: header close button on the left
      </StorybookHeading>
      <Modal
        aria-label="Modal: header close button on the left"
        open
        onDismiss={() => {}}
        header={
          <LinkStandalone href="www.test.com">Link button</LinkStandalone>
        }
        closePosition="left"
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryWithCloseButtonOnTheLeft.storyName = 'Close position set to left';
StoryWithCloseButtonOnTheLeft.parameters = StoryModalDefault.parameters;

export const StoryNoHeaderContent = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with no header</StorybookHeading>
      <Modal
        aria-label="Default with no header"
        open
        onDismiss={() => {}}
        overrides={{
          header: {paddingInline: 'space000', paddingBlock: 'space000'},
        }}
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryNoHeaderContent.storyName = 'No header content';
StoryNoHeaderContent.parameters = StoryModalDefault.parameters;

export const StoryNoClose = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with no close button</StorybookHeading>
      <Modal
        aria-label="Default with no header"
        open
        header="Header"
        closePosition="none"
        onDismiss={() => {}}
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryNoClose.storyName = 'No close button';
StoryNoClose.parameters = StoryModalDefault.parameters;

export const StoryNoHeader = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default without header</StorybookHeading>
      <Modal
        aria-label="Default with no header"
        open
        closePosition="none"
        onDismiss={() => {}}
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryNoHeader.storyName = 'No header';
StoryNoHeader.parameters = StoryModalDefault.parameters;

export const StoryWithHiddenOverlay = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with hidden overlay</StorybookHeading>
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        <StorybookSubHeading>SCROLL DOWN </StorybookSubHeading>
        {/* <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <StorybookParah key={i}>{scrollContent}</StorybookParah>
            </>
          ))}
        </Box> */}
        <Modal
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryWithHiddenOverlay.storyName = 'No overlay';
StoryWithHiddenOverlay.parameters = StoryModalDefault.parameters;

const items = [
  'Neptunium',
  'Plutonium',
  'Americium',
  'Curium',
  'Berkelium',
  'Californium',
  'Einsteinium',
  'Fermium',
  'Mendelevium',
  'Nobelium',
  'Lawrencium',
  'Rutherfordium',
  'Dubnium',
  'Seaborgium',
  'Bohrium',
  'Hassium',
  'Meitnerium',
  'Darmstadtium',
  'Roentgenium',
  'Copernicium',
  'Nihonium',
  'Flerovium',
  'Moscovium',
  'Livermorium',
  'Tennessine',
  'Oganesson',
];

export const StoryWithSelect = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default modal</StorybookHeading>
      <Modal
        aria-label="Default modal"
        open
        onDismiss={() => {}}
        header={
          <LinkStandalone href="www.test.com">Link button</LinkStandalone>
        }
      >
        <div>Choose a planet</div>
        <Select
          aria-describedby="id-2-at"
          id="id-2"
          size="medium"
          useModal={{xs: true, sm: true}}
        >
          {items.map(item => (
            <SelectOption key={item} value={item}>
              {item}
            </SelectOption>
          ))}
        </Select>
      </Modal>
    </>
  ));
StoryWithSelect.storyName = 'Select';
StoryWithSelect.parameters = StoryModalDefault.parameters;

export const StoryWithAriaAttributes = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <>
        <StorybookHeading>Modal with aria attributes</StorybookHeading>
        <Button
          onClick={open}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
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
StoryWithAriaAttributes.storyName = 'Aria attributes';
StoryWithAriaAttributes.parameters = StoryModalDefault.parameters;

export const StoryWithCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with custom auto-focus</StorybookHeading>
        <StorybookParah>
          Modal with autofocus using data-autofocus attribute
        </StorybookParah>
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open modal
        </Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          // header={<div id="modalHeader">Overriden modal header</div>}
        >
          {/* <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <StorybookParah>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </StorybookParah>
            <Button>Register for a free account</Button>
            <Button data-autofocus>Middle Button with focus</Button>
            <Button>Something else</Button>
          </Stack> */}
        </Modal>
      </div>
    );
  });
StoryWithCustomAutofocus.storyName = 'Custom autofocus';
StoryWithCustomAutofocus.parameters = StoryModalDefault.parameters;

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
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open modal
        </Button>
        <Button
          id="test-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Button to restore focus to
        </Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          // header={<div id="modalHeader">Overriden modal header</div>}
          restoreFocusTo={elementToRestoreFocusTo}
        >
          {/* <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <H1>You need an account</H1>
            <StorybookParah>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam. (Double
              click for more text :) )
            </StorybookParah>
            <Button>Register for a free account</Button>
          </Stack> */}
        </Modal>
      </div>
    );
  });
StoryWithCustomRestoreFocus.storyName = 'Custom restore focus';
StoryWithCustomRestoreFocus.parameters = StoryModalDefault.parameters;

export const StoryWithDisabledFocusTrap = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with disabled focus trap</StorybookHeading>
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        <StorybookSubHeading>SCROLL DOWN </StorybookSubHeading>
        {/* <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <StorybookParah key={i}>{scrollContent}</StorybookParah>
            </>
          ))}
        </Box> */}
        <Modal
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryWithDisabledFocusTrap.storyName = 'Focus trapping disabled';
StoryWithDisabledFocusTrap.parameters = StoryModalDefault.parameters;

export const StoryModelessModal = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modeless Modal</StorybookHeading>
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        <StorybookSubHeading>SCROLL DOWN </StorybookSubHeading>
        {/* <Box>
          {Array.from({length: 5}, (_, i) => (
            <>
              {i === 3 && (
                <Button onClick={open}>Another button to open the modal</Button>
              )}
              <p key={i}>{scrollContent}</p>
            </>
          ))}
        </Box> */}
        <Modal
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          hideOverlay
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryModelessModal.storyName = 'Modelss model';
StoryModelessModal.parameters = StoryModalDefault.parameters;

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
          <Button
            onClick={open}
            data-testid="modal-open-button"
            overrides={{
              typographyPreset: 'utilityButton020',
              stylePreset: 'buttonOutlinedPrimary',
            }}
          >
            Open Modal
          </Button>
          <StorybookSubHeading>SCROLL DOWN </StorybookSubHeading>

          {/* <Box>
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
          </Box> */}

          <Modal
            open={isActive}
            onDismiss={close}
            // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
            hideOverlay
            disableFocusTrap
            inline
          >
            <Select aria-describedby="id-2-at" id="id-2" size="medium">
              {items.map(item => (
                <SelectOption key={item} value={item}>
                  {item}
                </SelectOption>
              ))}
            </Select>
            {modalContent}
          </Modal>
        </ModalWrapper>
      </div>
    );
  });
StoryModelessInlineModal.storyName = 'Modelss inline model';
StoryModelessInlineModal.parameters = StoryModalDefault.parameters;

export const StoryNestedModals = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    const [isNestedActive, setIsNestedActive] = React.useState(false);
    const openNested = () => setIsNestedActive(true);
    const closeNested = () => setIsNestedActive(false);

    return (
      <div>
        <StorybookHeading>Default Modal</StorybookHeading>
        <Button
          onClick={open}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
        >
          <Stack
            flow="vertical-center"
            stackDistribution="center"
            spaceInline="space020"
          >
            <Button
              onClick={openNested}
              overrides={{
                typographyPreset: 'utilityButton020',
                stylePreset: 'buttonOutlinedPrimary',
              }}
            >
              Open nested Modal
            </Button>

            <Modal
              aria-label="Nested Modal"
              open={isNestedActive}
              onDismiss={closeNested}
              header="Nested Modal"
            >
              <Stack
                flow="vertical-center"
                stackDistribution="center"
                spaceInline="space020"
              >
                <div>Ta da! You opened a nested modal</div>
                <div>Now select something from the list below</div>
                <Select aria-describedby="id-2-at" id="id-2" size="medium">
                  {items.map(item => (
                    <SelectOption key={item} value={item}>
                      {item}
                    </SelectOption>
                  ))}
                </Select>
                <Button
                  onClick={closeNested}
                  overrides={{
                    typographyPreset: 'utilityButton020',
                    stylePreset: 'buttonOutlinedPrimary',
                  }}
                >
                  Close nested modal
                </Button>
              </Stack>
            </Modal>
          </Stack>
        </Modal>
      </div>
    );
  });
StoryNestedModals.storyName = 'Nested modals';
StoryNestedModals.parameters = StoryModalDefault.parameters;

// export const StoryOptionalHeaderClose = () =>
//   React.createElement(() => {
//     const [isActiveBoth, openBoth, closeBoth] = useActiveState();
//     const [isActiveHeader, openHeader, closeHeader] = useActiveState();
//     const [isActiveButton, openButton, closeButton] = useActiveState();

//     return (
//       <div>
//         <StorybookHeading>
//           Modal with optional header & close button
//         </StorybookHeading>
//         <Stack spaceInline="space030" flow="horizontal-center">
//           <Button onClick={openBoth}>
//             Open without header and close button
//           </Button>
//           <Button onClick={openHeader}>Open without header</Button>
//           <Button onClick={openButton}>Open without close button</Button>
//         </Stack>

//         <Modal open={isActiveBoth} onDismiss={closeBoth} closePosition="none">
//           {modalContent}
//         </Modal>
//         <Modal
//           open={isActiveHeader}
//           onDismiss={closeHeader}
//           closePosition="right"
//         >
//           {modalContent}
//         </Modal>
//         <Modal
//           open={isActiveButton}
//           onDismiss={closeButton}
//           header="This is a modal header. Content is passed as string. Should be a long one"
//           closePosition="none"
//         >
//           {modalContent}
//         </Modal>
//       </div>
//     );
//   });
// StoryOptionalHeaderClose.storyName = 'optional header & close';
// StoryOptionalHeaderClose.parameters = StoryModalDefault.parameters;

export const StoryLogicalProps = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
        <StorybookHeading>Modal with logical props</StorybookHeading>
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open Modal
        </Button>
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          // header="This is a modal header. Content is passed as string. Should be a long one so that the icon button is vertically centered."
          overrides={{
            panel: {
              paddingInline: '15px',
              paddingBlock: '30px',
            },
          }}
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryLogicalProps.storyName = 'Logical props';
StoryLogicalProps.parameters = StoryModalDefault.parameters;

export const StoryWithOverrides = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with overrides</StorybookHeading>
      <ThemeProvider theme={myCustomTheme}>
        <Modal
          aria-label="Default with overrides"
          open
          onDismiss={() => {}}
          header={
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          }
          overrides={{
            overlay: {
              zIndex: 60,
              stylePreset: 'overlayCustom',
            },
            panel: {
              stylePreset: 'modalPanelCustom',
              zIndex: 70,
              topOffset: '15vh',
              width: '600px',
              height: '500px',
              minWidth: '20vw',
              maxWidth: '80vw',
              minHeight: '20vh',
              maxHeight: {
                xs: '90vh',
                md: '85vh',
              },
            },
            header: {
              paddingInline: 'space000',
              paddingBlock: 'space000',
              stylePreset: 'modalHeaderCustom',
            },
            content: {
              paddingInline: 'space060',
              paddingBlock: 'space060',
            },
            closeButton: {
              stylePreset: 'modalCloseButtonCustom',
              paddingInline: 'space000',
              paddingBlock: 'space000',
            },
          }}
        >
          {modalContent}
        </Modal>
      </ThemeProvider>
    </>
  ));
StoryWithOverrides.storyName = 'Styling overrides';
StoryWithOverrides.parameters = StoryModalDefault.parameters;
