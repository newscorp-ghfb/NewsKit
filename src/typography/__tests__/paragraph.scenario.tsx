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
          <P>{bodyString}</P>
          <br />
          <P>
            Paragraph component containing a <Sub>subscript element</Sub> and a{' '}
            <Sup>superscript element</Sup>
          </P>
        </React.Fragment>
      ),
    },
    {
      name: 'paragraph-with-props',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h3>
            <b>PARAGRAPH WITH DROPCAP</b>
          </h3>
          <br />
          <P dropCap>
            This being Black History Month, last week was Politicians In Search
            Of An Eye-Catching Race-Related Policy Week. Both Theresa May and
            Jeremy Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed. This being
            Black History Month, last week was Politicians In Search Of An
            Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
            Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed.
          </P>
          <br />
          <br />
          <h3>PARAGRAPH WITH OVERRIDES</h3>
          <br />
          <P
            overrides={{
              stylePreset: 'linkInline',
              typographyPreset: 'editorialHeading020',
            }}
          >
            This being Black History Month, last week was Politicians In Search
            Of An Eye-Catching Race-Related Policy Week. Both Theresa May and
            Jeremy Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed.
          </P>
          <br />
          <br />
          <P
            dropCap
            overrides={{
              dropCap: {
                stylePreset: 'linkInline',
                typographyPreset: 'editorialHeading070',
                space: 'space040',
              },
            }}
          >
            This being Black History Month, last week was Politicians In Search
            Of An Eye-Catching Race-Related Policy Week. Both Theresa May and
            Jeremy Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed. This being
            Black History Month, last week was Politicians In Search Of An
            Eye-Catching Race-Related Policy Week. Both Theresa May and Jeremy
            Corbyn had their own announcement, each seemingly benign and
            right-on, each actually destructive and wrong-headed.
          </P>
        </React.Fragment>
      ),
    },
  ],
};
