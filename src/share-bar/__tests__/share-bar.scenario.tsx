import * as React from 'react';

import {ShareBar} from '..';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Facebook, Twitter} from '../../icons';
import {Button, ButtonSize} from '../../button';
import {IconButton} from '../../icon-button';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-share-bar-theme',
  overrides: {
    stylePresets: {
      customShareBarContainerPreset: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          borderWidth: '{{borders.borderWidth010}}',
          borderStyle: 'solid',
          borderColor: '{{colors.blue060}}',
        },
      },
      customShareBarLabelPreset: {
        base: {
          color: '{{colors.blue070}}',
        },
      },
      customIconButtonPreset: {
        base: {
          backgroundColor: '{{colors.red060}}',
          borderRadius: '{{borders.borderRadiusSharp}}',
        },
      },
    },
  },
});

export default {
  name: 'share-bar',
  children: [
    {
      name: 'horizontal',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Share bar with horizontal items
          </StorybookSubHeading>
          <ShareBar>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items and label
          </StorybookSubHeading>
          <ShareBar label="Share">
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items label and button
          </StorybookSubHeading>
          <ShareBar label="Share">
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
            <Button>More options</Button>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items and label, with overriden presets
          </StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <ShareBar
              label="Share"
              overrides={{
                stylePreset: 'customShareBarContainerPreset',
                label: {
                  stylePreset: 'customShareBarLabelPreset',
                  typographyPreset: 'utilityLabel030',
                  spaceInline: 'space010',
                  spaceInset: 'space020',
                },
                items: {
                  spaceInline: 'sizing010',
                },
              }}
            >
              <IconButton
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'customIconButtonPreset',
                }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'customIconButtonPreset',
                }}
              >
                <Facebook />
              </IconButton>
              <Button>More options</Button>
            </ShareBar>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
    {
      name: 'vertical',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Share bar with vertical items
          </StorybookSubHeading>
          <ShareBar vertical>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with vertical items and label
          </StorybookSubHeading>
          <ShareBar vertical label="Share">
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with vertical items, label and a button
          </StorybookSubHeading>
          <ShareBar vertical label="Share">
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialTwitter',
              }}
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              overrides={{
                stylePreset: 'buttonSocialFacebook',
              }}
            >
              <Facebook />
            </IconButton>
            <Button>More options</Button>
          </ShareBar>
        </React.Fragment>
      ),
    },
  ],
};
