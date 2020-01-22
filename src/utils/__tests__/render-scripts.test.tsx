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

  test('renders inline and external scripts as script tags', () => {
    const fragment = renderToFragment(<RenderScripts scripts={scripts} />);
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
});
