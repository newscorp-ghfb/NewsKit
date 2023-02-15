import {act, fireEvent} from '@testing-library/react';
import React from 'react';
import {Block} from '../../block';
import {
  IconFilledAccountBalance,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../../icons';
import {EventTrigger} from '../../instrumentation';
import {
  renderToFragmentWithTheme,
  renderWithImplementation,
  renderWithTheme,
} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {createTheme} from '../../theme';
import {styled} from '../../utils';
import {Accordion} from '../accordion';
import {AccordionGroup} from '../accordion-group';
import {AccordionIconProps} from '../types';
import {getRefScrollHeight} from '../utils';

jest.mock('../utils');
const mockGetRefScrollHeight = (values: number[]) => {
  const fn = jest.fn();
  values.forEach(val => fn.mockReturnValueOnce(val));
  (getRefScrollHeight as any).mockImplementation(fn);
};

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

describe('Accordion', () => {
  beforeEach(() => {
    mockGetRefScrollHeight([0]);
  });

  const defaultProps = {
    children: (
      <TextBlock>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        malesuada lacus ex, sit amet blandit leo lobortis eget.
      </TextBlock>
    ),
    header: (
      <StyledBlock paddingInlineEnd="8px">
        <IconFilledAccountBalance
          overrides={{size: 'iconSize020', paddingInlineEnd: '8px'}}
        />
        Header
      </StyledBlock>
    ),
    label: 'Label',
  };

  describe('maxHeight', () => {
    // Mock ResizeObserver to allow manual triggering of resize events in tests.
    interface Event {
      contentRect?: {
        width: number;
      };
    }

    let callback: (e: Event[]) => void;
    const observe = jest.fn();
    const disconnect = jest.fn();
    const mockResizeObserver = jest.fn(cb => ({
      observe: () => {
        callback = cb;
        observe();
      },
      disconnect,
    }));

    const triggerResizeEvent = (width: number) => {
      callback([{contentRect: {width}}]);
    };

    beforeAll(() => {
      // @ts-ignore
      global.ResizeObserver = mockResizeObserver;
      // @ts-ignore
      global.ResizeObserverEntry = jest.fn();
      // @ts-ignore
      global.requestAnimationFrame = jest.fn(fn => fn());
    });

    test('set to element scrollHeight', () => {
      mockGetRefScrollHeight([123]);
      const {getByTestId} = renderWithTheme(Accordion, {
        ...defaultProps,
        expanded: true,
      });
      const container = getByTestId('panel-transition-container');
      expect(container.style.maxHeight).toEqual(`123px`);
      jest.restoreAllMocks();
    });

    test('updates on window resize', () => {
      mockGetRefScrollHeight([123, 456]);
      const {getByTestId} = renderWithTheme(Accordion, {
        ...defaultProps,
        expanded: true,
      });
      const container = getByTestId('panel-transition-container');
      expect(container.style.maxHeight).toEqual('123px');
      act(() => triggerResizeEvent(50));
      expect(container.style.maxHeight).toEqual('456px');
      jest.restoreAllMocks();
    });
  });

  test('renders with default props', () => {
    const fragment = renderToFragmentWithTheme(Accordion, defaultProps);
    expect(fragment).toMatchSnapshot();
  });
  test('renders without leading icon', () => {
    const props = {
      ...defaultProps,
      header: 'Header',
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with expanded state and icon', () => {
    const props = {
      ...defaultProps,
      expanded: true,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with collapsed state and icon', () => {
    const props = {
      ...defaultProps,
      expanded: false,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with disabled state', () => {
    const props = {
      ...defaultProps,
      disabled: true,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with no label', () => {
    const props = {
      ...defaultProps,
      label: undefined,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with no header', () => {
    const props = {
      ...defaultProps,
      header: undefined,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders as a h4', () => {
    const props = {
      ...defaultProps,
      headerAs: 'h4' as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span',
      expanded: true,
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('should invoke onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const props = {
      ...defaultProps,
      onClick: mockOnClick,
    };
    const {getByTestId} = renderWithTheme(Accordion, props);

    const headerButton = getByTestId('accordion-control');

    fireEvent.click(headerButton);
    expect(mockOnClick).toHaveBeenCalled();
  });
  test('should render with custom ariaControls and id', () => {
    const props = {
      ...defaultProps,
      ariaControls: 'nk-custom-ariaControl',
      id: 'nk-custom-id',
    };
    const fragment = renderToFragmentWithTheme(Accordion, props);
    expect(fragment).toMatchSnapshot();
  });
  test('renders with style overrides', () => {
    const myCustomAccordionTheme = createTheme({
      name: 'my-custom-accordion-theme',
      overrides: {
        stylePresets: {
          accordionHeaderCustom: {
            base: {
              backgroundColor: '#90e0ef',
              color: 'black',
              borderStyle: 'none none solid none',
              borderColor: '#6a040f',
              borderWidth: '{{borders.borderWidth030}}',
            },
            hover: {
              backgroundColor: '#f08080',
              color: '#FFD23F',
            },
            disabled: {
              backgroundColor: 'interface010',
              color: 'black',
            },
          },
          accordionPanelCustom: {
            base: {
              borderStyle: 'none none dotted none',
              borderColor: '#fb8500',
              borderWidth: '{{borders.borderWidth030}}',
            },
          },
        },
      },
    });
    const {asFragment} = renderWithTheme(
      Accordion,
      {
        ...defaultProps,
        expanded: true,
        overrides: {
          header: {
            transitionPreset: {
              extend: 'backgroundColorChange',
              base: {
                transitionDuration: '{{motions.motionDuration050}}',
              },
            },
            minWidth: 'sizing050',
            minHeight: 'sizing060',
            stylePreset: 'accordionHeaderCustom',
            typographyPreset: 'utilityButton020',
            spaceInline: 'space030',
            paddingBlock: 'space040',
            paddingInline: 'space040',
            label: {
              typographyPreset: 'utilityButton020',
            },
            indicatorIcon: {
              stylePreset: 'inkPositive',
              size: 'iconSize030',
            },
          },
          panel: {
            stylePreset: 'accordionPanelCustom',
            transitionPreset: [
              {
                extend: 'maxHeightChange',
                base: {
                  transitionDuration: '{{motions.motionDuration050}}',
                },
              },
              'fade',
              'slideLeft',
            ],
          },
        },
      },
      myCustomAccordionTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with indicatorIcon component overrides', () => {
    const CustomIndicator = ({expanded}: AccordionIconProps) =>
      expanded ? (
        <IconFilledStarOutline overrides={{size: 'iconSize020'}} />
      ) : (
        <IconFilledCancel
          overrides={{
            size: 'iconSize020',
            stylePreset: 'inkPositive',
          }}
        />
      );

    const {asFragment} = renderWithTheme(Accordion, {
      ...defaultProps,
      expanded: true,
      overrides: {
        header: {
          indicatorIcon: CustomIndicator,
        },
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with indicatorIcon prop overrides', () => {
    const {asFragment} = renderWithTheme(Accordion, {
      ...defaultProps,
      expanded: true,
      overrides: {
        header: {
          indicatorIcon: {
            props: {
              overrides: {
                stylePreset: 'inkNegative',
                size: 'iconSize010',
              },
            },
          },
        },
      },
    });

    expect(asFragment()).toMatchSnapshot();
  });

  test('fire tracking event', async () => {
    const mockFireEvent = jest.fn();
    const props = {
      eventOriginator: 'accordion-item',
      eventContext: {
        event: 'other event data',
      },
      ...defaultProps,
    };

    const {getByTestId} = renderWithImplementation(
      Accordion,
      props,
      mockFireEvent,
    );
    const headerButton = await getByTestId('accordion-control');

    fireEvent.click(headerButton);

    expect(mockFireEvent).toHaveBeenCalledWith({
      originator: 'accordion-item',
      trigger: EventTrigger.Click,
      context: {
        event: 'other event data',
      },
    });
  });
});

describe('AccordionGroup', () => {
  beforeEach(() => {
    mockGetRefScrollHeight([0, 0]);
  });

  const defaultGroupProps = {
    children: [
      <Accordion header="Accordion 1">Content 1</Accordion>,
      <Accordion header="Accordion 2">Content 2</Accordion>,
    ],
  };

  test('render all closed', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, defaultGroupProps);

    const buttons = getAllByTestId('accordion-control');

    buttons.forEach(btn => {
      expect(btn).toHaveAttribute('aria-expanded', 'false');
    });
  });

  test('render initial when controlled', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      expanded: [1],
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    expect(btn1).toHaveAttribute('aria-expanded', 'false');
    expect(btn2).toHaveAttribute('aria-expanded', 'true');
  });

  test('render initial when uncontrolled', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      defaultExpanded: [1],
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    expect(btn1).toHaveAttribute('aria-expanded', 'false');
    expect(btn2).toHaveAttribute('aria-expanded', 'true');
  });

  test('call onChange when controlled', () => {
    const onChange = jest.fn();
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      onChange,
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');
    fireEvent.click(btn1);
    fireEvent.click(btn2);
    expect(onChange).toHaveBeenCalledTimes(2);
    expect(onChange).toHaveBeenLastCalledWith([0, 1]);
  });

  test('expand accordion when uncontrolled ', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      defaultExpanded: [0],
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    // expand 2nd accordion
    fireEvent.click(btn2);

    expect(btn1).toHaveAttribute('aria-expanded', 'true');
    expect(btn2).toHaveAttribute('aria-expanded', 'true');
  });

  test('only one can be expanded at a time', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      defaultExpanded: [0],
      expandSingle: true,
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    // first one should be expanded by default
    expect(btn1).toHaveAttribute('aria-expanded', 'true');
    expect(btn2).toHaveAttribute('aria-expanded', 'false');

    // expand 2nd accordion
    fireEvent.click(btn2);

    expect(btn1).toHaveAttribute('aria-expanded', 'false');
    expect(btn2).toHaveAttribute('aria-expanded', 'true');
  });

  test('allow all to close when single', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      defaultExpanded: 0,
      expandSingle: true,
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    // first one should be expanded by default
    expect(btn1).toHaveAttribute('aria-expanded', 'true');
    expect(btn2).toHaveAttribute('aria-expanded', 'false');

    // close the first one
    fireEvent.click(btn1);

    expect(btn1).toHaveAttribute('aria-expanded', 'false');
    expect(btn2).toHaveAttribute('aria-expanded', 'false');
  });

  test('allow all to close when multiple', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      defaultExpanded: 0,
    });

    const [btn1, btn2] = getAllByTestId('accordion-control');

    // first one should be expanded by default
    expect(btn1).toHaveAttribute('aria-expanded', 'true');
    expect(btn2).toHaveAttribute('aria-expanded', 'false');

    // close the first one
    fireEvent.click(btn1);

    expect(btn1).toHaveAttribute('aria-expanded', 'false');
    expect(btn2).toHaveAttribute('aria-expanded', 'false');
  });

  test('prop expanded=all', () => {
    const {getAllByTestId} = renderWithTheme(AccordionGroup, {
      ...defaultGroupProps,
      expanded: 'all',
    });

    getAllByTestId('accordion-control').forEach(btn => {
      expect(btn).toHaveAttribute('aria-expanded', 'true');
    });
  });
  test('different type of children', () => {
    const {asFragment} = renderWithTheme(AccordionGroup, {
      children: [...defaultGroupProps.children, <hr />],
      expanded: 'all',
    });

    expect(asFragment()).toMatchSnapshot();
  });
});
