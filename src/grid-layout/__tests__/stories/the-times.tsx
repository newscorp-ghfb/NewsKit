import * as React from 'react';
import {GridLayout} from '../..';
import {Divider} from '../../..';
import {StorybookHeading} from '../../../test/storybook-comps';
import {GridCard} from './grid-card';

export const TheTimes = () => {
  const md = `
    "leftTop      div1 right"
    "leftDiv      div1 div2"
    "leftBottom   div1 middle"
  `;

  const lg = `
    "leftTop      div1  middle div2 right"
    "leftDiv      div1  middle div2 right"
    "leftBottom   div1  middle div2 right"
  `;

  return (
    <>
      <StorybookHeading>The Times layout example</StorybookHeading>
      <GridLayout
        columns="1fr auto 200px auto 1fr"
        columnGap="space020"
        rowGap="space020"
        areas={{md, lg}}
      >
        {Areas => (
          <>
            <Areas.LeftTop>
              <GridCard />
            </Areas.LeftTop>
            <Areas.LeftDiv>
              <Divider />
            </Areas.LeftDiv>
            <Areas.LeftBottom>
              <GridCard />
            </Areas.LeftBottom>
            <Areas.Div1>
              <Divider vertical />
            </Areas.Div1>
            <Areas.Middle>
              <GridCard />
            </Areas.Middle>
            <Areas.Div2>
              <Divider vertical={{md: false, lg: true}} />
            </Areas.Div2>
            <Areas.Right>
              <GridCard />
            </Areas.Right>
          </>
        )}
      </GridLayout>
    </>
  );
};
