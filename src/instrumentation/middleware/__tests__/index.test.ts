import {composeInstrumentationMiddleware} from '../index';

describe('composeInstrumentationMiddleware', () => {
  test('should call each function with the result of the previous', () => {
    const calls: any[] = [];

    const function1 = jest.fn().mockImplementation(() => {
      calls.push('function1 called');
      return 'function1 return value';
    });
    const function2 = jest.fn().mockImplementation(() => {
      calls.push('function2 called');
      return 'function2 return value';
    });
    const function3 = jest.fn().mockImplementation(() => {
      calls.push('function3 called');
      return 'function3 return value';
    });

    const result = composeInstrumentationMiddleware(
      function3,
      function2,
      function1,
    )('initial arg' as any);

    expect(function1).toHaveBeenCalledWith('initial arg');
    expect(function2).toHaveBeenCalledWith('function1 return value');
    expect(function3).toHaveBeenCalledWith('function2 return value');
    expect(result).toEqual('function3 return value');
    expect(calls).toEqual([
      'function1 called',
      'function2 called',
      'function3 called',
    ]);
  });
});
