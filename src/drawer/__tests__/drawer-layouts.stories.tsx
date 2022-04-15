import React from 'react';
import {Drawer} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {getColorFromTheme, styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconFilledChevronRight, IconFilledAddCircleOutline} from '../../icons';
import {Button} from '../../button';
import {Link, LinkStandalone} from '../../link';
import {TextInput} from '../../text-input';
import {UnorderedList} from '../../unordered-list';
import {Label} from '../../label';
import {Select, SelectOption} from '../../select';
import {AssistiveText} from '../../assistive-text';
import {TextFieldSize} from '../../text-field';

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
          boxShadow: '0px 0px 16px 14px rgba(169,183,172,0.9)',
        },
      },
      drawerHeaderCustom: {
        base: {
          backgroundColor: '{{colors.transparent}}',
          borderStyle: 'none none solid none',
          borderWidth: '{{borders.borderWidth010}}',
          borderColor: '{{colors.red060}}',
        },
      },
      drawerCloseButtonCustom: {
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

const StyledCategoryRow = styled.div`
  border-bottom: 1px solid ${getColorFromTheme('interface050')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 6px 0;
  color: ${getColorFromTheme('interactiveSecondary050')};
`;

const CategoryRow = ({children}: {children: string}) => (
  <StyledCategoryRow>
    <LinkStandalone href="/" overrides={{typographyPreset: 'utilityButton020'}}>
      {children}
    </LinkStandalone>
    <IconFilledChevronRight overrides={{size: 'sizing040'}} />
  </StyledCategoryRow>
);

export default {
  title: 'NewsKit Light/drawer-layouts-only',
  component: () => 'None',
  disabledRules: ['tabindex', 'heading-order'],
};

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

export const StorySelect = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer placed on the right</StorybookHeading>
      <Drawer
        aria-label="drawer headline"
        open
        onDismiss={() => {}}
        placement="left"
        header={
          <>
            <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          </>
        }
      >
        <div style={{border: '1px solid blue'}}>
          <Label htmlFor="id-2" size={'medium' as TextFieldSize}>
            Label
          </Label>
          <Select aria-describedby="id-1-at" id="id-1" size="medium">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-1-at" size={'medium' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </div>
        <div style={{border: '1px solid red', margin: '30px 0'}}>
          {Array.from({length: 16}, (_, i) => (
            <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
          ))}
        </div>
        <div style={{border: '1px solid blue'}}>
          <Label htmlFor="id-2" size={'medium' as TextFieldSize}>
            Label
          </Label>
          <Select aria-describedby="id-2-at" id="id-2" size="medium">
            {items.map(item => (
              <SelectOption key={item} value={item}>
                {item}
              </SelectOption>
            ))}
          </Select>
          <AssistiveText id="id-2-at" size={'medium' as TextFieldSize}>
            Assistive Text
          </AssistiveText>
        </div>
      </Drawer>
    </>
  ));
StorySelect.storyName = 'with select';

export const StoryRightPlacement = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer placed on the right</StorybookHeading>
      <Drawer
        aria-label="drawer on the right"
        open
        onDismiss={() => {}}
        placement="right"
        header={
          <>
            <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          </>
        }
      >
        <div>
          {Array.from({length: 16}, (_, i) => (
            <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
          ))}
        </div>
      </Drawer>
    </>
  ));
StoryRightPlacement.storyName = 'right placement';

export const StoryLeftPlacement = () =>
  React.createElement(() => {
    const renderChildren = () => (
      <>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
          lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
          lacus. Pellentesque eu odio <Link href="/">Test link 1</Link> sapien.
          Donec finibus pellentesque est porta dictum. Suspendisse venenatis
          vitae augue nec hendrerit. In ut quam tempus, feugiat risus quis,
          porta eros. Aliquam ultricies ac orci viverra gravida. Ut sodales odio
          tempor sodales viverra. In condimentum tincidunt fermentum. Nullam
          imperdiet est vel tincidunt suscipit. Vestibulum vel pulvinar nibh, at
          molestie lectus. Curabitur ultricies massa eu sem varius volutpat. Ut
          vitae purus et enim imperdiet finibus. Quisque posuere lacus a nunc
          tempor accumsan. Aliquam odio nunc, interdum.
        </p>
        <TextInput label="First name" />
        <TextInput label="Last name" />
        <TextInput label="Phone number" />
        <div>
          <Link href="/">For more information...</Link>{' '}
        </div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
          scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec
          vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
          Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac
          urna <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
          ligula. Sed dapibus, enim sed tristique gravida, nisl dolor malesuada
          lacus, quis auctor dui mauris eu odio. Vivamus eu augue et enim varius
          viverra. Vivamus ut tellus iaculis, ullamcorper ligula sit amet,
          posuere ipsum.
        </p>
        <div>
          <Button>Remind me later</Button>
          <Button>Ok</Button>
        </div>
      </>
    );

    const renderHeader = () => (
      <>
        <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
        <LinkStandalone href="www.test.com">Link button</LinkStandalone>
      </>
    );

    return (
      <>
        <StorybookHeading>Drawer placed on the left</StorybookHeading>
        <Drawer
          aria-label="Drawer placed on the left"
          open
          onDismiss={() => {}}
          header={renderHeader()}
        >
          {renderChildren()}
        </Drawer>
      </>
    );
  });
