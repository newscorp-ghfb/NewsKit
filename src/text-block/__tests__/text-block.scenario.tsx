import * as React from 'react';
import {TextBlock} from '..';
import {createTheme, ThemeProvider} from '../../themes';

const myCustomTheme = createTheme('my-custom-textblock-theme', {
  themeOverrider: () => ({
    stylePresets: {
      textblockCustom: {
        base: {
          color: '#0B5999',
        },
      },
    },
    typePresets: {
      textblockCustom: {
        fontFamily: '"Noto Sans", sans-serif',
        fontWeight: 400,
        letterSpacing: 0,
      },
    },
  }),
});

const bodyString =
  'Telling the stories that matter, seeding ideas and stirring emotion. Capturing moments, meaning and magic. Making sense of the world. On the shoulders of giants, in the thick of it, behind the scenes and fighting the good fight. Long form and rapid-fire, pragmatic and poetic, comical and critical. Being at the biggest events with the biggest names noticing the smallest details, and sticking up for the little guy.';

export default {
  name: 'text-block',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <TextBlock>{bodyString}</TextBlock>
        </React.Fragment>
      ),
    },
    {
      name: 'as different html tag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h3>As h4</h3>
          <TextBlock as="h4">{bodyString}</TextBlock>

          <h3>As div</h3>
          <TextBlock as="div">{bodyString}</TextBlock>
        </React.Fragment>
      ),
    },
    {
      name: 'with overridden presets',
      type: 'story',
      component: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <h3>With style-preset &quot;textblockCustom&quot;</h3>
            <TextBlock
              overrides={{
                stylePreset: 'linkInline',
              }}
            >
              {bodyString}
            </TextBlock>

            <h3>With type-preset &quot;textblockCustom&quot;</h3>
            <TextBlock
              overrides={{
                typePreset: 'body030',
              }}
            >
              {bodyString}
            </TextBlock>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
