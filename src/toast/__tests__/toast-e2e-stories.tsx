import React from 'react';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {styled, withDefaultProps} from '../../utils';
import {IconFilledError, IconFilledCheckCircle} from '../../icons';
import {toast, ToastProvider, Toast} from '..';
import {Button} from '../../button';

const Container = styled.div`
  position: relative;
  z-index: 1;
`;

const ToastPositive = withDefaultProps(Toast, {
  icon: (
    <IconFilledCheckCircle
      overrides={{
        size: 'iconSize020',
      }}
    />
  ),
  overrides: {stylePreset: 'toastPositive'},
});

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

export const StoryToastE2EtestHidden = () => {
  const ToastWithState = () => {
    const [state, setState] = React.useState(false);
    const onClick = () => setState(true);
    return (
      <Toast
        role="alert"
        overrides={{
          stylePreset: !state ? 'toastNotice' : 'toastPositive',
        }}
        icon={
          <IconFilledCheckCircle
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
        actions={
          !state
            ? () => (
                <Button
                  size="small"
                  overrides={{stylePreset: 'buttonMinimalInverse'}}
                  onClick={onClick}
                >
                  undo
                </Button>
              )
            : undefined
        }
      >
        {!state ? 'Your account has been updated' : 'Action reversed'}
      </Toast>
    );
  };

  const notifyWithToggle = () =>
    toast(<ToastWithState />, {autoHideDuration: 5000});

  const notifyNeutral = () =>
    toast(
      <Toast
        role="alert"
        icon={
          <IconFilledCheckCircle
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        Your account has been updated
      </Toast>,
      {
        autoHideDuration: 10000,
      },
    );
  const notifySuccess = () =>
    toast(
      <ToastPositive data-testid="alert-success">
        Password successfully updated
      </ToastPositive>,
    );
  const notifyError = () =>
    toast(({onClose}) => (
      <ToastNegative data-testid="alert-error">
        Error message{' '}
        <button type="button" data-testid="close" onClick={() => onClose()}>
          X
        </button>{' '}
      </ToastNegative>
    ));

  return (
    <StorybookPage columns="1fr">
      <StorybookCase>
        <Button
          type="button"
          onClick={notifyNeutral}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
            marginInlineEnd: 'space080',
          }}
        >
          Neutral
        </Button>
        <Button
          type="button"
          data-testid="action-success"
          onClick={notifySuccess}
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
            marginInlineEnd: 'space080',
          }}
        >
          Success
        </Button>
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
        <Button
          onClick={notifyWithToggle}
          type="button"
          overrides={{
            typographyPreset: 'utilityButton020',
            stylePreset: 'buttonOutlinedPrimary',
            marginInlineEnd: 'space080',
          }}
        >
          Action
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
StoryToastE2EtestHidden.storyName = 'toast-e2e-test';
StoryToastE2EtestHidden.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Components/toast-e2e-hidden',
  component: () => 'None',
};
