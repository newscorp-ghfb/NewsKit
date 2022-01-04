/* eslint-disable react/no-array-index-key */
import React from 'react';
import {renderToFragment} from '../../../test/test-utils';
import {AmpScripts} from '../amp-scripts';
import {
  AmpScriptsProvider,
  connectAmpScript,
  createAmpScriptsObject,
} from '../connect-amp-script';
import {scriptVersions, ScriptsKey} from '../scripts';

const makeMockConnectedComponent = (scriptId: ScriptsKey) =>
  connectAmpScript(scriptId)(() => (
    <div>this mock component needs the {scriptId} script</div>
  ));

const MockYouTubeComponent = makeMockConnectedComponent('amp-youtube');

describe('scripts', () => {
  describe('with no provider', () => {
    test('AmpScripts component renders nothing', () => {
      const actual = renderToFragment(<AmpScripts />);
      expect(actual).toMatchSnapshot();
    });

    test('connectScript logs warning', () => {
      jest.spyOn(global.console, 'warn').mockImplementationOnce(() => {});
      renderToFragment(<MockYouTubeComponent />);
      expect(global.console.warn).toHaveBeenCalledWith(
        'No script context available. Cannot add amp-youtube scripts',
      );
    });
  });

  describe('with a provider and no scripts', () => {
    test('AmpScripts component renders nothing', () => {
      const actual = renderToFragment(
        <AmpScriptsProvider value={createAmpScriptsObject()}>
          <AmpScripts />
        </AmpScriptsProvider>,
      );
      expect(actual).toMatchSnapshot();
    });
  });

  describe('with a connected single script component', () => {
    let scripts: ReturnType<typeof createAmpScriptsObject>;
    let head: ReturnType<typeof renderToFragment>;
    let body: ReturnType<typeof renderToFragment>;

    beforeAll(() => {
      scripts = createAmpScriptsObject();
      body = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <MockYouTubeComponent />
        </AmpScriptsProvider>,
      );
      head = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <AmpScripts />
        </AmpScriptsProvider>,
      );
    });

    test('amp scripts object is populated', () => {
      expect(scripts).toMatchInlineSnapshot(`
            Object {
              "amp-youtube": true,
            }
      `);
    });

    test('mock body renders component', () => {
      expect(body).toMatchSnapshot();
    });

    test('mock head renders expected amp script', () => {
      expect(head).toMatchSnapshot();
    });
  });

  describe('with a connected multiple script component', () => {
    let scripts: ReturnType<typeof createAmpScriptsObject>;
    let head: ReturnType<typeof renderToFragment>;
    let body: ReturnType<typeof renderToFragment>;

    const MockVideoComponent = connectAmpScript([
      'amp-youtube',
      'amp-brightcove',
      'amp-dailymotion',
    ])(() => <div>this mock video component needs multiple scripts</div>);

    beforeAll(() => {
      scripts = createAmpScriptsObject();
      body = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <MockVideoComponent />
        </AmpScriptsProvider>,
      );
      head = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <AmpScripts />
        </AmpScriptsProvider>,
      );
    });

    test('amp scripts object is populated', () => {
      expect(scripts).toMatchInlineSnapshot(`
          Object {
            "amp-brightcove": true,
            "amp-dailymotion": true,
            "amp-youtube": true,
          }
      `);
    });

    test('mock body renders component', () => {
      expect(body).toMatchSnapshot();
    });

    test('mock head renders expected amp scripts', () => {
      expect(head).toMatchSnapshot();
    });
  });

  describe('with multiple duplicate script components', () => {
    let scripts: ReturnType<typeof createAmpScriptsObject>;
    let head: ReturnType<typeof renderToFragment>;
    let body: ReturnType<typeof renderToFragment>;

    beforeAll(() => {
      scripts = createAmpScriptsObject();
      body = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <div>
            <div>
              <MockYouTubeComponent />
            </div>
          </div>
          <div>
            <div>
              <MockYouTubeComponent />
            </div>
          </div>
          <div>
            <div>
              <MockYouTubeComponent />
            </div>
          </div>
        </AmpScriptsProvider>,
      );
      head = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <AmpScripts />
        </AmpScriptsProvider>,
      );
    });

    test('amp scripts object is populated with no duplicates', () => {
      expect(scripts).toMatchInlineSnapshot(`
        Object {
          "amp-youtube": true,
        }
      `);
    });

    test('mock body renders components', () => {
      expect(body).toMatchSnapshot();
    });

    test('mock head renders expected amp script once', () => {
      expect(head).toMatchSnapshot();
    });
  });

  describe('supports all expected scripts', () => {
    let scripts: ReturnType<typeof createAmpScriptsObject>;
    let head: ReturnType<typeof renderToFragment>;
    let body: ReturnType<typeof renderToFragment>;

    const mockComponents = (Object.keys(scriptVersions) as ScriptsKey[]).map(
      makeMockConnectedComponent,
    );

    const NonExistentScriptComponent = makeMockConnectedComponent(
      'amp-some-made-up-thing' as any,
    );

    beforeAll(() => {
      scripts = createAmpScriptsObject();
      body = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          {mockComponents.map((Comp, i) => (
            <Comp key={i} />
          ))}
          <NonExistentScriptComponent />
        </AmpScriptsProvider>,
      );
      head = renderToFragment(
        <AmpScriptsProvider value={scripts}>
          <AmpScripts />
        </AmpScriptsProvider>,
      );
    });

    test('amp scripts object is populated', () => {
      expect(scripts).toMatchSnapshot();
    });

    test('mock body renders components', () => {
      expect(body).toMatchSnapshot();
    });

    test('mock head renders expected amp scripts', () => {
      expect(head).toMatchSnapshot();
    });
  });
});
