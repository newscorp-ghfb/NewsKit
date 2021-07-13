import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {Scroll, ScrollSnapAlignment} from '..';
import {createTheme, newskitLightTheme, ThemeProvider} from '../../theme';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';

const Content = () => (
  <p style={{width: '400px'}}>
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit ipsa,
    molestiae officia ipsum facere blanditiis iste obcaecati esse, quidem
    placeat tenetur dicta distinctio inventore quasi sit sint explicabo quia
    maiores. Doloremque sit doloribus incidunt aperiam recusandae magnam nostrum
    labore eveniet, perferendis a, quibusdam, quos earum! Numquam quaerat
    recusandae commodi laudantium modi inventore voluptates officiis nesciunt
    eius, quis velit voluptatum, quos natus, adipisci nisi! Laborum eos incidunt
    maiores eaque obcaecati, itaque perferendis! Consectetur magnam pariatur
    amet, enim recusandae at laborum? Corrupti libero non, in eligendi ipsum
    odio fugiat excepturi, architecto nam pariatur reiciendis adipisci
    laudantium maiores. Earum quis magnam consequatur maxime veniam itaque quae
    eveniet quasi harum neque, expedita totam tempore aspernatur nostrum maiores
    repudiandae suscipit velit quaerat illo! Temporibus pariatur, enim mollitia
    animi odio tempore illum asperiores est soluta. Itaque obcaecati eum
    molestias expedita neque. Atque eum sint esse optio in dolore cum officia
    iusto inventore ullam nobis culpa ipsum nostrum aspernatur perferendis
    recusandae, maiores consectetur mollitia provident! Placeat voluptatem a
    natus quod sequi asperiores nam! Cupiditate illo voluptatum cumque
    laudantium quo assumenda ut repudiandae perferendis. Molestias, beatae sunt
    deleniti quasi nobis, provident sequi iste quod corporis incidunt repellat
    architecto ab voluptates saepe dolor velit, perspiciatis adipisci veritatis
    debitis laboriosam?
  </p>
);

const myCustomTheme = createTheme({
  name: 'my-custom-scroll-theme',
  overrides: {
    stylePresets: {
      scrollArrowsCustom: {
        base: {
          backgroundColor: '{{colors.amber010}}',
          color: '{{colors.purple050}}',
          iconColor: '{{colors.purple050}}',
        },
        hover: {
          backgroundColor: '{{colors.amber020}}',
        },
        active: {
          backgroundColor: '{{colors.amber060}}',
        },
        disabled: {
          color: '{{colors.inkNonEssential}}',
          iconColor: '{{colors.inkNonEssential}}',
        },
      },
    },
  },
});

