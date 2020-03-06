import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {RadioPlayer, RadioPlayerProps} from '../radio-player';
import {Flag} from '../../flag';
import {Circle} from '../../icons/circle';

const CustomFlag = () => (
  <Flag>
    <Circle />
    Custom Flag
  </Flag>
);

const props = {
  src:
    'https://extras.thetimes.co.uk/web/public/2018/world-cup-alexa-breifing/assets/latest-briefing.mp3',
  imgAlt: 'test image 1',
  title: 'title 1',
  live: false,
  imgSrc:
    'http://webstyle.unicomm.fsu.edu/3.2/img/placeholders/ratio-pref-1-1.png',
  captionSrc: 'captions.vtt',
  time: '1PM to 3PM',
  description: 'Test description',
  tags: ['Tag 1', 'Tag 2'],
};

describe('Radio Player', () => {
  test('default player', () => {
    const fragment = renderToFragmentWithTheme(RadioPlayer);
    expect(fragment).toMatchSnapshot();
  });

  test('live player', () => {
    const fragment = renderToFragmentWithTheme(RadioPlayer, {
      ...props,
      live: true,
      flag: 'Live',
    } as RadioPlayerProps);
    expect(fragment).toMatchSnapshot();
  });

  test('with flag passed as Flag Component and Icon', () => {
    const fragment = renderToFragmentWithTheme(RadioPlayer, {
      ...props,
      flag: CustomFlag,
    } as RadioPlayerProps);
    expect(fragment).toMatchSnapshot();
  });

  test('player with popout link', () => {
    const fragment = renderToFragmentWithTheme(RadioPlayer, {
      ...props,
      href: 'https://thetimes.co.uk/',
    } as RadioPlayerProps);
    expect(fragment).toMatchSnapshot();
  });
});
