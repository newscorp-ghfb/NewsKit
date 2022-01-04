import * as React from 'react';
import {Consent} from '..';
import {renderToFragment} from '../../test/test-utils';

describe('Consent', () => {
  describe('with id', () => {
    test('renders scripts with default values', () => {
      const fragment = renderToFragment(<Consent accountId="test-accountId" />);
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with mmsDomain', () => {
    test('renders scripts with mmsDomain', () => {
      const fragment = renderToFragment(
        <Consent accountId="test-accountId" mmsDomain="test-mmsDomain" />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with waitForConsent false', () => {
    test('renders scripts with false waitForConsent', () => {
      const fragment = renderToFragment(
        <Consent accountId="test-accountId" waitForConsent={false} />,
      );
      expect(fragment).toMatchSnapshot();
    });
  });
});