describe('Scroll', () => {
  test(`renders horizontal scroll when no properties are set`, () => {
    const fragment = renderToFragmentWithTheme(Scroll, {
      children: <Content />,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders vertical scroll`, () => {
    const fragment = renderToFragmentWithTheme(Scroll, {
      vertical: true,
      children: <Content />,
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders horizontal scroll with visible controls`, () => {
    const {asFragment} = renderWithTheme(Scroll, {
      children: <Content />,
      controls: 'static',
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders horizontal scroll with hidden controls`, () => {
    const {asFragment} = renderWithTheme(Scroll, {
      children: <Content />,
      controls: 'hover',
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders vertical scroll with visible controls`, () => {
    const {asFragment} = renderWithTheme(Scroll, {
      children: <Content />,
      vertical: true,
      controls: 'static',
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders vertical scroll with hidden controls`, () => {
    const {asFragment} = renderWithTheme(Scroll, {
      children: <Content />,
      vertical: true,
      controls: 'hover',
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders scroll with overriden controls style`, () => {
    const {asFragment} = renderWithTheme(
      Scroll,
      {
        children: <Content />,
        controls: 'static',
        overrides: {controls: {button: {stylePreset: 'scrollArrowsCustom'}}},
      },
      myCustomTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('flow', () => {
    const clientWidthMock = 600;
    const scrollWidthMock = 800;
    const scrollLeftMock = 0;

    const clientHeightMock = 600;
    const scrollHeightMock = 800;
    const scrollTopMock = 0;

    const defaultStepDistance = 40;

    const ScrollWithContentAndProps = ({vertical}: {vertical?: boolean}) => (
      <ThemeProvider theme={newskitLightTheme}>
        <Scroll
          vertical={vertical}
          controls="static"
          stepDistance={defaultStepDistance}
        >
          <Content />
        </Scroll>
      </ThemeProvider>
    );

    test(`horizontally scrolls when control buttons click`, async () => {
      const {rerender} = render(<ScrollWithContentAndProps />);
      const scrollContainer = screen.getByTestId('scroll-container');

      Object.defineProperty(scrollContainer, 'clientWidth', {
        writable: true,
        configurable: true,
        value: clientWidthMock,
      });
      Object.defineProperty(scrollContainer, 'scrollWidth', {
        writable: true,
        configurable: true,
        value: scrollWidthMock,
      });
      Object.defineProperty(scrollContainer, 'scrollLeft', {
        writable: true,
        configurable: true,
        value: scrollLeftMock,
      });
      scrollContainer.onscroll = jest.fn().mockImplementation(() => {
        scrollContainer.scrollLeft = scrollWidthMock - clientWidthMock;
      });

      // Dirty hack to get the updated state!
      rerender(<ScrollWithContentAndProps />);

      // Initial render, left arrow is disabled(not rendered), right arrow is enabled
      expect(
        await screen.queryByTestId('scroll-arrow-left'),
      ).not.toBeInTheDocument();
      expect(await screen.findByTestId('scroll-arrow-right')).toBeEnabled();

      // Scroll with a click on right arrow
      fireEvent.click(screen.getByTestId('scroll-arrow-right'));

      rerender(<ScrollWithContentAndProps />);

      // Scroll position moved with default scroll step, left arrow enabled
      expect(scrollContainer.scrollLeft).toEqual(defaultStepDistance);
      expect(await screen.findByTestId('scroll-arrow-left')).toBeEnabled();

      // Scroll with a click on left arrow
      fireEvent.click(screen.getByTestId('scroll-arrow-left'));

      rerender(<ScrollWithContentAndProps />);

      // Scroll position moved back with default scroll step, left arrow disabled(not rendered)
      expect(scrollContainer.scrollLeft).toEqual(scrollLeftMock);
      expect(
        await screen.queryByTestId('scroll-arrow-left'),
      ).not.toBeInTheDocument();

      // Trigger scroll with the a scrollbar
      fireEvent.scroll(scrollContainer, {target: {scrollX: scrollWidthMock}});

      rerender(<ScrollWithContentAndProps />);

      // Scroll position moved to the end, right arrow disabled(not rendered)
      expect(
        await screen.queryByTestId('scroll-arrow-right'),
      ).not.toBeInTheDocument();
      expect(await screen.findByTestId('scroll-arrow-left')).toBeEnabled();
    });

    test(`vertically scrolls when control buttons click`, async () => {
      const {rerender} = render(<ScrollWithContentAndProps vertical />);
      const scrollContainer = screen.getByTestId('scroll-container');

      Object.defineProperty(scrollContainer, 'clientHeight', {
        writable: true,
        configurable: true,
        value: clientHeightMock,
      });
      Object.defineProperty(scrollContainer, 'scrollHeight', {
        writable: true,
        configurable: true,
        value: scrollHeightMock,
      });
      Object.defineProperty(scrollContainer, 'scrollTop', {
        writable: true,
        configurable: true,
        value: scrollTopMock,
      });
      scrollContainer.onscroll = jest.fn().mockImplementation(() => {
        scrollContainer.scrollTop = scrollHeightMock - clientHeightMock;
      });

      // Dirty hack to get the updated state!
      rerender(<ScrollWithContentAndProps vertical />);

      // Initial render, top arrow is disabled(not rendered), bottom arrow is enabled
      expect(
        await screen.queryByTestId('scroll-arrow-top'),
      ).not.toBeInTheDocument();
      expect(await screen.findByTestId('scroll-arrow-bottom')).toBeEnabled();

      // Scroll with a click on bottom arrow
      fireEvent.click(screen.getByTestId('scroll-arrow-bottom'));

      rerender(<ScrollWithContentAndProps vertical />);

      // Scroll position moved with default scroll step, top arrow enabled
      expect(scrollContainer.scrollTop).toEqual(defaultStepDistance);
      expect(await screen.findByTestId('scroll-arrow-top')).toBeEnabled();

      // Scroll with a click on top arrow
      fireEvent.click(screen.getByTestId('scroll-arrow-top'));

      rerender(<ScrollWithContentAndProps vertical />);

      // Scroll position moved back with default scroll step, top arrow disabled(not rendered)
      expect(scrollContainer.scrollTop).toEqual(scrollTopMock);
      expect(
        await screen.queryByTestId('scroll-arrow-top'),
      ).not.toBeInTheDocument();

      // Trigger scroll with the a scrollbar
      fireEvent.scroll(scrollContainer, {target: {scrollY: scrollHeightMock}});

      rerender(<ScrollWithContentAndProps vertical />);

      // Scroll position moved to the end, bottom arrow disabled(not rendered)
      expect(
        await screen.queryByTestId('scroll-arrow-bottom'),
      ).not.toBeInTheDocument();
      expect(await screen.findByTestId('scroll-arrow-top')).toBeEnabled();
    });
  });
});

describe('ScrollSnapAlignment', () => {
  test(`renders div with snap-align css styles`, () => {
    const fragment = renderToFragmentWithTheme(ScrollSnapAlignment, {
      children: <Content />,
      snapAlign: 'end',
    });

    expect(fragment).toMatchSnapshot();
  });

  test(`renders scroll with snapping enabled`, () => {
    const {asFragment} = renderWithTheme(
      Scroll,
      {
        children: [
          <>
            <ScrollSnapAlignment>
              <div>1</div>
            </ScrollSnapAlignment>
            ,
            <ScrollSnapAlignment>
              <div>2</div>
            </ScrollSnapAlignment>
            ,
            <ScrollSnapAlignment>
              <div>3</div>
            </ScrollSnapAlignment>
            ,
          </>,
        ],
        snapAlign: 'start',
      },
      myCustomTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  test(`renders vertical scroll with snapping enabled`, () => {
    const {asFragment} = renderWithTheme(
      Scroll,
      {
        children: [
          <>
            <ScrollSnapAlignment>
              <div>1</div>
            </ScrollSnapAlignment>
            ,
            <ScrollSnapAlignment>
              <div>2</div>
            </ScrollSnapAlignment>
            ,
            <ScrollSnapAlignment>
              <div>3</div>
            </ScrollSnapAlignment>
            ,
          </>,
        ],
        vertical: true,
        snapAlign: 'start',
      },
      myCustomTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });

  describe('ScrollBar', () => {
    test(`Show horizontal scroll bar on a horizontal scroll`, () => {
      const fragment = renderToFragmentWithTheme(Scroll, {
        children: <Content />,
        scrollBar: true,
      });

      expect(fragment).toMatchSnapshot();
    });

    test(`Show vertical scroll bar on a vertical scroll`, () => {
      const fragment = renderToFragmentWithTheme(Scroll, {
        children: <Content />,
        vertical: true,
        scrollBar: true,
      });

      expect(fragment).toMatchSnapshot();
    });

    test(`Hide horizontal scroll bar on a horizontal scroll`, () => {
      const fragment = renderToFragmentWithTheme(Scroll, {
        children: <Content />,
        scrollBar: false,
      });

      expect(fragment).toMatchSnapshot();
    });
  });
});
