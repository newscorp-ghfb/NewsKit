import * as React from 'react';
import {Tealium} from '..';
import {renderToFragment} from '../../test/test-utils';

describe('Tealium', () => {
  describe('with environment dev', () => {
    test('renders scripts for dev environment', () => {
      const fragment = renderToFragment(
        <Tealium
          account="newsinternational"
          profile="thetimes.newskit"
          env="dev"
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with environment stage', () => {
    test('renders scripts for stage environment', () => {
      const fragment = renderToFragment(
        <Tealium
          account="newsinternational"
          profile="thetimes.newskit"
          env="stage"
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with environment prod', () => {
    test('renders scripts for prod environment', () => {
      const fragment = renderToFragment(
        <Tealium
          account="newsinternational"
          profile="thetimes.newskit"
          env="prod"
        />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
