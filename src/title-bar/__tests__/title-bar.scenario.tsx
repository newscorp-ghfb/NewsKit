import * as React from 'react';

import {TitleBar} from '..';
import {Button} from '../../button';
import {Link} from '../../link';

const link = () => <Link href="/">Link</Link>;
const button = () => <Button>Default button</Button>;

export default {
  name: 'title-bar',
  children: [
    {
      name: 'title-bar',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar>Title bar default state</TitleBar>
          <br />
          <br />
          <TitleBar
            overrides={{
              heading: {
                typographyPreset: {
                  xs: 'heading010',
                  sm: 'heading020',
                  md: 'heading030',
                  lg: 'heading040',
                },
              },
            }}
          >
            Title bar with overwritten heading typographyPreset
          </TitleBar>
          <br />
          <br />
          <TitleBar
            headingAs="h6"
            overrides={{
              stylePreset: 'standfirst',
              spaceInset: 'spaceInset010Squish',
            }}
          >
            h6 with overwritten style and padding preset
          </TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-as-h1toh6',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar headingAs="h1">Title bar as h1</TitleBar>
          <TitleBar headingAs="h2">Title bar as h2</TitleBar>
          <TitleBar headingAs="h3">Title bar as h3</TitleBar>
          <TitleBar headingAs="h4">Title bar as h4</TitleBar>
          <TitleBar headingAs="h5">Title bar as h5</TitleBar>
          <TitleBar headingAs="h6">Title bar as h6</TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-with-actions',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar actionItem={link}>Title bar with link</TitleBar>
          <TitleBar actionItem={button}>Title bar with button</TitleBar>
        </React.Fragment>
      ),
    },
  ],
};
