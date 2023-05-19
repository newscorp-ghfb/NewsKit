import {containerProps} from '../container-properties'; // Import the module you want to test
import {ContainerQueryProps} from '../style';

describe('containerProps', () => {
  test('returns a CSSObject with containerType and containerName', () => {
    const props: ContainerQueryProps = {
      containerType: 'inline-size',
      containerName: 'containerName',
    };
    const result = containerProps()(props);
    expect(result).toEqual({
      containerType: 'inline-size',
      containerName: 'containerName',
    });
  });

  test('returns an empty CSSObject when props is an empty object', () => {
    const props = {};
    const result = containerProps()(props);
    const expected = {};

    expect(result).toEqual(expected);
  });
  test('should return default values when props is undefined', () => {
    const props = undefined;

    // @ts-ignore next-line
    const result = containerProps()(props);
    console.log(result);
    expect(result).toEqual({
      containerType: undefined,
      containerName: undefined,
    });
  });
});
