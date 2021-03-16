import React from 'react';
import {Drawer} from '..';
import {createTheme, ThemeProvider} from '../../theme';
import {getColorFromTheme, styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {IconFilledChevronRight} from '../../icons';
import {Button} from '../../button';
import {Link, LinkStandalone} from '../../link';
import {TextInput} from '../../text-input';
import {Block} from '../../block';

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
    },
  },
});

export default {
  name: 'drawer-layouts-only',
  children: [
    {
      name: 'right placement',
      type: 'story',
      component: () =>
        React.createElement(() => {
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
              <LinkStandalone
                href="/"
                overrides={{typographyPreset: 'utilityButton020'}}
              >
                {children}
              </LinkStandalone>
              <IconFilledChevronRight overrides={{size: 'sizing040'}} />
            </StyledCategoryRow>
          );

          return (
            <>
              <StorybookHeading>Default drawer</StorybookHeading>
              <Drawer open onDismiss={() => {}}>
                <Block spaceInset="spaceInsetStretch050">
                  {Array.from({length: 16}, (_, i) => (
                    <CategoryRow>{`CATEGORY ${i + 1}`}</CategoryRow>
                  ))}
                </Block>
              </Drawer>
            </>
          );
        }),
    },
    {
      name: 'left placement',
      type: 'story',
      component: () =>
        React.createElement(() => {
          const renderChildrenAsReactComponent = () => (
            <Block spaceInset="spaceInsetStretch050">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                aliquet lorem massa, et lacinia ipsum tristique id. Phasellus
                sed posuere lacus. Pellentesque eu odio{' '}
                <Link href="/">Test link 1</Link> sapien. Donec finibus
                pellentesque est porta dictum. Suspendisse venenatis vitae augue
                nec hendrerit. In ut quam tempus, feugiat risus quis, porta
                eros. Aliquam ultricies ac orci viverra gravida. Ut sodales odio
                tempor sodales viverra. In condimentum tincidunt fermentum.
                Nullam imperdiet est vel tincidunt suscipit. Vestibulum vel
                pulvinar nibh, at molestie lectus. Curabitur ultricies massa eu
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Praesent id scelerisque sapien. Praesent mollis vestibulum nunc
                at blandit. Donec vitae venenatis mi. Aenean ut ornare diam, non
                facilisis diam. Pellentesque consequat mi in imperdiet ultrices.
                Sed vitae erat ac urna <Link href="/">Test link 2</Link> rutrum
                aliquet eu mattis ligula. Sed dapibus, enim sed tristique
                gravida, nisl dolor malesuada lacus, quis auctor dui mauris eu
                odio. Vivamus eu augue et enim varius viverra. Vivamus ut tellus
                iaculis, ullamcorper ligula sit amet, posuere ipsum.
              </p>
              <div>
                <Button>Remind me later</Button>
                <Button>Ok</Button>
              </div>
            </Block>
          );

          return (
            <>
              <StorybookHeading>
                Default positioned on the left
              </StorybookHeading>
              <Drawer placement="left" open onDismiss={() => {}}>
                {renderChildrenAsReactComponent()}
              </Drawer>
            </>
          );
        }),
    },
    {
      name: 'with overrides',
      type: 'story',
      component: () =>
        React.createElement(() => (
          <>
            <StorybookHeading>Default with overrides</StorybookHeading>
            <ThemeProvider theme={myCustomTheme}>
              <Drawer
                open
                onDismiss={() => {}}
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
                }}
              >
                {null}
              </Drawer>
            </ThemeProvider>
          </>
        )),
    },
  ],
};
