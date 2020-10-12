import {get} from '../get';

describe('get', () => {
  it('should return the value at path of object', () => {
    const path = 'shareBar.horizontal.label';
    const obj = {
      shareBar: {
        horizontal: {
          label: {
            typographyPreset: 'utilityLabel020',
            stylePreset: 'inkBase',
            marginPreset: 'spaceInline040',
          },
          items: {
            space: 'sizing020',
          },
        },
      },
    };
    expect(get(obj, path)).toEqual(obj.shareBar.horizontal.label);
  });
});
