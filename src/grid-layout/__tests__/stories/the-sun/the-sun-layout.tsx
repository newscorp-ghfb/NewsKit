import * as React from 'react';
import {Headline} from '../../../../headline';
import {Divider} from '../../../../divider';
import {
  BlockLayout1L4S,
  BlockLayout3H,
  BlockLayout4H,
  GridBox,
} from '../common';
import {StorybookHeading} from '../../../../test/storybook-comps';

const placeholders = [1, 2, 3, 4, 5].map(i => (
  <GridBox>{i} placeholder</GridBox>
));

export const TheSunLayout = () => (
  <>
    <StorybookHeading>The Sun layout</StorybookHeading>

    <Headline>Layout 1</Headline>
    <br />
    <BlockLayout1L4S placeholders={placeholders} />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <Headline>Layout 2</Headline>
    <br />
    <BlockLayout4H placeholders={placeholders} />
    <br />
    <br />
    <Divider />
    <br />
    <br />
    <Headline>Layout 3</Headline>
    <br />
    <BlockLayout3H placeholders={placeholders} />
  </>
);
