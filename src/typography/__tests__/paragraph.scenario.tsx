import * as React from 'react';

import {P, Sub, Sup} from '../index';

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical.';

export default {
  name: 'typography/paragraph',
  children: [
    {
      name: 'paragraph',
      type: 'story',
      component: () => (
        <React.Fragment>
          <P>Normal - {bodyString}</P>
          <P $bold>Bold - {bodyString}</P>
          <P>
            Paragraph component containg a <Sub>subscript element</Sub> and a{' '}
            <Sup>superscript element</Sup>
          </P>
        </React.Fragment>
      ),
    },
    {
      name: 'paragraph-with-dropcap',
      type: 'story',
      component: () => (
        <React.Fragment>
          <P $dropCap>{bodyString}</P>
          <P $dropCap $dropCapColor="inkLink">
            {bodyString}
          </P>
        </React.Fragment>
      ),
    },
  ],
};
