import React from 'react';
import {Modal} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {StorybookHeading, StorybookParah} from '../../test/storybook-comps';
import {LinkStandalone, Link} from '../../link';
import {Button} from '../../button';
import {Stack} from '../../stack';
import {H1, P} from '../../typography';
import {Select, SelectOption} from '../../select';

const modalContent = (
  <Stack
    flow="vertical-center"
    stackDistribution="center"
    spaceInline="space020"
  >
    <H1>You need an account</H1>
    <StorybookParah>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium, totam rem aperiam. (Double click for more text :) )
    </StorybookParah>
    <Button>Register for a free account</Button>
    <P>Already have an account?</P>
    <Link href="/">Sign in here</Link>
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

export default {
  title: 'Components/modal-layouts-only',
  component: () => 'None',
  disabledRules: ['tabindex'],
};

export const StoryDefault = () =>
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
        {modalContent}
      </Modal>
    </>
  ));
StoryDefault.storyName = 'default';
StoryDefault.parameters = {
  previewTabs: {
    'storybook/canvas/panel': {index: -1},
    'storybook/docs/panel': {hidden: true},
  },
  viewMode: 'story',
  docs: {
    page: null,
  },
};

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
StoryWithCloseButtonOnTheLeft.storyName = 'with close button on the left';
StoryWithCloseButtonOnTheLeft.parameters = StoryDefault.parameters;

export const StoryNoHeaderContent = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with no header</StorybookHeading>
      <Modal
        aria-label="Default with no header"
        open
        onDismiss={() => {}}
        overrides={{header: {spaceInset: 'space000'}}}
      >
        {modalContent}
      </Modal>
    </>
  ));
StoryNoHeaderContent.storyName = 'no header content';
StoryNoHeaderContent.parameters = StoryDefault.parameters;

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
StoryNoClose.storyName = 'no close button';
StoryNoClose.parameters = StoryDefault.parameters;

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
StoryNoHeader.storyName = 'no header & close button';
StoryNoHeader.parameters = StoryDefault.parameters;

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
  ));
StoryWithOverrides.storyName = 'with overrides';
StoryWithOverrides.parameters = StoryDefault.parameters;

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
StoryWithSelect.storyName = 'with select';
StoryWithSelect.parameters = StoryDefault.parameters;
