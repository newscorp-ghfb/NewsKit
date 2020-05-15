import * as React from 'react';

import {ShareBar} from '..';
import {StorybookSubHeading} from '../../test/storybook-comps';
import {Facebook, Twitter} from '../../icons';
import {Button, IconButton, ButtonSize} from '../../button';

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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
            >
              <Facebook />
            </IconButton>
            <Button>More options</Button>
          </ShareBar>
          <StorybookSubHeading>
            Share bar with horizontal items and label, with overriden presets
          </StorybookSubHeading>
          <ShareBar
            label="Share"
            overrides={{
              stylePreset: 'linkPrimary',
              label: {
                typePreset: 'tag030',
                marginPreset: 'spaceInline030',
              },
              items: {
                space: 'sizing060',
              },
            }}
          >
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
            >
              <Facebook />
            </IconButton>
            <Button>More options</Button>
          </ShareBar>
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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
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
              stylePreset="buttonSocialTwitter"
            >
              <Twitter />
            </IconButton>
            <IconButton
              size={ButtonSize.Large}
              stylePreset="buttonSocialFacebook"
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
