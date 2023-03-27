/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {Story as StoryType} from '@storybook/react';
import {Modal} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {Stack} from '../../stack';
import {useHasMounted} from '../../utils/hooks';
import {Select, SelectOption} from '../../select';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Label, Block, P} from '../..';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const modalContent = (
  <>
    <P overrides={{typographyPreset: 'editorialParagraph010'}}>Content</P>
  </>
);

const ModaleCustomThemeObject: CreateThemeArgs = {
  name: 'my-custom-modal-theme',
  overrides: {
    stylePresets: {
      modalHeader: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.interface050}}',
        },
      },
      overlayCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
        },
      },
      modalPanelCustom: {
        base: {
          backgroundColor: '{{colors.interfaceInformative020}}',
        },
      },
      modalHeaderCustom: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.inkBrand010}}',
        },
      },
      modalCloseButtonCustom: {
        base: {
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.transparent}}',
          iconColor: '{{colors.inkBrand010}}',
        },
      },
    },
  },
};

const useActiveState = (initial = false): [boolean, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);

  return [isActive, open, close];
};

export default {
  title: 'Components/Modal',
  component: () => 'None',
  parameters: {
    nkDocs: {
      title: 'Headline',
      url: 'https://newskit.co.uk/components/headline/',
      description:
        'Headline is used to highlight the main point or category of the following text.',
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
          ModaleCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};

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
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          overrides={{
            header: {
              stylePreset: 'modalHeader',
              typographyPreset: 'utilityLabel030',
            },
          }}
          header="Modal Title"
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
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
        >
          {modalContent}
        </Modal>
      </>
    );
  });
StoryOpenOnPageLoad.storyName = 'Open on page load';
StoryOpenOnPageLoad.parameters = StoryModalDefault.parameters;

export const StoryWithCloseButtonOnTheLeft = () =>
  React.createElement(() => (
    <>
      <Modal
        aria-label="Modal: header close button on the left"
        open
        onDismiss={() => {}}
        overrides={{
          header: {typographyPreset: 'utilityLabel030'},
        }}
        header="Modal Title"
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
        closePosition="left"
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
        overrides={{
          header: {typographyPreset: 'utilityLabel030'},
        }}
        header="Modal Title"
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
        <Stack>
          <P overrides={{typographyPreset: 'editorialParagraph010'}}>Content</P>
        </Stack>
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
          open={isActive}
          onDismiss={close}
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
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
        overrides={{
          header: {typographyPreset: 'utilityLabel030'},
        }}
        header="Modal Title"
      >
        <Block>
          <Label
            htmlFor="id-1"
            size="small"
            overrides={{
              typographyPreset: 'utilityLabel020',
            }}
          >
            Label
          </Label>
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
          <AssistiveText>Assistive Text</AssistiveText>
        </Block>
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
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
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
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
        >
          {modalContent}
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
        <br />
        <br />
        <Button
          id="test-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Takes refocus
        </Button>
        <Modal
          open={isActive}
          onDismiss={close}
          ariaLabelledby="modalHeader"
          ariaDescribedby="description purpose"
          restoreFocusTo={elementToRestoreFocusTo}
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
        >
          {modalContent}
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
          open={isActive}
          onDismiss={close}
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
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
          open={isActive}
          onDismiss={close}
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
          hideOverlay
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </div>
    );
  });
StoryModelessModal.storyName = 'Modeless modal';
StoryModelessModal.parameters = StoryModalDefault.parameters;

const ModalWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 20px;
  position: relative;
  border: 1px solid #3358cc;
  background: transparent;
  width: 700px;
  height: 500px;
`;

export const StoryModelessInlineModal = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
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
        <ModalWrapper>
          <P overrides={{typographyPreset: 'editorialParagraph010'}}>
            Inline modal opens here.
          </P>
          <Modal
            open={isActive}
            onDismiss={close}
            overrides={{
              header: {typographyPreset: 'utilityLabel030'},
            }}
            header="Modal Title"
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
StoryModelessInlineModal.storyName = 'Modeless inline modal';
StoryModelessInlineModal.parameters = StoryModalDefault.parameters;

export const StoryNestedModals = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    const [isNestedActive, setIsNestedActive] = React.useState(false);
    const openNested = () => setIsNestedActive(true);
    const closeNested = () => setIsNestedActive(false);

    return (
      <div>
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
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
        >
          {modalContent}
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

export const StoryLogicalProps = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-modal">
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
          header="Modal Title"
          overrides={{
            header: {typographyPreset: 'utilityLabel030'},
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
      <Modal
        aria-label="Default with overrides"
        open
        onDismiss={() => {}}
        header="Modal Title"
        overrides={{
          overlay: {
            zIndex: 60,
            stylePreset: 'overlayTintBase040',
          },
          panel: {
            stylePreset: 'modalPanelCustom',
            borderRadius: '{{borders.borderRadiusDefault}}',
            zIndex: 70,
            topOffset: '15vh',
            width: '348px',
            height: '249px',
            minWidth: '20vw',
            maxWidth: '80vw',
            minHeight: '20vh',
            maxHeight: {
              xs: '90vh',
              md: '85vh',
            },
          },
          header: {
            stylePreset: 'modalHeaderCustom',
            typographyPreset: 'utilityLabel030',
          },
          content: {
            paddingInline: 'space060',
            paddingBlock: 'space060',
            typographyPreset: 'inkBrand010',
          },
          closeButton: {
            stylePreset: 'modalCloseButtonCustom',
            paddingInline: 'space000',
            paddingBlock: 'space000',
            typographyPreset: 'inkBrand010',
          },
        }}
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryWithOverrides.storyName = 'Styling overrides';
StoryWithOverrides.parameters = StoryModalDefault.parameters;
