import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Flag, FlagProps, FlagSize} from '..';
import {IconFilledEmail} from '../../icons';

const renderFlagWithText = (props: FlagProps) => <Flag {...props}>Text</Flag>;
const renderFlagWithTextAndIcon = (props: FlagProps) => (
  <Flag {...props}>
    <IconFilledEmail overrides={{size: 'iconSize010'}} />
    Text
  </Flag>
);

describe('Flag', () => {
  test('renders with default styles', () => {
    const fragment = renderToFragmentWithTheme(renderFlagWithText);
    expect(fragment).toMatchSnapshot();
  });
  ['small', 'medium', 'large'].forEach(size => {
    test(`renders ${size} Flag`, () => {
      const props: FlagProps = {
        size: size as FlagSize,
      };
      const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
      expect(fragment).toMatchSnapshot();
    });
  });
  test('renders a flag with a custom stylePreset', () => {
    const props: FlagProps = {
      overrides: {
        stylePreset: 'flagMinimalPrimary',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with a custom typographyPreset', () => {
    const props: FlagProps = {
      overrides: {
        typographyPreset: 'utilityLabel020',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with custom presets when children is number', () => {
    const props: FlagProps = {
      overrides: {
        stylePreset: 'flagMinimalPrimary',
        typographyPreset: 'utilityLabel020',
      },
    };
    const fragment = renderToFragmentWithTheme(
      () => <Flag {...props}>1</Flag>,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with no paddings', () => {
    const props: FlagProps = {
      overrides: {
        stylePreset: 'flagMinimalPrimary',
        spaceInset: 'spaceInsetSquish000',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a solid flag with an icon', () => {
    const fragment = renderToFragmentWithTheme(renderFlagWithTextAndIcon);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a minimal flag with an icon', () => {
    const props: FlagProps = {
      overrides: {
        stylePreset: 'flagMinimalPrimary',
        spaceInset: 'spaceInsetSquish000',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderFlagWithTextAndIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with default stylePreset if supplied with invalid value', () => {
    const props: FlagProps = {
      overrides: {
        stylePreset: undefined,
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with an icon and custom iconSize', () => {
    const props: FlagProps = {
      overrides: {
        iconSize: 'iconSize040',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderFlagWithTextAndIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with an icon and custom spacing between elements', () => {
    const props: FlagProps = {
      overrides: {
        spaceInline: 'space020',
      },
    };
    const fragment = renderToFragmentWithTheme(
      renderFlagWithTextAndIcon,
      props,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with token set for width and height', () => {
    const props: FlagProps = {
      overrides: {
        width: 'sizing120',
        height: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with percentage for width and height', () => {
    const props: FlagProps = {
      overrides: {
        width: '100%',
        height: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with fixed for width and height', () => {
    const props: FlagProps = {
      overrides: {
        width: '100px',
        height: '100px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with token set for minWidth and minHeight', () => {
    const props: FlagProps = {
      overrides: {
        minWidth: 'sizing120',
        minHeight: 'sizing120',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with percentage for minWidth and minHeight', () => {
    const props: FlagProps = {
      overrides: {
        minWidth: '100%',
        minHeight: '100%',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders a flag with fixed for minWidth and minHeight', () => {
    const props: FlagProps = {
      overrides: {
        minWidth: '100px',
        minHeight: '100px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with logical props overrides', () => {
    const props: FlagProps = {
      overrides: {
        paddingBlock: '30px',
        marginBlock: '30px',
      },
    };
    const fragment = renderToFragmentWithTheme(renderFlagWithText, props);
    expect(fragment).toMatchSnapshot();
  });
});
