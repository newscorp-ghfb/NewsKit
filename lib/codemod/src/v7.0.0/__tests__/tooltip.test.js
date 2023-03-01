const jscodeshift = require('jscodeshift');
const tooltipTransform = require('../tooltip');
const dedent = require('dedent-js');

describe('Тooltip', () => {
  let source;
  let expected;
  let actual;

  test('replace distance with offset override prop', () => {
    source = dedent`
        <Tooltip
          content="Tooltip content"
          overrides={{
            distance: "space080",
            zIndex: 70
          }}>
          <div>Content</div>
        </Tooltip>
    `;

    expected = dedent`
      <Tooltip
        content="Tooltip content"
        overrides={{
          offset: "space080",
          zIndex: 70
        }}>
        <div>Content</div>
      </Tooltip>
    `;

    actual = tooltipTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no distance prop in overrides - no change', () => {
    source = dedent`
        <Tooltip
          content="Tooltip content"
          overrides={{
            zIndex: 70
          }}>
          <div>Content</div>
        </Tooltip>
    `;

    expected = dedent`
      <Tooltip
        content="Tooltip content"
        overrides={{
          zIndex: 70
        }}>
        <div>Content</div>
      </Tooltip>
    `;

    actual = tooltipTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });
  test('no overrides - no change', () => {
    source = dedent`
        <Tooltip
          content="Tooltip content">
          <div>Content</div>
        </Tooltip>
    `;

    expected = dedent`
      <Tooltip
        content="Tooltip content">
        <div>Content</div>
      </Tooltip>
    `;

    actual = tooltipTransform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });
});
