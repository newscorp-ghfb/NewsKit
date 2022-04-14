import React from 'react';
import {
  renderInBody,
  renderToFragmentInBody,
  renderWithThemeInBody,
} from '../../test/test-utils';
import {Layer} from '../layer';
import {LayerOrganizer} from '../layer-organizer';

describe('Layer', () => {
  test('add element to body when there is not LayerOrganizer', () => {
    const LayerExample = () => (
      <>
        <div>outside the layer</div>
        <Layer>inside layer</Layer>
      </>
    );
    const {asFragment} = renderInBody(LayerExample);
    expect(asFragment()).toMatchSnapshot();
  });

  test('add element to default layer LayerOrganizer', () => {
    const LayerExample = () => (
      <>
        <div>outside the layer</div>
        <Layer>inside layer</Layer>
      </>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('add element to most parent layer organizer', () => {
    const LayerExample = () => (
      <>
        <div>outside the layer</div>
        <LayerOrganizer>
          <Layer>layer</Layer>
        </LayerOrganizer>
      </>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test.only('add zIndex to layer organizer', () => {
    const LayerExample = () => (
      <LayerOrganizer zIndex={100}>
        <Layer>layer</Layer>
      </LayerOrganizer>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('multiple layers at same level', () => {});

  test('nested layers', () => {});

  test('append layer', () => {});

  test('append nested layers', () => {});
});
