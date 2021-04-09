import {matchers, createSerializer} from '@emotion/jest';

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

jest.mock('../utils/get-ssr-id', () => ({
  getSSRId: () => `mock-nk-1`,
}));
