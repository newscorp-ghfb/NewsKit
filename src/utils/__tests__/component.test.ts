import {
  ValidNode,
  InvalidNode,
  FunctionalComponentMock,
  ReactElementMock,
  ComponentWithDisplayName,
  ComponentWithAlternativeDisplayName,
  ComponentWithoutDisplayName,
  RenderedComponentWithDisplayName,
  MdxComponentWithDisplayName,
  StyledComponentMock,
} from '../__mocks__/component';
import {
  isValidNode,
  hasMatchingDisplayNameWith,
  isReactComponent,
  isStyledComponent,
} from '../component';

describe('isValidNode', () => {
  test('returns true if the node is valid', () => {
    expect(isValidNode(ValidNode)).toBe(true);
  });

  test('returns false if the node is invalid', () => {
    expect(isValidNode(InvalidNode)).toBe(false);
  });
});

describe('isStyledComponent', () => {
  test('returns true if we pass a styled component', () => {
    expect(isStyledComponent(StyledComponentMock)).toBe(true);
  });

  test('returns false when we pass ReactElement', () => {
    expect(isStyledComponent(ReactElementMock)).toBe(false);
  });
  test('returns false when we pass a functional/class component', () => {
    expect(isStyledComponent(FunctionalComponentMock)).toBe(false);
  });
});

describe('isReactComponent', () => {
  test('returns true if we pass a styled component', () => {
    expect(isReactComponent(StyledComponentMock)).toBe(true);
  });

  test('returns false when we pass ReactElement', () => {
    expect(isReactComponent(ReactElementMock)).toBe(false);
  });
  test('returns true when we pass a functional/class component', () => {
    expect(isReactComponent(FunctionalComponentMock)).toBe(true);
  });
});

describe('hasMatchingDisplayNameWith', () => {
  test.each`
    a                           | b                                      | expected
    ${ComponentWithDisplayName} | ${ComponentWithDisplayName}            | ${true}
    ${ComponentWithDisplayName} | ${ComponentWithAlternativeDisplayName} | ${false}
    ${ComponentWithDisplayName} | ${ComponentWithoutDisplayName}         | ${false}
    ${ComponentWithDisplayName} | ${RenderedComponentWithDisplayName}    | ${true}
    ${ComponentWithDisplayName} | ${MdxComponentWithDisplayName}         | ${true}
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
