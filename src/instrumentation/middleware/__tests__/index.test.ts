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

    const middlewareFn = composeInstrumentationMiddleware(
      function3,
      function2,
      function1,
    );
    const result = middlewareFn('initial arg' as any);

    expect(result).toEqual('function3 return value');
    expect(calls).toEqual([
      'function1 called',
      'function2 called',
      'function3 called',
    ]);

    const result2 = middlewareFn('initial arg' as any);
    expect(result2).toEqual('function3 return value');
    expect(calls).toEqual([
      'function1 called',
      'function2 called',
      'function3 called',
      'function1 called',
      'function2 called',
      'function3 called',
    ]);
  });
});
