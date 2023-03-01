import React from 'react';
import {InlineMessage} from '..';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {IconFilledInfo} from '../../icons';
import {compileTheme, createTheme} from '../..';

const message = 'Your message text here';
const title = 'Your title here';
const icon = <IconFilledInfo overrides={{size: 'iconSize020'}} />;

describe('InlineMessage', () => {
  it('renders with default props', () => {
    const props = {
      children: message,
    };
    const fragment = renderToFragmentWithTheme(InlineMessage, props) as any;
    expect(fragment).toMatchSnapshot();
  });
  it('renders with Title', () => {
    const props = {
      title,
      children: message,
    };
    const fragment = renderToFragmentWithTheme(InlineMessage, props) as any;
    expect(fragment).toMatchSnapshot();
  });
  it('renders with Title and Icon', () => {
    const props = {
      title,
      icon,
      children: message,
    };
    const fragment = renderToFragmentWithTheme(InlineMessage, props) as any;
    expect(fragment).toMatchSnapshot();
  });
  it('renders with overrides and all props', () => {
    const myCustomTheme = compileTheme(
      createTheme({
        name: 'inline-message-theme',
        overrides: {
          stylePresets: {
            customInlineMessage: {
              base: {
                backgroundColor: 'lightpink',
                borderWidth: '1px 4px',
                borderColor: 'deeppink',
                borderStyle: 'solid',
                borderRadius: '3px',
                iconColor: 'deeppink',
              },
            },
          },
        },
      }),
    );
    const props = {
      title,
      icon,
      children: message,
      overrides: {
        stylePreset: 'customInlineMessage',
        paddingInline: 'space050',
        paddingBlock: 'space050',
        icon: {
          spaceInline: 'space050',
        },
        content: {
          message: {
            typographyPreset: 'utilityBody020',
            stylePreset: 'inkInverse',
          },
          title: {
            typographyPreset: 'utilityHeading020',
            stylePreset: 'inkInverse',
            spaceStack: 'space050',
          },
        },
      },
    };
    const fragment = renderToFragmentWithTheme(
      InlineMessage,
      props,
      compileTheme(myCustomTheme),
    ) as any;
    expect(fragment).toMatchSnapshot();
  });
  it('renders with logical prop overrides', () => {
    const props = {
      title,
      icon,
      children: message,
      overrides: {
        paddingInline: '30px',
        marginInline: '50px',
      },
    };
    const fragment = renderToFragmentWithTheme(InlineMessage, props) as any;
    expect(fragment).toMatchSnapshot();
  });
});
