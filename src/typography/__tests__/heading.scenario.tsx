import * as React from 'react';

import {H6, H5, H4, H3, H2, H1} from '..';

export const name = 'typography/heading';

const title = 'We tell the stories that matter.';

export const component = () => (
  <React.Fragment>
    <H1>Normal H1 - {title}</H1>
    <H2>Normal H2 - {title}</H2>
    <H3>Normal H3 - {title}</H3>
    <H4>Normal H4 - {title}</H4>
    <H5>Normal H5 - {title}</H5>
    <H6>Normal H6 - {title}</H6>
    <H1 $bold>Bold H1 - {title}</H1>
    <H2 $bold>Bold H2 - {title}</H2>
    <H3 $bold>Bold H3 - {title}</H3>
    <H4 $bold>Bold H4 - {title}</H4>
    <H5 $bold>Bold H5 - {title}</H5>
    <H6 $bold>Bold H6 - {title}</H6>
  </React.Fragment>
);
