import * as React from 'react';
import {Divider} from '..';
import {StorybookHeading} from '../../test/storybook-comps';

export const name = 'divider';

export const component = () => (
  <React.Fragment>
    <StorybookHeading>Divider</StorybookHeading>
    <Divider />
    <Divider border="borderWidth030" />
    <Divider color="interface050" />
    <Divider color="interface050" border="borderWidth030" />
    <Divider marginLeft="sizing080" />
    <Divider marginRight="sizing080" />
    <Divider marginLeft="sizing080" marginRight="sizing080" />
    <Divider
      marginTop="sizing080"
      marginRight="sizing080"
      marginBottom="sizing080"
      marginLeft="sizing080"
    />
  </React.Fragment>
);
