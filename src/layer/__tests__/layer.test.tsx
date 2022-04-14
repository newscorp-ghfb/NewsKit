import React from 'react';
import {renderInBody, renderToFragmentInBody} from '../../test/test-utils';
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
        <Layer className="some-class-1 some-class-2">inside layer</Layer>
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

  test('add zIndex to layer organizer', () => {
    const LayerExample = () => (
      <LayerOrganizer zIndex={100}>
        <Layer>layer</Layer>
      </LayerOrganizer>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('multiple layers at same level', () => {
    const LayerExample = () => (
      <>
        <div>outside the layer</div>
        <Layer>inside layer 1</Layer>
        <Layer>inside layer 2</Layer>
      </>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('nested layers', () => {
    const LayerExample = () => (
      <>
        <div>outside the layer</div>
        <Layer>
          <div>inside layer lvl 1</div>
          <Layer>nested layer lvl 2</Layer>
        </Layer>
      </>
    );
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('append layer', () => {
    const LayerExample = () => {
      const ref = React.useRef<HTMLDivElement>(null);
      return (
        <>
          <div ref={ref}>parent</div>
          <Layer appendToRef={ref}>Child layer A</Layer>
          <Layer appendToRef={ref}>Child layer B</Layer>
        </>
      );
    };
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });

  test('append nested layers', () => {
    const LayerExample = () => {
      const ref = React.useRef<HTMLDivElement>(null);
      return (
        <>
          <div ref={ref}>parent</div>
          <Layer>
            <Layer appendToRef={ref}>Child layer A</Layer>
            <Layer appendToRef={ref}>Child layer B</Layer>
          </Layer>
        </>
      );
    };
    const fragment = renderToFragmentInBody(LayerExample);
    expect(fragment).toMatchSnapshot();
  });
});
