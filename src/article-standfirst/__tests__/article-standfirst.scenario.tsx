import * as React from 'react';
import {ArticleStandfirst} from '..';

export const name = 'article-standfirst';

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical. Being at the biggest events with the biggest names noticing the smallest details, and sticking up for the little guy.';

export const component = () => (
  <ArticleStandfirst>{bodyString}</ArticleStandfirst>
);
