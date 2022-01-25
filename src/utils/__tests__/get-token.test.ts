import {getToken} from '../get-token';
import {createTheme} from '../../theme';

describe('get token - extra coverage', () => {
  // Majority of test coverage of this function comes from the style util tests.

  describe('when no propName is provided and the first value is invalid', () => {
    it('should return whatever is found from the first path lookup', () => {
      const props = {
        theme: createTheme({
          name: 'testtheme',
          overrides: {
            componentDefaults: {
              theComponent: {
                theDefaultToken: ['invalid value'],
              },
            },
          },
        }),
      };
      expect(getToken(props as any, 'theComponent.theDefaultToken')).toEqual(
        props.theme.componentDefaults!.theComponent.theDefaultToken,
      );
    });
  });
});
