import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled, withDefaultProps} from '../../utils';
import {
  IconFilledInfo,
  IconFilledWarning,
  IconFilledError,
  IconFilledCheckCircle,
} from '../../icons';
import {toast, ToastProvider, Toast} from '..';
import {LinkInline} from '../../link';
import {Button} from '../../button';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const CustomToast = styled.div`
  padding: 1em;
  border: 1px solid currentColor;
  max-width: 240px;
  background: #fff;
  box-sizing: border-box;
  color: red;
`;

const toastCustomThemeObject: CreateThemeArgs = {
  name: 'toast-intents-theme',
  overrides: {
    stylePresets: {
      toastWithOverrides: {
        base: {
          backgroundColor: '#fdda9b',
          borderRadius: '2px',
          iconColor: 'red',
        },
      },
      customDivider: {
        base: {
          borderStyle: 'dotted',
          borderColor: 'red',
          borderWidth: '3px',
        },
      },
    },
  },
};

const ToastInformative = withDefaultProps(Toast, {
  icon: (
    <IconFilledInfo
      overrides={{
        size: 'iconSize020',
      }}
    />
  ),
  overrides: {stylePreset: 'toastInformative'},
});

const ToastNotice = withDefaultProps(Toast, {
  icon: (
    <IconFilledWarning
      overrides={{
        size: 'iconSize020',
      }}
    />
  ),
  overrides: {stylePreset: 'toastNotice'},
});

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

const toastLink = (
  <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
    with link
  </LinkInline>
);

export const StoryToastDefault = () => (
  <>
    <StorybookHeading>Toast</StorybookHeading>
    <StorybookSubHeading>default</StorybookSubHeading>
    <Toast>Short text</Toast>
    <StorybookSubHeading>with long text</StorybookSubHeading>
    <Toast>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Toast>
    <StorybookSubHeading>with Icon</StorybookSubHeading>
    <Toast
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      Short text
    </Toast>
    <StorybookSubHeading>with Icon and long text</StorybookSubHeading>
    <Toast
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Toast>
    <StorybookSubHeading>with link</StorybookSubHeading>
    <Toast
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt {toastLink} ut labore et dolore magna aliqua.
    </Toast>
  </>
);
StoryToastDefault.storyName = 'toast-default';

export const StoryToastTitle = () => (
  <>
    <StorybookHeading>Toast with title</StorybookHeading>
    <Toast title="Title">
      Lorem ipsum dolor sit amet, consectetur adipiscing
    </Toast>
    <hr />
    <Toast
      title="Title"
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing
    </Toast>
    <hr />
    <Toast
      title="Title"
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
      actions={() => (
        <Button size="small" overrides={{stylePreset: 'buttonMinimalInverse'}}>
          undo
        </Button>
      )}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing
    </Toast>
  </>
);
StoryToastTitle.storyName = 'toast-title';

export const StoryToastActions = () => (
  <>
    <StorybookHeading>Toast with actions</StorybookHeading>
    <Toast
      actions={() => (
        <Button size="small" overrides={{stylePreset: 'buttonMinimalInverse'}}>
          undo
        </Button>
      )}
    >
      Lorem ipsum dolor sit amet
    </Toast>
    <hr />
    <Toast
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
      actions={() => (
        <Button size="small" overrides={{stylePreset: 'buttonMinimalInverse'}}>
          undo
        </Button>
      )}
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua.
    </Toast>
    <hr />
    <Toast
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize020',
          }}
        />
      }
      actions={() => (
        <>
          <Button
            size="small"
            overrides={{stylePreset: 'buttonMinimalInverse'}}
          >
            undo
          </Button>
          <Button
            size="small"
            overrides={{stylePreset: 'buttonMinimalInverse'}}
          >
            redo
          </Button>
        </>
      )}
    >
      Lorem ipsum
    </Toast>
  </>
);
StoryToastActions.storyName = 'toast-actions';

export const StoryToastIntents = () => (
  <>
    <StorybookHeading>Toast with Intents</StorybookHeading>
    <StorybookSubHeading>Neutral ( default )</StorybookSubHeading>
    <Toast>Neutral message {toastLink}</Toast>

    <StorybookSubHeading>Informative</StorybookSubHeading>
    <ToastInformative>Informative message {toastLink}</ToastInformative>

    <StorybookSubHeading>Notice</StorybookSubHeading>
    <ToastNotice>Notice message {toastLink}</ToastNotice>

    <StorybookSubHeading>Positive</StorybookSubHeading>
    <ToastPositive>Positive Message {toastLink}</ToastPositive>

    <StorybookSubHeading>Negative</StorybookSubHeading>
    <ToastNegative>Negative message {toastLink}</ToastNegative>
  </>
);
StoryToastIntents.storyName = 'toast-intents';

export const StoryToastOverrides = () => (
  <>
    <StorybookHeading>Toast with overrides</StorybookHeading>
    <Toast
      role="alert"
      aria-live="assertive"
      icon={
        <IconFilledError
          overrides={{
            size: 'iconSize030',
          }}
        />
      }
      title="Title"
      actions={() => (
        <Button size="small" overrides={{stylePreset: 'buttonMinimal'}}>
          undo
        </Button>
      )}
      overrides={{
        paddingInline: '20px',
        paddingBlock: '20px',
        stylePreset: 'toastWithOverrides',
        icon: {
          spaceInline: 'space040',
        },
        content: {
          title: {
            spaceStack: '5px',
            typographyPreset: 'utilityBody030',
            stylePreset: 'ink',
          },
          message: {
            typographyPreset: 'utilityBody020',
            stylePreset: 'ink',
          },
        },
        divider: {
          stylePreset: 'customDivider',
        },
        contentAndActions: {
          spaceInline: 'space040',
        },
      }}
    >
      Short text
    </Toast>
  </>
);
StoryToastOverrides.storyName = 'toast-overrides';

export const StoryToastLogicalProps = () => (
  <>
    <StorybookHeading>Toast with logical props</StorybookHeading>
    <Toast
      overrides={{
        paddingInline: '50px',
        paddingBlock: '25px',
      }}
    >
      Uses logical padding props
    </Toast>
  </>
);
StoryToastLogicalProps.storyName = 'toast-logical-props';

export const StoryToastApi = () => {
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
        actions={() => (
          <Button
            size="small"
            overrides={{stylePreset: 'buttonMinimalInverse'}}
          >
            undo
          </Button>
        )}
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
      <CustomToast data-testid="alert-error">
        Error message{' '}
        <button type="button" data-testid="close" onClick={() => onClose()}>
          X
        </button>
      </CustomToast>
    ));

  return (
    <>
      <StorybookHeading>Toast API</StorybookHeading>
      <button type="button" onClick={notifyNeutral}>
        Neutral
      </button>
      <button
        type="button"
        data-testid="action-success"
        onClick={notifySuccess}
      >
        Success
      </button>
      <button type="button" data-testid="action-error" onClick={notifyError}>
        Error with duration
      </button>
      <button onClick={notifyWithToggle} type="button">
        with toggle
      </button>

      <ToastProvider
        autoHideDuration={1000}
        verticalOffset="10px"
        horizontalOffset="10px"
        position="bottom-center"
      />
    </>
  );
};
StoryToastApi.storyName = 'toast-api';
StoryToastApi.parameters = {
  percy: {skip: true},
};

export default {
  title: 'Components/toast',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (Story: StoryType, context: {globals: {backgrounds: {value: string}}}) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          toastCustomThemeObject,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
