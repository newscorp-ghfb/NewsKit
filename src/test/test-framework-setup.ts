import {matchers, createSerializer} from '@emotion/jest';
import failOnConsole from 'jest-fail-on-console';
import {TextEncoder, TextDecoder} from 'util';

// @ts-ignore
global.TextEncoder = TextEncoder;
// @ts-ignore
global.TextDecoder = TextDecoder;

// Polyfill MessageChannel for React 19
if (typeof MessageChannel === 'undefined') {
  // @ts-ignore
  global.MessageChannel = class MessageChannel {
    port1: any;
    port2: any;

    constructor() {
      this.port1 = {
        postMessage: (message: any) => {
          if (this.port2.onmessage) {
            setTimeout(() => this.port2.onmessage({data: message}), 0);
          }
        },
        onmessage: null,
      };
      this.port2 = {
        postMessage: (message: any) => {
          if (this.port1.onmessage) {
            setTimeout(() => this.port1.onmessage({data: message}), 0);
          }
        },
        onmessage: null,
      };
    }
  };
}

failOnConsole({
  silenceMessage: errorMessage => {
    if (
      errorMessage.includes(
        'Warning: Encountered two children with the same key,',
      ) &&
      errorMessage.includes('mock-nk-')
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

    if (
      errorMessage.includes('aria-hidden') &&
      errorMessage.includes('not contained inside HTMLBodyElement')
    ) {
      return true;
    }

    if (errorMessage.includes('react-test-renderer is deprecated')) {
      return true;
    }

    if (
      errorMessage.includes(
        'Each child in a list should have a unique "key" prop',
      )
    ) {
      return true;
    }

    if (
      errorMessage.includes(
        'The current testing environment is not configured to support act(...)',
      )
    ) {
      return true;
    }

    if (
      errorMessage.includes(
        'Error: Not implemented: navigation (except hash changes)',
      )
    ) {
      return true;
    }
    return false;
  },
});

expect.addSnapshotSerializer(createSerializer());
expect.extend(matchers);

jest.mock('../utils/get-ssr-id', () => {
  let counter = 0;
  return {
    getSSRId: () => `mock-nk-${++counter}`,
  };
});
