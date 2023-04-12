/* eslint-disable react-hooks/rules-of-hooks */
import React from 'react';
import {Drawer} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {Button} from '../../button';
import {LinkInline} from '../../link';
import {TextInput} from '../../text-input';

const DrawerContent = () => (
  <>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet lorem
      massa, et lacinia ipsum tristique id. Phasellus sed posuere lacus.
      Pellentesque eu odio <LinkInline href="/">Test link 1</LinkInline> sapien.
      Donec finibus pellentesque est porta dictum. Suspendisse venenatis vitae
      augue nec hendrerit. In ut quam tempus, feugiat risus quis, porta eros.
      Aliquam ultricies ac orci viverra gravida. Ut sodales odio tempor sodales
      viverra. In condimentum tincidunt fermentum. Nullam imperdiet est vel
      tincidunt suscipit. Vestibulum vel pulvinar nibh, at molestie lectus.
      Curabitur ultricies massa eu sem varius volutpat. Ut vitae purus et enim
      imperdiet finibus. Quisque posuere lacus a nunc tempor accumsan. Aliquam
      odio nunc, interdum.
    </p>
    <TextInput label="First name" />
    <TextInput label="Last name" />
    <TextInput label="Phone number" />
    <div>
      <LinkInline href="/">For more information...</LinkInline>{' '}
    </div>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id
      scelerisque sapien. Praesent mollis vestibulum nunc at blandit. Donec
      vitae venenatis mi. Aenean ut ornare diam, non facilisis diam.
      Pellentesque consequat mi in imperdiet ultrices. Sed vitae erat ac urna{' '}
      <LinkInline href="/">Test link 2</LinkInline> rutrum aliquet eu mattis
      ligula. Sed dapibus, enim sed tristique gravida, nisl dolor malesuada
      lacus, quis auctor dui mauris eu odio. Vivamus eu augue et enim varius
      viverra. Vivamus ut tellus iaculis, ullamcorper ligula sit amet, posuere
      ipsum.
    </p>
    <div>
      <Button>Remind me later</Button>
      <Button>Ok</Button>
    </div>
  </>
);

export default {
  title: 'Components/drawer-e2e-hidden',
  component: () => 'None',
};

const useActiveState = (
  initial = false,
): [boolean, () => void, () => void, () => void] => {
  const [isActive, setIsActive] = React.useState(initial);

  const open = () => setIsActive(true);
  const close = () => setIsActive(false);
  const toggle = () => (isActive ? close() : open());

  return [isActive, open, close, toggle];
};

export const StoryDreawerE2Etest = () =>
  React.createElement(() => {
    const [isActive, open, close] = useActiveState();

    return (
      <div data-testid="scrollable-drawer">
        <StorybookHeading>Drawer e2e test</StorybookHeading>
        <Button onClick={open} data-testid="drawer-open-button">
          Open Drawer
        </Button>

        <Drawer
          aria-label="Drawer example"
          open={isActive}
          onDismiss={close}
          header="This is a drawer header."
        >
          <DrawerContent />
        </Drawer>

        {Array.from({length: 20}).map(() => (
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquet
            lorem massa, et lacinia ipsum tristique id. Phasellus sed posuere
            lacus. Pellentesque eu odio sapien. Donec finibus pellentesque est
            porta dictum. Suspendisse venenatis vitae augue nec hendrerit. In ut
            quam tempus, feugiat risus quis, porta eros. Aliquam ultricies ac
            orci viverra gravida. Ut sodales odio tempor sodales viverra. In
            condimentum tincidunt fermentum. Nullam imperdiet est vel tincidunt
            suscipit. Vestibulum vel pulvinar nibh, at molestie lectus.
            Curabitur ultricies massa eu sem varius volutpat. Ut vitae purus et
            enim imperdiet finibus. Quisque posuere lacus a nunc tempor
            accumsan. Aliquam odio nunc, interdum.
          </p>
        ))}
      </div>
    );
  });
StoryDreawerE2Etest.storyName = 'drawer-e2e-test';
StoryDreawerE2Etest.parameters = {percy: {skip: true}};
