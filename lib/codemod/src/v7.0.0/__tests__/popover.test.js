const jscodeshift = require('jscodeshift');
const popoverTranform = require('../popover');
const dedent = require('dedent-js');

describe('Popover', () => {
  let source;
  let expected;
  let actual;

  test('replace distance with offset override prop', () => {
    source = dedent`
      <Popover
        header="Popover Title"
        content="Content"
        overrides={{
          distance: "space080",
          maxWidth: "300px"
        }}
      >
        <div>Trigger</div>
      </Popover>
    `;

    expected = dedent`
      <Popover
        header="Popover Title"
        content="Content"
        overrides={{
          offset: "space080",
          maxWidth: "300px"
        }}
      >
        <div>Trigger</div>
      </Popover>
    `;

    actual = popoverTranform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no distance prop in overrides - no change', () => {
    source = dedent`
      <Popover
        header="Popover Title"
        content="Content"
        overrides={{
          maxWidth: "300px"
        }}
      >
        <div>Trigger</div>
      </Popover>
    `;

    expected = dedent`
      <Popover
        header="Popover Title"
        content="Content"
        overrides={{
          maxWidth: "300px"
        }}
      >
        <div>Trigger</div>
      </Popover>
    `;

    actual = popoverTranform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });

  test('no overrides - no change', () => {
    source = dedent`
      <Popover
        header="Popover Title"
        content="Content"
      >
        <div>Trigger</div>
      </Popover>
    `;

    expected = dedent`
      <Popover
        header="Popover Title"
        content="Content"
      >
        <div>Trigger</div>
      </Popover>
    `;

    actual = popoverTranform({source}, {jscodeshift});
    expect(actual).toEqual(expected);
  });
});
