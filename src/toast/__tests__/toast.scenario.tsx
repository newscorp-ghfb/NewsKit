import React from 'react';
import {
  StorybookHeading,
  StorybookSubHeading,
} from '../../test/storybook-comps';
import {createTheme, compileTheme, ThemeProvider} from '../../theme';
import {styled, withDefaultProps} from '../../utils';
import {
  IconFilledInfo,
  IconFilledWarning,
  IconFilledError,
  IconFilledCheckCircle,
} from '../../icons';
import {toast, ToastProvider, Toast} from '..';
import {Link} from '../../link';
import {Button} from '../../button';

const CustomToast = styled.div`
  padding: 1em;
  border: 1px solid currentColor;
  max-width: 240px;
  background: #fff;
  box-sizing: border-box;
  color: red;
`;

const myCustomTheme = compileTheme(
  createTheme({
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
  }),
);

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
  <Link href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
    with link
  </Link>
);

export default {
  title: 'toast',
  children: [
    {
      storyName: 'toast-default',
      storyFn: () => (
        <ThemeProvider theme={myCustomTheme}>
          <StorybookHeading>Toast</StorybookHeading>
          <StorybookSubHeading>default</StorybookSubHeading>
          <Toast>Short text</Toast>
          <StorybookSubHeading>with long text</StorybookSubHeading>
          <Toast>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt {toastLink} ut labore et dolore magna
            aliqua.
          </Toast>
        </ThemeProvider>
      ),
    },
    {
      storyName: 'toast-title',
      storyFn: () => (
        <ThemeProvider theme={myCustomTheme}>
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
              <Button
                size="small"
                overrides={{stylePreset: 'buttonMinimalInverse'}}
              >
                undo
              </Button>
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing
          </Toast>
        </ThemeProvider>
      ),
    },
    {
      storyName: 'toast-actions',
      storyFn: () => (
        <ThemeProvider theme={myCustomTheme}>
          <StorybookHeading>Toast with actions</StorybookHeading>
          <Toast
            actions={() => (
              <Button
                size="small"
                overrides={{stylePreset: 'buttonMinimalInverse'}}
              >
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
              <Button
                size="small"
                overrides={{stylePreset: 'buttonMinimalInverse'}}
              >
                undo
              </Button>
            )}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
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
        </ThemeProvider>
      ),
    },

    {
      storyName: 'toast-intents',
      storyFn: () => (
        <ThemeProvider theme={myCustomTheme}>
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
        </ThemeProvider>
      ),
    },
    {
      storyName: 'toast-overrides',
      storyFn: () => (
        <ThemeProvider theme={myCustomTheme}>
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
              spaceInset: '20px',
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
        </ThemeProvider>
      ),
    },
    {
      storyName: 'toast-api',
      storyFn: () => {
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
              <button
                type="button"
                data-testid="close"
                onClick={() => onClose()}
              >
                X
              </button>
            </CustomToast>
          ));

        return (
          <ThemeProvider theme={myCustomTheme}>
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
            <button
              type="button"
              data-testid="action-error"
              onClick={notifyError}
            >
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
          </ThemeProvider>
        );
      },
      parameters: {
        eyes: {include: false},
      },
    },
  ],
};

export const disabledRules = ['color-contrast'];
