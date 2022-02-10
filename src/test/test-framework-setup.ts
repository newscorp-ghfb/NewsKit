/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import {matchers, createSerializer} from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

jest.mock('../utils/get-ssr-id', () => ({
  getSSRId: () => `mock-nk-1`,
}));

jest.mock('date-fns/format', () => () => 'Mock Date');

const consoleError = console.error;
console.error = (...args: any[]) => {
  // We want to ignore errors about the duplicate key prop in react if it's due to the above mock.
  if (
    args[0].includes(
      'Warning: Encountered two children with the same key, `%s`.',
    ) &&
    args[1].includes('mock-nk-1')
  ) {
    return;
  }
  // If you're reading this in the Jest error log, it's not where the error came from!
  consoleError.apply(console, args as any);
};
