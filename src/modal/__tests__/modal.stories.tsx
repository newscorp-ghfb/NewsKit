/* eslint-disable react-hooks/rules-of-hooks */
import React, {useEffect} from 'react';
import {Story as StoryType} from '@storybook/react';
import {Modal} from '..';
import {styled} from '../../utils/style';
import {Button} from '../../button';
import {useHasMounted} from '../../utils/hooks';
import {Select, SelectOption} from '../../select';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {Label, Block, P} from '../..';
import {AssistiveText} from '../../assistive-text';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';
import {deepMerge} from '../../utils';
import {StorybookPage} from '../../test/storybook-comps';

const modalPanel = {
  base: {
    backgroundColor: '{{colors.interface020}}',
    borderRadius: '{{borders.borderRadiusDefault}}',
  },
};

const modalPanelCustomHeightWidth = {
  base: {
    width: '348px',
    height: '268px',
    minWidth: '20vw',
    maxWidth: '80vw',
    minHeight: '20vh',
    maxHeight: {
      xs: '90vh',
      md: '85vh',
    },
  },
};

const modalPanelCustomBg = {
  base: {
    backgroundColor: '{{colors.interfaceInformative020}}',
  },
};

const modalContent = (
  <P overrides={{typographyPreset: 'editorialParagraph010'}}>Content</P>
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
          backgroundColor: '{{colors.overlayTintBase010}}',
          borderRadius: '{{borders.borderRadiusDefault}}',
        },
      },
      modalHeaderCustom: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.inkBrand010}}',
          color: '{{colors.inkBrand010}}',
        },
      },
      modalContentCustom: {
        base: {
          color: '{{colors.inkBrand010}}',
        },
      },
      modalCloseButtonCustom: {
        base: {
          borderWidth: '{{borders.borderWidth010}}',
          backgroundColor: '{{colors.transparent}}',
          iconColor: '{{colors.inkBrand010}}',
        },
      },

      modalPanelCustom: deepMerge(
        {},
        modalPanelCustomBg,
        modalPanelCustomHeightWidth,
      ),

      modalPanelDefault: deepMerge({}, modalPanel, modalPanelCustomHeightWidth),
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
      <StorybookPage data-testid="scrollable-modal">
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
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
          header="Modal Title"
        >
          {modalContent}
        </Modal>
      </StorybookPage>
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
        <Modal
          open={isActive}
          onDismiss={close}
          aria-label="Open modal on page load"
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
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
          panel: {
            stylePreset: 'modalPanelDefault',
          },
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
      <Modal
        aria-label="Default with no header"
        open
        onDismiss={() => {}}
        overrides={{
          panel: {
            stylePreset: 'modalPanelDefault',
          },
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
    <Modal
      aria-label="Default with no header"
      open
      overrides={{
        panel: {
          stylePreset: 'modalPanelDefault',
        },
      }}
      header="Modal Title"
      closePosition="none"
      onDismiss={() => {}}
    >
      {modalContent}
    </Modal>
  ));
StoryNoClose.storyName = 'No close button';
StoryNoClose.parameters = StoryModalDefault.parameters;

export const StoryNoHeader = () =>
  React.createElement(() => (
    <Modal
      aria-label="Default with no header"
      open
      closePosition="none"
      onDismiss={() => {}}
    >
      {modalContent}
    </Modal>
  ));
StoryNoHeader.storyName = 'No header';
StoryNoHeader.parameters = StoryModalDefault.parameters;

export const StoryWithHiddenOverlay = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <StorybookPage data-testid="scrollable-modal">
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
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
          header="Modal Title"
          hideOverlay
        >
          {modalContent}
        </Modal>
      </StorybookPage>
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
    <Modal
      aria-label="Default modal"
      open
      onDismiss={() => {}}
      overrides={{
        panel: {
          base: {
            width: '348px',
            height: '268px',
            minWidth: '20vw',
            maxWidth: '80vw',
            minHeight: '20vh',
            maxHeight: {
              xs: '90vh',
              md: '85vh',
            },
          },
        },
      }}
      header="Modal Title"
    >
      {modalContent}
      <br />
      <br />
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
        <AssistiveText
          overrides={{
            marginBlock: 'space050',
          }}
        >
          Assistive Text
        </AssistiveText>
      </Block>
    </Modal>
  ));
StoryWithSelect.storyName = 'Select';
StoryWithSelect.parameters = StoryModalDefault.parameters;

