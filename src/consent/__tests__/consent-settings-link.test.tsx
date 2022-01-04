/* eslint-disable no-underscore-dangle */
import {fireEvent} from '@testing-library/react';
import {ConsentSettingsLink} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';

describe('ConsentSettingsLink', () => {
  const siteId = 'test-siteId';
  const privacyManagerId = 'test-privacyManagerId';

  describe('with no children', () => {
    test('renders link with default text', () => {
      const fragment = renderToFragmentWithTheme(ConsentSettingsLink, {
        siteId,
        privacyManagerId,
      });
      expect(fragment).toMatchSnapshot();
    });

    describe('on click', () => {
      let expectedFunction: ReturnType<typeof jest.fn>;

      beforeEach(() => {
        expectedFunction = jest.fn();
        const sp = {
          loadPrivacyManagerModal: expectedFunction,
        };
        (global as any).window._sp_ = sp;
      });

      afterEach(() => {
        delete (global as any).window._sp_;
      });

      test('calls the expected SourcePoint function', async () => {
        expect(expectedFunction).not.toHaveBeenCalled();

        const link = await renderWithTheme(ConsentSettingsLink, {
          siteId,
          privacyManagerId,
        }).findByRole('button');
        fireEvent.click(link);

        expect(expectedFunction).toHaveBeenCalledWith(siteId, privacyManagerId);
      });
    });
  });

  describe('with children', () => {
    test('renders link with custom text', () => {
      const fragment = renderToFragmentWithTheme(ConsentSettingsLink, {
        siteId,
        privacyManagerId,
        children: 'Some Custom Link Text',
      });
      expect(fragment).toMatchSnapshot();
    });
  });

  describe('with no source point', () => {
    test('does not throw error', async () => {
      jest.spyOn(console, 'warn');

      const link = await renderWithTheme(ConsentSettingsLink, {
        siteId,
        privacyManagerId,
      }).findByRole('button');
      fireEvent.click(link);

      // eslint-disable-next-line no-console
      expect(console.warn).toBeCalled();
    });
  });
});
