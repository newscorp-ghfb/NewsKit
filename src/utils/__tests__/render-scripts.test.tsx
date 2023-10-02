import React from 'react';
import {renderToFragment} from '../../test/test-utils';
import {RenderScripts, RenderScriptsProps} from '../render-scripts';

describe('RenderScripts', () => {
  const scripts: RenderScriptsProps['scripts'] = [
    {
      src: 'https://example.com/my-javascript-file.js',
      content: '',
    },
    {
      content: `(function () { alert('some injected script') })();`,
    },
    {
      src: 'https://example.com/my-javascript-file2.js',
      content: '',
    },
    {
      content: `(function () { alert('some more injected script') })();`,
    },
  ];

  const scriptsWithFunctions: RenderScriptsProps['scripts'] = [
    {
      content: `{
            "onMessageReady": "__FUNC__ () => {\n            console.log('onMessageReady');\n          }__FUNC__",
            "onConsentReady": "__FUNC__function onConsentReady(consentUUID, euconsent) {\n            console.log('onConsentReady');\n            }__FUNC__"
          }
        }
      }`,
    },
  ];

  test('renders inline and external scripts as script tags', () => {
    const fragment = renderToFragment(<RenderScripts scripts={scripts} />);
    expect(fragment).toMatchSnapshot();
  });

  test('renders scripts and correctly parses objects with events', () => {
    const fragment = renderToFragment(
      <RenderScripts scripts={scriptsWithFunctions} />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders with nonce', () => {
    const fragment = renderToFragment(
      <RenderScripts scripts={scriptsWithFunctions} nonce="we32s235" />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders inline and external scripts via ReactHelmet', () => {
    const MockReactHelmet: React.FC = props => (
      <div>MockReactHelmet props: {JSON.stringify(props, null, 2)}</div>
    );

    const fragment = renderToFragment(
      <RenderScripts scripts={scripts} reactHelmet={MockReactHelmet} />,
    );
    expect(fragment).toMatchSnapshot();
  });

  test('renders scripts and correctly parses objects with events via ReactHelmet', () => {
    const MockReactHelmet: React.FC = props => (
      <div>MockReactHelmet props: {JSON.stringify(props, null, 2)}</div>
    );

    const fragment = renderToFragment(
      <RenderScripts
        scripts={scriptsWithFunctions}
        reactHelmet={MockReactHelmet}
      />,
    );
    expect(fragment).toMatchSnapshot();
  });
});
