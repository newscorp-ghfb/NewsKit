import * as React from 'react';

import {P, Sub, Sup} from '../index';

export const name = 'typography/paragraph';

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical. Being at the biggest events with the biggest names noticing the smallest details, and sticking up for the little guy.';

export const component = () => (
  <React.Fragment>
    <P>Normal - {bodyString}</P>
    <P $bold>Bold - {bodyString}</P>
    <P>
      Paragraph component containg a <Sub>subscript element</Sub> and a{' '}
      <Sup>superscript element</Sup>
    </P>
    <P $dropCap>{bodyString}</P>
    <P $dropCap $dropCapColor="accessibleBlue010">
      {bodyString}
    </P>
  </React.Fragment>
);
