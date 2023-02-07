import {act, fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom';
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
  const mockResizeObserver = jest.fn(() => ({
    observe: jest.fn(),
    disconnect: jest.fn(),
  }));

  beforeAll(() => {
    // @ts-ignore
    global.ResizeObserver = mockResizeObserver;
  });

  afterAll(() => {
    // @ts-ignore
    global.ResizeObserver = null;
  });

  it('should render correctly when not receiving any data', async () => {
    const {asFragment, findByTestId} = renderWithTheme(SvgPreviewer);
    const data = {};

    await act(() => {
      window.postMessage(data, '*');
    });

    const selectButton = await findByTestId('select-theme-element');

    expect(selectButton).toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly when receiving one svg data', async () => {
    const {asFragment, findByTestId} = renderWithTheme(SvgPreviewer);
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

    const selectButton = await findByTestId('select-theme-element');
    expect(selectButton).not.toBeDisabled();
    expect(asFragment()).toMatchSnapshot();
  });

  it('should compose the SVG download file as expected', async () => {
    const {findByTestId} = renderWithTheme(SvgPreviewer);
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

    const svgButton = await findByTestId('single-svg-button');
    fireEvent.click(svgButton);

    expect(FileSaver.saveAs).toHaveBeenCalledWith(
      {content: [fileSvgMock], options: {type: 'text/plain;charset=utf-8;'}},
      'card-no-crop.svg',
    );
  });

  it('should change theme colors correctly when selecting a different theme from select element', async () => {
    const {findByTestId, getAllByRole, asFragment} = renderWithTheme(
      SvgPreviewer,
    );
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
    // open select
    const selectButton = await findByTestId('select-theme-element');
    fireEvent.click(selectButton);
    // select 3rd option
    fireEvent.click(getAllByRole('option')[2]);

    expect(asFragment()).toMatchSnapshot();
  });
});
