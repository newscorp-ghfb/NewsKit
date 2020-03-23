import * as React from 'react';

import {TitleBar, TitleBarBorder, TitleAlignment} from '..';
import {Button} from '../../button';
import {Link} from '../../link';
import {
  Heading1,
  Heading2,
  Heading3,
  Heading4,
  Heading5,
  Heading6,
  P,
} from '../../typography';

const link = () => <Link href="/">Link</Link>;
const button = () => <Button>Default button</Button>;

export default {
  name: 'title-bar',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar>Title bar default state</TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-with-borders',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar $containerBorder={TitleBarBorder.Top}>
            Title bar with border: Top
          </TitleBar>
          <TitleBar $containerBorder={TitleBarBorder.Bottom}>
            Title bar with border: Bottom
          </TitleBar>
          <TitleBar $containerBorder={TitleBarBorder.TopAndBottom}>
            Title bar with border: TopAndBottom
          </TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-as-h1toh3',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar headingComponent={Heading1}>Title bar as h1</TitleBar>
          <TitleBar headingComponent={Heading2}>Title bar as h2</TitleBar>
          <TitleBar headingComponent={Heading3}>Title bar as h3</TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'title-bar-as-h4toh6',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar headingComponent={Heading4}>Title bar as h4</TitleBar>
          <TitleBar headingComponent={Heading5}>Title bar as h5</TitleBar>
          <TitleBar headingComponent={Heading6}>Title bar as h6</TitleBar>
          <TitleBar headingComponent={P}>Title bar as p</TitleBar>
        </React.Fragment>
      ),
    },
    {
      name: 'centred-title-bar',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar $titleAlignment={TitleAlignment.Center}>
            Title bar centered
          </TitleBar>
          <TitleBar $titleAlignment={TitleAlignment.Center} actionItem={button}>
            Title bar centered with button
          </TitleBar>
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
    {
      name: 'title-bar-with-buttons-and-paddings',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TitleBar
            $paddingLeft
            $paddingRight
            $containerBorder={TitleBarBorder.TopAndBottom}
            actionItem={button}
          >
            Title bar with button and paddings and TopAndBottom borders
          </TitleBar>
          <TitleBar
            $titleAlignment={TitleAlignment.Center}
            $paddingLeft
            $paddingRight
            $containerBorder={TitleBarBorder.TopAndBottom}
            actionItem={button}
          >
            Title bar with button and paddings and TopAndBottom borders and
            centered content
          </TitleBar>
        </React.Fragment>
      ),
    },
  ],
};
