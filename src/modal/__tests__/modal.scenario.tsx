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

export const modalContent = (
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

export default {
  title: 'modal',
  children: [
    {
      storyName: 'default',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

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
              >
                {modalContent}
              </Modal>
            </div>
          );
        }),
    },
    {
      storyName: 'open on page load',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const hasMounted = useHasMounted();
          const [isActive, setIsActive] = React.useState(hasMounted);

          useEffect(() => {
            setIsActive(hasMounted);
          }, [hasMounted]);

          const close = () => setIsActive(false);

          return (
            <>
              <StorybookHeading>Open modal on page load</StorybookHeading>
              <p>Refresh the page to open the modal</p>
              <Modal open={isActive} onDismiss={close} header="Modal header">
                <Stack
                  flow="vertical-center"
                  stackDistribution="center"
                  spaceInline="space020"
                >
                  <H1>You need an account</H1>
                  <p contentEditable>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam. (Double click for more text :) )
                  </p>
                  <Button>Register for a free account</Button>
                  <P>Already have an account?</P>
                  <Link href="/">Sign in here</Link>
                </Stack>
              </Modal>
            </>
          );
        }),
    },
    {
      storyName: 'with aria attributes',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

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
        }),
    },
    {
      storyName: 'with custom autofocus',
      parameters: {eyes: {include: false}},
      storyFn: () =>
        React.createElement(() => {
          const [isActive, setIsActive] = React.useState(false);

          const open = () => setIsActive(true);
          const close = () => setIsActive(false);

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
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam. (Double click for more text :) )
                  </p>
                  <Button data-autofocus>Register for a free account</Button>
                </Stack>
              </Modal>
            </div>
          );
        }),
    },
  ],
};
