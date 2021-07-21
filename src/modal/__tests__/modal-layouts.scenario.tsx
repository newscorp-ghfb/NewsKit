import React from 'react';
import {Modal} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {StorybookHeading} from '../../test/storybook-comps';
import {LinkStandalone} from '../../link';

import {modalContent} from './modal.scenario';

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

export default {
  title: 'modal-layouts-only',
  children: [
    {
      storyName: 'default',
      storyFn: () =>
        React.createElement(() => (
          <>
            <StorybookHeading>Default modal</StorybookHeading>
            <Modal
              open
              onDismiss={() => {}}
              header={
                <LinkStandalone href="www.test.com">Link button</LinkStandalone>
              }
            >
              {modalContent}
            </Modal>
          </>
        )),
    },
    {
      storyName: 'close button on the left',
      storyFn: () =>
        React.createElement(() => (
          <>
            <StorybookHeading>
              Modal: header close button on the left
            </StorybookHeading>
            <Modal
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
        )),
    },
    {
      storyName: 'no header content',
      storyFn: () =>
        React.createElement(() => (
          <>
            <StorybookHeading>Default with no header</StorybookHeading>
            <Modal
              open
              onDismiss={() => {}}
              overrides={{header: {spaceInset: 'space000'}}}
            >
              {modalContent}
            </Modal>
          </>
        )),
    },
    {
      storyName: 'with overrides',
      storyFn: () =>
        React.createElement(() => (
          <>
            <StorybookHeading>Default with overrides</StorybookHeading>
            <ThemeProvider theme={myCustomTheme}>
              <Modal
                open
                onDismiss={() => {}}
                header={
                  <LinkStandalone href="www.test.com">
                    Link button
                  </LinkStandalone>
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
                    spaceInset: 'spaceInset000',
                    stylePreset: 'modalHeaderCustom',
                  },
                  content: {
                    spaceInset: 'spaceInset060',
                  },
                  closeButton: {
                    stylePreset: 'modalCloseButtonCustom',
                    spaceInset: 'spaceInset000',
                  },
                }}
              >
                {modalContent}
              </Modal>
            </ThemeProvider>
          </>
        )),
    },
  ],
};

export const disabledRules = ['tabindex'];
