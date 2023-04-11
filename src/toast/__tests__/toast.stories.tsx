import React from 'react';
import {Story as StoryType} from '@storybook/react';
import {StorybookPage, StorybookCase} from '../../test/storybook-comps';
import {ThemeProvider, CreateThemeArgs} from '../../theme';
import {styled, withDefaultProps} from '../../utils';
import {
  IconFilledInfo,
  IconFilledWarning,
  IconFilledError,
  IconFilledCheckCircle,
  IconFilledStarOutline,
} from '../../icons';
import {toast, ToastProvider, Toast} from '..';
import {LinkInline} from '../../link';
import {Button} from '../../button';
import {createCustomThemeWithBaseThemeSwitch} from '../../test/theme-select-object';

const CustomToast = styled.div`
  padding: 1em;
  border: 1px solid currentColor;
  background: #fff;
  box-sizing: border-box;
  color: red;
`;

const toastCustomThemeObject: CreateThemeArgs = {
  name: 'toast-intents-theme',
  overrides: {
    stylePresets: {
      customOutlineStyle: {
        base: {
          backgroundColor: 'transparent',
          borderRadius: '{{borders.borderRadiusDefault}}',
          borderColor: '{{colors.inkInverse}}',
          borderStyle: 'solid',
          borderWidth: '1px',
          color: '{{colors.inkInverse}}',
        },
        'focus-visible': {
          outlineColor: 'red',
          outlineStyle: 'dotted',
          outlineWidth: '{{outlines.outlineWidthDefault}}',
          outlineOffset: '10px',
        },
      },

      dividerInverse: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.interface010}}',
          borderWidth: '{{borders.borderWidthDefault}}',
        },
      },
      toastWithOverrides: {
        base: {
          backgroundColor: '{{colors.interfaceInformative010}}',
          borderRadius: '2px',
          iconColor: '{{colors.inkInverse}}',
          color: '{{colors.inkInverse}}',
        },
      },
      customDivider: {
        base: {
          borderStyle: 'solid',
          borderColor: '{{colors.inkInverse}}',
          borderWidth: '1px',
        },
      },

      customButton: {
        base: {
          borderColor: '{{colors.inkInverse}}',
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

const BODY = 'A short line describing the toast';

const longerContent = 'A longer line describing the toast';

const toastLink = (
  <LinkInline href="/" overrides={{stylePreset: 'linkInlineInverse'}}>
    with a link
  </LinkInline>
);

export const StoryToastDefault = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Toast> {BODY} </Toast>
    </StorybookCase>
  </StorybookPage>
);
StoryToastDefault.storyName = 'Default';

export const StoryToastIntents = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Default">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {BODY}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Informative">
      <ToastInformative
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {BODY}
      </ToastInformative>
    </StorybookCase>
    <StorybookCase title="Notice">
      <ToastNotice
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {BODY}
      </ToastNotice>
    </StorybookCase>
    <StorybookCase title="Positive">
      <ToastPositive
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {BODY}
      </ToastPositive>
    </StorybookCase>
    <StorybookCase title="Negative">
      <ToastNegative
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {' '}
        {BODY}{' '}
      </ToastNegative>
    </StorybookCase>
  </StorybookPage>
);
StoryToastIntents.storyName = 'Intents';

export const StoryToastVariations = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase title="Short text">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {' '}
        Short line{' '}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Long text and link">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {longerContent} {longerContent} {longerContent} {toastLink}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Icon and short text">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
        icon={
          <IconFilledError
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        {BODY}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Icon and long text">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
        icon={
          <IconFilledError
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        {longerContent} {longerContent} {longerContent}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Title">
      <Toast
        title="Toast title"
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
      >
        {BODY}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Icon and title">
      <Toast
        title="Toast title"
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
        icon={
          <IconFilledError
            overrides={{
              size: 'iconSize020',
            }}
          />
        }
      >
        {longerContent} {longerContent}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Action">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
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
            Action
          </Button>
        )}
      >
        {BODY}
      </Toast>
    </StorybookCase>
    <StorybookCase title="Two action">
      <Toast
        overrides={{
          maxWidth: {
            xs: '100%',
          },
        }}
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
              Action 1
            </Button>
            <Button
              size="small"
              overrides={{stylePreset: 'buttonMinimalInverse'}}
            >
              Action 2
            </Button>
          </>
        )}
      >
        {BODY}
      </Toast>
    </StorybookCase>
  </StorybookPage>
);
StoryToastVariations.storyName = 'Variations';

export const StoryToastApi = () => {
  const ToastWithState = () => {
    const [state, setState] = React.useState(false);
    const onClick = () => setState(true);
    return (
      <StorybookPage>
        <StorybookCase>
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
        </StorybookCase>
      </StorybookPage>
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
        <ToastProvider
          autoHideDuration={1000}
          verticalOffset="10px"
          horizontalOffset="10px"
          position="bottom-center"
        />
      </StorybookCase>
    </StorybookPage>
  );
};
StoryToastApi.storyName = 'Toast api examples';
StoryToastApi.parameters = {
  percy: {skip: true},
};

export const StoryToastLogicalProps = () => (
  <StorybookPage columns="1fr">
    <StorybookCase>
      <Toast
        overrides={{
          paddingInline: '24px',
          paddingBlock: '24px',
        }}
      >
        Uses logical padding props
      </Toast>
    </StorybookCase>
  </StorybookPage>
);
StoryToastLogicalProps.storyName = 'Logical props';

export const StoryToastOverrides = () => (
  <StorybookPage columns="1fr 1fr">
    <StorybookCase>
      <Toast
        role="alert"
        aria-live="assertive"
        icon={
          <IconFilledStarOutline
            overrides={{
              size: 'iconSize030',
            }}
          />
        }
        actions={() => (
          <Button
            size="small"
            overrides={{
              typographyPreset: 'utilityButton010',
              stylePreset: 'customOutlineStyle',
            }}
          >
            Action
          </Button>
        )}
        overrides={{
          maxWidth: {
            xs: '100%',
          },
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
        {BODY}
      </Toast>
    </StorybookCase>
  </StorybookPage>
);
StoryToastOverrides.storyName = 'Styling overrides';

export default {
  title: 'Components/Toast',
  component: () => 'None',
  disabledRules: [],
  decorators: [
    (
      Story: StoryType,
      context: {name: string; globals: {backgrounds: {value: string}}},
    ) => (
      <ThemeProvider
        theme={createCustomThemeWithBaseThemeSwitch(
          context?.globals?.backgrounds?.value,
          toastCustomThemeObject,
          context?.name,
        )}
      >
        <Story />
      </ThemeProvider>
    ),
  ],
};
