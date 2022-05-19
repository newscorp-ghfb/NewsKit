import {stylePresets} from '../style-presets';

describe('style presets should', () => {
  test('only have valid attributes', () => {
    const allowedList = [
      'solid',
      'none',
      'underline',
      'ellipsis',
      'uppercase',
      'center',
      'nowrap',
    ].join('|');
    const validAttributes = new RegExp(`({{[a-zA-Z.0-9]+}}|${allowedList})`);

    Object.values(stylePresets).forEach(preset =>
      Object.values(preset).forEach(states =>
        Object.values(states).forEach(attribute =>
          expect(attribute).toMatch(validAttributes),
        ),
      ),
    );
  });
});
