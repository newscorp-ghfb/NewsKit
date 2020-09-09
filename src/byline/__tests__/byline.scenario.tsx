import * as React from 'react';
import {Byline} from '..';
import {StorybookHeading} from '../../test/storybook-comps';
import {createTheme, ThemeProvider} from '../../theme';

const myCustomTheme = createTheme({
  name: 'my-custom-byline-theme',
  overrides: {
    stylePresets: {
      bylineCustom: {
        base: {
          color: '#f000dc',
        },
      },
      bylineLinkCustom: {
        base: {
          color: '#d82059',
        },
      },
      bylineDividerCustom: {
        base: {
          color: '#27a727',
        },
      },
    },
  },
});

export default {
  name: 'byline',
  children: [
    {
      name: 'byline-default',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Byline defaults</StorybookHeading>
          <Byline
            bylineData={[
              {
                author: 'Alex Lowe',
                href: 'https://www.thetimes.co.uk/profile/alex-lowe',
                title: 'Deputy Rugby Correspondent',
              },
              {
                author: 'Tom Knowles',
                href: 'https://www.thetimes.co.uk/profile/tom-knowles',
                title: 'West Coast Technology Reporter',
                location: 'London',
              },
              {
                author: 'Oliver Wright',
                href: 'https://www.thetimes.co.uk/profile/oliver-wright',
                location: 'London',
              },
              {
                author: 'David Aaronovitch',
                href: 'https://www.thetimes.co.uk/profile/david-aaronovitch',
                title: 'Columnist',
              },
              {
                author: 'Catherine Philp',
                href: 'https://www.thetimes.co.uk/profile/catherine-philp',
                title: 'Diplomatic Correspondent',
                location: 'London',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
              },
              {
                author: 'Callum Jones',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
                title: 'Asia Editor',
              },
              {
                author: 'Callum Jones',
                title: 'Trade Correspondent',
              },
              {
                author: 'Oliver Wright',
                location: 'London',
              },
              {
                author: 'David Aaronovitch',
                location: 'London',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
                href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
              },
              {
                author: 'Callum Jones',
                href: 'https://www.thetimes.co.uk/profile/callum-jones?',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
                href: '/',
              },
              {
                author: 'Callum Jones',
                href: '/',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
                href: 'https://www.thetimes.co.uk/profile/richard-lloyd-parry',
              },
              {
                author: 'Callum Jones',
              },
            ]}
          />
          <br />
          <br />
          <Byline
            bylineData={[
              {
                author: 'Richard Lloyd Parry',
                href: '/',
              },
              {
                author: 'Callum Jones',
              },
            ]}
          />
        </React.Fragment>
      ),
    },
    {
      name: 'byline-with-overrides',
      type: 'story',
      component: () => (
        <React.Fragment>
          <StorybookHeading>Byline with overrides</StorybookHeading>
          <ThemeProvider theme={myCustomTheme}>
            <Byline
              overrides={{
                stylePreset: 'bylineCustom',
                typographyPreset: 'label030',
                space: 'sizing030',
                link: {
                  stylePreset: 'bylineLinkCustom',
                  typographyPreset: 'label040',
                },
                divider: {
                  stylePreset: 'bylineDividerCustom',
                  spaceInline: 'space030',
                },
              }}
              bylineData={[
                {
                  author: 'Alex Lowe',
                  href: 'https://www.thetimes.co.uk/profile/alex-lowe',
                  title: 'Deputy Rugby Correspondent',
                },
                {
                  author: 'Tom Knowles',
                  href: 'https://www.thetimes.co.uk/profile/tom-knowles',
                  title: 'West Coast Technology Reporter',
                },
                {
                  author: 'David Aaronovitch',
                  href: 'https://www.thetimes.co.uk/profile/david-aaronovitch',
                  title: 'Columnist',
                },
                {
                  author: 'Catherine Philp',
                  href: 'https://www.thetimes.co.uk/profile/catherine-philp',
                  title: 'Diplomatic Correspondent',
                },
              ]}
            />
          </ThemeProvider>
        </React.Fragment>
      ),
    },
  ],
};
