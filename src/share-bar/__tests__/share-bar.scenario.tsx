import * as React from 'react';

import {ShareBar} from '..';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {IconFilledFacebook, IconFilledTwitter} from '../../icons';
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

const ShareOnTwitterBtn = () => (
  <IconButton
    aria-label="Share on Twitter"
    size={ButtonSize.Large}
    overrides={{
      stylePreset: 'buttonSocialTwitter',
    }}
  >
    <IconFilledTwitter />
  </IconButton>
);

const ShareOnFacebookBtn = () => (
  <IconButton
    aria-label="Share on Facebook"
    size={ButtonSize.Large}
    overrides={{
      stylePreset: 'buttonSocialFacebook',
    }}
  >
    <IconFilledFacebook />
  </IconButton>
);

export default {
  title: 'share-bar',
  children: [
    {
      storyName: 'horizontal',
      storyFn: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Share bar with horizontal items
          </StorybookSubHeading>
          <ShareBar role="region" aria-label="share bar default">
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items and label
          </StorybookSubHeading>
          <ShareBar
            label="Share"
            role="region"
            aria-label="share bar with horizontal items and label"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items label and button
          </StorybookSubHeading>
          <ShareBar
            label="Share"
            role="region"
            aria-label="share bar with horizontal items label and button"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
            <Button>More options</Button>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items and label, with overridden presets
          </StorybookSubHeading>
          <ThemeProvider theme={myCustomTheme}>
            <ShareBar
              label="Share"
              role="region"
              aria-label="share bar with horizontal items and label, with overridden presets"
              overrides={{
                stylePreset: 'customShareBarContainerPreset',
                label: {
                  stylePreset: 'customShareBarLabelPreset',
                  typographyPreset: 'utilityLabel030',
                  spaceInline: 'space010',
                  spaceInset: 'space020',
                },
                items: {
                  spaceInline: 'space010',
                },
              }}
            >
              <IconButton
                aria-label="Share on Twitter"
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'customIconButtonPreset',
                }}
              >
                <IconFilledTwitter />
              </IconButton>
              <IconButton
                aria-label="Share on Facebook"
                size={ButtonSize.Large}
                overrides={{
                  stylePreset: 'customIconButtonPreset',
                }}
              >
                <IconFilledFacebook />
              </IconButton>
              <Button>More options</Button>
            </ShareBar>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
    {
      storyName: 'vertical',
      storyFn: () => (
        <React.Fragment>
          <StorybookSubHeading>
            Share bar with vertical items
          </StorybookSubHeading>
          <ShareBar
            vertical
            role="region"
            aria-label="share bar with vertical items"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
          </ShareBar>
          <StorybookSubHeading>
            Share bar with vertical items and label
          </StorybookSubHeading>
          <ShareBar
            vertical
            label="Share"
            role="region"
            aria-label="share bar with vertical items and label"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
          </ShareBar>
          <StorybookSubHeading>
            Share bar with vertical items, label and a button
          </StorybookSubHeading>
          <ShareBar
            vertical
            label="Share"
            role="region"
            aria-label="share bar with vertical items, label and a button"
          >
            <ShareOnTwitterBtn />
            <ShareOnFacebookBtn />
            <Button>More options</Button>
          </ShareBar>
        </React.Fragment>
      ),
    },
  ],
};
