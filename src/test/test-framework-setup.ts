import {matchers, createSerializer} from '@emotion/jest';
import failOnConsole from 'jest-fail-on-console';
import {TextEncoder, TextDecoder} from 'util';

// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;

failOnConsole({
  // eg Warning, "Theme token "stylePresets.audioPlayerVolumeControlPopover" was not found when compiling theme!"
  shouldFailOnWarn: false,
  silenceMessage: errorMessage => {
    if (
      errorMessage.includes(
        'Warning: Encountered two children with the same key,',
      ) &&
      errorMessage.includes('mock-nk-1')
    ) {
      return true;
    }

    if (
      errorMessage.includes(
        'Error occurred attempting to open privacy manager modal. Is Sourcepoint CMP present on this page?',
      )
    ) {
      return true;
    }

    if (errorMessage.includes('Check the render method of `UnpackContent`')) {
      return true;
    }
    return false;
  },
});

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

jest.mock('../utils/get-ssr-id', () => ({
  getSSRId: () => `mock-nk-1`,
}));
