import * as React from 'react';
import {ArticleContent} from '..';
import {P, H1, H2, H3, H4, H5, H6} from '../../typography';

export default {
  name: 'article-content',
  children: [
    {
      name: 'bold-intro-and-bold-headings',
      type: 'story',
      component: () => (
        <ArticleContent boldIntro boldHeadings>
          <P>
            The first paragraph of text will be in bold, when the boldIntro prop
            is set to true. After that the text will continue in normal
            font-weight.
          </P>
          <P>Here you can see the font-weight is back to normal.</P>
          <H1>Heading 1 in Bold Weight</H1>
          <H2>Heading 2 in Bold Weight</H2>
          <H3>Heading 3 in Bold Weight</H3>
          <H4>Heading 4 in Bold Weight</H4>
          <H5>Heading 5 in Bold Weight</H5>
          <H6>Heading 6 in Bold Weight</H6>
        </ArticleContent>
      ),
    },
    {
      name: 'no-bold',
      type: 'story',
      component: () => (
        <ArticleContent>
          <P>
            The first paragraph in this ArticleContent block is not bold because
            the prop is not set to true.
          </P>
          <P>This second paragraph will look the same as the first.</P>
          <H1>Heading 1 in Normal Weight</H1>
          <H2>Heading 2 in Normal Weight</H2>
          <H3>Heading 3 in Normal Weight</H3>
          <H4>Heading 4 in Normal Weight</H4>
          <H5>Heading 5 in Normal Weight</H5>
          <H6>Heading 6 in Normal Weight</H6>
        </ArticleContent>
      ),
    },
  ],
};
