import * as React from 'react';
import {Divider} from '..';
import {StorybookHeading} from '../../test/storybook-comps';

export const name = 'divider';

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Divider</StorybookHeading>
    <Divider />
    <Divider $border="borderWidth030" />
    <Divider $color="interface050" />
    <Divider $color="interface050" $border="borderWidth030" />
    <Divider $marginLeft="spacingSize080" />
    <Divider $marginRight="spacingSize080" />
    <Divider $marginLeft="spacingSize080" $marginRight="spacingSize080" />
    <Divider
      $marginTop="spacingSize080"
      $marginRight="spacingSize080"
      $marginBottom="spacingSize080"
      $marginLeft="spacingSize080"
    />
  </React.Fragment>
);
