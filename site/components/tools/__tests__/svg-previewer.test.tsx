import {renderWithTheme} from '../../../utils/test-utils';
import {SvgPreviewer} from '../svg-previewer';
import {Hexes, SVGExport} from './figma-svg-mock-data';

describe('SvgPreviewer', () => {
  it('should render correctly when not receiving any data', () => {
    const fragment = renderWithTheme(SvgPreviewer);
    expect(fragment).toMatchSnapshot();
  });

  it('should render correctly when receiving one svg data', async () => {
    const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

    const {asFragment} = renderWithTheme(SvgPreviewer);
    const data = {
      pluginMessage: {
        action: 'FilesToUI',
        data: {
          hexes: Hexes,
          svgdata: [{code: Object.values(SVGExport[0].code), name: 'SvgName'}],
        },
      },
    };

    window.postMessage({...data}, '*');
    await delay(50);

    expect(asFragment()).toMatchSnapshot();
  });
});
