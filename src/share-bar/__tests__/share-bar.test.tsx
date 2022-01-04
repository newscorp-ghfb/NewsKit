import * as React from 'react';
import {fireEvent} from '@testing-library/react';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {styled} from '../../utils/style';
import {ShareBar, ShareBarProps} from '..';

describe('ShareBar', () => {
  test('renders with no icons and labels', () => {
    const fragment = renderToFragmentWithTheme(ShareBar);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with left icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter'}, {type: 'facebook'}],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with left and right icons', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter'}, {type: 'facebook'}],
      rightIcons: [{type: 'twitter'}, {type: 'facebook'}],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with left and right labels', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftLabel: 'Test',
      rightLabel: 'TestRight',
      leftIcons: [{type: 'twitter'}, {type: 'facebook'}],
      rightIcons: [{type: 'twitter'}, {type: 'facebook'}],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('renders with custom components', () => {
    const CustomStyledComponent = styled.div``;
    /* eslint-disable react/prefer-stateless-function */
    class CustomClassComponent extends React.Component {
      render() {
        const {children} = this.props;
        return <div>{children}</div>;
      }
    }

    const CustomFC: React.FC = ({children}) => <div>{children}</div>;

    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftLabel: 'Test',
      rightLabel: 'TestRight',
      leftIcons: [
        {type: 'twitter', href: '/'},
        <CustomStyledComponent>Styled Component</CustomStyledComponent>,
        <CustomClassComponent>Class Component</CustomClassComponent>,
        <CustomFC>Functional Component</CustomFC>,
      ],
      rightIcons: [{type: 'facebook', href: '/'}],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('does not render invalid elements', () => {
    const stringEl = 'invalid element';
    const objectEl = {el: 'invalid element'};
    const arrayEl = ['invalid element'];
    const numberEl = 0;
    const functionEl = function anon() {};

    const ShareBarAny: any = ShareBar;

    const fragment = renderToFragmentWithTheme(ShareBarAny, {
      leftLabel: 'Test',
      rightLabel: 'TestRight',
      leftIcons: [
        {type: 'twitter', href: '/'},
        {type: 'adfsgnbtrfeadwcevsbdrvseaw'},
        {stringEl},
        {objectEl},
        {arrayEl},
        {numberEl},
        {functionEl},
      ],
      rightIcons: [{type: 'facebook', href: '/'}],
    } as ShareBarProps);

    expect(fragment).toMatchSnapshot();
  });

  test('href renders as an anchor', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter', href: '/'}, {type: 'facebook', href: '/'}],
      rightIcons: [{type: 'save', href: '/'}],
    } as ShareBarProps);
    expect(fragment).toMatchSnapshot();
  });

  test('renders with a border', () => {
    const fragment = renderToFragmentWithTheme(ShareBar, {
      leftIcons: [
        {type: 'twitter', href: '/', $borderEnabled: true},
        {type: 'facebook', href: '/', $borderEnabled: true},
      ],
      rightIcons: [{type: 'save', href: '/', $borderEnabled: true}],
    } as ShareBarProps);
    expect(fragment).toMatchSnapshot();
  });

  test('onClick handler is fired', () => {
    const onClick = jest.fn();

    const {getByTestId} = renderWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter', href: '/', onClick}],
    } as ShareBarProps) as any;

    const element = getByTestId('share-bar-icon');

    fireEvent.click(element, {});
    expect(onClick).toHaveBeenCalled();
  });

  test('onClick handler is fired when enter is pressed', () => {
    const onClick = jest.fn();

    const {getByTestId} = renderWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter', href: '/', onClick}],
    } as ShareBarProps) as any;

    const element = getByTestId('share-bar-icon');

    fireEvent.focus(element);

    fireEvent.keyDown(element, {
      key: 'Enter',
      keyCode: 13,
    });

    expect(onClick).toBeCalled();
  });

  test('onClick handler is not fired when a different key than enter is pressed', () => {
    const onClick = jest.fn();

    const {getByTestId} = renderWithTheme(ShareBar, {
      leftIcons: [{type: 'twitter', href: '/', onClick}],
    } as ShareBarProps) as any;

    const element = getByTestId('share-bar-icon');

    fireEvent.focus(element);

    fireEvent.keyDown(element, {
      key: 'A',
      keyCode: 65,
    });

    expect(onClick).not.toBeCalled();
  });
});
