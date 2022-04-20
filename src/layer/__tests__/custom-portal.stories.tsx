import React from 'react';
import {Portal, PortalHost} from '../../portal';

export default {
  title: 'NewsKit Light/custom-portal',
  component: () => 'None',
  // this story is only for testing purposes so we can ignore all rules
  disabledRules: [
    // colored layers in this story are only for demo purposes that's why this is disabled
    'color-contrast',
  ],
};

export const CustomPortal = () => (
  <div className="App">
    <h1>Hello CodeSandbox</h1>
    <h2>Start editing to see some magic happen!</h2>
    <Portal>I am content in default layer</Portal>
    <Portal hostName="custom">I am content in custom layer</Portal>
    <PortalHost name="custom" />
  </div>
);