StoryLeftPlacement.storyName = 'left placement';

export const StoryTopPlacement = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer placed on the top</StorybookHeading>
      <Drawer
        aria-label="drawer on the left"
        open
        onDismiss={() => {}}
        placement="top"
        header={
          <>
            <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          </>
        }
      >
        <div>
          {Array.from({length: 5}, (_, i) => (
            <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
          ))}
        </div>
      </Drawer>
    </>
  ));
StoryTopPlacement.storyName = 'top placement';

export const StoryBottomPlacement = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer placed on the bottom</StorybookHeading>
      <Drawer
        aria-label="drawer on the the bottom"
        open
        onDismiss={() => {}}
        placement="bottom"
        header={
          <>
            <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          </>
        }
      >
        <div>
          {Array.from({length: 4}, (_, i) => (
            <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
          ))}
        </div>
      </Drawer>
    </>
  ));
StoryBottomPlacement.storyName = 'bottom placement';

export const StoryRightPlacementWithClosepositionSetToLeft = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer placed on the right</StorybookHeading>
      <Drawer
        aria-label="drawer placed on the right"
        open
        onDismiss={() => {}}
        placement="right"
        closePosition="left"
        header={
          <>
            <IconFilledAddCircleOutline overrides={{size: 'iconSize010'}} />
            <LinkStandalone href="www.test.com">Link button</LinkStandalone>
          </>
        }
      >
        <div>
          {Array.from({length: 16}, (_, i) => (
            <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
          ))}
        </div>
      </Drawer>
    </>
  ));
StoryRightPlacementWithClosepositionSetToLeft.storyName =
  'right placement with closePosition set to left';

export const StoryNoHeaderContent = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with no header</StorybookHeading>
      <Drawer
        aria-label="drawer with no header"
        open
        onDismiss={() => {}}
        overrides={{header: {spaceInset: 'space000'}}}
      >
        <h3>List title</h3>
        <p>List description goes here</p>

        <h4>List content</h4>
        <UnorderedList listItemMarker={IconFilledAddCircleOutline}>
          {Array.from({length: 5}, () => 'List item')}
        </UnorderedList>
      </Drawer>
    </>
  ));
StoryNoHeaderContent.storyName = 'no header content';

export const StoryNoClose = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default with no close button</StorybookHeading>
      <Drawer header="Header" open onDismiss={() => {}} closePosition="none">
        <h3>List title</h3>
        <p>List description goes here</p>

        <h4>List content</h4>
        <UnorderedList listItemMarker={IconFilledAddCircleOutline}>
          {Array.from({length: 5}, () => 'List item')}
        </UnorderedList>
      </Drawer>
    </>
  ));
StoryNoClose.storyName = 'no close button';

export const StoryNoHeader = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Default withhout header</StorybookHeading>
      <Drawer open onDismiss={() => {}} closePosition="none">
        <h3>List title</h3>
        <p>List description goes here</p>

        <h4>List content</h4>
        <UnorderedList listItemMarker={IconFilledAddCircleOutline}>
          {Array.from({length: 5}, () => 'List item')}
        </UnorderedList>
      </Drawer>
    </>
  ));
StoryNoHeader.storyName = 'no header';

export const StoryWithOverrides = () =>
  React.createElement(() => (
    <>
      <StorybookHeading>Drawer with overriden space inset </StorybookHeading>
      <ThemeProvider theme={myCustomTheme}>
        <Drawer
          aria-label="drawer with overriden space inset"
          open
          onDismiss={() => {}}
          placement="right"
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
          Content area
        </Drawer>
      </ThemeProvider>
    </>
  ));
StoryWithOverrides.storyName = 'with overrides';
