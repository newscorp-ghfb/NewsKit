import * as React from 'react';
import {Standfirst} from '..';
import {createTheme, ThemeProvider} from '../../themes';

const myCustomTheme = createTheme('my-custom-standfirst-theme', {
  themeOverrider: () => ({
    stylePresets: {
      standfirstCustom: {
        base: {
          color: '#0B5999',
        },
      },
    },
    typePresets: {
      standfirstCustom: {
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
  name: 'standfirst',
  children: [
    {
      name: 'default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <Standfirst>{bodyString}</Standfirst>
        </React.Fragment>
      ),
    },
    {
      name: 'as different html tag',
      type: 'story',
      component: () => (
        <React.Fragment>
          <h3>As h4</h3>
          <Standfirst renderStyledTextAs="h4">{bodyString}</Standfirst>

          <h3>As span</h3>
          <Standfirst renderStyledTextAs="span">{bodyString}</Standfirst>
        </React.Fragment>
      ),
    },
    {
      name: 'with overridden presets',
      type: 'story',
      component: () => (
        <React.Fragment>
          <ThemeProvider theme={myCustomTheme}>
            <h3>With style-preset &quot;standfirstCustom&quot;</h3>
            <Standfirst
              overrides={{
                styledText: {
                  stylePreset: 'linkPrimary',
                },
              }}
            >
              {bodyString}
            </Standfirst>

            <h3>With type-preset &quot;standfirstCustom&quot;</h3>
            <Standfirst
              overrides={{
                styledText: {
                  typePreset: 'subhead030',
                },
              }}
            >
              {bodyString}
            </Standfirst>
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
