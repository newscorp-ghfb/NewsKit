import React from 'react';
import {render} from '../../test/test-utils';
import {
  withInstrumentation,
  InstrumentationProvider,
} from '../instrumentation-provider';
import {EventTrigger, InstrumentationEvent} from '../types';

describe('InstrumentationProvider & withInstrumentation', () => {
  describe('for single layer provider', () => {
    test('sends expected context via expected fireEvent function', () => {
      const mockEvent: InstrumentationEvent = {
        originator: 'some component',
        trigger: EventTrigger.Swipe,
      };
      const MockComponent = withInstrumentation(({fireEvent}) => {
        fireEvent(mockEvent);
        return <div />;
      });

      const mockFireEvent = jest.fn();
      const mockContext = {context: 'object'};

      render(
        <InstrumentationProvider
          context={mockContext}
          fireEvent={mockFireEvent}
        >
          <MockComponent />
        </InstrumentationProvider>,
      );

      expect(mockFireEvent).toHaveBeenCalledWith({
        ...mockEvent,
        context: mockContext,
      });
    });
  });

  describe('for multiple layers of contexts', () => {
    test('sends expected context via expected fireEvent function', () => {
      const fireOrder: string[] = [];
      const MockComponent: React.FC<{originator: string}> = withInstrumentation(
        ({originator, fireEvent}) => {
          fireOrder.push(originator);
          fireEvent({
            originator,
            trigger: EventTrigger.Click,
          });
          return <div />;
        },
      );

      const mockFireEvent1 = jest.fn();
      const mockFireEvent2 = jest.fn();
      const mockContext1 = {context: 'object 1', prop1: 'context'};
      const mockContext2 = {context: 'object 2', prop2: 'context'};
      const mockContext3 = {context: 'object 3', prop3: 'context'};

      render(
        <InstrumentationProvider
          context={mockContext1}
          fireEvent={mockFireEvent1}
        >
          <MockComponent originator="comp-1" />
          <InstrumentationProvider context={mockContext2}>
            <MockComponent originator="comp-2" />
            <InstrumentationProvider
              context={mockContext3}
              fireEvent={mockFireEvent2}
            >
              <MockComponent originator="comp-3" />
            </InstrumentationProvider>
          </InstrumentationProvider>
        </InstrumentationProvider>,
      );

      expect(mockFireEvent1).toHaveBeenCalledWith({
        originator: 'comp-1',
        trigger: EventTrigger.Click,
        context: mockContext1,
      });
      expect(mockFireEvent1).toHaveBeenCalledWith({
        originator: 'comp-2',
        trigger: EventTrigger.Click,
        context: {
          ...mockContext1,
          ...mockContext2,
        },
      });
      expect(mockFireEvent2).toHaveBeenCalledWith({
        originator: 'comp-3',
        trigger: EventTrigger.Click,
        context: {
          ...mockContext1,
          ...mockContext2,
          ...mockContext3,
        },
      });
      expect(fireOrder).toEqual(['comp-1', 'comp-2', 'comp-3']);
    });
  });
});