export const StoryWithAriaAttributes = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();
    return (
      <StorybookPage>
        <Button
          onClick={open}
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
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
          header="Modal Title"
        >
          {modalContent}
        </Modal>
      </StorybookPage>
    );
  });
StoryWithAriaAttributes.storyName = 'Aria attributes';
StoryWithAriaAttributes.parameters = StoryModalDefault.parameters;

export const StoryWithCustomAutofocus = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <StorybookPage data-testid="scrollable-modal">
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
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
          header="Modal Title"
        >
          {modalContent}
        </Modal>
      </StorybookPage>
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
      <StorybookPage data-testid="scrollable-modal">
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
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
          header="Modal Title"
        >
          {modalContent}
        </Modal>
      </StorybookPage>
    );
  });
StoryWithCustomRestoreFocus.storyName = 'Custom restore focus';
StoryWithCustomRestoreFocus.parameters = StoryModalDefault.parameters;

export const StoryWithDisabledFocusTrap = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <StorybookPage data-testid="scrollable-modal">
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
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </StorybookPage>
    );
  });
StoryWithDisabledFocusTrap.storyName = 'Focus trapping disabled';
StoryWithDisabledFocusTrap.parameters = StoryModalDefault.parameters;

export const StoryModelessModal = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <StorybookPage data-testid="scrollable-modal">
        <Button
          onClick={open}
          data-testid="modal-open-button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open modeless modal
        </Button>
        <Modal
          open={isActive}
          onDismiss={close}
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
            header: {typographyPreset: 'utilityLabel030'},
          }}
          header="Modal Title"
          hideOverlay
          disableFocusTrap
        >
          {modalContent}
        </Modal>
      </StorybookPage>
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
      <StorybookPage data-testid="scrollable-modal">
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
        <ModalWrapper>
          <P overrides={{typographyPreset: 'editorialParagraph010'}}>
            Inline modal opens here.
          </P>
          <Modal
            open={isActive}
            onDismiss={close}
            overrides={{
              panel: {
                stylePreset: 'modalPanelDefault',
              },
            }}
            header="Modal Title"
            hideOverlay
            disableFocusTrap
            inline
          >
            {modalContent}
          </Modal>
        </ModalWrapper>
      </StorybookPage>
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
      <StorybookPage>
        <Button
          onClick={open}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
          }}
        >
          Open modal
        </Button>
        <Modal
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          header="Modal Title"
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
        >
          {modalContent}
          <br />
          <br />
          <Button
            onClick={openNested}
            overrides={{
              typographyPreset: 'utilityButton020',
              stylePreset: 'buttonOutlinedPrimary',
            }}
          >
            Open nested modal
          </Button>
          <Modal
            aria-label="Nested Modal"
            open={isNestedActive}
            onDismiss={closeNested}
            header="Nested modal"
          >
            {modalContent}
            <br />
            <br />
            <Button
              onClick={closeNested}
              overrides={{
                typographyPreset: 'utilityButton020',
                stylePreset: 'buttonOutlinedPrimary',
              }}
            >
              Close nested modal
            </Button>
          </Modal>
        </Modal>
      </StorybookPage>
    );
  });
StoryNestedModals.storyName = 'Nested modals';
StoryNestedModals.parameters = StoryModalDefault.parameters;

export const StoryLogicalProps = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <StorybookPage data-testid="scrollable-modal">
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
          aria-label="Default Modal"
          open={isActive}
          onDismiss={close}
          header="Modal Title"
          overrides={{
            panel: {
              stylePreset: 'modalPanelDefault',
            },
          }}
        >
          {modalContent}
        </Modal>
      </StorybookPage>
    );
  });
StoryLogicalProps.storyName = 'Logical props';
StoryLogicalProps.parameters = StoryModalDefault.parameters;

export const StoryWithOverrides = () =>
  React.createElement(() => (
    <StorybookPage>
      <Modal
        aria-label="Default with overrides"
        open
        onDismiss={() => {}}
        header="Modal Title"
        overrides={{
          overlay: {
            zIndex: 60,
            stylePreset: 'overlayCustom',
          },
          panel: {
            stylePreset: 'modalPanelCustom',
            zIndex: 70,
            topOffset: '15vh',
          },
          header: {
            stylePreset: 'modalHeaderCustom',
          },
          content: {
            paddingInline: 'space060',
            paddingBlock: 'space060',
            stylePreset: 'modalContentCustom',
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
    </StorybookPage>
  ));
StoryWithOverrides.storyName = 'Styling overrides';
StoryWithOverrides.parameters = StoryModalDefault.parameters;
