import React from 'react';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {styled, withDefaultProps} from '../../utils';
import {IconFilledError} from '../../icons';
import {toast, ToastProvider, Toast} from '..';
import {Button} from '../../button';

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const ToastNegative = withDefaultProps(Toast, {
  icon: (
    <IconFilledError
      overrides={{
        size: 'iconSize020',
      }}
    />
  ),
  overrides: {stylePreset: 'toastNegative'},
});

export const StoryToaste2eApi = () => {
  const notifyError = () =>
    toast(({onClose}) => (
      <ToastNegative data-testid="alert-error">
        Error message{' '}
        <button
          type="button"
          data-testid="close"
          onClick={() => onClose()}
          hidden
        >
          X
        </button>{' '}
      </ToastNegative>
    ));

  return (
    <StorybookPage columns="1fr">
      <StorybookCase>
        <Button
          type="button"
          data-testid="action-error"
          onClick={notifyError}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
            marginInlineEnd: 'space080',
          }}
        >
          Error with duration
        </Button>
        <Container>
          <ToastProvider
            autoHideDuration={1000}
            verticalOffset="10px"
            horizontalOffset="10px"
            position="bottom-center"
          />
        </Container>
      </StorybookCase>
    </StorybookPage>
  );
};
StoryToaste2eApi.storyName = 'Toast api examples';
StoryToaste2eApi.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Components/toast-e2e-hidden',
  component: () => 'None',
};
