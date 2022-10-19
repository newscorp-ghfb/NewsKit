import {fireEvent, waitFor} from '@testing-library/react';
import React from 'react';
import {act} from 'react-dom/test-utils';
import {IconFilledAdd} from '../../icons';
import {EventTrigger, InstrumentationProvider} from '../../instrumentation';
import {
  renderToFragmentWithTheme,
  renderWithTheme,
} from '../../test/test-utils';
import {SelectionList, SelectionListOption} from '../index';
import {SelectionListOptionProps, SelectionListProps} from '../types';

const ITEMS = ['Option 1', 'Option 2', 'Option 3'];

const defaultSelectionListOptions = (
  props?: Omit<SelectionListOptionProps, 'children'>,
) =>
  ITEMS.map(item => (
    <SelectionListOption {...props} key={item}>
      {item}
    </SelectionListOption>
  ));

const renderSelectionList = () => (
  <SelectionList>{defaultSelectionListOptions()}</SelectionList>
);

describe('SelectionList', () => {
  describe('render', () => {
    test('should render default SelectionList', () => {
      const fragment = renderToFragmentWithTheme(renderSelectionList);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionList with logical props', () => {
      const props: SelectionListProps = {
        children: defaultSelectionListOptions(),
        overrides: {
          marginBlock: 'space020',
          marginInline: 'space030',
          paddingBlock: 'space040',
          paddingInline: 'space050',
        },
      };

      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionListOptions with logical props', () => {
      const overrides: SelectionListOptionProps['overrides'] = {
        marginBlock: 'space020',
        marginInline: 'space030',
        paddingBlock: 'space040',
        paddingInline: 'space050',
      };
      const props: SelectionListProps = {
        children: [
          <SelectionListOption overrides={overrides} key="1" selected>
            Option 1
          </SelectionListOption>,
          <SelectionListOption overrides={overrides} key="2">
            Option 2
          </SelectionListOption>,
        ],
      };

      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionListOptions with overrides', () => {
      const overrides: SelectionListOptionProps['overrides'] = {
        typographyPreset: 'editorialHeadline030',
        minHeight: 'sizing090',
        icon: {iconSize: 'iconSize030'},
      };
      const props: SelectionListProps = {
        children: [
          <SelectionListOption overrides={overrides} key="1" selected>
            Option 1
          </SelectionListOption>,
          <SelectionListOption overrides={overrides} key="2">
            Option 2
          </SelectionListOption>,
        ],
      };

      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionList with a selected option', () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption key="1" selected>
            Option 1
          </SelectionListOption>,
          <SelectionListOption key="2">Option 2</SelectionListOption>,
        ],
      };
      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionList with updated icon', () => {
      const props: SelectionListProps = {
        children: (
          <SelectionListOption
            key="1"
            selected
            selectedIcon={<IconFilledAdd />}
          >
            Option 1
          </SelectionListOption>
        ),
      };
      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('should render SelectionList with non-string options', () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption key="1">option 1</SelectionListOption>,
          <SelectionListOption key="2" selected>
            <div>this is not a string</div>
          </SelectionListOption>,
        ],
      };
      const fragment = renderToFragmentWithTheme(SelectionList, props);
      expect(fragment).toMatchSnapshot();
    });

    test('fire tracking event ', async () => {
      const mockFireEvent = jest.fn();
      const props = {
        eventOriginator: 'select-with-trigger',
        eventContext: {
          event: 'other event data',
        },
      };

      const {getAllByRole} = renderWithTheme(() => (
        <InstrumentationProvider fireEvent={mockFireEvent}>
          <SelectionList>{defaultSelectionListOptions(props)}</SelectionList>
        </InstrumentationProvider>
      ));

      // select 2nd option
      await waitFor(() => {
        fireEvent.click(getAllByRole('menuitemradio')[1]);
      });

      expect(mockFireEvent).toHaveBeenCalledWith({
        originator: 'select-with-trigger',
        trigger: EventTrigger.Click,
        context: {
          event: 'other event data',
        },
      });
    });
  });

  describe('keyboard', () => {
    test('changes focus using keyboard multiple options', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-2" key="2">
            Option 2
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'ArrowDown',
          key: 'ArrowDown',
          keyCode: 40,
        });
      });
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-2'), {
          code: 'ArrowUp',
          key: 'ArrowUp',
          keyCode: 38,
        });
      });

      expect(getByTestId('selection-list-option-1')).toHaveFocus();
    });

    test('changes focus using keyboard single option', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'ArrowDown',
          key: 'ArrowDown',
          keyCode: 40,
        });
      });
      expect(getByTestId('selection-list-option-1')).toHaveFocus();
    });

    test('changes focus using keyboard to the last option - End', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-2" key="2">
            Option 2
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-3" key="3">
            Option 3
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'End',
          key: 'End',
          keyCode: 35,
        });
      });

      expect(getByTestId('selection-list-option-3')).toHaveFocus();
    });

    test('changes focus using keyboard to the first option - Home', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-2" key="2">
            Option 2
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-3" key="3">
            Option 3
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);
      await act(async () => {
        fireEvent.focus(getByTestId('selection-list-option-3'));
      });
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-3'), {
          code: 'Home',
          key: 'Home',
          keyCode: 36,
        });
      });

      expect(getByTestId('selection-list-option-1')).toHaveFocus();
    });

    test('changes focus using keyboard loops from end to start', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-2" key="2">
            Option 2
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      getByTestId('selection-list-option-1').focus();
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'ArrowDown',
          key: 'ArrowDown',
          keyCode: 40,
        });
      });
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-2'), {
          code: 'ArrowDown',
          key: 'ArrowDown',
          keyCode: 40,
        });
      });
      expect(getByTestId('selection-list-option-1')).toHaveFocus();
    });

    test('changes focus using keyboard loops from start to end', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption data-testid="selection-list-option-2" key="2">
            Option 2
          </SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      getByTestId('selection-list-option-1').focus();
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'ArrowUp',
          key: 'ArrowUp',
          keyCode: 38,
        });
      });
      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-2'), {
          code: 'ArrowUp',
          key: 'ArrowUp',
          keyCode: 38,
        });
      });
      expect(getByTestId('selection-list-option-1')).toHaveFocus();
    });

    test('pressing unassigned keyboard key should not trigger focus', async () => {
      const props: SelectionListProps = {
        children: [
          <SelectionListOption data-testid="selection-list-option-1" key="1">
            Option 1
          </SelectionListOption>,
          <SelectionListOption key="2">Option 2</SelectionListOption>,
        ],
      };
      const {getByTestId} = renderWithTheme(SelectionList, props);

      await act(async () => {
        fireEvent.keyDown(getByTestId('selection-list-option-1'), {
          code: 'KeyQ',
          key: 'q',
          keyCode: 81,
        });
      });
      expect(getByTestId('selection-list-option-1')).not.toHaveFocus();
    });
  });
});
