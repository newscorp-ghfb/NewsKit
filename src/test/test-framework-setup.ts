import {matchers} from 'jest-emotion';

const emotionSerializer = require('jest-emotion');

expect.addSnapshotSerializer(emotionSerializer);

expect.extend(matchers);

jest.mock('../utils/get-bui-id', () => ({
  getBuiId: () => `mock-bui-1`,
}));
