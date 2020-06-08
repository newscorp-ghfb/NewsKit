import {
  ValidNode,
  InvalidNode,
  ComponentWithDisplayName,
  ComponentWithAlternativeDisplayName,
  ComponentWithoutDisplayName,
  RenderedComponentWithDisplayName,
} from '../__mocks__/component';
import {isValidNode, hasMatchingDisplayNameWith} from '../component';

describe('isValidNode', () => {
  test('returns true if the node is valid', () => {
    expect(isValidNode(ValidNode)).toBe(true);
  });

  test('returns false if the node is invalid', () => {
    expect(isValidNode(InvalidNode)).toBe(false);
  });
});

describe('hasMatchingDisplayNameWith', () => {
  test.each`
    a                           | b                                      | expected
    ${ComponentWithDisplayName} | ${ComponentWithDisplayName}            | ${true}
    ${ComponentWithDisplayName} | ${ComponentWithAlternativeDisplayName} | ${false}
    ${ComponentWithDisplayName} | ${ComponentWithoutDisplayName}         | ${false}
    ${ComponentWithDisplayName} | ${RenderedComponentWithDisplayName}    | ${true}
    ${ComponentWithDisplayName} | ${undefined}                           | ${false}
    ${undefined}                | ${ComponentWithDisplayName}            | ${false}
    ${undefined}                | ${ComponentWithAlternativeDisplayName} | ${false}
    ${undefined}                | ${ComponentWithoutDisplayName}         | ${false}
    ${undefined}                | ${RenderedComponentWithDisplayName}    | ${false}
    ${undefined}                | ${undefined}                           | ${false}
  `(
    'returns $expected when passing entires from the fixtures',
    ({a, b, expected}) => {
      expect(hasMatchingDisplayNameWith(a, b)).toBe(expected);
    },
  );
});
