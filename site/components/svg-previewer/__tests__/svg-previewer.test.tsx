import {act, fireEvent} from '@testing-library/react';
import FileSaver from 'file-saver';
import {renderWithTheme} from '../../../utils/test-utils';
import {SvgPreviewer} from '../svg-previewer';
import {fileSvgMock} from './expected-file-mock';
import {Hexes, SVGString} from './figma-svg-mock-data';

jest.mock('file-saver', () => ({saveAs: jest.fn()}));
// @ts-ignore
global.Blob = function blob(content: any, options: any) {
  return {content, options};
};

describe('SvgPreviewer', () => {
  const delay = (ms: any) => new Promise(res => setTimeout(res, ms));

  it('should render correctly when not receiving any data', () => {
    const fragment = renderWithTheme(SvgPreviewer);
    expect(fragment).toMatchSnapshot();
  });

  it('should render correctly when receiving one svg data', async () => {
    const {asFragment} = renderWithTheme(SvgPreviewer);
    const data = {
      pluginMessage: {
        action: 'FilesToUI',
        data: {
          hexes: Hexes,
          svgdata: [{code: SVGString, name: 'SvgName'}],
        },
      },
    };

    await act(async () => {
      window.postMessage({...data}, '*');
      await delay(50);
    });

    expect(asFragment()).toMatchSnapshot();
  });

  it('should compose the SVG download file as expected', async () => {
    const {getByTestId} = renderWithTheme(SvgPreviewer);
    const data = {
      pluginMessage: {
        action: 'FilesToUI',
        data: {
          hexes: Hexes,
          svgdata: [{code: SVGString, name: 'Card No Crop'}],
        },
      },
    };

    await act(async () => {
      window.postMessage({...data}, '*');
      await delay(50);
    });

    const button = (getByTestId('single-svg-button') as unknown) as Element;

    act(() => {
      fireEvent.click(button);
    });

    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      {content: [fileSvgMock], options: {type: 'text/plain;charset=utf-8;'}},
      'card-no-crop.svg',
    );
  });

  it('should change theme colors correctly when selecting a different theme from select element', async () => {
    const {getByTestId, asFragment} = renderWithTheme(SvgPreviewer);
    const data = {
      pluginMessage: {
        action: 'FilesToUI',
        data: {
          hexes: Hexes,
          svgdata: [{code: SVGString, name: 'SvgName'}],
        },
      },
    };

    await act(async () => {
      window.postMessage({...data}, '*');
      await delay(50);
    });

    const selectThemeElement = (getByTestId(
      'select-theme-element',
    ) as unknown) as Element;

    fireEvent.change(selectThemeElement, {target: {value: 'Patterns Theme'}});

    expect(asFragment()).toMatchSnapshot();
  });
});
