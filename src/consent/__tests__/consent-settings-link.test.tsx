/* eslint-disable no-underscore-dangle */
import {fireEvent} from '@testing-library/react';
import {ConsentSettingsLink} from '..';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';

describe('ConsentSettingsLink', () => {
  const privacyManagerId = 'test-privacyManagerId';

  describe('with no children', () => {
    test('renders link with default text', () => {
      const fragment = renderToFragmentWithTheme(ConsentSettingsLink, {
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
          gdpr: {
            loadPrivacyManagerModal: expectedFunction,
          },
          ccpa: {
            loadPrivacyManagerModal: expectedFunction,
          },
          ggp: {
            loadPrivacyManagerModal: expectedFunction,
          },
        };
        (global as any).window._sp_ = sp;
      });

      afterEach(() => {
        delete (global as any).window._sp_;
      });

      test('calls legacy TCFv2 SourcePoint function', async () => {
        const link = await renderWithTheme(ConsentSettingsLink, {
          privacyManagerId,
        }).findByRole('button');
        fireEvent.click(link);

        expect(expectedFunction).toHaveBeenCalledWith(privacyManagerId);
      });

      test('call unified gdpr SourcePoint function', async () => {
        const link = await renderWithTheme(ConsentSettingsLink, {
          privacyManagerId,
          gdpr: true,
          tabToOpen: 'purposes',
        }).findByRole('button');
        fireEvent.click(link);

        expect(expectedFunction).toHaveBeenCalledWith(
          privacyManagerId,
          'purposes',
        );
      });

      test('call unified ccpa SourcePoint function', async () => {
        const link = await renderWithTheme(ConsentSettingsLink, {
          privacyManagerId,
          ccpa: true,
        }).findByRole('button');
        fireEvent.click(link);

        expect(expectedFunction).toHaveBeenCalledWith(privacyManagerId);
      });

      test('call unified ggp SourcePoint function', async () => {
        const link = await renderWithTheme(ConsentSettingsLink, {
          privacyManagerId,
          ggp: true,
        }).findByRole('button');
        fireEvent.click(link);

        expect(expectedFunction).toHaveBeenCalledWith(privacyManagerId);
      });
    });
  });

  describe('with children', () => {
    test('renders link with custom text', () => {
      const fragment = renderToFragmentWithTheme(ConsentSettingsLink, {
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
        privacyManagerId,
      }).findByRole('button');
      fireEvent.click(link);

      // eslint-disable-next-line no-console
      expect(console.warn).toBeCalled();
    });
  });

  describe('with link props', () => {
    test('renders link with styles', () => {
      const fragment = renderToFragmentWithTheme(ConsentSettingsLink, {
        privacyManagerId,
        children: 'Some Custom Link Text With Styles',
        overrides: {
          typographyPreset: 'utilityBody010',
        },
      });
      expect(fragment).toMatchSnapshot();
    });

    test('handles correctly passed click event', async () => {
      const onClick = jest.fn();

      const link = await renderWithTheme(ConsentSettingsLink, {
        privacyManagerId,
        children: 'Some Custom Link Text With Styles',
        onClick,
      }).findByRole('button');
      fireEvent.click(link);

      expect(onClick).toBeCalled();
    });
  });
});
