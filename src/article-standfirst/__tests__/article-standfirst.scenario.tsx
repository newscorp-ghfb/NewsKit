import * as React from 'react';
import {ArticleStandfirst} from '..';
import {createTheme, ThemeProvider} from '../../themes';
import {getFontProps} from '../../utils/get-font-props';

const myCustomTheme = createTheme('my-custom-article-standfirst-theme', {
  themeOverrider: () => ({
    stylePresets: {
      articleStandfirstCustom: {
        base: {
          color: '#0B5999',
        },
      },
    },
    typePresets: {
      articleStandfirstCustom: {
        fontFamily: '"Noto Sans", sans-serif',
        ...getFontProps('32px', 1.125, '"Noto Sans", sans-serif'),
        fontWeight: 400,
        letterSpacing: 0,
      },
    },
  }),
});

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical. Being at the biggest events with the biggest names noticing the smallest details, and sticking up for the little guy.';

export default {
  name: 'article-standfirst',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <ArticleStandfirst>{bodyString}</ArticleStandfirst>
        </React.Fragment>
      ),
    },
    {
      name: 'as different html tag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h3>As h4</h3>
          <ArticleStandfirst as="h4">{bodyString}</ArticleStandfirst>

          <h3>As span</h3>
          <ArticleStandfirst as="span">{bodyString}</ArticleStandfirst>
        </React.Fragment>
      ),
    },
    {
      name: 'with overridden presets',
      type: 'story',
      component: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <h3>With style-preset &quot;articleStandfirstCustom&quot;</h3>
            <ArticleStandfirst stylePreset="articleStandfirstCustom">
              {bodyString}
            </ArticleStandfirst>

            <h3>With type-preset &quot;articleStandfirstCustom&quot;</h3>
            <ArticleStandfirst typePreset="articleStandfirstCustom">
              {bodyString}
            </ArticleStandfirst>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
