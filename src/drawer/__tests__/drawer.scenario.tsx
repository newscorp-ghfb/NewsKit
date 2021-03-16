import React from 'react';
import {Drawer} from '..';
import {styled} from '../../utils/style';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {Link} from '../../link';
import {TextInput} from '../../text-input';
import {Block} from '../../block';

const Box = styled.div`
  width: 400px;
`;

const content =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur dictum justo id rutrum consectetur. Cras ultrices diam id dapibus viverra. Integer non velit vitae elit porta condimentum. Cras ultrices lectus eu porttitor volutpat. In hac habitasse platea dictumst. Integer maximus leo quis sapien aliquet finibus. Cras lobortis leo quis massa commodo ornare. Donec ac ligula sed mauris sodales pretium id eu nibh. Pellentesque et eros viverra, dignissim ante in, tincidunt eros. Curabitur mattis purus dolor, non aliquam sapien auctor quis. Morbi sit amet leo in urna dictum imperdiet vitae sed velit. In auctor nulla sed lectus ultricies dignissim. In mattis.';

export default {
  name: 'drawer',
  children: [
    {
      name: 'default',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

          return (
            <div data-testid="scrollable-drawer">
              <StorybookHeading>Default drawer</StorybookHeading>
              <Button onClick={open} data-testid="drawer-open-button">
                Open Drawer
              </Button>
              <p>SCROLL DOWN </p>
              <Box>
                {Array.from({length: 5}, (_, i) => (
                  <>
                    {i === 3 && (
                      <Button onClick={open}>
                        Another button to open the drawer
                      </Button>
                    )}
                    <p key={i}>{content}</p>
                  </>
                ))}
              </Box>
              <Drawer open={isActive} onDismiss={close}>
                <Block spaceInset="spaceInsetStretch050">
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
                  <TextInput label="First name" />
                  <TextInput label="Last name" />
                  <TextInput label="Phone number" />
                  <div>
                    <Link href="/">For more information...</Link>{' '}
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent id scelerisque sapien. Praesent mollis vestibulum
                    nunc at blandit. Donec vitae venenatis mi. Aenean ut ornare
                    diam, non facilisis diam. Pellentesque consequat mi in
                    imperdiet ultrices. Sed vitae erat ac urna{' '}
                    <Link href="/">Test link 2</Link> rutrum aliquet eu mattis
                    ligula. Sed dapibus, enim sed tristique gravida, nisl dolor
                    malesuada lacus, quis auctor dui mauris eu odio. Vivamus eu
                    augue et enim varius viverra. Vivamus ut tellus iaculis,
                    ullamcorper ligula sit amet, posuere ipsum.
                  </p>
                  <div>
                    <Button>Remind me later</Button>
                    <Button>Ok</Button>
                  </div>
                </Block>
              </Drawer>
            </div>
          );
        }),
    },
    {
      name: 'with aria attributes',
      type: 'story',
      parameters: {eyes: {include: false}},
      component: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

          return (
            <>
              <StorybookHeading>Drawer with aria attributes</StorybookHeading>
              <Button onClick={open}>Open Drawer</Button>
              <Drawer
                open={isActive}
                onDismiss={close}
                ariaDescribedby="description purpose"
              >
                <div id="description">Overriden drawer components</div>
                <div id="purpose">Showing different styles</div>
              </Drawer>
            </>
          );
        }),
    },
  ],
};
