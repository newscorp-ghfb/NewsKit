import * as React from 'react';

import {TitleBar, TitleBarBorder, TitleAlignment} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
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

export const name = 'title-bar';
const link = () => <Link href="/">Link</Link>;
const button = () => <Button>Default button</Button>;
export const component = () => (
  <React.Fragment>
    <StorybookHeading>Title bar</StorybookHeading>
    <TitleBar>Title bar default state</TitleBar>

    <TitleBar $containerBorder={TitleBarBorder.Top}>
      Title bar with border: Top
    </TitleBar>
    <TitleBar $containerBorder={TitleBarBorder.Bottom}>
      Title bar with border: Bottom
    </TitleBar>
    <br />
    <TitleBar $containerBorder={TitleBarBorder.TopAndBottom}>
      Title bar with border: TopAndBottom
    </TitleBar>

    <TitleBar headingComponent={Heading1}>Title bar as h1</TitleBar>
    <TitleBar headingComponent={Heading2}>Title bar as h2</TitleBar>
    <TitleBar headingComponent={Heading3}>Title bar as h3</TitleBar>
    <TitleBar headingComponent={Heading4}>Title bar as h4</TitleBar>
    <TitleBar headingComponent={Heading5}>Title bar as h5</TitleBar>
    <TitleBar headingComponent={Heading6}>Title bar as h6</TitleBar>
    <TitleBar headingComponent={P}>Title bar as p</TitleBar>

    <TitleBar $titleAlignment={TitleAlignment.Center}>
      Title bar centered
    </TitleBar>
    <TitleBar $titleAlignment={TitleAlignment.Center} actionItem={button}>
      Title bar centered with button
    </TitleBar>

    <TitleBar actionItem={link}>Title bar with link</TitleBar>
    <TitleBar actionItem={button}>Title bar with button</TitleBar>
    <TitleBar
      $paddingLeft
      $paddingRight
      $containerBorder={TitleBarBorder.TopAndBottom}
      actionItem={button}
    >
      Title bar with button and paddings and TopAndBottom borders
    </TitleBar>
    <br />
    <TitleBar
      $titleAlignment={TitleAlignment.Center}
      $paddingLeft
      $paddingRight
      $containerBorder={TitleBarBorder.TopAndBottom}
      actionItem={button}
    >
      Title bar with button and paddings and TopAndBottom borders and centered
      content
    </TitleBar>
  </React.Fragment>
);
