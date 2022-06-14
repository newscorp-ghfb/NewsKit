import {fireEvent} from '@testing-library/react';
import React from 'react';
import {Block} from '../../block';
import {
  IconFilledAccountBalance,
  IconFilledCancel,
  IconFilledStarOutline,
} from '../../icons';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {TextBlock} from '../../text-block';
import {createTheme} from '../../theme';
import {styled} from '../../utils';
import {Accordion} from '../accordion';
import {AccordionIconProps} from '../types';

const StyledBlock = styled(Block)`
  display: flex;
  align-items: center;
`;

describe('Accordion', () => {
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
  test('renders with default props', () => {
    const fragment = renderToFragmentWithTheme(Accordion, defaultProps);
    expect(fragment).toMatchSnapshot();
  });
  test('renders without startEnhancer', () => {
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
            minWidth: 'sizing050',
            minHeight: 'sizing060',
            stylePreset: 'accordionHeaderCustom',
            typographyPreset: 'utilityButton020',
            spaceInline: 'space030',
            paddingBlock: 'spaceInset040',
            paddingInline: 'spaceInset040',
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
          },
        },
      },
      myCustomAccordionTheme,
    );

    expect(asFragment()).toMatchSnapshot();
  });
  test('renders with indicatorIcon componet overrides', () => {
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
});
